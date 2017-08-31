<template>
    <nav class="navbar navbar-default">
        <div class="container-fluid">
            <div class="navbar-header">
                <!--very nice way to make mobile friendly-->
                <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                    <span class="sr-only">Toggle navigation</span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                </button>
                <!--add home link to header-->
                <router-link to="/" 
                            tag="a" 
                            class="navbar-brand" 
                            active-class="active">
                    <a>Stock Trader</a>
                </router-link>
            </div>
            <!--add remaining links-->
            <div class="collapse navbar-collapse" 
                id="bs-example-navbar-collapse-1">
                <ul class="nav navbar-nav">
                    <router-link to="/portfolio" 
                                tag="li" 
                                active-class="active">
                        <a>Portfolio</a>
                    </router-link>
                    <router-link to="/stocks" 
                                tag="li" 
                                active-class="active">
                        <a>Stocks</a>
                    </router-link>
                </ul>
                <ul class="nav navbar-nav navbar-right">
                    <li><a href="#" @click.prevent="endDay">End Day</a></li>
                    <li class="dropdown">
                        <a href="#" class="dropdown-toggle" 
                                    data-toggle="dropdown" 
                                    role="button" 
                                    aria-haspopup="true" 
                                    aria-expanded="false">
                            Save & Load <span class="caret"></span>
                        </a>
                        <ul class="dropdown-menu">
                            <li><a href="#" @click.prevent="pushToServer">Save</a></li> 
                            <li><a href="#" @click.prevent="loadFromServer">Load</a></li> 
                        </ul>
                    </li>
                    <li><a><b>Funds: {{ funds }}</b></a></li>
                </ul>
            </div>
        </div>
    </nav>
</template>

<script>
    import { mapGetters } from 'vuex';
    import { mapActions } from 'vuex';
    export default {
        computed: {
            ...mapGetters([
                'funds'
            ])
        },
        methods: {
            ...mapActions([
                'endDay',
                'pushToServer'
            ]),
            pushToServer() {
                this.$http.put('stocks.json',this.$store.state).then()
            },
            loadFromServer() {
                this.$http.get('stocks.json')
                    .then(response => {
                        return response.body 
                    })
                    .then(data => {
                        this.$store.replaceState(data, this.$store.state); 
                    })
            }
        }
    }
</script>
