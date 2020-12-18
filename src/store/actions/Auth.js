import firebase from 'firebase';

export const login = (username, password)=>{

    return async (dispatch) => {
        firebase
        .auth()
        .signInWithEmailAndPassword(username, password)
        .then(res => {
            dispatch({
                type:'login',
                email:username,
                isLoggedIn:true,
                isRegister:false,
                errorLogin:'',
                errorRegister:'',
            })
        })
        .catch(e => {
            dispatch({
                type:'login',
                email:username,
                isLoggedIn:false,
                isRegister:false,
                errorLogin:'Gagal Login!',
                errorRegister:'',
            })
        });
    }
}

export const register = (username, password)=>{

    return async (dispatch) => {
        
        firebase
        .auth()
        .createUserWithEmailAndPassword(username, password)
        .then(res => {
            dispatch({
                type:'register',
                email:username,
                isLoggedIn:false,
                isRegister:true,
                errorLogin:'',
                errorRegister:'Sukses Register! Silahkan Login!',
            })
        })
        .catch(e => {
            dispatch({
                type:'register',
                email:username,
                isLoggedIn:false,
                isRegister:false,
                errorLogin:'',
                errorRegister:'Gagal Register!',
            })
        });
    }
}

export const logout = () =>{
    return {
        type:'logout',
        email:'',
        isLoggedIn:false,
        errorLogin:'',
        errorRegister:'',
    }
}

export const loadinglogin = () =>{
    return {
        type:'loadinglogin',
        email:'',
        isLoggedIn:false,
        isRegister:false,
        errorLogin:'',
        errorRegister:'',
    }
}

export const loadingregister = () =>{
    return {
        type:'loadingregister',
        email:'',
        isLoggedIn:false,
        isRegister:false,
        errorLogin:'',
        errorRegister:'',
    }
}