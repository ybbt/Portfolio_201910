<template>
    <div class="character-list">
        <character-list-item
            v-for="character in charact"
            :key="character.id"
            :character = "character"/>
    </div>
</template>

<script>
    import characterListItem from "../components/CharacterListItem";
    export default {
        name: 'character-list',
        components: {
            characterListItem,
        },
        props: {
            charact: {
                type: Array,
            },
        },
    }
</script>
