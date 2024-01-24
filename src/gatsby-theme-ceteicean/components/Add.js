import React from "react"
import { Behavior } from "gatsby-theme-ceteicean/src/components/Behavior"
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import Tooltip from 'react-bootstrap/Tooltip'

const Add = ({teiNode}) => {

  const add = teiNode
  const place = add.getAttribute('place') || ''
  const text = add.innerHTML

  const renderTooltip = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      { place }
    </Tooltip>
  );

  return <Behavior node={teiNode}>
            <OverlayTrigger placement="auto" delay={{ show: 250, hide: 400 }} overlay={renderTooltip}>
                <span className="addition" style={{backgroundColor: "lightgrey"}}>{ text }</span>
            </OverlayTrigger>
         </Behavior>
}

export default Add