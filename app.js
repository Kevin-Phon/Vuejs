const app = Vue.createApp({
    data(){
        return{
            title : "Vuejs",
            author : "Kevin",
            age : 23
        }
    },

    // methods:{
    //     IncreaseAge(){
    //         this.age++
    //     }
    // }
});

app.mount("#app");