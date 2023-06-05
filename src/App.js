import React,{ Component } from 'react';
import Cmp from   "./ilkcmpnt";
/*import Cmp2 from "./ilkcmpnt2";*/
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
            }
        ]

        return (
            <div className="App">

                <Cmp baslik={dizim[0].title} aciklama={dizim[0].description} />
                <Cmp baslik={dizim[1].title} aciklama={dizim[1].description} />
                <Cmp baslik={dizim[2].title} aciklama={dizim[2].description} />

            </div>

        );
    }
}
export default App;
