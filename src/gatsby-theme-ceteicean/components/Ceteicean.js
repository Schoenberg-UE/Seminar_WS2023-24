import React from "react"
import Ceteicean from "gatsby-theme-ceteicean/src/components/Ceteicean"
import {
  Tei,
  Ref,
  Title,
} from "gatsby-theme-ceteicean/src/components/DefaultBehaviors"
import Layout from "../../components/Layout"
import Pb from "./Pb"
import Paragraph from "./Paragraph"
import Note from "./Note"
import PersName from "./PersName"
import PlaceName from "./PlaceName"
import OrgName from "./OrgName"
import Bibl from "./Bibl"
import Add from "./Add"
import Subst from "./Subst"
import HideText from "./HideText"
//import TeiHeader from "./TeiHeader"
import Supplied from "./Supplied"
import TeiHeaderCommentTab from "./TeiHeaderCommentTab"
import TeiCustom from "./TeiCustom"
import Salute from "./Salute"
import Closer from "./Closer"

import "./ceteicean.css"
import "./style.css"

const MyCeteicean = ({pageContext}) => {

  const routes = {
    "tei-tei": TeiCustom,
    "tei-teiheader": TeiHeaderCommentTab,
    "tei-text": HideText,
    "tei-title": Title,
    "tei-p": Paragraph,
    "tei-note": Note,
    "tei-ref": Ref,
    "tei-salute": Salute,
    "tei-closer": Closer,
    "tei-persname": PersName,
    "tei-orgname": OrgName,
    "tei-placename": PlaceName,
    "tei-bibl": Bibl,
    "tei-add": Add,
    "tei-subst": Subst,
    "tei-supplied": Supplied,
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