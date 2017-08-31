<template>
    <div class="container">
        <my-header :numQuotes="quotes.length"
                   :maxQuotes="maxQuotes"></my-header>
        <my-new-quote @newQuote="addQuote"></my-new-quote>
        <my-quote-grid :quotes="quotes">
        </my-quote-grid>
        <div class="row">
            <div class="col-sm-12 text-center">
                <div class="alert alert-info">Info: click on a quote to delete it!</div>
            </div>
        </div> 
    </div>
</template>

<script>
    import NewQuote from './components/NewQuote.vue';
    import QuoteGrid from './components/QuoteGrid.vue';
    import Header from './components/Header.vue';

    export default {
        data: function() {
            return {
                quotes: [
                    'Just a quote'
                ],
                maxQuotes: 10
            }
        },
        methods: {
            addQuote(quote) {
                if (this.quotes.length >= this.maxQuotes) {
                    return alert('Please delete Quotes first')
                }
                this.quotes.push(quote);
            }
        },
        components: {
            'my-quote-grid': QuoteGrid,
            'my-new-quote': NewQuote,
            'my-header': Header
        }        
    }
</script>

<style>
</style>
