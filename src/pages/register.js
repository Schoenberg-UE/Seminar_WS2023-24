import React, {useState, useEffect} from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import Layout from "../components/Layout"

const Index = () => {
    // Build Time Data Fetching
    const data = useStaticQuery(graphql`
      query filesAndIndexMetadata {
        allCetei {
          nodes {
            prefixed
          }
        }
        site {
          siteMetadata {
            entities {
              element
              gndRef
              name
              id
            }
          }
        }
      }
    `)
    
      // evtl. jsdom als domParser verwenden! Oder xmldom

    const teifiles = data.allCetei.nodes
    const config = data.site.siteMetadata.entities

    /*const gndKeys = {
      persons: ["preferredName", "dateOfBirth", "dateOfDeath", "placeOfBirth", "placeOfDeath", "professionOrOccupation", "sameAs"],
      organisations: ["preferredName"],
      places: ["preferredName"],
      works: ["preferredName"]
    }*/
    /*const dataStruct = [
      {
        "persons": {
          "118610023": ["aaa"],
          "118576291": ["bbb"],
          "118610740": ["ccc"],
          "11861911X": ["ddd"],
          "118715054": ["eee"]
        }
      },
      {
        "places": {
          "4066009-6": ["aaa"],
          "4005728-8": ["ccc"],
          "4036361-2": ["fff"]
        }
      }
    ]*/
    
    const parseXMLFile = file => {
      const xmlString = file.prefixed
      const parser = new DOMParser()
      const xmlDoc = parser.parseFromString(xmlString, "application/xml")
      const errorNode = xmlDoc.getElementsByTagName("parsererror")[0]
      if (errorNode) {
        return console.log("error while parsing")
      }
      return xmlDoc
    }

    const orderByDate = (a, b) => {
      if (a.date < b.date) {
        return -1
      }
      if (a.date > b.date) {
        return 1
      }
      return 0
    }

    const groupBy = (array, key) => {
      return array.reduce((rv, x) => {
        (rv[x[key]] = rv[x[key]] || []).push(x)
        return rv
      }, {})
    }

    const parsedFiles = teifiles.map(parseXMLFile)
    const rootNodes = parsedFiles.map(file => file.documentElement)
    const entityTypes = config.map(item => item.id)
    const dataStruct = entityTypes.map(type => { 
      const entities = rootNodes.map(root => {
        const tagName = `tei-${config.filter(item => item.id === type)[0]["element"]}`
        const gndRef = config.filter(item => item.id === type)[0]["gndRef"]
        const entitiesPerFile = root.getElementsByTagName(tagName)
        const gndIds = Array.from(entitiesPerFile)
                            .filter(entity => entity.getAttribute(gndRef))
                            .map(entity => entity.getAttribute(gndRef))
                            .filter((value, index, array) => array.indexOf(value) === index)
                            .map(entity => entity.substring(entity.lastIndexOf('/') + 1))
        const fileId = root.getAttribute("xml:id")
        const letterTitle = root.getElementsByTagName("tei-title")[0].textContent
        const date = root.getElementsByTagName("tei-date")[0] ? root.getElementsByTagName("tei-date")[0].getAttribute("when") : "unknown"
        const obj = gndIds.map(gndId => {
          return { "gndId": gndId, "fileId": fileId, "title": letterTitle, "date": date }
        })
        return obj
      })
      const flattenedEntities = entities.flat()
      const groupedEntities = groupBy(flattenedEntities, "gndId")
      return { [type]:  groupedEntities}
    })

    
    const [gndData, setGndData] = useState(null)
    
    async function fetchGndApi(gndId) {
      try {
        const response = await fetch(`https://lobid.org/gnd/${gndId}.json`)
        const data = await response.json()
        return data
      } catch(error) {
        console.log(error)
      }
    }
    
    useEffect(() => {
      const promises = []
      dataStruct.forEach(obj => {
        const type = Object.keys(obj)[0]
        Object.keys(obj[type]).forEach(gndId => {
          const promise = fetchGndApi(gndId)
          promises.push(promise) 
        })
      })
      Promise.all(promises).then(values => {
        setGndData(values)
        console.log(values)
      })
    }, [])
    
    if (gndData) {
    return (
      <Layout location="register">
        <div className="container">
          <h3 className="text-center my-5">Register</h3>
          <div>
            {config.map(obj => { 
              const { id, name } = obj
              const registerObj = dataStruct.filter(item => Object.hasOwn(item, id))
              //console.log(registerObj)
              return (
                <div key={ id } className={ id }>
                  <h3>{ name }</h3>
                  {Object.entries(registerObj[0][id]).map(([key, value]) => {
                    //console.log(gndData)
                    const gndObj = gndData.filter(obj => obj !== undefined && obj.gndIdentifier === key)
                    const preferredName = gndObj.length === 1 ? gndObj[0].preferredName : `Zum Eintrag mit der GND ${key} können keine Daten abgerufen werden.`
                    //console.log(gndObj)
                    return (
                      <div key={ key }>
                        <div>{ preferredName }</div>
                        <ul>{value.sort(orderByDate).map(obj => {
                          const { fileId, title } = obj
                          return (
                            <li key={ fileId }>
                              <Link to={ `../${fileId}` }>{ title }</Link>
                            </li>
                          )
                        })}</ul>
                      </div>
                    )}
                  )}
                </div>
              )
            })}
          </div>
          {/* dataStruct.map(obj => {
            const type = Object.keys(obj)[0]
            return (
              <div key={ type }>
                <div>{ type }</div>
                <ul>{gndData.map(item => (<li key={ item.preferredName }>{ item.preferredName }</li>))}</ul>
              </div>
            )
          }) */}
        </div>
      </Layout>
    )}
  }
  
  export default Index
