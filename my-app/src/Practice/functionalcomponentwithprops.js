import React from 'react';

function FunctionalComponentwithProps(props){

    return(
        <h1>Hello ,{props.name}</h1>
    );
}

export default FunctionalComponentwithProps;

// comment can be written in many ways 
//  {/* ......*/} one way
//  {true && Component}
//  {! compoenet}