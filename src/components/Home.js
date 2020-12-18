import React from 'react';

export default class Home extends React.Component{
    render(){
        return(
            <div className="row" style={{flex:1, alignItems:'center', justifyContent:'center', width:'100%'}}>
                <div className="containerHome">
                    <p>
                        Welcome to
                    </p>
                    <p className="titleHome">
                        Simple React JS Socket Chat
                    </p>
                </div>
            </div>
        )
    }
}