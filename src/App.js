import React,{ Component } from 'react';
import Cmp from   "./ilkcmpnt";
import Cmp2 from "./ilkcmpnt2";
import './App.css';
import './newcss.css';


class App extends Component  {
    render()
    {

        return (
            <div className="container">
               <h1> New Css</h1>
                <Cmp />
                <br/>
                <Cmp2 />
            </div>

        );
    }
}
export default App;
