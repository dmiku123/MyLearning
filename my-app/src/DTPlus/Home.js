import React ,{Component} from 'react';
import SideBar from './SideBar';
import Main from './Main'
function DTp() {
  return (
    <div id='DTPlusContainer'>
            <div id='header' style={{display:'block',border:'5px solid red' ,width:'100%',height:'50px'}}>
                This is header
            </div>
            <SideBar/>
            <Main/>
    </div>
  );
}
export default DTp;