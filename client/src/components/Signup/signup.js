import React from "react";

class signup extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <article>
                <main>
                <div>
                    <fieldset id="sign_up" className="fieldset">
                        <legend>Signup</legend>
                        <div>
                            <label>Name</label>
                            <input 
                            type="text" 
                            name="name" 
                            id="name" 
                            />
                        </div>

                    </fieldset>
                </div>
                </main>
            </article>
        );
    }
}

export default signup;