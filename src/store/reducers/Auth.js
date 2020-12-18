const initialState = {
    email:'',
    isLoggedIn:false,
    errorLogin:'',
    errorRegister:'',
    loadingLogin:false,
    loadingRegister:false,
    isRegister:false
}

export default (state=initialState, action) => {
    switch(action.type){
        case "loadinglogin":
            return{
                email:action.email,
                isLoggedIn:action.isLoggedIn,
                isRegister:action.isRegister,
                errorLogin:action.errorLogin,
                errorRegister:action.errorRegister,
                loadingLogin:true,
                loadingRegister:false
            }
        case "loadingregister":
            return{
                email:action.email,
                isLoggedIn:action.isLoggedIn,
                isRegister:action.isRegister,
                errorLogin:action.errorLogin,
                errorRegister:action.errorRegister,
                loadingLogin:false,
                loadingRegister:true
            }
        case "login":
            return{
                email:action.email,
                isLoggedIn:action.isLoggedIn,
                isRegister:action.isRegister,
                errorLogin:action.errorLogin,
                errorRegister:action.errorRegister,
                loadingLogin:false,
                loadingRegister:false
            }
        case "register":
            return{
                email:action.email,
                isLoggedIn:action.isLoggedIn,
                isRegister:action.isRegister,
                errorLogin:action.errorLogin,
                errorRegister:action.errorRegister,
                loadingLogin:false,
                loadingRegister:false
            }
        case "logout":
            return{
                email:action.email,
                isLoggedIn:action.isLoggedIn,
                isRegister:action.isRegister,
                errorLogin:action.errorLogin,
                errorRegister:action.errorRegister,
                loadingLogin:false,
                loadingRegister:false
            }
    }
    return state;
}