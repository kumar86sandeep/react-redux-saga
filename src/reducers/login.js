const loginReducer = (state={}, action)=>{
    switch(action.type){
        case 'LOGIN_REQUEST':
            return { ...state, authorizing: true }
        case 'LOGIN_REQUEST_SUCCESS':
            return { ...state, authorizing: false, error:false, data: action.json[0] }
        case 'LOGIN_REQUEST_FAILED':
            return { ...state, authorizing: false, error:true, data: {} }
        default:
            return { state, authorizing: false }
    }
};

export default loginReducer;