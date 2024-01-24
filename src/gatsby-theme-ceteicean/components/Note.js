import React from "react"
import { Behavior } from "gatsby-theme-ceteicean/src/components/Behavior"
// import { GatsbyImage } from "gatsby-plugin-image"
import Button from 'react-bootstrap/Button'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import Popover from 'react-bootstrap/Popover'

import "./note.css"

const Note = ({teiNode}) => {

  const note = teiNode
  const n = note.getAttribute('n') || ''
  const text = note.innerHTML
  const lemma = note.previousElementSibling.textContent

  const popover = (
    <Popover id="popover-basic">
      <Popover.Header as="h3">{ lemma }</Popover.Header>
      <Popover.Body>
        { text }
      </Popover.Body>
    </Popover>
  );

  return <Behavior node={teiNode}>
            <OverlayTrigger trigger="click" placement="auto" overlay={popover}>
                <sup className="Note"><Button variant="link" className="popoverButton" style={{padding: 0, textDecoration: "none"}}>{ n }</Button></sup>
            </OverlayTrigger>
         </Behavior>
}

export default Note