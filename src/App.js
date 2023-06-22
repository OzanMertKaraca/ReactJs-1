import React from "react";
import Comment from "./Comment";
//import faker from "faker";

const App = () => {

    return(
        <div className="ui comments">
          <Comment name="Ozan Mert" time="3" star="5" comment="fight to the end"/>
            <Comment name="Semiramis" time="4" star="5"  comment="I never give up"/>
        </div>
    )
}

export default App;