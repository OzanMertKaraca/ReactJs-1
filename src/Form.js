import React , {Component} from 'react';
import './Form.css';

class Form extends Component {
    render () {
        return(
            <div>
                    <form>
                        <input name={"name"} id={"name"} placeholder={"Enter a name"}/>
                        <br/>
                        <input name={"phone"} id={"phone"} placeholder={"Enter a phone number"}/>
                        <br/> <br/>
                        <button>Add</button>

                    </form>
            </div>
        )
    }
}

export default Form;