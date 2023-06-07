import React,{Component} from 'react';
import Cmp from './ilkcmpnt.js';
//Ara Katman Kullanarak Dizi Elemanlarını Göndermek
// App js içerisinde const "dizim"mi Props olarak Arakatman componentine gönderiyorum sonra
// Arakatman.js içerisnde javascriptdeki map metodu ile Cmp componentine props olarak verileri
// tek tek gönderiyorum
// Cmp componenti içinde baslik ve açıklamayı propslarda tutup ekrana yazdırıyorum
class Arakatman extends Component {
    render()
    {
    return(
            <div>
                {
                 this.props.dizim.map(dizim =>
                <Cmp baslik={dizim.title} aciklama={dizim.description} />
                )
                }
            </div>
        );
}

}
export default Arakatman;

