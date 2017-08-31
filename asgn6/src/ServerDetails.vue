<template>
    <div class="col-xs-12 col-sm-6">
        <p v-if="server === null"> Please Select a Server</p>  
        <p v-else> Server #{{ server.id }} selected <br>
                   Status: {{ server.status }} </p>
        <button @click="changeStatus">Fix Server</button>
    </div>
</template>


<script>
    import {eventBus} from './main.js';

    export default {
        data: function () {
            return {
                server: null
            };
        },
        methods: {
            changeStatus() {
                this.server.status = 'Normal';
            }
        },
        created() {
            eventBus.$on('serverSelected', (server) => {
                this.server = server;
            });
        }
    }
</script>
