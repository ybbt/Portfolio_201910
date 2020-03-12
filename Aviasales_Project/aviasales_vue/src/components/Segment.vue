<template>
    <div :class="$style.segment">
        <div :class="$style.segmentBlock">
            <div :class="$style.title">{{segm.origin}} - {{segm.destination}}</div>
            <div :class="$style.value">{{flightTime}}</div>
        </div>
        <div :class="$style.segmentBlock">
            <div :class="$style.title">В дорозі</div>
            <div :class="$style.value">{{Math.round(segm.duration/60, 0)}}ч {{Math.round(segm.duration%60, 0)}}м</div>
        </div>
        <div :class="$style.segmentBlock">
            <div :class="$style.title">{{transfers}} </div>
            <div :class="$style.value">
                <div
                    v-for="stop in segm.stops"
                    :key="stop">{{stop}}</div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Segment",
        props: {
            segm: Object,
            default: {},
        },
        computed: {
            transfers(){
                if (!this.segm.stops) {
                    return "0 пересадок";
                }
                return `${this.segm.stops.length} пересадки`;
            },
            flightTime(){
                const date = new Date(this.segm.date);
                const dateArrival = new Date(this.segm.date);
                dateArrival.setUTCMinutes(dateArrival.getMinutes() + this.segm.duration);

                return `${setTimeStr(date.getHours())}:${setTimeStr(date.getMinutes())} - ${setTimeStr(dateArrival.getHours())}:${setTimeStr(dateArrival.getMinutes())}`;
            }
        }
    }

    function setTimeStr(timeVal){
        return timeVal<10? `0${timeVal}`: `${timeVal}`;
    }
</script>

<style module>
    .segment{
        /* font-family: "Open Sans", sans-serif;
        text-transform: uppercase; */
        display: flex;
        justify-content: space-between;

    }

    .segmentBlock{
        text-align: start;
    }


    .title{

        font-size: 12px;
        line-height: 18px;

        letter-spacing: 0.5px;

        color: #A0B0B9;

    }

    .value{
        font-size: 14px;
        line-height: 21px;
        color: #4A4A4A;

        display: flex;
        flex-direction: row;
        justify-content: flex-start;
    }

    .value div:not(:last-child):after {
        content: ', ';
        margin-right: 5px;
    }
</style>