const app = Vue.createApp({
    data(){
        return{
            title : "Vuejs",
            author : "Kevin",
            age : 23
        }
    }
});

app.mount("#app");