const INITIAL_STATE = {
  email:'',
  password: '',
  isLogged: false,
}

const loginReducer = (state = INITIAL_STATE, action) => {
  switch(action.type){
    case 'LOGIN_ACTION':
      return {
        ...state,
        email: action.payload.email,
        password: action.payload.password,
        isLogged: true,
      }
      default:
        return state;
  }
}

export default loginReducer;