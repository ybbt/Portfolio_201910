import * as TicketService from '../services/ticketService';

export const fetchSearchId = ({ commit, state }) => {
    return TicketService.fetchSearchId().then((res) => {
        console.log(res.data.searchId);
        commit('setSearchId', res.data.searchId);
        console.log(state.stop, "stop");
        /* // while (state.stop == false) {
            TicketService.fetchCharactersPage(res.data.searchId).then((res) => {
            //     console.log(res.data);
                commit('setTmpTickets', res.data);
                commit('setStop', res.data.stop);
                commit('setTickets', res.data.tickets);
            //     console.log(res.data.tickets);
            },) 
        // } */
        
        const genTicket = getNextTicket(commit, state, res);
        /* const resGenTicket =  */genTicket.next();
        genTicket.next();
        genTicket.next();

        //1----------------------------------------------------------
        // let promice = Promise.resolve();

        // // while (state.stop == false){
        // for (let index = 0; index < 30; index++) {
            
        //     promice = promice.then(getTicket(commit, res.data.searchId, state, index)).catch((e)=>{console.log(e, index, "index reject")});
        // }
        //1------------------------------------------------------------
        
    },) 
};

/* function* getNextTicket(commit){
    TicketService.fetchCharactersPage(res.data.searchId).then((res) => {
        //     console.log(res.data);
        commit('setTmpTickets', res.data);
        commit('setStop', res.data.stop);
        commit('setTickets', res.data.tickets);
        //     console.log(res.data.tickets); 
    },)
}; */

function* getNextTicket(commit, state, res) {
    console.log(res, "початок генератору");
    if (state.stop === false) {
        yield TicketService.fetchCharactersPage(res.data.searchId).then((result) => {
            console.log("я в генераторі");
            //     console.log(res.data);
                commit('setTmpTickets', result.data);
                commit('setStop', result.data.stop);
                commit('setTickets', result.data.tickets);
            //     console.log(res.data.tickets);
        },);
        console.log(state.stop, "generator");
        const genTicket = getNextTicket(commit, state, res);
        yield genTicket.next();
        yield genTicket.next();
    }
}

// export const fetchTickets = ({ commit }, searchId) => {
//     return TicketService.fetchCharactersPage(searchId).then((res) => {
//         console.log(res.data);
//         commit('setTickets', res.data.tickets);
//     },) 
// };

//1---------------------------------
// let getTicket = (commit, searchId, state, index) => {
//     if (state.stop == true) {
//         console.log("error!!!!!!!!!!!!!!!!!!!"); 
//         throw 'stop';
//     }
// 	return () => {
// 		return TicketService.fetchCharactersPage(searchId).then((res) => {
//             console.log(index, "start index");
//             console.log(res.data);
//             commit('setTmpTickets', res.data);
//             commit('setStop', res.data.stop);
//             commit('setTickets', res.data.tickets);
//             console.log(res.data.tickets);
//             console.log(state.stop, "stop");
//             console.log(index, "index");
//         },);
//     }
// }
//1------------------------------------

// let y = "lo";

// let p = Promise.resolve();

// let a = [1,2,3,4,5,6,7];

// for (let i of a) {
// 	p = p.then(getTicket(i));
// }
