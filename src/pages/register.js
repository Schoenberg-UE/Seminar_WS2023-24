import * as React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import Layout from "../components/Layout"

const Index = () => {
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

    console.log(dataStruct)

    
      /*
      const gndIds = entities.filter(entity => entity.getAttribute(mapping[type]["gndRef"])).map(entity => entity.getAttribute(mapping[type]["gndRef"])).filter((value, index, array) => array.indexOf(value) === index)
      const aaa = gndIds.map(value, index => {
        return { value: xmlIds[index] }
      })
    })
    
    const id = root.getAttribute("xml:id")

      // named entities
      const persNames = root.getElementsByTagName("tei-persName")
      const orgNames = root.getElementsByTagName("tei-orgName")
      const placeNames = root.getElementsByTagName("tei-placeName")
      const workNames = root.getElementsByTagName("tei-bibl")
      
      const map = {
        "persons": [...persNames],
        "organisations": [...orgNames],
        "places": [...placeNames],
        "works": [...workNames]
      }

      Object.keys(map).forEach(key => {
        const predicate = {
          "works": "sameAs",
          "persons": "ref",
          "places": "ref",
          "organisations": "ref"
        }
        let filtered = map[key].filter(item => item.getAttribute(predicate[key]))
        let distinctRefs = filtered.map(item => item.getAttribute("ref")).filter((value, index, array) => array.indexOf(value) === index)
        map[key] = {}
        distinctRefs.forEach(item => map[key][item] = id)
      })

      console.log("MAP")*/
      
      /*const persNamesWithRef = Array.from(persNames).filter(item => item.getAttribute("ref"))
      const orgNamesWithRef = Array.from(orgNames).filter(item => item.getAttribute("ref"))
      const placeNamesWithRef = Array.from(placeNames).filter(item => item.getAttribute("ref"))
      const workNamesWithRef = Array.from(workNames).filter(item => item.getAttribute("sameAs"))*/
      
      /*const gndRefs = persNamesWithRef.map(item => item.getAttribute("ref"))
      const distinctGndRefs = gndRefs.filter((value, index, array) => array.indexOf(value) === index)
      
      distinctGndRefs.forEach(item => map[item] = id)*/
      /*return map
    })
    console.log(personElements)
    //console.log(personElements)

    // ###########################################
    // ########## HIER WEITERARBEITEN ############
    // ###########################################
    // get all unique keys inside the objects of the personElements-array (get keys, flatten two-dimensional array, filter distinct values)
    const keys = personElements.map((item, index) => Object.keys(item).forEach(type => {
      personElements[index][type] = Object.keys(item[type])
    }))
    console.log("KEYS")
    console.log(keys)
    //const keys = personElements.map(item => Object.keys(item)).flat().filter((value, index, array) => array.indexOf(value) === index)

    let resultObj = {}

    // for each resulting key, get all values that are assigned by this key in the personElements-array
    keys.forEach(item => {
      resultObj[item] = []
      personElements.forEach(obj => {
        if (obj[item]) {
          resultObj[item].push(obj[item])
        }
      })
    })*/

    return (
      <Layout location="register">
        <div className="container">
          <h3 className="text-center my-5">Register</h3>
          <div>{dataStruct.map(item => { 
                const type = Object.keys(item)[0]
                const entityInfo = config.filter(obj => obj.id === type)
                const { id, name } = entityInfo[0]
          return (
            <div key={ id } className={ id }>
              <h3>{ name }</h3>
              {Object.entries(item[id]).map(([key, value]) => (
                <div key={ key }>
                  <div>{ key }</div>
                  <ul>{value.sort(orderByDate).map(obj => (
                    <li key={ obj.fileId }>
                      <Link to={ `../${obj.fileId}` }>{ obj.title }</Link>
                    </li>
                  ))}</ul>
                </div>
              ))}
            </div>
          )})}
          </div>
        </div>
      </Layout>
    )
  }
  
  export default Index
