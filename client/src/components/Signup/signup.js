import React from "react";

class signup extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
            name: ""
        }
    }
    onNameChange = (event) => {
        this.setState({name: event.target.value})
    } 

    onEmailChange = (event) => {
        this.setState({email: event.target.value})
    }

    onPasswordChange = (event) => {
        this.setState({password: event.target.value})
    }

    onSubmitSignIn = () => {}

    render() {
        return (
            <article className="article">
                <main className="main">
                <div className="Container">
                    <fieldset id="sign_up" className="fieldset">
                        <legend>Signup</legend>
                        <div>
                            <label>Name</label>
                            <input 
                            type="text" 
                            name="name" 
                            id="name"
                            onChange={this.onNameChange} 
                            />
                        </div>
                        <div>
                            <label>Email</label>
                            <input 
                            type="email" 
                            name="email-address" 
                            id="email-address"
                            onChange={this.onEmailChange}
                            />
                        </div>
                        <div>
                            <label>Password</label>
                            <input 
                            type="password" 
                            name="password" 
                            id="password"
                            onChange={this.onPasswordChange}
                            />
                        </div>
                    </fieldset>
                    <div className="">
                        <input 
                        onClick={this.onSubmitSignIn}
                        type="submit" 
                        value="signup"
                        />
                    </div>
                </div>
                </main>
            </article>
        );
    }
}

export default signup;