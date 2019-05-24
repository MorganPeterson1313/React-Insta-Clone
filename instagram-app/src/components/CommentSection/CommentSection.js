import React from 'react'


class CommentSection extends React.Component {
    constructor(props){
        super(props);
        this.onChangeHandler=props.onChangeHandler
            this.addCommentHandler=props.addCommentHandler

    }

    render(){
    
        return (
        
    <div>
                    <form onSubmit= {this.addCommentHandler}>

                    <input
                    type= "text"
                    value= {this.data}
                    placeholder = 'comment'
                    name ="comment"
                    onChange={this.onChangeHandler}
                    
                    />   
                    </form>
    </div>
        )
    }

}
export default CommentSection;
