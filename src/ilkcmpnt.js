import React,{Component} from 'react';

class Cmp extends Component {
    render()
    {

        return(
        <div>
            <h1>{this.props.baslik}</h1>
            <p>{this.props.aciklama}</p>
        </div>
        );
    }
}
export default Cmp;