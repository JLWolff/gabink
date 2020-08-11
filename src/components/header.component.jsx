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
                    <h1><a href="https://www.instagram.com/hgabink/" target="_blank">@hgabink</a></h1>
                </div>
                <div class="data">
                {/* {`${this.state.data}/${this.state.mounth}`} */}
                    <a href="https://teespring.com/stores/hgabink" className="shop" target="_blank">SHOP NOW</a>
                </div>
                <div className="data hora">
                    <Clock />
                </div>
            </div>
  
        )
    }
}

export default Header;