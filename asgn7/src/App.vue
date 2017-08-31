<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12">
                <br>
                <button @click="chosenColor = 'appBlue'" class="btn btn-primary">Load Blue Template</button>
                <button @click="chosenColor = 'appGreen'" class="btn btn-success">Load Green Template</button>
                <button @click="chosenColor = 'appRed'"class="btn btn-danger">Load Red Template</button>
                <hr>
                <component :is="chosenColor">
                    <h1 slot="header">Title</h1>
                    <p slot="content"> this is green </p>
                    <p> default text </p>
                </component>
                <!--<app-blue>-->
                <!--</app-blue>-->
                <!--<app-green>-->
                <!--</app-green>-->
                <!--<app-red>-->
                    <!--<p> this is red </p>-->
                <!--</app-red>-->
            </div>
        </div>
    </div>
</template>

<script>
    import Blue from './components/Blue.vue';
    import Green from './components/Green.vue';
    import Red from './components/Red.vue';

    export default {
        data: function() {
            return {
                chosenColor: 'appBlue'
            }
        },
        components: {
            appBlue: Blue,
            appGreen: Green,
            appRed: Red
        }
    }
</script>

<style>
</style>
