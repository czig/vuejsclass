<template>
    <div class="row">
        <div class="col-xs-12 col-sm-offset-1 col-sm-10 col-md-offset-2 col-md-8">
            <h1>Welcome to the Stock Trader!</h1>
            <hr> 
            <br>
            <p> Click on the links above to navigate to your portoflio and buy stocks. Save your session to bookmark your state.</p>
            <br><br>
            <p><b>Your funds: {{ funds }}</b></p>
            <br><br>
        </div>
    </div>
</template>

<script>
    import { mapGetters } from 'vuex'

    export default {
        computed: {
            ...mapGetters([
                'funds',
                'getStockPrices',
                'getPortfolio'   
            ])
        }
    }
</script>
