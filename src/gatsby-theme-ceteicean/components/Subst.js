import React from "react"
import { Behavior } from "gatsby-theme-ceteicean/src/components/Behavior"
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import Tooltip from 'react-bootstrap/Tooltip'

const Subst = ({teiNode}) => {

  const subst = teiNode
  const del = subst.getElementsByTagName("tei-del")[0]
  const add = subst.getElementsByTagName("tei-add")[0]
  const rendition = del.getAttribute("rendition") || ''
  const place = add.getAttribute("place") || ''
  const deletedText = del.textContent

  const renderTooltip = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      {`Korrigiert aus ${deletedText}` }
    </Tooltip>
  );

  return <Behavior node={teiNode}>
            <OverlayTrigger placement="auto" delay={{ show: 100, hide: 200 }} overlay={renderTooltip}>
                <span className="substitution">{ add.innerHTML }</span>
            </OverlayTrigger>
         </Behavior>
}

export default Subst