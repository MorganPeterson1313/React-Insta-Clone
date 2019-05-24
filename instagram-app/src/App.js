import React from 'react';

import './App.css';
import dummyData from './dummy-data';
import PostContainer from './components/PostContainer/PostContainer';
import SearchBar from './components/SearchBar/SearchBar';

class App  extends React.Component {

constructor(){
super();
this.state = { data: dummyData

            };
          }


          changeHandler =(e) => {
            console.log(e.target.value);
            e.preventDefault();
            this.setState({ value: e.target.value });
            
          };

          addCommentHandler = e => { 
            e.preventDefault();
        
            const newComment = {
              username: this.state.username,
              id: Date.now(),
              text: this.state.value
            };
          this.setState({
              data: [...this.state.data, newComment]
               });
            };


render (){

  return (
    <div className="App">
      <SearchBar/>
      <PostContainer 
      dummyData={this.state.data} 
      addCommentHandler={this.addCommentHandler}
      changeHandler={this.changeHandler}
      value={this.state.value}
      />
      
    </div>
  );
    }
  }
export default App;
