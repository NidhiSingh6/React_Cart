import React from 'react'

class Navbar extends React.Component {
    state = {  } 
    render() { 
        return (
            <nav className="navbar navbar-expand-lg bg-dark">
            <div className="container-fluid">
              <a className="navbar-brand text-white" href="#">
                React Cart
              </a>
             
            </div>
          </nav>
        );
    }
}
 
export default Navbar;