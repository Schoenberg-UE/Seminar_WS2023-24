import React from "react"
import Ceteicean from "gatsby-theme-ceteicean/src/components/Ceteicean"
import {
  Tei,
  TeiHeader,
  Ref,
  Title
} from "gatsby-theme-ceteicean/src/components/DefaultBehaviors"
import Layout from "../../components/Layout"
import Pb from "./Pb"
import Note from "./Note"
import PersName from "./PersName"
import PlaceName from "./PlaceName"
import Bibl from "./Bibl"
import Add from "./Add"
//import Mirador from "./Mirador"

import "./ceteicean.css"
import "./style.css"

const MyCeteicean = ({pageContext}) => {

  const routes = {
    "tei-tei": Tei,
    "tei-teiheader": TeiHeader,
    "tei-title": Title,
    "tei-note": Note,
    "tei-ref": Ref,
    "tei-persname": PersName,
    "tei-placename": PlaceName,
    "tei-bibl": Bibl,
    "tei-add": Add,
    "tei-pb": (props) => <Pb {...props}/>,
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