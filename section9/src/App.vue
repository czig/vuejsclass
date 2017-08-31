<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12">
                <button @click="selectedComponent = 'appQuote'">Quote</button>
                <button @click="selectedComponent = 'appAuthor'">Author</button>
                <button @click="selectedComponent = 'appNew'">New</button>
                <hr>
                <p>{{ selectedComponent }}</p>
                <component :is="selectedComponent">
                    <p>Default content</p>
                </component>
                <!--<my-quote>-->
                    <!--<h2 slot="title"> {{ quoteTitle }} </h2>-->
                    <!--<p slot="content"> A quote </p> -->
                <!--</my-quote>-->
            </div>
        </div>
    </div>
</template>

<script>
    import Quote from './components/Quote.vue';
    import Author from './components/Author.vue';
    import New from './components/New.vue';

    export default {
        data: function() {
            return {
                quoteTitle: 'New title',
                selectedComponent: 'appQuote' 
            };
        },
        components: {
            'appQuote': Quote,
            'appAuthor': Author,
            'appNew': New
        }
    }
</script>

<style></style>
