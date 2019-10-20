<template>
    <div class="character-item">
        
            <ul>
                <li>
                    <img :src=character.image alt="" class="cursor-pointer"
                    @click="showDetails(character.id)">
                </li>
                <li>
                    {{character.name}}
                </li>
            </ul>
        
    </div>
</template>

<script>
    export default {
        name: 'character-list-item',
        props: {
            character: {
                type: Object,
            }
        },
        methods: {
            showDetails(id){
                this.$router.push({name: 'CharacterDetailItem', params: {id}});
            }
        },
    }
</script>

