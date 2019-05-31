import React, { Component } from 'react'
import './login.css';
export class Login extends Component {
    constructor(props){
        super(props);
        this.toggleLoginStatus=props.toggleLoginStatus
        this.changeHandler=props.changeHandler
            // this.addCommentHandler=props.addCommentHandler
//  this.state = {
//             username: "",
//             password: ""

//  };
    }

    // changeHandler = (event) => {
    
    //     event.preventDefault();
    //     const {value, name} = event.target
    //     this.setState({ [name]:value });
        
    //   };

    //   addCommentHandler = (e) => { 
    //     e.preventDefault();
    
    //     // const newComment = {
    //     //  username: this.username,
    //     //   id: Date.now(),
    //     //   text: this.state.input
    //     // };

    //     this.props.addComment(this.state.comments)
    // //   this.setState({
    // //       input: [newComment]
    // //        });
    // //     };

    //   };
login(){

}


    render() {
        return (

            <div className = "login">
                <h1>Instagram Login</h1>
            <form >   
            <input
            type= "text"
            value= {this.props.username}
            placeholder = 'enter username'
            name ="username"
            onChange={this.changeHandler}
            
            />   

            </form>
            <br/>
           <form >   
           <input
           type= "text"
           value= {this.props.password}
           placeholder = 'enter password'
           name ="password"
           onChange={this.changeHandler}
           
           />   
           </form>
           <br/>
           <button onClick={this.toggleLoginStatus}>Login</button>

           </div>

        )
    }
}

export default Login
