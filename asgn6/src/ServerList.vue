<template>
    <li class="list-group-item"
        style="cursor: pointer"
        @click="serverSelected">
        Server #{{ server.id }}: {{server.status}}
    </li>
</template>

<script>
    import { eventBus } from './main.js';
    
    export default {
        props: {
            'server': Object
        },
        methods: {
            serverSelected() {
                eventBus.$emit('serverSelected',this.server);
            }
        } 
    }
</script>
