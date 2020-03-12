<template>
  <div class="home">
    <header :class="$style.header">
      <img alt="Vue logo" src="../assets/Logo.svg">
    </header>
    <div :class="$style.main">
      <TicketList ></TicketList>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
// import Segment from '@/components/Segment.vue'
// import Ticket from '../components/Ticket';
import TicketList from '../components/TicketList';

export default {
  name: 'Home',
  components: {
    // Segment,
    // Ticket,
    TicketList,
  },
  created(){
            // const {number} = this.$route.params;
            // this.$store.dispatch('fetchCharacters');            
            this.$store.dispatch('fetchSearchId');
            // console.log(this.$store.state.searchId, "searchId  in Home")
            // this.$store.dispatch('fetchTickets', this.$store.state.searchId); //добавить из сторі
  },
  computed: {
    // tickets(){
    //     return this.$store.state.tickets[0]; //варіан напряму зі стори
    //     // return this.$store.getters.tickets; //варіант через геттерс
    // },
    
  },
}
</script>

<style lang="less" scoped module>
  // .home{
  //   display: flex;
  //   justify-content: center;
  // }
  .header {
    /* background-color: #282c34; */
    /* min-height: 100vh; */
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: calc(10px + 2vmin);
    color: white;
  }

  .main {
    width: 502px;
  }
</style>