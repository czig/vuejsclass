<template>
    <div class="col-xs-12 col-sm-6">
        <ul class="list-group" >
            <my-server
                v-for="server in servers"
                :key="server.id"
                :server="server">
            </my-server>
        </ul>
    </div>
</template>

<script>
    import ServerList from './ServerList.vue';

    export default {
        data: function() {
            return {
                servers: [
                    { id: 1, status: 'Normal'},
                    { id: 2, status: 'Critical'},
                    { id: 3, status: 'Unknown'},
                    { id: 4, status: 'Critical'},
                    { id: 5, status: 'Normal'}
                ]
            };
        },
        components: {
            'my-server': ServerList
        }
    }
</script>
