import React, {useState, useEffect} from 'react' 

import { Route, Switch } from 'react-router'
import Content from './components/Content'
import Dropdown from './components/Dropdown'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import HOME from './pages'
import about from './pages/about'
import menu from './pages/menu'

export default function App() {
  const [isOpen, setisOpen]= useState(false);
  const toggle =() =>{
    setisOpen(!isOpen);
  };
useEffect(() =>{
  const hideMenu=()=>{
    if(window.innerWidth>768 && isOpen){
      setisOpen(false);
      console.log("hey");
    }
  }
  window.addEventListener('resize' ,hideMenu);

  return ()=> {
    window.removeEventListener('resize',hideMenu);
  }
})
  return (
    <>
    <Navbar toggle={toggle} />
    <Dropdown isOpen={isOpen} toggle={toggle} />
   <Switch>
   <Route path='/' exact component={HOME} />
   <Route path='/about' exact component={about} />
   <Route path='/menu' exact component={menu} />
   </Switch>
    <Footer />

    </>
  )
}
