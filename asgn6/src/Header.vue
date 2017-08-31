<template>
    <div class="row">
        <div class="col-xs-12">
            <header>
                <h1>{{myHeader}}</h1>
            </header>
        </div>
    </div>
</template>

<script>
    export default {
        data: function() {
            return {
               myHeader: 'Server Status'
            }
        }
    }
</script>
