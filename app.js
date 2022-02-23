const app = Vue.createApp({
    data(){
        return{
            title : "Vuejs",
            author : "Kevin",
            age : 23,
            showBook : true
        }
    },

});

app.mount("#app");