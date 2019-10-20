<template>
    <div>
        <div class="character-item">
        
            <ul v-if="characterInfo"> 
                <li>
                    <img :src=characterInfo.image alt="">
                </li>
                <li>
                    <!-- {{character.name}} -->
                    Name: {{characterInfo.name}}
                </li>
                <li>
                    <!-- {{character.species}} -->
                    Species: {{characterInfo.species}}
                </li>
                <li>
                    <!-- {{character.status}} -->
                    Status: {{characterInfo.status}}
                </li>
                <li>
                    <!-- {{character.gender}} -->
                    Gender: {{characterInfo.gender}}
                </li>
                <li>
                    <!-- {{character.location.name}} -->
                    Location: {{characterInfo.location.name}}
                </li>
                <li>
                    <!-- {{character.origin.name}} -->
                    Origin: {{characterInfo.origin.name}}
                </li>
            </ul>
        </div>
        <router-link :to="{name: 'Characters'}">Return to Characters list</router-link>
        <!-- <router-link :to="$router.go(-1)">Back</router-link> -->
        <br>
        <span class="cursor-pointer back-button" @click="$router.go(-1)" >Back</span>
        <!-- <a @click="$router.go(-1)">back</a> -->
        
    </div>
</template>

<script>
// import * as CharacterService from '../services/CharacterService';
    export default {
        name: 'CharacterDetailItem',
        data(){
            return {
                /* character: {}, */ // данні будуть отримані зі стори без запиту до сервера
            }
        },
        created(){
            /* // const id = this.$route.params.id;
            const {id} = this.$route.params;
            CharacterService.fetchCharacter(id).then(res => {
                this.character = res.data;
                console.log(this.character.location.name, 'loc.name');
            }); */ // без запиту до серверу з передачею через стору

            if (this.$store.state.characters.length == 0) {
                const {id} = this.$route.params;
                this.$store.dispatch('fetchCharacterById', id);
            }
        },
        computed: {
            characterInfo(){
                const {id} = this.$route.params;
                return this.$store.getters.charactersById(id);
            },
        }
    }
</script>

