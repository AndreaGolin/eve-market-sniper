<template>
    <b-container fluid class="test-container">
        <b-row>
            <div class="col-md-12">
                <h2>Main</h2>
                <b-button variant="success" @click="getStatus">Button</b-button>
                <div>
                    <p>Active now: {{ status.players }}</p>
                </div>
            </div>
        </b-row>
        <b-row class="get-type-container">
            <b-col md="6">
                <b-form-input v-model="type_id" placeholder="Type Id"></b-form-input>
            </b-col>
            <b-col md="2">
                <b-button variant="success" @click="getType">Find</b-button>
            </b-col>
            <b-col md="4">
                <b-form-input plaintext :value="type_name" placeholder="Type Name"></b-form-input>
            </b-col>
        </b-row>
        <b-row class="get-region-container">
            <b-col md="6">
                <b-form-input v-model="region_id" placeholder="10000002"></b-form-input>
            </b-col>
            <b-col md="2">
                <b-button variant="success" @click="getRegion">Find</b-button>
            </b-col>
            <b-col md="4">
                <b-form-input plaintext :value="region_name" placeholder="Region Name"></b-form-input>
            </b-col>
        </b-row>
        <hr>
        <b-row>
            <b-col md="12">
                <b-button variant="success" @click="getBuyOrderFromRegion">Get Orders</b-button>
            </b-col>
            <b-col md="12">
                <span>Buy Orders Count: </span>
                <b-form-input plaintext :value="buy_orders_count" placeholder="0"></b-form-input>
                <span>Sell Orders Count: </span>
                <b-form-input plaintext :value="sell_orders_count" placeholder="0"></b-form-input>
            </b-col>
        </b-row>
    </b-container>
    
    
</template>

<script>
    export default{
        name: "evesnip_main",
        data() {
            return {
                defRegion: "10000002",
                status: '',
                type_id: '',
                type_name: '',
                region_id: '',
                region_name: '',
                buy_orders_count: 0,
                sell_orders_count: 0,
                page: 1,
            }
        },
        methods: {
            getStatus: function(){
                this.$http.get("https://esi.evetech.net/latest/status/?datasource=tranquility").then(response => {
                    this.status = response.data;
                });
            },
            getType: function(){
                this.$http.get("https://esi.evetech.net/latest/universe/types/" + this.type_id + "/?datasource=tranquility&language=en-us")
                .then(response => {
                    this.type_name = response.data.name;
                })
                .catch(error => console.log(error));
            },
            getRegion: function(){
                this.$http.get("https://esi.evetech.net/latest/universe/regions/" + this.region_id + "/?datasource=tranquility&language=en-us")
                .then(response => {
                    this.region_name = response.data.name;
                    const data = {
                        name: response.data.name,
                        regionId: response.data.region_id
                    };
                    return this.$http.post("http://localhost:4000/evesnip/regions", data).then(res => console.log(res)).catch(err => console.log(err));
                })
                .catch(error => console.log(error));
            },
            getBuyOrderFromRegion: function(){
                this.$http.get("https://esi.evetech.net/latest/markets/" + this.defRegion +"/orders/?datasource=tranquility&order_type=sell&page="+ this.page +"&type_id=34")
                .then(response => {
                    console.log(this.page);
                    if (response.data.length > 0){
                        console.log(response.data.length);
                        this.buy_orders_count += response.data.length;
                        this.page += 1;
                        this.getBuyOrderFromRegion();
                    }else{
                        console.log("STOP!");
                    }
                    
                })
                .catch(error => console.log(error));
            }
        }
     };
</script>

<!-- 
    The Forge orders Call
    https://esi.evetech.net/latest/markets/10000002/orders/?datasource=tranquility&order_type=buy&page=1
    ORDER RESPONSE
    {
    "duration": 90,
    "is_buy_order": true,
    "issued": "2020-06-19T13:23:49Z",
    "location_id": 1028858195912,
    "min_volume": 1,
    "order_id": 5658024440,
    "price": 206200000,
    "range": "1",
    "system_id": 30000144,
    "type_id": 14840,
    "volume_remain": 1,
    "volume_total": 1
  } -->