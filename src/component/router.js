
import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link, Redirect, withRouter } from "react-router-dom";

// import My_pages from './Home'
class App3 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",

        }
    }
    
    render() {
        const onSubmit = withRouter (({history}) => {
            console.log('email:', this.state.email)
            if (this.state.email === "aa@mail.com") {
                // alert('Login Successful!')
                history.push('/home')
    
            } else {
                alert('Wrong email!')
            }
    
        })

        return (
            <div>
                {/* {this.state.email} */}
                <input type="email" value={this.state.email} onChange={(e) => this.setState({ email: e.target.value })} />
               
                <button type="buttom" onClick={this.onSubmit}>Button </button>
                
            </div>
        )
    }
}

export default App3;