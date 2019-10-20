<template>
    <div>
        <character-list :charact= "characters"/>
        <pagination :actualPage= "actualPage"/>
    </div>
</template>

<script>
    import CharacterList from '../components/CharacterList';
    import Pagination from '../components/Pagination';
    // import * as CharacterService from '../services/CharacterService'; //перенесли в actions
    export default {
        name: "characters",
        components: {
            CharacterList,
            Pagination,
        },
        data() {
            return {
                // characters: [], //в сторі
            }
        },
        created(){
            /* CharacterService.fetchCharacters().then((res) => {
                this.characters = res.data.results;
                },) */ //перенесено в actions
            const {number} = this.$route.params;
            // this.$store.dispatch('fetchCharacters');            
            this.$store.dispatch('fetchCharactersPage', {number});
        },
        beforeRouteUpdate(to, from, next){
            const {number} = to.params;
            // console.log(this.$store.state.pageDataArray, 'get_Map_from_Map');
            // console.log(this.$store.state.pageDataArray.get(+number), 'get_page_from_Map');
            if (this.$store.state.pageDataArray.get(+number)) {
                // console.log(this.$store.state.pageDataArray.get(number), 'get_from_Map');
                const pageData = this.$store.state.pageDataArray.get(+number);
                this.$store.commit('setCharacters', pageData);
                // this.$store.commit('setPages', pageData.pages);
                this.$store.commit('setActualPage', +number);
            } else {
                this.$store.dispatch('fetchCharactersPage', {number});
            }
            next();
        },
        computed: {
            characters(){
                // return this.$store.state.characters; //варіан напряму зі стори
                return this.$store.getters.characters; //варіант через геттерс
            },
            actualPage(){
                return this.$store.state.actualPage;
            }
        },
    }
</script>

<style lang="scss" scoped>

</style>