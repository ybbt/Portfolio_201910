export const setSearchId = (state, searchId) => {
    state.searchId = searchId;
};

export const setTmpTickets = (state, tmpTickets) => {
    state.tempTickets = tmpTickets;
};

export const setTickets = (state, tickets) => {
    state.tickets = state.tickets.concat(tickets);
};

export const setStop = (state, stop) => {
    state.stop = stop;
};