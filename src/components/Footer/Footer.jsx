import React from 'react';
import './Footer.css'

import ScrollArrow from '../ScrollArrow/ScrollArrow';



const Footer = () => {
    return (
        <>
            <footer>
                    <div className="img">
                       <a href="./home"> <img className="logo-img" src='../logobw.png' width={50} height={50}></img></a>
                        <span className="rights"> All rights Bjork Weenk 2022© </span>
                    </div>
                    <div className="list">
                        <ul>
                            <li className="icon-list"> <a href="https://github.com/bjorkweenk" target="_blank"> <i class="fa-brands fa-github-square"></i></a></li>
                            <li className="icon-list"> <a href="./contact"><i class="fa-solid fa-at"></i></a></li>
                            <li className="icon-list"> <a href="https://www.linkedin.com/in/wuqingguibjork/" target="_blank"> <i class="fa-brands fa-linkedin"></i></a></li> 
  
                        </ul>
                      <div className='scroll'> <ScrollArrow/></div> 
                    </div>
                                          
            
            </footer>
        </>
    );
};

export default Footer;