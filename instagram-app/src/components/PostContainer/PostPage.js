import React, { Component } from 'react'
import dummyData from '../../dummy-data';
import PostContainer from './PostContainer';
import SearchBar from '../SearchBar/SearchBar';




export class PostPage extends Component {
constructor(){
super();
this.state = { data: dummyData, 
    search: ""
    


};
}


handleChange = e => {
console.log(e.target.value);
e.preventDefault();
this.setState({ search: e.target.value });

};
// changeHandler = e => {
   
//      e.preventDefault();
//       this.setState({ input: e.target.value });
    
//   };

addCommentHandler = e => { 
e.preventDefault();

const newComment = {
  username: this.username,
  id: Date.now(),
  text: this.state.value
};
this.setState({
  data: [newComment]
   });
};

submitHandler = e => {
e.preventDefault();
const {id, username, search} = this.state;
this.setState(()=>{
return {url:`${id}${username} ${search}`,search:''}
})
}
onSearchChange = event => {

this.setState({ search: event.target.value})



}

addComment = (comment)=>{

this.setState({dummyData:[...this.state.dummyData, {comments: comment, id:Date.now()}]})

}



handleLogout = e => {
    localStorage.setItem("username", '');
    localStorage.setItem("loginStatus", 'false');

    window.location.reload();
  }



    render() {
        const filteredPosts = this.state.data.filter(post => {

            return post.username.includes(this.state.search);
        
        
         });
         console.log(filteredPosts);
        
          return (
            <div className="App">
              <SearchBar
              onSearchChange={this.onSearchChange}
              handleLogout={this.handleLogout}
              />
              <PostContainer 
              dummyData={filteredPosts} 
          
              // changehandler={this.changeHandler}
              />
              
            </div>
          );
    }
}

export default PostPage
