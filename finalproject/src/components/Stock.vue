<template>
    <div class="col-xs-6 col-md-offset-1 col-md-5">
        <div class="card">
            <h4 class="card-header">{{ stock }} <small>{{ displayValues }}</small></h4>
            <div class="card-block">
                <div class="form-group">
                    <input type="number" placeholder="Quantity" v-model.number="quantity">
                    <button class="btn btn-primary" @click="performTrade">{{ type }}</button>
                </div>
            </div>
        </div>
        <br><br>
    </div>
</template>

<script>
    import { mapGetters } from 'vuex';
    import { mapActions } from 'vuex';

    export default {
        props: ['type','stock','new'],
        data() {
            return {
                quantity: null
            }
        },
        computed: {
            ...mapGetters([
                'getStockPrices',
                'getPortfolio'
            ]),
            displayValues() {
                if (this.type == 'Buy') {
                    return "(Price: " + this.getStockPrices[this.stock] + " )"
                }
                else {
                    return "(Price: " + this.getStockPrices[this.stock] + " | Quantity: " + this.getPortfolio[this.stock]  + ")";
                }
            }
        },
        methods: {
            ...mapActions([
                'buyStock',
                'sellStock'
            ]),
            performTrade() {
                if (this.type == 'Buy') {
                    this.buyStock({bought: this.stock, quantity: this.quantity})
                } 
                else {
                    this.sellStock({sold: this.stock, quantity: this.quantity})
                }
            }
        }
        
    }
</script>
