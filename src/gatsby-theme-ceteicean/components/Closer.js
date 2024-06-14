import React from "react"
import { Behavior } from "gatsby-theme-ceteicean/src/components/Behavior"
import { TEINodes } from "react-teirouter"

const Closer = (props) => {
  
  const closer = props.teiNode
  
  if (closer.classList.contains("inline")) {
    return null
  }
  else {
    return <Behavior node={props.teiNode}>
        <div className="closer">
            <TEINodes 
                teiNodes={props.teiNode.childNodes}
                {...props}/>
        </div>
    </Behavior>
  }
}

export default Closer