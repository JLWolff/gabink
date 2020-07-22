import React from 'react';

import Clock from './clock/clock';

import './header.styles.css';

class Header extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
            data: new Date().getDate(),
            mounth: new Date().getMonth() +1
        }
      }

    
    render(){
        return(
        <div className="header">
            <div>
                <h1><a href="https://www.instagram.com/hgabink/">@hgabink</a></h1>
            </div>
            <div class="data">
              {`${this.state.data}/${this.state.mounth}`}
            </div>
            <div class="data">
                <Clock />
            </div>
        </div>
        )
    }
}

export default Header;