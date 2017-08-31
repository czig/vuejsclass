<template>
    <div class="container">
        <my-header></my-header>
        <hr>
        <div class="row">
            <my-servers></my-servers>
            <my-servers-details></my-servers-details>
        </div>
        <hr>
        <my-footer></my-footer>
    </div>
</template>

<script>
    import Header from './Header.vue';
    import Servers from './Servers.vue';
    import Footer from './Footer.vue';
    import ServerDetails from './ServerDetails.vue';

    export default {
        components: {
            'my-header': Header,
            'my-servers': Servers,
            'my-footer': Footer,
            'my-servers-details': ServerDetails
        }
    }
</script>

<style>

</style>
