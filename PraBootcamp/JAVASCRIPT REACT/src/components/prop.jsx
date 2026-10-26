import React, { useState } from "react";

export function TryProps(props){
    const [param, parampam] = useState("le?", () => {console.log("pukis")}) //<-- useState array
    return (
        <div>
            <button onClick={() => props.body}>{param[2]}</button>
        </div>
    )
}    