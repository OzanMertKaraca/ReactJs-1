import React,{Component} from 'react';

class Cmp extends Component {
    render()
    {
        console.log(this.props)
        return(
        <div>
            <h1>{this.props.baslik}</h1>
            <p>{this.props.aciklama}</p>
            <h2>React Öğreniyorum</h2>
            <form action="">
                <input type="text"/>
                <button>Kaydet</button>
            </form>
        </div>
        );
    }
}
export default Cmp;