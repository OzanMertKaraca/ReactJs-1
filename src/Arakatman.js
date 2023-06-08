import React,{Component} from 'react';
import Cmp from './ilkcmpnt.js';
import PropTypes from 'prop-types';
//PropTypes kullandığım componenetin türünü belirtirim
class Arakatman extends Component {
    static propTypes=
        {
            dizim:PropTypes.array,
            name:PropTypes.string,
        }
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
export default Arakatman;

