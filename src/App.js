import React,{ Component } from 'react';
import './App.css';


class App extends Component  {
    render()
    {
        const sayi=10;
        const dogru=false;
        return (
            <div className="App">
                Hello World
                <h1>Ozi</h1>
                <label htmlFor=""></label>
                <h3>{4*2}</h3>
                {"react başlangıç".toUpperCase()}
                <h4>{sayi}</h4>
                {
                    dogru ? <p>Evet</p> : <p>Hayır</p>
                }
            </div>
        );
    }
}
export default App;
