<template>
    <div class="container-fluid">
        <div class="row">
            <!--full screen for phone and tablets (could set tablet separate with sm), and almost full screen for desktops-->
            <br>
            <div class="col-md-offset-1 col-xs-12 col-md-10">
                <appHeader></appHeader>
                <router-view></router-view>
            </div>
        </div>    
    </div>
</template>

<script>
    import Header from './components/Header.vue';

    export default {
        components: {
            'appHeader': Header
        }
    }
</script>

<style>

</style>
