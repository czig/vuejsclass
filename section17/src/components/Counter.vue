<template>
    <div>
        <button class="btn btn-primary" @click="increment(100)">Increment</button>
        <button class="btn btn-primary" @click="decrement(99)">Decrement</button>
        <button class="btn btn-primary" @click="asyncIncrement({by: 50, duration: 2000})">Async Increment</button>
        <button class="btn btn-primary" @click="asyncDecrement({by: 50, duration: 2000})">Async Decrement</button>

    </div>
</template>

<script>
    import { mapMutations } from 'vuex';
    import { mapActions } from 'vuex';

    export default {
        methods: {
            ...mapActions([
                'increment',
                'decrement'
            ]),
            ...mapActions([
                'asyncIncrement',
                'asyncDecrement'
            ])
        }
    }
</script>
