import React from 'react';
import styles from '../css/forgot.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserPlus } from '@fortawesome/free-solid-svg-icons';
import { faKey } from '@fortawesome/free-solid-svg-icons';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { Link, NavLink } from 'react-router-dom';


export default class Forgot extends React.Component{
    render(){
        return(
            <div className="row" style={{flex:1, alignItems:'center', justifyContent:'center', width:'100%'}}>
                <div className="containerLogin">
                    <div className="headerText">
                        <h3 style={{textAlign:'center'}}>
                            Forgot Password Page
                        </h3>
                    </div>
                    <div className="form-group form-inline">
                        <label>
                            Email:    
                        </label>
                        <input style={{marginLeft:10}} className="form-control" type="text" placeholder="input email" />
                    </div>
                    <div className="form-group">
                        <button style={{width:'100%'}} className="btn btn-primary">
                           <FontAwesomeIcon style={{marginRight:5}} icon={faKey} size="xs" />
                           Reset Password
                        </button>
                    </div>
                    <div className="form-group form-inline">
                        <Link to="/login" className="btn btn-danger" style={{width:'50%', marginRight:20}}>
                            <FontAwesomeIcon style={{marginRight:5}} icon={faChevronRight} size="xs" />
                            Login
                        </Link>
                        <Link to="/register" className="btn btn-warning" style={{width:'43%'}}>
                            <FontAwesomeIcon style={{marginRight:5}} icon={faUserPlus} size="xs" />
                            Register
                        </Link>
                    </div>
                </div>
            </div>
        )
    }
}