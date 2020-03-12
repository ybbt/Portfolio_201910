<template>
    <div>
        <div :class="$style.ticket"
            v-for="(ticket, index) in tickets"
            :key="index">
            <Ticket
                :tick = "ticket"/>
        </div>
    </div>
</template>

<script>
    import Ticket from  './Ticket'
    export default {
        components: {
            Ticket,
        },
        computed: {
            tickets(){
                return this.$store.state.tickets.slice(0, 5); //варіан напряму зі стори
                // return this.$store.getters.tickets; //варіант через геттерс
            },
            
        },
    }
</script>

<style lang="less" scoped module>
    .ticket {
        margin-top: 20px;
    }
</style>