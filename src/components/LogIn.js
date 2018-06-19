import React, { Component } from 'react'

class LogIn extends Component {
    state = {
        user: {
            userName: ''
        }
    }

    handleChange = (event) => {
        const user = {...this.state.user}

        const name = event.target.name

        const value = event.target.value

        user[name] = value;
        // console.log(name, user)
        this.setState({ user })
    }


    render() {
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