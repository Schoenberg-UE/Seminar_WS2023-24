import React from "react"
import { Behavior } from "gatsby-theme-ceteicean/src/components/Behavior"

const Supplied = ({teiNode}) => {
    const suppliedText = teiNode.textContent
    return (
        <Behavior node={teiNode}>
            <span className="supplied">{`[${suppliedText}]`}</span>
        </Behavior>
        )
}

export default Supplied