import React, { useEffect } from 'react'
import {useDispatch} from 'react-redux'
import * as AuthActions from '../store/actions/Auth'

const Logout = () => {

    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(
            AuthActions.logout()
        )
    }, [])

    return(
        <></>
    );
}

export default Logout;