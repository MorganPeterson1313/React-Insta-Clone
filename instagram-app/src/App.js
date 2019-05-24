import React from 'react';

import './App.css';
import dummyData from './dummy-data';
import PostContainer from './components/PostContainer/PostContainer';
import CommentSection from './components/CommentSection/CommentSection';
import SearchBar from './components/SearchBar/SearchBar';

class App  extends React.Component {

constructor(){
super();
this.state = { data: dummyData

            };
          }


          changeHandler =(e) => {
            console.log(e.target.value);
            this.setState({ value: e.target.value });
            
          };

          addCommentHandler = e => { 
            e.preventDefault();
        
            const newComment = {
              username: this.state.value,
              id: Date.now(),
              text: false
            };
          this.setState({
              tasks: [...this.state.data, newComment]
               });
            };


render (){

  return (
    <div className="App">
      <SearchBar/>
      <PostContainer dummyData={this.state.data} />
      <CommentSection 
      value={this.state.value}
      changeHandler={this.changeHandler}
      addCommentHandler={this.addCommentHandler}
      
      />
    </div>
  );
    }
  }
export default App;
