import React from "react"
import { Behavior } from "gatsby-theme-ceteicean/src/components/Behavior"
import { TEINodes } from "react-teirouter"

const Salute = (props) => {
  
  const salute = props.teiNode
  if (salute.classList === undefined) return
  if (salute.classList.contains("inline")) {
    return null
  }
  else {
    return <Behavior node={props.teiNode}>
        <div className={ (salute.parentElement.classList.contains("inline")) ? "salute inline" : "salute block" }>
            <TEINodes 
                teiNodes={props.teiNode.childNodes}
                {...props}/>
        </div>
    </Behavior>
  }
}

export default Salute