import React,{ Component } from 'react';
import Arakatman from './Arakatman';
import './App.css';
import './newcss.css';
//Uygulama içerisinde herhangi bir alanda durumu değişebilen
//değerleri tutan javascript objesidir.


class App extends Component  {

    state = {
        name:"State"
    }
    render( )
    {
        const dizim=[
            {
                id:1,
                title:"Mutluyum",
                description:"Umutluyum"
            },
            {
                id:2,
                title: "Yeniden",
                description: "Başlıyoruz"
            },
            {
                id:3,
                title: "Adım Adım",
                description: "Sürekli İleri"
            },
            {
                id:4,
                title: "Vamos",
                description: "Vamoss"
            }
        ]

        return (
            <div className="App">
             <h1>{this.state.name}</h1>
           <Arakatman dizim={dizim} />

            </div>

        );
    }
}
export default App;
