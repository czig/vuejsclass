<template>
    <div class="row">
        <my-quote v-for="(quote,index) in quotes"
                  @click.native="removeQuote(index)">
            {{ quote }}
        </my-quote>
    </div>
</template>

<script>
    import Quote from './Quote.vue';

    export default {
        props: ['quotes'],
        components: {
            'my-quote': Quote
        },
        methods: {
            removeQuote(index) {
                this.quotes.splice(index,1);
            }
        }
    }
</script>

<style>

</style>
