import React,{ Component } from 'react';
import Arakatman from './Arakatman';
import './App.css';
import './newcss.css';


class App extends Component  {
    render()
    {
        const dizim=[
            {
                title:"Mutluyum",
                description:"Umutluyum"
            },
            {
                title: "Yeniden",
                description: "Başlıyoruz"
            },
            {
                title: "Adım Adım",
                description: "Sürekli İleri"
            },
            {
                title: "Vamos",
                description: "Vamoss"
            }
        ]

        return (
            <div className="App">

           <Arakatman dizim={dizim} />

            </div>

        );
    }
}
export default App;
