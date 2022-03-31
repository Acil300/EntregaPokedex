const INITIAL_STATE = {
  //si el string esta vacio no se puede acceder a las rutas protegidas
  //si el string tiene algo ahi si puede acceder a las rutas protegidas
  userName: "",
};

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "GET_USERNAME":
      return{
        ...state,
        userName: action.payload
      }
    default:
      return state;
  }
};

export default reducer;
