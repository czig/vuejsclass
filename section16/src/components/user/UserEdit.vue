<template>
    <div>
        <h3>Edit the User</h3>
        <p> Locale: {{ $route.query.locale }}</p>
        <p> Analytics: {{ $route.query.q }}</p>
        <hr>
        <button class="btn btn-primary" @click="wasEdited">Confirm</button>
        <div style="height: 700px"></div>
        <p id="data">Some extra data</p>
    </div>
</template>


<script>
    export default {
        data() {
            return {
                edited: false    
            }
        },
        methods: {
            wasEdited() {
                this.edited = true;
            } 
        },
        beforeRouteLeave(to, from, next) {
            if (!this.edited) {
                var resp = confirm('Are you sure you want to leave without editing?');
                if (resp) {
                    next();
                }
                else {
                    next(false);
                }
            }
            else {
                next();
                
            }
        }
    }
</script>
