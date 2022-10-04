import React,{ useRef, useState} from 'react'
import './Navbar.css'
import {FaBars,FaSearch,FaTimes} from 'react-icons/fa';

function Navbar(prop) {
    //The faBars & FaTimes are hidden if the screen width is more than 1260, this state variable is to control those icons,
    //If icons is true then menu is hidden and Fabars will be vivible , else munu will be visible and FaTimes will show. 
    const [icons,setIcons]=useState(()=>{if(window.innerWidth>1260)return false; else return true;});

    //This state variable is to control which tab is shown active on the menu bar.
    const [active,setActive]=useState(()=>{return "All"})
  
    //function to toggle icons and hide and show menu on button click(only when screen is below 1260px width)
    const openNav=()=>{
        setIcons(()=>{return !icons});
    }
 //useref to get the input element 
const input=useRef();

//On input state change I am calling the change keyword function in APP.js and setting its value to the value of input element.
const inputChange=()=>{
    prop.chageKeyword(input.current.value);
}

  return (
    <div className='Navbar'>
        <header>
    <a href="\#" className='logo'>E-moji</a>

    <div className="serchSec"><input type="text" className='Inputval' onChange={inputChange} ref={input}/>
    <button className="searchIcon"><div ><FaSearch/></div></button></div>

    <div className="menuToggle" onClick={openNav}>{icons?<FaBars/>:<FaTimes/>}</div>
    <nav style={(icons)?{display:"none"}:{display:"block"}} >
        {/* Calling changeCatagory on App.js to set the value of catagory state variable  */ }
        {/* Also changing the active state variable on clicking on li to show proper active tab */ }
        <ul>
            <li><a href="\#" className={active==="All"?"active":""} onClick={()=>{prop.changeCatagory("general"); setActive("All");}}>All</a></li>
            <li><a href="\#" className={active==="Smi"?"active":""} onClick={()=>{prop.changeCatagory("Smileys & Emotion"); setActive("Smi");} }>Smileys</a></li>
            <li><a href="\#" className={active==="Peo"?"active":""} onClick={()=>{prop.changeCatagory("People & Body"); setActive("Peo");}}>People</a></li>
            <li><a href="\#" className={active==="Ani"?"active":""} onClick={()=>{prop.changeCatagory("Animals & Nature"); setActive("Ani");}}>Animals</a></li>
            <li><a href="\#" className={active==="Foo"?"active":""} onClick={()=>{prop.changeCatagory("Food & Drink"); setActive("Foo");}}>Food</a></li>
            <li><a href="\#" className={active==="Tra"?"active":""} onClick={()=>{prop.changeCatagory("Travel & Places"); setActive("Tra");}}>Places</a></li>
            <li><a href="\#" className={active==="Act"?"active":""} onClick={()=>{prop.changeCatagory("Activities"); setActive("Act");}}>Activities</a></li>
            <li><a href="\#" className={active==="Obj"?"active":""} onClick={()=>{prop.changeCatagory("Objects"); setActive("Obj");}}>Objects</a></li>
            <li><a href="\#" className={active==="oth"?"active":""} onClick={()=>{prop.changeCatagory("others"); setActive("oth");}}>Others</a></li>
        </ul>
    </nav>
    <div className="clearFix"></div>
    </header>
    </div>
  )
}

export default Navbar