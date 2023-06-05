import React,{ Component } from 'react';
import Cmp from   "./ilkcmpnt";
/*import Cmp2 from "./ilkcmpnt2";*/
import './App.css';
import './newcss.css';


class App extends Component  {
    render()
    {
        const tittle="React Courses";
        const description="Yeni Başlangıçlar";
        return (
            <div className="App">

                <Cmp baslik={tittle} aciklama={description} />

            </div>

        );
    }
}
export default App;
