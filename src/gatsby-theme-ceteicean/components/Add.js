import React from "react"
import { Behavior } from "gatsby-theme-ceteicean/src/components/Behavior"
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import Tooltip from 'react-bootstrap/Tooltip'

const Add = ({teiNode}) => {

  const add = teiNode
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
  const content = add.innerHTML

  const renderTooltip = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      {`Einfügung ${tooltipText[place]}` }
    </Tooltip>
  );

  return <Behavior node={teiNode}>
            <OverlayTrigger placement="auto" delay={{ show: 100, hide: 200 }} overlay={renderTooltip}>
                <span className="addition" style={{backgroundColor: "lightgrey"}}>{ content }</span>
            </OverlayTrigger>
         </Behavior>
}

export default Add