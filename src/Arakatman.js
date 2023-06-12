import React,{Component} from 'react';
import Cmp from './ilkcmpnt.js';
import PropTypes from 'prop-types';
//
class Arakatman extends Component {
    static defaultProps =
    {
    name:"Ozan"
     };
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
Arakatman.propTypes =
    {
        dizim:PropTypes.array.isRequired,
        name:PropTypes.oneOfType(
            [
                    PropTypes.number,
                    PropTypes.string,
                  ]
        ).isRequired
    }
export default Arakatman;

