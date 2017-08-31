<template>
    <div class="component">
        <h3>You may view the User Details here</h3>
        <p>Many Details</p>
        <p>User Name: {{ name }}</p>
        <p>User Age: {{ userAge }}</p>
        <button @click="resetFn">Reset name</button>
    </div>
</template>

<script>
    import { eventBus } from '../main';

    export default {
        props: {
            'name': String,
            'resetFn': Function,
            'userAge': Number
        },
        methods: {
            resetName() {
                this.name = "caleb";
                this.$emit('nameWasReset',this.name);
            }
        },
        created() {
            eventBus.$on('ageWasEdited', (age) => {
                this.userAge = age;   
            });    
        }
    }
</script>

<style scoped>
    div {
        background-color: lightcoral;
    }
</style>
