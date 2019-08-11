import React from 'react';

export default UnAuthWrap => {
class UnAuth extends React.Component {
    constructor(props){
        super(props);
        this.state={
            Authorized : true
        };
    }
    render(){
        if(this.state.Authorized){
            console.log('true'+ this.state.Authorized);
        return (<UnAuthWrap {...this.props}  />);
    }
        else{
            console.log('fslse' + this.state.Authorized);
        return(<div>
            <div>You are not authorized </div>
            <div style={{filter:'blur(5px)'}}>
                <UnAuthWrap {...this.props} />
            </div>
        </div>);}
    }
}
return (UnAuth);
}