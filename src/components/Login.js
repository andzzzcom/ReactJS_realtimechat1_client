import React, {useState, useEffect} from 'react';
import styles from '../css/login.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserPlus } from '@fortawesome/free-solid-svg-icons';
import { faKey } from '@fortawesome/free-solid-svg-icons';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { Link, NavLink, Redirect } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux'
import * as AuthActions from '../store/actions/Auth'

import firebase from 'firebase';

const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const saveUsername = e =>{
        setUsername(e.target.value)
    }

    const savePassword = e =>{
        setPassword(e.target.value)
    }
    
    const dispatch = useDispatch();
    const loginSubmit = () =>{
        dispatch(
            AuthActions.loadinglogin()
        )

        dispatch(
            AuthActions.login(username, password),
        )
    }

    
    const state = useSelector((state) => state.auth);
    console.log(state.errorLogin)
    return(  
        <div className="row" style={{flex:1, alignItems:'center', justifyContent:'center', width:'100%'}}>
            <div className="containerLogin">
                <div className="headerText">
                    <h3 style={{textAlign:'center'}}>
                        Login Page
                    </h3>
                    
                    {state.loadingLogin
                    ?
                    <h6 style={{fontWeight:'bold', textAlign:'center', color:'blue'}}>
                        LOADING
                    </h6>
                    :
                    null
                    }

                    {state.errorLogin!==''
                    ?
                    <h6 style={{fontWeight:'bold', textAlign:'center', color:'red'}}>
                        {state.errorLogin}
                    </h6>
                    :
                    null
                    }
                    
                </div>
                <div className="form-group form-inline">
                    <label>
                        Username:    
                    </label>
                    <input onChange={saveUsername} style={{marginLeft:10}} className="form-control" type="text" placeholder="input username" />
                </div>
                <div className="form-group form-inline">
                    <label>
                        Password:    
                    </label>
                    <input onChange={savePassword} style={{marginLeft:10}} className="form-control" type="password" placeholder="input password" />
                </div>
                <div className="form-group">
                    <button 
                        onClick={loginSubmit} 
                        style={{width:'100%', marginTop:20}} 
                        className="btn btn-primary"
                    >
                        <FontAwesomeIcon style={{marginRight:5}} icon={faChevronRight} size="xs" />
                        Login
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Login;