import { SET_SEARCH_ID, /* SET_TMP_TICKETS, SET_TICKETS, SET_STOP */ } from "./actionsTypes";

export const setSearchId = content => {
    return {
        type: SET_SEARCH_ID,
        payload: {
            // id: ++nextTodoId,
            content
        }
    };
};