import React from "react"
import { Behavior } from "gatsby-theme-ceteicean/src/components/Behavior"
import { TEINodes } from "react-teirouter"

const Paragraph = (props) => {
  
  const paragraph = props.teiNode
  const nextElement = paragraph.nextElementSibling
  const previousElement = paragraph.previousElementSibling
  
  /*let display
  if (nextElement !== null && nextElement !== undefined && nextElement.nodeName === "tei-closer" && nextElement.getAttribute("rendition") === "#inline") {
    display = "inline"
  } else {
    display = "block"
  }*/
  const salute = (previousElement !== null && previousElement !== undefined && previousElement.nodeName === "tei-opener" && previousElement.lastElementChild.nodeName === "tei-salute") ? previousElement.lastElementChild : ""
  const saluteInline = (salute !== "" && salute.classList.contains("inline")) ? salute : ""
  const closerInline = (nextElement !== null && nextElement !== undefined && nextElement.nodeName === "tei-closer" && nextElement.classList.contains("inline")) ? nextElement : ""

  return <Behavior node={props.teiNode}>
          <div className="paragraph">
          { saluteInline &&
            <span className="salute inline">
              <TEINodes teiNodes={saluteInline.childNodes} {...props}/>
            </span>
          }
            <TEINodes 
              teiNodes={props.teiNode.childNodes}
              {...props}/>
          { closerInline &&
            <span className="closer inline">
              <TEINodes teiNodes={closerInline.childNodes} {...props}/>
            </span>
          }
          </div>
         </Behavior>
}

export default Paragraph