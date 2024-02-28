import React from "react"
import { Behavior } from "gatsby-theme-ceteicean/src/components/Behavior"
import Alert from 'react-bootstrap/Alert'

import "./teiHeader.css"

const TeiHeader = ({teiNode}) => {

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

  const titleStmt = teiNode.getElementsByTagName("tei-titleStmt")[0]
  const title = titleStmt.getElementsByTagName("tei-title")[0].textContent
  const editor = titleStmt.getElementsByTagName("tei-editor")[0].textContent
  const senderInfo = teiNode.getElementsByTagName("tei-correspAction")[0]
  const sender = senderInfo.getElementsByTagName("tei-persName")[0].textContent
  const place = senderInfo.getElementsByTagName("tei-placeName")[0]
  const date = senderInfo.getElementsByTagName("tei-date")[0]
  const checkDate = date ? formatDate(date.getAttribute("when")) : "ohne Datum"
  const addressee = teiNode.getElementsByTagName("tei-correspAction")[1].getElementsByTagName("tei-persName")[0]
  const comment = teiNode.getElementsByTagName("tei-note")[0].textContent

  return (
    <Behavior node={teiNode}>
      <h3 className="title">{ title }</h3>
      <h5>bearbeitet von { editor }</h5>
      <Alert variant="info">
      <div className="metadata">
        <div className="row sender">
            <div className="col-md-3">Absender:</div>
            <div className="col-md-9">{ sender }, { place ? `${place.textContent}, ` : ""}{ checkDate }</div>
        </div>
        <div className="row addressee">
            <div className="col-md-3">Empfänger:</div>
            <div className="col-md-9">{ addressee ? addressee.textContent : "" }</div>
        </div>
        <div className="row comment">
            <div className="col-md-3">Kommentar:</div>
            <div className="col-md-9">{ comment }</div>
        </div>
      </div>
      </Alert>
    </Behavior>
  )
  
}

export default TeiHeader