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
  const placeString = {
    "superlinear": "über der Zeile",
    "sublinear": "unter der Zeile",
    "intralinear": "innerhalb der Zeile",
    "across": "über den bestehenden Text",
    "top": "am oberen Rand",
    "bottom": "am unteren Rand",
    "right": "am rechten Rand",
    "left": "am linken Rand",
  }
  let tooltipText
  if (rendition == "#ow") {
    tooltipText = `Korrigiert aus ${deletedText}`
  } else {
    tooltipText = `Einfügung ${placeString[place]}`
  }
  const renderTooltip = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      { tooltipText }
    </Tooltip>
  );

  if (rendition == "#ow") {
  return <Behavior node={teiNode}>
            <OverlayTrigger placement="auto" delay={{ show: 100, hide: 200 }} overlay={renderTooltip}>
                <span className="substitution">{ add.innerHTML }</span>
            </OverlayTrigger>
         </Behavior>
  } else {
    return <Behavior node={teiNode}>
            <span className="deletion">{ del.innerHTML }</span>
            <OverlayTrigger placement="auto" delay={{ show: 100, hide: 200 }} overlay={renderTooltip}>
                <span className="addition">{ add.innerHTML }</span>
            </OverlayTrigger>
         </Behavior>
  }
}

export default Subst