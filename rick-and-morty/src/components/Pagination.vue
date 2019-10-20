<template>
    <div>
        <!-- <span class="cursor-pointer" 
            v-for="(item, index) in getPagination" 
            :key=index @click="toPage(item.page)">
            {{item.text}}
        </span> -->
        <!-- <span
            v-for="(item, index) in getPagination" 
            :key=index
        >
            <router-link :to="{path: '/characters/page/' + item.page}" active-class = "active-page">{{item.text}}</router-link>
        </span> -->
        <!-- <router-link v-for="(item, index) in getPagination" 
            :key=index 
            :to="{path: `/characters/page/${item.page}`}" 
            active-class = "active-page"
        >
            {{item.text}}
        </router-link> -->
        <router-link v-for="(item, index) in getPagination" 
            :key=index 
            :to="{name: 'CharactersPage', params: {number: item.page}}" 
            active-class = "active-page"
        >
            {{item.text}}
        </router-link>
    </div>
</template>

<script>
    export default {
        name: 'pagination',
        props: {
            actualPage: {
                type: Number,
            }
        },
        methods: {
            setPagination(pages, activePage, _visiblePages, firstEndVisiblePage) {

                const allArrPages = [];

                const visiblePages = _visiblePages % 2 ? _visiblePages : _visiblePages + 1;

                const halfVisiblePages = Math.floor(visiblePages / 2);

                let tempArrFirstPages = [];
                let tempArrLastPages = [];
                let tempArrVisiblePages = [];

                let resultArrPages = [];

                //  < visiblePages ... firstEndVisiblePage >

                //  < 1 -2- 3 ... 24 25 > 


                //  < firstEndVisiblePage ... visiblePages ... firstEndVisiblePage >

                //  < 1 2 ... 10 -11- 12 ... 24 25 >


                //  < firstEndVisiblePage ... visiblePages >

                //  < 1 2 ... 23 -24- 25 >

                for (let i = 0; i < pages; i++) {
                allArrPages.push({ text: i + 1, page: i + 1 });
                }

                if (pages < 8) {
                return allArrPages;
                }

                if (activePage > firstEndVisiblePage + halfVisiblePages + 1 && activePage <= (pages - (firstEndVisiblePage + halfVisiblePages + 1))) {
                for (let i = 0; i < firstEndVisiblePage; i++) {
                    tempArrFirstPages.push(allArrPages[i]);

                    tempArrLastPages.push(allArrPages[(pages - 1) - (firstEndVisiblePage - 1) + i]);
                }
                for (let i = 0; i < visiblePages; i++) {
                    tempArrVisiblePages.push(allArrPages[((activePage - 1) - halfVisiblePages) + i]);
                }
                tempArrVisiblePages.unshift({
                    text: '...',
                    page: (activePage - visiblePages) < 1 ? 1 : (activePage - visiblePages),
                });
                tempArrVisiblePages.push({
                    text: '...',
                    page: ((activePage + visiblePages) > pages) ? tempArrVisiblePages[visiblePages - 1].page : (activePage + visiblePages),
                });
                } else if (activePage <= firstEndVisiblePage + halfVisiblePages + 1) {
                for (let i = 0; i < firstEndVisiblePage; i++) {
                    tempArrLastPages.push(allArrPages[(pages - 1) - (firstEndVisiblePage - 1) + i]);
                }
                for (let i = 0; i < activePage + halfVisiblePages; i++) {
                    tempArrVisiblePages.push(allArrPages[i]);
                }
                tempArrVisiblePages.push({
                    text: '...',
                    page: ((activePage + visiblePages) > pages) ? tempArrVisiblePages[visiblePages - 1].page : (activePage + visiblePages),
                });
                } else if (activePage > (pages - (firstEndVisiblePage + halfVisiblePages + 1))) {
                for (let i = 0; i < firstEndVisiblePage; i++) {
                    tempArrFirstPages.push(allArrPages[i]);
                }
                for (let i = 0; i < (pages - activePage) + halfVisiblePages + 1; i++) {
                    tempArrVisiblePages.push(allArrPages[(activePage - halfVisiblePages - 1) + i]);
                }
                tempArrVisiblePages.unshift({
                    text: '...',
                    page: (activePage - visiblePages) < 1 ? 1 : (activePage - visiblePages),
                });
                }

                resultArrPages = (new Array({ text: '<', page: ((activePage - 1 > 0) ? activePage - 1 : 1) })).concat(tempArrFirstPages, tempArrVisiblePages, tempArrLastPages, (new Array({ text: '>', page: ((activePage + 1 <= pages) ? activePage + 1 : pages) })));

                return resultArrPages;
            },
            toPage(page){
                // this.$router.push({name: 'CharactersPage', params: {page}});
                this.$router.push({ path: `/characters/page/${page}` });
            },
        },
        computed: {
            getPagination() {
                return this.setPagination(this.$store.state.pages, this.actualPage, 3, 3); 
            }
        },
    }
</script>

<style lang="scss" scoped>

</style>