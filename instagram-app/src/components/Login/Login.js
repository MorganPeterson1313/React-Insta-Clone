import React, { Component } from 'react'

export class Login extends Component {
    constructor(props){
        super(props);
        // this.changeHandler=props.changeHandler
            this.addCommentHandler=props.addCommentHandler
 this.state = {
            username: "",
            password: ""

 };
    }

    changeHandler = (event) => {
    
        event.preventDefault();
        const {value, name} = event.target
        this.setState({ [name]:value });
        
      };

      addCommentHandler = (e) => { 
        e.preventDefault();
    
        // const newComment = {
        //  username: this.username,
        //   id: Date.now(),
        //   text: this.state.input
        // };

        this.props.addComment(this.state.comments)
    //   this.setState({
    //       input: [newComment]
    //        });
    //     };

      };



    render() {
        return (

            <div className = "login">
            <form onSubmit = {this.addCommentHandler}>   
            <h6>{this.state.username}</h6>
            <input
            type= "text"
            value= {this.state.username}
            placeholder = 'enter username'
            name ="username"
            onChange={this.changeHandler}
            
            />   

            </form>
            <br/>
           <form onSubmit = {this.addCommentHandler}>   
           <h6>{this.state.password}</h6>
           <input
           type= "text"
           value= {this.state.password}
           placeholder = 'enter password'
           name ="password"
           onChange={this.changeHandler}
           
           />   
           </form>
           <button onSubmit = {this.addCommentHandler}>Login</button>

           </div>

        )
    }
}

export default Login
