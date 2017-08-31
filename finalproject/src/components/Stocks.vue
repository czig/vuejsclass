<template>
    <div>
        <appStock :type="'Buy'" v-for="(price,stock) in getStockPrices" :stock="stock" :key="stock"></appStock>
    </div>
</template>

<script>
    import Stock from './Stock.vue';
    import {mapGetters} from 'vuex';

    export default {
        computed: {
            ...mapGetters([
                'getStockPrices'
            ])
        },
        components: {
            'appStock': Stock
        }
    }    
</script>
