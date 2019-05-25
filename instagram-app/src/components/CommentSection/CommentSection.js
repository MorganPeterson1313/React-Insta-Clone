import React from 'react'


class CommentSection extends React.Component {
    constructor(props){
        super(props);
        this.changeHandler=props.changeHandler
            this.addCommentHandler=props.addCommentHandler

    }

    render(){
    
        return (
        
    <div>
                    <form onSubmit= {this.addCommentHandler}>

                    <input
                    type= "text"
                    value= {this.data}
                    placeholder = 'add a comment'
                    name ="comment"
                    onChange={this.changeHandler}
                    
                    />   
                    </form>
    </div>
        )
    }

}
export default CommentSection;
