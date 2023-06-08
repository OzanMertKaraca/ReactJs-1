import React,{ Component } from 'react';
import Arakatman from './Arakatman';
import './App.css';
import './newcss.css';


class App extends Component  {
    render()
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

           <Arakatman dizim={dizim} name={"Ozii"}/>

            </div>

        );
    }
}
export default App;
