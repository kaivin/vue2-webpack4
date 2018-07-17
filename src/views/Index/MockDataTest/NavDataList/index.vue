<template>
    <div class="container-fluid">
        <div class="mock-cont">
            <div class="clear h15"></div>
            <div class="mock-nav-list">
                <template v-for="(item,index) in data">
                    <a v-bind:href="item.linkURL+'?id='+item.id" :key="index">{{item.name}}</a>
                </template>
            </div>
            <div class="clear h15"></div>
            <div class="mock-data-json">{{data}}</div>
        </div>
    </div>
</template>

<script>
import "@/assets/scss/Mock.scss";
export default {
    name: "MockDataTest",
    data: function() {
        return {
            data:[]
        };
    },
    created(){
        this.fetchData();
    },
    methods: {
        fetchData(){
            let $this = this;
            this.$http.get('/MockDataTest/NavDataList')
            .then(response => {
                $this.data = response.data.array;
                console.log("连接成功"+$this.data);
            }, error => {
                console.log("连接错误："+error);
            })

        }
    },
    mounted: function() {}
};
</script>
