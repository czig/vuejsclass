<template>
    <div>
        <h3>Some User Details</h3>
        <p> User ID is {{ $route.params.id }}</p>
        <router-link tag="button" 
                     :to="link"
                            >Edit User</router-link>
    </div>
</template>


<script>
    export default {
        data() {
            return {
                link: { 
                    name: 'userEdit', 
                    params: { 
                        id: this.$route.params.id 
                    },
                    query: {
                        locale: 'en', 
                        q: 100
                    },
                    hash: '#data' 
                }
            }
        },
        beforeRouteEnter(to, from, next) {
            if (to.params.id == 1) {
                next();
            } else {
                next(false);
            }
        }
    }
</script>
