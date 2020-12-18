import React from 'react';
import io from 'socket.io-client';
import { useLocation } from "react-router-dom";
import moment from 'moment';
import firebase from 'firebase';
import { connect } from 'react-redux'

class Chat extends React.Component{

    constructor(props){
        super(props)

        this.state = {
            port:'http://localhost:8000',
            message_chat:[],
            user_chat:[],
            id:0,
            tmpMessage:''
        }
    }


    readData(){

        var tempArray = [];
        try {
            firebase.firestore().collection('chat').orderBy('createdAt').get()
                .then(querySnapshot => {
                    querySnapshot.docs.forEach(doc => {
                        const datanya = doc.data();
                        this.setState(prevState => ({
                            message_chat:[...prevState.message_chat, {
                                message:"["+datanya.datetime+"] "+datanya.username+": "+ datanya.message
                            }],
                        }))
                        var elem = document.getElementById('message_all');
                        elem.scrollTop = elem.scrollHeight;
                    });

                });
        } catch (error) {
            console.log("error")
        }

    }

    addData(msg, user){

        try {
            let datas = {
                message: msg,
                username: user,
                datetime: moment().utcOffset('+07:00').format('DD-MMM-YYYY HH:mm:ss'),  
                createdAt: Date()
            };
          
            firebase
            .firestore().collection('chat').doc().set(datas)
            .then(function() {
                console.log("Doc successful");
            })
            .catch(function(error) {
               console.error("Error writing doc", error);
            });
        } catch (error) {
            console.log("error", error)
        }
    }

    componentDidMount(){
        const socket = io(this.state.port);
        socket.on("start_message", (data)=>{
            this.setState((prevState) => ({
                user_chat:data.user,
                id:data.id
            }))

            //socket.emit("reg_user", {id:this.state.id, user:this.props.location.state.user});
            socket.emit("reg_user", {id:this.state.id, user:this.props.email});
            
        });
        
        socket.on("update_user", (data)=>{
            this.setState({
                user_chat:data.user
            })
        });

        socket.on("new_message", (data)=>{
            this.setState(prevState => ({
                message_chat:[...prevState.message_chat, {
                    message:"["+data.time+"] "+data.user+": "+ data.msg
                }],
            }))

            var elem = document.getElementById('message_all');
            elem.scrollTop = elem.scrollHeight;
        });
        
        this.readData();
    }

    tempMsgHandler = (e) =>{
        this.setState({
            tmpMessage:e.target.value
        })

        e.target.value = ''
    }

    writeMessage = () =>{
        const socket = io(this.state.port);
        socket.emit("send_message", {
            msg_chat:this.state.tmpMessage,
            //user_chat:this.props.location.state.user,
            user_chat:this.props.email,
            time_chat:moment().utcOffset('+07:00').format('DD-MMM-YYYY HH:mm:ss')
        })

        
        //this.addData(this.state.tmpMessage, this.props.location.state.user);
        this.addData(this.state.tmpMessage, this.props.email);
            
        this.setState(prevState => ({
            tmpMessage:''
        }))
    }

    submitMessage = (e) =>{
        if(e.keyCode == 13){
            this.writeMessage()
        }
    }

    render(){
        return(
            <div className="row containerAll" style={{flex:1, alignItems:'center', justifyContent:'center', width:'100%'}}>
                <div className="containerChat" style={{width:'98%', height:550}}>
                    
                    <div className="float-left usernameContainer" style={{width:'19%', height:450}}>
                        <p className="usernameTitle">
                            Username
                        </p>
                        {this.state.user_chat.map((item, i) => (
                            <p>{item.user}</p>
                        ))}
                    </div>
                    <div className="float-right messageContainer" id="message_all" style={{width:'80%', height:450}}>
                        {this.state.message_chat.map((item, i) => (
                            <p>{item.message}</p>
                        ))}
                    </div>
                    <div className="clearfix"></div>

                    <div className="row" style={{marginTop:10, padding:10, height:80}}>
                        <div className="float-left text-center" style={{borderWidth:1, borderColor:'black', width:'20%'}}>
                            <div className="userTxt" style={{width:'90%'}}>
                                <input type="text" value={this.props.email} className="form-control" />
                            </div>
                        </div>
                        <div className="float-right msgTxt" style={{width:'65%'}}>
                            <input onKeyDown={this.submitMessage} onChange={this.tempMsgHandler} type="text" value={this.state.tmpMessage} placeholder="input your message here.." className="form-control" />
                        </div>
                        <div className="float-right btnSubmit" style={{width:'10%'}}>
                            <button onClick={this.writeMessage} className="form-control btn-primary"> Write </button>
                        </div>
                    </div>

                </div>
            </div>
        )
        
    }
}

function mapStateToProps(state){
    return{
        email:state.auth.email
    }
}

export default connect(mapStateToProps,null)(Chat);