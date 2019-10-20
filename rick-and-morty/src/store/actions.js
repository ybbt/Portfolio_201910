import * as CharacterService from '../services/CharacterService';

export const fetchCharacters = ({ commit }) => {
    return CharacterService.fetchCharacters().then((res) => {
        const characters = res.data.results;
        const pages = res.data.info.pages;
        const actualPage = 1;
        commit('setCharacters', characters);
        commit('setPages', pages);
        commit('setActualPage', actualPage);
        },) //перенесено з Characters.vue
};

export const fetchCharactersPage = ({ commit }, page) => {
    return CharacterService.fetchCharactersPage(page.number).then((res) => {
        const characters = res.data.results;
        const pages = res.data.info.pages;
        const actualPage = +res.data.info.prev.slice(48) + 1;
        // console.log(characters);
        commit('setCharacters', characters);
        commit('setPages', pages);
        commit('setActualPage', actualPage);
        commit('setPageData', {actualPage, characters});
        },) //перенесено з Characters.vue
};

export const fetchCharacterById = ({ commit }, id) => {
    return CharacterService.fetchCharacter(id).then((res) => {
        commit('setCharacter', res.data);
        },)
};

