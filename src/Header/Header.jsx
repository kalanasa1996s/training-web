import React from 'react';
import male from '../assest/male.png'
import './Header.css'

function Header(){

    return(


        <div>

        <nav className="navbar navbar-light bg-light justify-content-between">

        <a className="navbar-brand"></a>
        <form className="form-inline">

            <input className="form-control mr-sm-5 searchbox" type="search" placeholder="Search" aria-label="Search" ></input>
           <button className="buttonround mr-3"><i class="fas fa-bell bell  rounded-circle "></i></button> 
            <img src={ male } alt="..." className="rounded-circle  avater" ></img>
        </form>



        </nav>





        </div>


    )

}

export default Header;