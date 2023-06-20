import React,{ Component } from 'react';
//import Arakatman from './Arakatman';
import Counter from './Counter.js';
import './App.css';
import './newcss.css';
import Footer from "./Footer";



class App extends Component  {


    render( )
    {
        return (
            <div className="App">

                <Counter />
                <Footer />

            </div>

        );
    }
}
export default App;
