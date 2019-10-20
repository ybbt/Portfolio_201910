import http from '../api';
import {RICKANDMORTY} from '../api/routes';

export const fetchCharacters = () => {
    return http.get(RICKANDMORTY.CHARACTERS);
};

export const fetchCharactersPage = (page) => {
    return http.get(RICKANDMORTY.CHARACTERS_PAGE(page));
};

export const fetchCharacter = (id) => {
    return http.get(RICKANDMORTY.CHARACTER(id));
};