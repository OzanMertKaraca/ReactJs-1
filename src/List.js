import React , {Component} from 'react';
import './List.css';

class List extends Component {
    render(){
        return(
            <div className={"listarea"}>
                <input type="filter" id="filter" placeholder={"Filter by name or phone"}/>
                <ul className={"list"}>
                    <li>
                        <span className={"name"}> Semiramis</span>
                        <span className={"phone"}>0123456789</span>
                    </li>
                    <li>
                        <span className={"name"}> Ozii</span>
                        <span className={"phone"}>1234678910</span>
                    </li>
                    <li>
                        <span className={"name"}> Sammy</span>
                        <span className={"phone"}>2345678901</span>
                    </li>
                </ul>

            </div>
        )
    }
}
export default List;