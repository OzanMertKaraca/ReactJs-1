import React,{ Component } from 'react';
import Cmp from   "./ilkcmpnt";
import './App.css';
import './newcss.css';


class App extends Component  {
    render()
    {

        return (
            <div className="container">
               <h1> New Css</h1>
              <Cmp />

            </div>

        );
    }
}
export default App;
