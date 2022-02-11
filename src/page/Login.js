import React, { Component } from "react";
import withRouter from "../withRouter"
import { Container } from "reactstrap";
// import { Navigate } from 'react-router-dom'

class Response extends String { json = () => JSON.parse(this) }

function mockFetch(url, { body }) {
    const { email, password } = body
    if (email !== 'admin@admin.com' || password !== 'password')
        return Promise.reject("Email atau Password salah")

    return Promise.resolve(
        new Response(
            JSON.stringify({ accessToken: 'token-masuk' })
        )
    )
}

class Login extends Component {
    state = { email: null, password: null, redirect: false}
    set = name => e => this.setState({ [name]: e.target.value })
    handleSubmit = e => {
        e.preventDefault()
        console.log(this.props);
        const { email, password } = this.state
        mockFetch('http://api.example.com/v1/auth/login', {
            body: {email, password}
        })
        .then(response => response.json())
        .then(json => {
            localStorage.setItem('token', json.accessToken)
            this.props.navigate('/about')
        })
        .catch(err => alert(err))
    }

    render() {
        return(
            <Container className="p-4 d-flex align-items-center justify-content-center">
                <h1>Login</h1>
                <form onSubmit={this.handleSubmit}>
                    <label>Email
                        <input type="email" name="email" onChange={this.set('email')} />
                    </label>
                    <label>Password
                        <input type="password" name="password" onChange={this.set('password')} />
                    </label>
                    <input type="submit" value="submit" />
                </form>
            </Container>
        )
    }
}

export default withRouter(Login)