import * as React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import Layout from "../components/Layout"

const Index = () => {
    const data = useStaticQuery(graphql`
      query teifiles {
        allCetei {
          nodes {
            prefixed
          }
        }
      }
    `)
    
    const teifiles = data.allCetei.nodes
    
    const personElements = teifiles.map(file => {
      const xmlString = file.prefixed
      const parser = new DOMParser()
      const xmlDoc = parser.parseFromString(xmlString, "application/xml")
      const errorNode = xmlDoc.getElementsByTagName("parsererror")[0]
      if (errorNode) {
        return console.log("error while parsing")
      }
      const root = xmlDoc.documentElement
      const id = root.getAttribute("xml:id")
      const persNames = root.getElementsByTagName("tei-persName")
      //console.log(persNames)
      const persNamesWithRef = Array.from(persNames).filter(item => item.getAttribute("ref"))
      //console.log(persNamesWithRef)
      const gndRefs = persNamesWithRef.map(item => item.getAttribute("ref"))
      const distinctGndRefs = gndRefs.filter((value, index, array) => array.indexOf(value) === index)
      const map = {}
      distinctGndRefs.forEach(item => map[item] = id)
      return map
    })

    const output = []
    personElements.forEach(item => {
        if (!item.length) return
        const existing = output.filter((v, i) => v.name == item.name)
        if (existing.length) {
            const existingIndex = output.indexOf(existing[0])
            output[existingIndex].value = output[existingIndex].value.concat(item.value)
        } else {
        if (typeof item.value == "string")
            item.value = [item.value]
            output.push(item)
        }
    })

    console.log(output)

    return (
      <Layout location="briefe">
        <div className="container">
          <h3 className="text-center my-5">Register</h3>
          <div>
          </div>
        </div>
      </Layout>
    )
  }
  
  export default Index
