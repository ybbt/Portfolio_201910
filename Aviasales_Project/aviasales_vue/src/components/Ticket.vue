<template>
    <div :class="$style.ticket">
        <div :class="$style.header">
            <div :class="$style.price">{{price}} P</div>
            <img alt="sorry" :src="`//pics.avs.io/99/36/${tick.carrier}.png`" :class="$style.logo">
        </div>
        <div :class="$style.segment">
            <Segment :segm= tick.segments[0]></Segment>
        </div>
        <div :class="$style.segment">
            <Segment :segm= tick.segments[1]></Segment>
        </div>
    </div>
</template>

<script>
    import Segment from "./Segment";
    export default {
        name: 'ticket',
        components: {
            Segment,
        },
        props: {
            tick: {
                type: Object,
                default: function () {
                    return { segments: [
                            {}, {}
                        ]
                    }
                }
            },
        },
        computed: {
            price(){
                if (!this.tick) {
                    return;
                }
                return String(this.tick.price).replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ');
            },
        }
    }
</script>

<style lang="less" scoped module>
    .ticket{
        display: flex;
        flex-direction: column;
        /* margin: 20px; */
        background-color: white;
        box-sizing: border-box;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

        font-family: 'Open Sans', sans-serif;
        font-style: normal;
        font-weight: 600;

        text-transform: uppercase;

        // margin-top: 20px;
    }

    .header{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        margin: 20px 30px 20px 20px;
    }

    .price {
        font-size: 24px;
        line-height: 24px;
        color: #2196F3;
    }

    .segment{
        margin: 0 20px 20px 20px;
    }
</style>