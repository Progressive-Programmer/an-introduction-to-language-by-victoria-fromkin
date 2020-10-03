import './Header.css';
import React from 'react';
import SearchIcon from '@material-ui/icons/Search';
import GitHubIcon from '@material-ui/icons/GitHub';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';


function Header() {
    return (
        <div className="header">
                <img classname="header__logo" height="40px" src="https://flutter.dev/assets/flutter-lockup-1caf6476beed76adec3c477586da54de6b552b2f42108ec5bc68dc63bae2df75.png" alt="progressive programmer logo" />

                <div className="header__right">
                    <div className="header__rightMenu">
                        <h3>Docs</h3>
                        <h3>Showcase</h3>
                        <h3>Community</h3>
                        <SearchIcon />
                    </div>
                    <div className="header__social">
                        <FacebookIcon />
                        <InstagramIcon />
                        <GitHubIcon />

                    </div>
               
            </div>
        </div>
    )
}

export default Header;
