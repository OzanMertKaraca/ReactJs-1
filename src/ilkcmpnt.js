import React,{Component} from 'react';

class Cmp extends Component {
    render()
    {
        //Props Name isimlendirilme ve yazdırılmada aynı olması gerekir.
        console.log(this.props)
        const{baslik,aciklama}=this.props;
        return(
        <div>
            <h1>{this.props.baslik}</h1>
            <p>{this.props.aciklama}</p>
            <h2>React Öğreniyorum</h2>
            <form action="">
                <input type="text"/>
                <button>Kaydet</button>
            </form>
            <h1>{baslik}</h1>
            <p>{aciklama}</p>
        </div>
        );
    }
}
export default Cmp;