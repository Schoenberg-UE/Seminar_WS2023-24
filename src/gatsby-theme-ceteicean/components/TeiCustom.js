import React from "react"
import { Behavior } from "gatsby-theme-ceteicean/src/components/Behavior"
import Alert from 'react-bootstrap/Alert'
import { TEINodes } from "react-teirouter"
import Tab from "react-bootstrap/Tab"
import Tabs from "react-bootstrap/Tabs"
import Mirador from "./Mirador"

import "./teiHeader.css"

const TeiCustom = (props) => {

  const formatDate = (date) => {
    const dateArray = date.split("-")
    switch (dateArray.length) {
      case 1: return `${dateArray[0]}`
      case 2: return `${dateArray[1]}.${dateArray[0]}`
      case 3: return `${dateArray[2]}.${dateArray[1]}.${dateArray[0]}`
      default:
        console.log(`Error with date ${date}.`);
    }
  }

  const { teiNode } = props
  console.log(teiNode)
  const titleStmt = teiNode.getElementsByTagName("tei-titleStmt")[0]
  const title = titleStmt.getElementsByTagName("tei-title")[0].textContent
  const editor = titleStmt.getElementsByTagName("tei-editor")[0].textContent
  const senderInfo = teiNode.getElementsByTagName("tei-correspAction")[0]
  const sender = senderInfo.getElementsByTagName("tei-persName")[0].textContent
  const place = senderInfo.getElementsByTagName("tei-placeName")[0]
  const date = senderInfo.getElementsByTagName("tei-date")[0]
  const checkDate = date ? formatDate(date.getAttribute("when")) : "ohne Datum"
  const addressee = teiNode.getElementsByTagName("tei-correspAction")[1].getElementsByTagName("tei-persName")[0]
  const correspDesc = teiNode.getElementsByTagName("tei-correspDesc")[0]
  const comment = correspDesc.getElementsByTagName("tei-note")[0]
  const facsimile = teiNode.getElementsByTagName("tei-facsimile")[0]
  const manifest = facsimile.getElementsByTagName("tei-graphic")[0].getAttribute("url")
  console.log(comment)
  const excludedRoutesText = ["tei-text", "tei-teiheader", "tei-title"]
  const routesText = props.availableRoutes.filter(item => !(excludedRoutesText.includes(item)))
  return (
    <Behavior node={teiNode}>
      <div className="header mt-4">
        <h3 className="title">{ title }</h3>
        <h5>bearbeitet von { editor }</h5>
      </div>
      <Alert variant="info">
        {/* Link zum ASCC-Datenbankeintrag hinzufügen */}
        <div className="metadata">
            <div className="row sender">
                <div className="col-md-3">Absender:</div>
                <div className="col-md-9">{ sender }, { place ? `${place.textContent}, ` : ""}{ checkDate }</div>
            </div>
            <div className="row addressee">
                <div className="col-md-3">Empfänger:</div>
                <div className="col-md-9">{ addressee ? addressee.textContent : "" }</div>
            </div>
        </div>
      </Alert>
      <div className="row">
        <div className="col-md-6">
          <Tabs
            defaultActiveKey="text"
            id="uncontrolled-tab-example"
            className="mb-3">
              <Tab eventKey="text" title="Text">
              <TEINodes 
                  teiNodes={props.teiNode.childNodes}
                  {...props}
                  availableRoutes={routesText}
                  />
              </Tab>
              <Tab eventKey="comment" title="Kommentar" disabled={(comment ? false : true)}>
                  <TEINodes 
                      teiNodes={props.teiNode.childNodes}
                      {...props}
                      availableRoutes={["tei-teiheader", "tei-text"]}
                      />
              </Tab>
          </Tabs>
        </div>
        <div className="col-md-6">
        <div style={{ position: "sticky", top: 0, marginTop: "3em" }}>
              <Mirador config={{ id: "mirador", manifest: manifest }} plugins={[]} />
            </div>
        </div>
      </div>  
    </Behavior>
  )
  /* ["tei-bibl", "tei-pb", "tei-note", "tei-ref", "tei-persname", "tei-orgname", "tei-placename", "tei-bibl", "tei-add", "tei-supplied"] */
}

export default TeiCustom