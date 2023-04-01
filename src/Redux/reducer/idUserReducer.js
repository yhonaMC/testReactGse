import { ID_USERS } from "../types/idUser";

export const idUserReducer = (state = {}, action) => {
  switch (action.type) {
    case ID_USERS.USERID:
      return {
        ...state,
        idUsers: action.payload,
      };

    default:
      return state;
  }
};
