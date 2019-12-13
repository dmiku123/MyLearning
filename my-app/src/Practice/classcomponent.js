//minimum we need to import React even we dont use react anywhere.
import React ,{Component}from 'react';


// componentname should be having first letter in uppercase
// component should be import from React library or React.Component can be used.
class ClassComponent extends Component
{
//as a bare minimum requirement every class component shoud implement render 
    render(){
        //return 
        return (
       <Clock/>

        );
    }
}


export default ClassComponent;
// there should be one default component and we need to export all the components declared in the page.



class Clock extends React.Component {
    constructor(props) {
      super(props);
      this.state = {date: new Date()};
    }
  
    componentDidMount() {
      this.timerID = setInterval(
        () => this.tick(),
        1000
      );
    }
  
    componentWillUnmount() {
      clearInterval(this.timerID);
    }
  
    tick=() =>{
      this.setState({
        date: new Date()
      });
    }
  
    render() {
      return (
        <div>
          <h1>Hello, world!</h1>
          <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
        </div>
      );
    }
  }
  

  