<template>
    <div>
        <appStock :type="'Sell'" v-for="(quantity,stock) in getPortfolio" :stock="stock" v-if="quantity != 0" :key="stock"></appStock>
    </div>
</template>

<script>
    import Stock from './Stock.vue';
    import {mapGetters} from 'vuex';

    export default {
        computed: {
            ...mapGetters([
                'getPortfolio'
            ])
        },
        components: {
            'appStock': Stock
        }
    }    
</script>
