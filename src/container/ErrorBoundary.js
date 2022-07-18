import React, { Component } from "react";


class ErrorBoundary extends Component {
    constructor(props){
        super();
        this.state = {
            hasError: false
        }
    }

    componentDidCatch(error, info){
        this.setState({hasError : true})
    }

    render(){
        if(this.state.hasError){
        return (
            <div> Oops ! Something Went Wrong.</div>
        )     
        }

        return (this.props.children)
    }
}

export default ErrorBoundary;