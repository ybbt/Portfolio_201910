import http from '../api';
import {TICKETS} from '../api/routes';

export const fetchSearchId = () => {
    return http.get(TICKETS.SEARCHID);
};

export const fetchCharactersPage = (searchId) => {
    return http.get(TICKETS.TICKETS(searchId));
};

