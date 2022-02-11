import React, { Component, Fragment } from "react";
import withRouter from "../withRouter";
import { Navigate } from "react-router-dom";
import { Button, Container } from "reactstrap";
import NavigationBar from "../components/Navbar";

class About extends Component {
    state = { isAuthenticated: false }
    componentWillMount() {this.checkUser() }

    checkUser = () => {
        const token = localStorage.getItem('token')
        if (!!token) {
            return this.setState({ isAuthenticated: true })
        }
    }
    handleLogout = () => {
        localStorage.removeItem('token')
        this.props.navigate('/login')

    }
    render () {
        const { isAuthenticated } = this.state
        if (!isAuthenticated) return <Navigate to="/login" />
        return (
            <Fragment>
                <NavigationBar />
                <Container className="p-4"><h1>Ini About</h1>
                <Button color="danger">Logout</Button>
                </Container>
            </Fragment>
        )
    }
}

export default withRouter(About)