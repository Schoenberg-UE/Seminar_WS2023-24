import React from "react"
import { Behavior } from "gatsby-theme-ceteicean/src/components/Behavior"
// import { GatsbyImage } from "gatsby-plugin-image"
import Button from 'react-bootstrap/Button'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import Popover from 'react-bootstrap/Popover'
import { TEINodes } from "react-teirouter"

import "./note.css"

const Note = (props) => {

  const note = props.teiNode
  if (note.parentElement.nodeName !== "tei-seg") return
  const n = note.getAttribute('n') || ''
  const lemma = note.previousElementSibling ? note.previousElementSibling.textContent : "Anmerkung"
  console.log(note.childNodes)

  const popover = (
    <Popover id="popover-basic">
      <Popover.Header as="h3">{ lemma }</Popover.Header>
      <Popover.Body>
        <TEINodes 
          teiNodes={props.teiNode.childNodes}
          {...props}/>
      </Popover.Body>
    </Popover>
  );

  return <Behavior node={props.teiNode}>
            <OverlayTrigger trigger="click" placement="auto" overlay={popover}>
                <sup className="Note"><Button variant="link" className="popoverButton" style={{padding: 0, textDecoration: "none"}}>{ n }</Button></sup>
                </OverlayTrigger>
         </Behavior>
}

export default Note