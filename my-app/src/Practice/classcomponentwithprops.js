import React ,{component} from 'react';

class ClassComponentWithProps extends Component{

    render(){

        return(
            <h1>Hello,{this.props.name}</h1>
        );
    }

}

export default ClassComponentWithProps;