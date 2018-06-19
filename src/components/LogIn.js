import React, { Component } from 'react'
import { Redirect } from "react-router-dom"

class LogIn extends Component {
    state = {
        user: {
            userName: '',
            password: ''
        },
        redirect: false
    }

    handleChange = (event) => {
        const user = {...this.state.user}

        const name = event.target.name

        const value = event.target.value

        user[name] = value;
        // console.log(name, user)
        this.setState({ user })
    }

    handleSubmit = (event) => {
        //stop the form
        event.preventDefault()
        //send state somewhere
        this.props.updateUserInformation(this.state.user)
        //send user forward
        this.setState({ redirect: true })
    
    }

    render() {

        if(this.state.redirect) {
            return <Redirect to="/" />
        }

        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <label htmlFor="userName">User Name</label>
                        <input type="text" name="userName" onChange={this.handleChange} value={this.state.user.userName} />
                    </div>
                    
                    <button>Log In</button>
                </form>
            </div>
        );
    }
}

export default LogIn