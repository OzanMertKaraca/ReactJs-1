import React,{Component} from 'react';
import Cmp from './ilkcmpnt.js';
import PropTypes from 'prop-types';
//functional componentlerde Proptypes Kullanımı
class Arakatman extends Component {
    render()
    {
        console.log(this.props)
    return(
            <div>
                {
                    this.props.name
                }
                {
                 this.props.dizim.map(dizim =>
                <Cmp key={dizim.id} baslik={dizim.title} aciklama={dizim.description} />
                )
                }
            </div>
        );
}

}
Arakatman.propTypess =
    {
        name:PropTypes.string,
    }
export default Arakatman;

