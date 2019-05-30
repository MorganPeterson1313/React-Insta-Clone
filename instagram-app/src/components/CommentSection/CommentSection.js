import React from 'react'


class CommentSection extends React.Component {
    constructor(props){
        super(props);
        // this.changeHandler=props.changeHandler
            this.addCommentHandler=props.addCommentHandler
 this.state = {
            comments: ""

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


    render(){
    
        return (
        
    
                    <form onSubmit = {this.addCommentHandler}>   
                    <h6>{this.state.comments}</h6>
                    <input
                    type= "text"
                    value= {this.state.comments}
                    placeholder = 'add a comment...'
                    name ="comments"
                    onChange={this.changeHandler}
                    
                    />   
                    </form>

        )
    }

}
export default CommentSection;
