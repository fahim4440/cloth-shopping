import React from 'react';
import './sign-in.styles.scss';
import FormInput from '../form-input/form-input.component'
import CustomButton from '../custom-button/custom-button.component'

class SignIn extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.setState({
            email: '',
            password: ''
        });
    }

    handleChange = (event) => {
        const {value, name} = event.target;
        this.setState({ [name]: value })
    }

    render() {
        return (
            <div className='sign-in'>
                <h1>I already have an account</h1>
                <span>Sign in with your email and password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput label='Email' handleChange={this.handleChange} name='email' type='email' value={this.state.email} required />
                    <FormInput label='Password' handleChange={this.handleChange} name='password' type='password' value={this.state.password} required />
                    <CustomButton type='submit'>Submit</CustomButton>
                </form>
            </div>
        )
    }
}

export default SignIn;