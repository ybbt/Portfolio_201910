import { put, takeEvery, all, select } from 'redux-saga/effects';
import { SET_SEARCH_ID, SAVE_SEARCH_ID, SAVE_TMP_TICKETS, SAVE_STOP,}  from "./actionsTypes";
import * as TicketService from '../services/ticketService';



export function* getSearchId(action) {
    // const result = yield ApiService(action.payload.content.films/* responseString */);
    // const resultGenre = yield ApiService(action.payload.content.genres);
    // yield put({ type: FILMS_RESEIVED, result: { result, resultGenre }/* .results */ });

    const result = yield TicketService.fetchSearchId()/* .then((res) => {
        console.log(res);
        // commit('setSearchId', res.data.searchId);
        // console.log(state.stop, "stop");        
    },) */;

    yield put({ type: SAVE_SEARCH_ID, result: result/* { result, resultGenre } *//* .results */ });

    //const state = yield select(); // --можливо вже тут не потрібен

    // const tempTickets = yield TicketService.fetchTickets(state.tickets.searchId);

    // yield put({ type: SAVE_TMP_TICKETS, result: tempTickets});

    // yield put({ type: SAVE_STOP, /*result:  {data:{stop: true}} */result: tempTickets});

    yield getNextTicket(/* state */);
    
    
}

function* getNextTicket () {
    // yield put({ type: SAVE_ERROR_FALSE});
    const state = yield select();
    // console.log(state.tickets.stop, "generator - stop")
    if(state.tickets.stop === false){       
        // console.log("stop_true");
        const tempTickets = yield TicketService.fetchTickets(state.tickets.searchId).catch(error => console.log(error)/* , yield put({ type: SAVE_ERROR_TRUE}) */);
        console.log(tempTickets, "tmp_tickets");
        yield put({ type: SAVE_TMP_TICKETS, result: tempTickets});

        yield put({ type: SAVE_STOP, /* result: {data:{stop: true}} */result: tempTickets});

        yield getNextTicket();
    }
};

/**
 *  Функція перехвату екшену
 */
export function* watchGetSearchId() {
    yield takeEvery(SET_SEARCH_ID, getSearchId);
}

// export function* getFilmAsync(action) {
//     const result = yield ApiService(action.payload.content/* responseString */);
//     yield put({ type: FILM_RESEIVED, result: result/* .results */ });
// }

// export function* watchgetFilmAsync() {
//     yield takeEvery(GET_FILM, getFilmAsync);
// }

/**
 * -- единая точка входа для запуска всех Саг одновременно 
 * */ 
export default function* rootSaga() {
    yield all([
        watchGetSearchId(),
        // watchgetFilmAsync(),
    ])
}