import React,{useState} from 'react';
import './App.css';
import Columns from './components/Columns';
import Navbar from './components/Navbar';

function App() {
  const [keyword,setKeyword]=useState(()=>{return ""});
  const [catagory,setCatagory]=useState(()=>{return "general"});

//This function is to set the keyword according to which search is implemented
  const chageKeyword=(key)=>{
    setKeyword(key);
  }
//This function is to set the catagory for which the emojies are filtered
  const changeCatagory=(cata)=>{
    setCatagory(cata);
  }
  
  return (
    <div className="App">
      {/* This component has two sub components- navbar & main section*/}
      {/* Functions to set the states are passed to navbar & state variables are passed to the main section*/}
      <Navbar chageKeyword={chageKeyword} changeCatagory={changeCatagory}/>
      <Columns keyword={keyword} catagory={catagory}/>
    </div>
  );
}

export default App;
