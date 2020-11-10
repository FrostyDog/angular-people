const initialState = {
  angularMembers: []
};


export const membersReducer = function (state = initialState, action) {
  switch (action.type) {
    case "addPeople":
      return Object.assign({}, state, {
        angularMembers: [...state.angularMembers, ...action.payload],
      });
    default:
      return state;
  }
};
