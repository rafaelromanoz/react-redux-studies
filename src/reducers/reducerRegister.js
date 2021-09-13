const INITIAL_STATE = {
  register: [],
  editSwitch: false,
  idForEdit: 0,
};

const registerReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'ACTION_REGISTER':
      return {
        ...state,
        register: [...state.register, action.payload.objectRegister],
      };
    case 'ACTION_DELECT':
      return {
        ...state,
        register: [...state.register.filter(({ id }) => id !== action.id)],
      };
    case 'ACTION_EDIT':
      return {
        ...state,
        idForEdit: action.payload.id,
        editSwitch: true,
      };
    case 'SAVE_EDIT':
      return {
        ...state,
        register: [
          ...state.register.map((element) => {
            if (element.id === action.payload.id) {
              return {
                ...element,
                ...action.payload.objForEdit,
              };
            } else {
              return element;
            }
          }),
        ],
      };

    case 'CLOSE_MODAL':
      return {
        ...state,
        editSwitch: false,
      };
    default:
      return state;
  }
};

export default registerReducer;
