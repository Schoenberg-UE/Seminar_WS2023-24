import * as React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import Layout from "../components/Layout"

const Index = () => {
    const data = useStaticQuery(graphql`
      query teifiles {
        allCetei {
          nodes {
            parent {
              ... on File {
                name
              }
            }
          }
        }
      }
    `)
    const teifiles = data.allCetei.nodes
    return (
      <Layout location="briefe">
        <div className="container">
          <div>{teifiles.map(file => (

            <div className="card w-50 mt-5 mx-auto">
                <div className="card-body">
                    <h5 className="card-title">
                        <Link to={`../${file.parent.name}`}>{file.parent.name}</Link>
                    </h5>
                    <h6 className="card-subtitle mb-2 text-muted">Editor</h6>
                    <p className="card-text">Incipit...</p>
                </div>
            </div>
          
          ))}
          </div>
        </div>
      </Layout>
    )
  }
  
  export default Index
