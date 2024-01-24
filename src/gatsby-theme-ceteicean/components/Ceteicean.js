import React from "react"
import Ceteicean from "gatsby-theme-ceteicean/src/components/Ceteicean"
import {
  Tei,
  TeiHeader
} from "gatsby-theme-ceteicean/src/components/DefaultBehaviors"
import Pb from "./Pb"
import Note from "./Note"
import PersName from "./PersName"
import Add from "./Add"
import Layout from "../../components/Layout"

import "./ceteicean.css"
import "./style.css"

const MyCeteicean = ({pageContext}) => {

  const routes = {
    "tei-tei": Tei,
    "tei-teiheader": TeiHeader,
    //"tei-note": Note,
    "tei-persname": PersName,
    /*"tei-add": Add,
    "tei-pb": (props) => <Pb {...props}/>, */
  }

  return (
    <Layout>
      <div className="container">
        <Ceteicean pageContext={pageContext} routes={routes} />
      </div>
    </Layout>
  )

}

export default MyCeteicean