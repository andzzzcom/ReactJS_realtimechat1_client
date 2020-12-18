import React, { useState, useEffect } from 'react';
import styles from '../css/register.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserPlus } from '@fortawesome/free-solid-svg-icons';
import { faKey } from '@fortawesome/free-solid-svg-icons';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { Link, NavLink } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux'

import * as AuthActions from '../store/actions/Auth';

import firebase from 'firebase';

const Register = () =>{
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const saveUsername = e =>{
        setUsername(e.target.value)
    }

    const savePassword = e =>{
        setPassword(e.target.value)
    }

    const dispatch = useDispatch();
    const registerSubmit = () =>{
        dispatch(
            AuthActions.loadingregister()
        )

        dispatch(
            AuthActions.register(username, password),
        )
    }

    const state = useSelector((state) => state.auth);
    return(
        <div className="row" style={{flex:1, alignItems:'center', justifyContent:'center', width:'100%'}}>
            <div className="containerLogin">
                <div className="headerText">
                    <h3 style={{textAlign:'center'}}>
                        Register Page
                    </h3>

                    {state.loadingRegister
                    ?
                    <h6 style={{fontWeight:'bold', textAlign:'center', color:'blue'}}>
                        LOADING
                    </h6>
                    :
                    null
                    }

                    <h6 style={{fontWeight:'bold', textAlign:'center', color:'red'}}>
                        {state.errorRegister}
                    </h6>

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
                        onClick={registerSubmit} 
                        style={{width:'100%', marginTop:20}} 
                        className="btn btn-danger"
                    >
                        <FontAwesomeIcon style={{marginRight:5}} icon={faUserPlus} size="xs" />
                        Register
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Register;