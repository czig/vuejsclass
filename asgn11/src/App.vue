<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1> Filters and Mixins </h1>
                <!--Exercise 1-->
                <!--Build a local filter which reverses text-->
                <p> {{ text | reverseText }}</p>

                <!--Exercise 2-->
                <!--Build global filter which counts the lenght of a word and appends it to end of word-->
                <hr>
                <label>Enter a word</label>
                <input v-model="word">
                <p> {{ word | countLength }}</p>

                <!--Exercise 3-->
                <!--Do the same as in Exercise 1 and 2, but w/ computed properties-->
                <hr>
                <p> {{ textComputed }}</p>
                <p> {{ reverseTextCompute }}</p>
                <label> Enter a word</label>
                <input v-model="wordComputed">
                <p> {{ countLengthCompute }}</p>

                <!--Exercise 4 -->
                <!--Share the computed Property rebuilding Exercise 2 via a Mixin-->
            </div>
        </div>
    </div>
</template>

<script>
    import { countText } from './countText';

    export default {
        data() {
            return {
                text: "the real slim shady",
                textComputed: "airpower",
                word: ""
            }
        },
        filters: {
            reverseText(value) {
                return value.split("").reverse().join("");
            }
        },
        computed: {
            reverseTextCompute() {
                return this.textComputed.split("").reverse().join("");
            }
        },
        mixins: [countText]
    }
</script>

<style>
</style>
