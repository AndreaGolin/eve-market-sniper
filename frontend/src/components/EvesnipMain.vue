<template>
    <div class="col-md-12">
        <h2>Main</h2>
        <b-button variant="success" @click="getStatus">Button</b-button>
        <div>
            <p>Active now: {{ status.players }}</p>
        </div>
    </div>
</template>

<script>
    export default{
        name: "Evesnip Main",
        data() {
            return {
                status: ''
            }
        },
        methods: {
            getStatus: function(){
                this.$http.get("https://esi.evetech.net/latest/status/?datasource=tranquility").then(response => {
                    this.status = response.data;
                });
            }
        }
     };
</script>