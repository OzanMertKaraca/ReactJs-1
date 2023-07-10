import React , {Component} from 'react';
import './Form.css';

class Form extends Component {

    constructor() {
        super();
        this.onChange=this.onChange.bind(this);
    }
    state =
        {
            name:'',
            phone:'',
        };
    onChange(e)
    {
       this.setState(
           {
               [e.target.name]:e.target.value
           }
       )
    }
    render () {
        return(
            <div>
                    <form>
                        <input name={"name"} id={"name"} onChange={this.onChange} value={this.state.name} placeholder={"Enter a name"}/>
                        <br/>
                        <input name={"phone"} id={"phone"} onChange={this.onChange} value={this.state.phone} placeholder={"Enter a phone number"}/>
                        <br/> <br/>
                        <button>Add</button>

                    </form>
            </div>
        )
    }
}

export default Form;