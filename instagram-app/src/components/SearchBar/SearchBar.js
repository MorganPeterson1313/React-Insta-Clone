import React from 'react';
import './searchBar.css';

class SearchBar extends React.Component {
    constructor(props){
        super(props);
    
            this.onSearchChange = props.onSearchChange;
    }

//  const { handleChange, submitHandler,value } = this.props;

render(){
        return (
            <div className="container">
                <div className="row">
                   <div className="col-10 mx-auto mt-5 text center">
                                <div className="searchBar">
                                            <img className="camera" src="https://upload.wikimedia.org/wikipedia/commons/6/6e/Instagram_font_awesome.svg" alt="camera"/>
                                            <h6>|</h6>
                                            <h5>Instagram</h5>
                                            
                                        <form >
                                            
                                            <input
                                            type="search"
                                    
                                            placeholder="searh for posts"
                                            className="form-control"
                                            
                                            onChange={this.onSearchChange}

                                            
                                            />

                                        </form>
                                        
                                        <i id="gps" className="fas fa-location-arrow"></i>
                                        <img id="heart" className="heart" src="https://upload.wikimedia.org/wikipedia/commons/8/87/Line-style-icons-heart.svg" alt="heart"/>
                                        <i id="user" className="far fa-user"></i>
                                        </div>      
                            </div>
                    </div>
            </div>
        )
    }
    
}

export default SearchBar;