import React,{Component} from 'react';

function Propexe(props) {
        
    return(
        <h1>Hello ,{props.age}</h1>
    );
}

class StateExe extends Component{
 constructor(props){
     super(props);
     
    }
    state = {name: 'pavan', age :26};

 render(){
     //example of template literal
     console.log(` I am loging the state variable <this.state.name> as : ${this.state.name}`);
     return(
         <>
 <h1>Hello,{this.state.name} my age is ,{this.state.age}</h1>
         <Propexe age= {25}/>
         </>
     );

 }

}

export default StateExe;

