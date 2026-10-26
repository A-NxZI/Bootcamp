import React, { Component, useState } from "react";

//function component

export function NavFunction(){
    const [hi, hello] = useState("Judul 1");
    return <div><h1>{hi}</h1><button onClick={()=>hello("Judul 2")}>click</button></div>

}

//class component

export class NavClass extends React.Component{
    render() {
        return <div>
        <table border='1'>
            <thead>
                <tr>
                    <th>nama</th>
                    <th>ski</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>sigma</td>
                    <td>skiski</td>
                </tr>
            </tbody>


        </table>
        </div>
    }

}

function HelloWorld(){
    console.log("print")
}

export default {HelloWorld};