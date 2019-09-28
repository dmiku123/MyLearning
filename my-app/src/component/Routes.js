import React ,{Component} from 'react';
import { Route, Router } from 'react-router-dom';
import Home from './Home';
import Callback from './Callback';
import history from './history';



export default class Routes extends Component {
  constructor(){
    super();
   this.state={name:'asdfs',
   arr:['apple','banana','apple','grapes','apple','banana','kiwi'],
    obj:{},
    arrOfObj:[{stdId: 123 , stdName: 'hgkhgjh', stdAge : '78'},
    {stdId: 124 , stdName: 'gfhg', stdAge : '67'},
    {stdId: 125 , stdName: 'gfgfkf', stdAge : '56'}],
  };
  }
  componentDidMount(){
    let newArr=['pavan','swarna','Deb'];
    newArr.splice(1,1);
    let currState= this.state.arr;
    //currState.splice(2,1);
    var newArr1=[];

currState.map((key1)=>{
  let flag= true;
  newArr1.map((key2)=>{
  if(key1==key2){
flag=false;
  }
});
if(flag){newArr1.push(key1);}
}
);


newArr1 = newArr1.filter((key)=>{
  if(key  == 'apple')
{ return (false);  }
 else return true;}) 

 this.setState({arr:[...newArr1,...newArr]});
  }

  

  componentDidUpdate(){

  }
  render(){
    return(<div>
      Name : <input value={this.state.name} onChange={(evt)=>{this.setState({name: evt.target.value});}}/>
      <select>
      {this.state.arr.map((key)=><option>{key}</option>)}
      </select>
      </div>);
  }
};

