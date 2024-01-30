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
    
    const cardInfo = teifiles.map(file => {
      const xmlString = file.prefixed
      const parser = new DOMParser()
      const xmlDoc = parser.parseFromString(xmlString, "application/xml")
      const errorNode = xmlDoc.getElementsByTagName("parsererror")[0]
      if (errorNode) {
        return console.log("error while parsing")
      }
      const root = xmlDoc.documentElement
      const id = root.getAttribute("xml:id")
      const header = root.getElementsByTagName("tei-teiHeader")[0]
      const body = root.getElementsByTagName("tei-body")[0]
      const title = header.getElementsByTagName("tei-title")[0].textContent
      const editor = header.getElementsByTagName("tei-editor")[0].textContent
      const paragraphs = body.getElementsByTagName("tei-p")
      const textContent = Array.from(paragraphs).map(item => item.textContent)
      const letterText = textContent.join(" ")
      const incipit = letterText.split(/(\s+)/).slice(0,22).join("")
      const date = header.getElementsByTagName("tei-date")[0] ? header.getElementsByTagName("tei-date")[0].getAttribute("when") : "unknown" //[0] ? new Date(xmlDoc.getElementsByTagName("tei-date")[0].getAttribute("when")) : new Date("1999-01-01")
      return {
        "id": id,
        "title": title,
        "editor": editor,
        "incipit": incipit,
        "date": date
      }
    }).sort((a, b) => {
      if (a.date < b.date) {
      return -1;
    }
    if (a.date > b.date) {
      return 1;
    }
    return 0;
    })

    console.log(cardInfo)

    return (
      <Layout location="briefe">
        <div className="container">
          <h3 className="text-center my-5">Briefliste</h3>
          <div>{cardInfo.map(obj => (

              <div className="card w-50 mb-4 mx-auto" key={ obj.id }>
                  <div className="card-body">
                      <h5 className="card-title mb-3">
                          <Link to={ `../${obj.id}` }>{ obj.title }</Link>
                      </h5>
                      <h6 className="card-subtitle mb-2 text-muted">{ `bearbeitet von ${obj.editor}` }</h6>
                      <p className="card-text">{ `${obj.incipit}...` }</p>
                  </div>
              </div>
            
            ))}
          </div>
        </div>
      </Layout>
    )
  }
  
  export default Index
