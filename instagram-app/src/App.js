import React from 'react';

import './App.css';
import authorize from './components/HOC/Authorize';
import PostPage from './components/PostContainer/PostPage';
import Login from './components/Login/Login';

class App  extends React.Component {

// this.state = { data: dummyData, 
//                 search: ""
                


//             };
//           }


//           handleChange = e => {
//             console.log(e.target.value);
//             e.preventDefault();
//             this.setState({ search: e.target.value });
            
//           };
//           // changeHandler = e => {
               
//           //      e.preventDefault();
//           //       this.setState({ input: e.target.value });
                
//           //   };

//           addCommentHandler = e => { 
//             e.preventDefault();
        
//             const newComment = {
//               username: this.username,
//               id: Date.now(),
//               text: this.state.value
//             };
//           this.setState({
//               data: [newComment]
//                });
//             };

// submitHandler = e => {
//   e.preventDefault();
// const {id, username, search} = this.state;
// this.setState(()=>{
//   return {url:`${id}${username} ${search}`,search:''}
// })
// }
//  onSearchChange = event => {

//   this.setState({ search: event.target.value})
 


// }

// addComment = (comment)=>{
    
//   this.setState({dummyData:[...this.state.dummyData, {comments: comment, id:Date.now()}]})
  
//   }



render (){
  
//   const filteredPosts = this.state.data.filter(post => {

//     return post.username.includes(this.state.search);


//  });
//  console.log(filteredPosts);



  return (
    <div className="App">
     
      


<ConditionalView />

    </div>
  );
    }
  }

  const ConditionalView = authorize(PostPage)(Login);
export default App;
