import React,{Component} from 'react';


class Clock extends Component{

    constructor(props){
    
        super(props);
        this.state={date :new Date()};
        console.log(this.props);
        console.log(this.state);
        
        console.log("entered constructor");
      }

      static getDerivedStateFromProps()
      {
        
          console.log("entered getdeviredstate");
      }

      shouldComponentUpdate(){
     
        console.log("entered shouldComponentUpdate");
          return true;
        
      }
    componentDidMount(){
      
        console.log("I am loading Component did mount ");
        this.timerID =setInterval(
            () => this.tick(),5000
        );
    }

    getSnapshotBeforeUpdate(){
    
        console.log("entered getSnapshotBeforeUpdate");
    }
    
    componentDidUpdate(){

        console.log("entered DidUpdate");
    }

    componentWillUnmount(){
        console.log("I am loading Component willUnmount ");
        clearInterval(this.timerID);
    }

    tick(){
        //console.log("I am loading tick function ");
        this.setState({
            date: new Date()
        });
    }

    render(){
        const flag =true;

               //console.log("I am loading renderin lifecycle ");
        return(
            <div>
                <h1>Hello world!,{this.state.date.toLocaleTimeString()}</h1>
            </div>
        );
    }
}

export default Clock;