import React ,{Component} from 'react';
import minion from './minion.svg';

function SideBar() {
  return (
  <div id='sidebar' style={{display:'inline-block','float':'left',border:'2px solid black' ,width:'20%',height:'600px'}}>
      <img src={minion} style={{height:'300px',width:'250px'}} alt="logo" />
    </div>
  );
}
export default SideBar;