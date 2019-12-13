import React ,{Component} from 'react';
import Cls from './classcomponent';
import Sta from './Stateandprops';
import Cycle from './componentLifecycle';


class Test extends Component{
   
    state={flag :true};

   
   Click=()=>{
     
      this.setState({flag : !this.state.flag});
    
    }
    


    render(){
        //this is a example of fragment<> written inside it</> later translated to <React.fragment/>
      return(
        <>
        {this.state.flag&&<Cycle/>}
        {/* we should pass only the function signature mean only the name not the function call */}
        <input type='button' onClick={this.Click} />
        {!<Cls />}
        {!<Sta />}
        <h1>This is the Starting</h1>
        </>
      );
      
    }

}

export default Test;
