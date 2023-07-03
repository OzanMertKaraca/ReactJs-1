import React from "react";
import Comment from "./Comment";
import Card from "./card";
import "./App.css";
//import faker from "faker";

const App = () => {

    return(
        <div className="ui comments">
            <Card>
                <Comment name="Ozan Mert" time="3" star="5" comment="fight to the end"/>
            </Card>
            <Card>
                <Comment name="Semiramis" time="4" star="5"  comment="I never give up"/>

            </Card>



        </div>
    )
}

export default App;