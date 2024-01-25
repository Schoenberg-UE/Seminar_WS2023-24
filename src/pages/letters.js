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
      const parser = new DOMParser();
      const xmlDoc = parser.parseFromString(xmlString, "application/xml");
      const errorNode = xmlDoc.querySelector("parsererror");
      if (errorNode) {
        return console.log("error while parsing"); 
      }
      const root = xmlDoc.documentElement
      const id = root.getAttribute("xml:id")
      const title = xmlDoc.querySelector("tei-titleStmt > tei-title").textContent
      const editor = xmlDoc.querySelector("tei-titleStmt > tei-editor").textContent
      const paragraphs = xmlDoc.querySelectorAll("tei-div[type='letter'] > tei-p")
      const textContent = [...paragraphs].map(item => item.textContent)
      const letterText = textContent.join(" ")
      const incipit = letterText.split(/(\s+)/).slice(0,22).join("")
      const date = xmlDoc.querySelector("tei-correspAction[type='sent'] > tei-date") ? new Date(xmlDoc.querySelector("tei-correspAction[type='sent'] > tei-date").getAttribute("when")) : new Date("1999-01-01")
      return {
        "id": id,
        "title": title,
        "editor": editor,
        "incipit": incipit,
        "date": date
      }
    }).sort((a, b) => a.date - b.date)

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
