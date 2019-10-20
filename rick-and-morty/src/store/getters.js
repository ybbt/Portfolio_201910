export const characters = (state) => {
    return state.characters;
};

export const charactersById = (state) => (id) => {
    return state.characters.find(characterObj => +characterObj.id === +id);
};