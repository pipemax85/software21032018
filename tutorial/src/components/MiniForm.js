import React, { Component } from 'react' ;
import axios

class MiniForm extends Component {
    
    constructor(props){
        this.state = {
            author: '',
            body: ''
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleChange.bind(this)
        
    }
    
    handleChange(event){
        const target = event.target
        const value = target.value
        const name = target.id
        
        
    }
    
    handleSubmit(event){
        event.preventDefault()
        const question_id = this.props.question_id
        url = ''
        if(question_id){
            url = ''
        }
    }
    
    render(){
        return(
            <form onSubmit = {this.handleSubmit}>
                <label htmlFor="author" >Author</label>
                <input ></input>
            </form>
        )
    }
}