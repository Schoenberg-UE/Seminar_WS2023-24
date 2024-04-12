import React from "react"
import { Behavior } from "gatsby-theme-ceteicean/src/components/Behavior"
import { TEINodes } from "react-teirouter"

const Paragraph = (props) => {
  
  const paragraph = props.teiNode
  const nextElement = paragraph.nextElementSibling
  let display
  if (nextElement !== null && nextElement.nodeName === "tei-closer" && nextElement.getAttribute("rendition") === "#inline") {
    display = "inline"
  } else {
    display = "block"
  }

  return <Behavior node={props.teiNode}>
          <div className={ display }>
            <TEINodes 
              teiNodes={props.teiNode.childNodes}
              {...props}/>
          </div>
         </Behavior>
}

export default Paragraph