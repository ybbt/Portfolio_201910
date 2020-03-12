import {  SAVE_SEARCH_ID, SAVE_TMP_TICKETS, SAVE_STOP,  } from "../actionsTypes";

const initialState = {
    searchId: '',
    tickets: [],
    error: false,
    stop: false,
};

export default function (state = initialState, action) {
    switch (action.type) {
        /**
         * ?Проверить, точно ли не нужна для візова саги
         */
        // case SET_SEARCH_ID: {
        //     // const { content } = action.payload;
        //     return {
        //         ...state,
        //     };
        // }

        case SAVE_SEARCH_ID: {
            // console.log(action.result.data.searchId, "ticketReducer save_id");
            return {
                ...state,
                searchId: action.result.data.searchId,
            };
        }
        
        case SAVE_TMP_TICKETS: {
            // console.log(state/* .tickets.tickets */, "state_tic in save_tmp");
            if (!action.result) {
                return state;
            }
            return {
                ...state,
                // tickets: action.result.data.tickets,

                tickets : action.result.data.tickets.reduce( function(coll,item){
                    // console.log(coll);
                    !coll?coll=[item]:coll.push( item );
                    return coll;
                }, state.tickets ),
            };
        }

        case SAVE_STOP: {
            // console.log(action.result/* .data.stop */, "save_stop")
            if (!action.result) {
                return state;
            }
            return {
                ...state,
                stop: action.result.data.stop,
            };
        }



        default:
            return state;
    }
}