import React , {Component} from 'react';
import './List.css';

class List extends Component {
    render(){
        return(
            <div className={"listarea"}>
                <input type="filter" id="filter" placeholder={"Filter by name or phone"}/>
                <ul>
                    <li>Semiramis</li>
                    <li>Ozii</li>
                    <li>Sammy</li>
                </ul>

            </div>
        )
    }
}
export default List;