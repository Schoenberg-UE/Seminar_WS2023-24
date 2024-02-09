import React from "react"
import { Behavior } from "gatsby-theme-ceteicean/src/components/Behavior"
import Alert from 'react-bootstrap/Alert'

import "./teiHeader.css"

const TeiHeader = ({teiNode}) => {
  const titleStmt = teiNode.getElementsByTagName("tei-titleStmt")[0]
  const title = titleStmt.getElementsByTagName("tei-title")[0].textContent
  const editor = titleStmt.getElementsByTagName("tei-editor")[0].textContent
  const senderInfo = teiNode.getElementsByTagName("tei-correspAction")[0]
  const sender = senderInfo.getElementsByTagName("tei-persName")[0].textContent
  const place = senderInfo.getElementsByTagName("tei-placeName")[0]
  const date = senderInfo.getElementsByTagName("tei-date")[0]
  const formatDate = date ? date.getAttribute("when") : "ohne Datum"
  const addressee = teiNode.getElementsByTagName("tei-correspAction")[1].getElementsByTagName("tei-persName")[0]

  return (
    <Behavior node={teiNode}>
      <h3 className="title">{ title }</h3>
      <h5>bearbeitet von { editor }</h5>
      <Alert variant="info">
      <div className="metadata">
        <div className="row sender">
            <div className="col-md-3">Absender:</div>
            <div className="col-md-9">{ sender }, { place ? `${place.textContent}, ` : ""}{ formatDate }</div>
        </div>
        <div className="row addressee">
            <div className="col-md-3">Empfänger:</div>
            <div className="col-md-9">{ addressee ? addressee.textContent : "" }</div>
        </div>
      </div>
      </Alert>
    </Behavior>
  )
  
}

export default TeiHeader