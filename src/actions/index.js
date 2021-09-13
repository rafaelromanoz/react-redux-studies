const loginAction = (email, password) => ({
  type: 'LOGIN_ACTION',
  payload: {
    email,
    password,
  },
});

export const reducerAction = (objectRegister) => ({
  type: 'ACTION_REGISTER',
  payload: {
    objectRegister,
  },
});

export const delectAction = (id) => ({
  type: 'ACTION_DELECT',
  id,
});

export const closeModal = () => ({
  type:'CLOSE_MODAL'
})

export const idForEdit = (id) => ({
  type: 'ACTION_EDIT',
  payload:{
    id,
  }
})

export const saveChangesEdit = (objForEdit, id) => ({
  type:'SAVE_EDIT',
  payload: {
    objForEdit,
    id,
  },
})

export default loginAction;
