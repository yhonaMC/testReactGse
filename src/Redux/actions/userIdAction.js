import { ID_USERS } from "../types/idUser";

const setDataUserId = (payload) => {
  return {
    type: ID_USERS.USERID,
    payload,
  };
};

export { setDataUserId };
