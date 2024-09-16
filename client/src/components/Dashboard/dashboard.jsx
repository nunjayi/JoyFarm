import React from "react";
import "./dashboard.css"
import Card from "../Card/card";
function Dashboard(){
    return(
        <>
            <div id='dashboard'>
                <div id="cards">
                    <Card />
                    <Card />
                    <Card />
                </div>
            </div>
        </>
    )
}
export default Dashboard