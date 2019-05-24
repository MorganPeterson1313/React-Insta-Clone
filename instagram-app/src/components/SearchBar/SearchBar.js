import React, { Component } from 'react';
import './searchBar.css';

export default class SearchBar extends Component {
    render() {
        return (
            <div>
                                <div className="searchBar">
                                            <img className="camera" src="https://upload.wikimedia.org/wikipedia/commons/6/6e/Instagram_font_awesome.svg" alt="camera"/>
                                            <h6>|</h6>
                                            <h5>Instagram</h5>
                                            
                                        <form>
                                            <input
                                            
                                            
                                            
                                            
                                            />

                                        </form>
                                        
                                        <i id="gps" className="fas fa-location-arrow"></i>
                                        <img id="heart" className="heart" src="https://upload.wikimedia.org/wikipedia/commons/8/87/Line-style-icons-heart.svg" alt="heart"/>
                                        <i id="user" className="far fa-user"></i>
                                        
                            </div>
            </div>
        )
    }
}
