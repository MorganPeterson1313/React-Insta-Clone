import React from 'react'

const authorize = App => LoginPage =>

class extends  React.Component {
       constructor(props){
            super(props);


            this.state = {

                    loggedIn:false,
                    username:'',
                    passworrd:''


            };
}


componentDidMount() {
  
      
    const username = localStorage.getItem("username");
    if (username) {
        this.setState({
          loggedIn: true
        });
      } else {
        this.setState({
          loggedIn: false
        });
      }

    }

    handleChange = e => {
        const { name, value } = e.target;
  
        this.setState({
          [name]: value
        });
      };

      toggleLogin = e => {

        localStorage.setItem("username", `${this.state.usernameInput}`);
        localStorage.setItem("loginStatus", JSON.stringify(this.state.loggedIn));
  
        
      };



    render() {
        return this.state.loggedIn ? (
                <App />
              ) : (
                <LoginPage
                  toggleLoginStatus={this.toggleLogin}
                  handleChange={this.handleChange}
                />
              );
    }
}

export default authorize;
