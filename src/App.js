import React, {Component} from 'react';
import './App.css';
import Contacts from "./Contacts";

class App extends Component {

    state={
        contacts:[
            {
            name:'Ozi',
            phone:'123 456 78 90'
            } ,
            {
                name:'Belis',
                phone:'234 567 89 01'
            }


        ]
    };
    render() {
        return (
            <div className="App">
                <Contacts contacts={this.state.contacts}/>
            </div>
        )
    }
}

export default App;