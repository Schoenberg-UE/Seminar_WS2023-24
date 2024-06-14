import React from "react"
import { Behavior } from "gatsby-theme-ceteicean/src/components/Behavior"
import { TEINodes } from "react-teirouter"
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import Tooltip from 'react-bootstrap/Tooltip'

const Add = (props) => {

  const add = props.teiNode
  const place = add.getAttribute('place') || ''
  const tooltipText = {
    "superlinear": "über der Zeile",
    "sublinear": "unter der Zeile",
    "intralinear": "innerhalb der Zeile",
    "across": "über den bestehenden Text",
    "top": "am oberen Rand",
    "bottom": "am unteren Rand",
    "right": "am rechten Rand",
    "left": "am linken Rand",
  }

  const renderTooltip = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      {`Einfügung ${tooltipText[place]}` }
    </Tooltip>
  );

  return <Behavior node={props.teiNode}>
            <OverlayTrigger placement="auto" delay={{ show: 100, hide: 200 }} overlay={renderTooltip}>
                <span className="addition">
                  <TEINodes teiNodes={add.childNodes} {...props}/>
                </span>
            </OverlayTrigger>
         </Behavior>
}

export default Add