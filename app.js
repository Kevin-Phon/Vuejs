const app = Vue.createApp({
    data(){
        return{
            books:[
                {
                    title : "Vuejs",
                    author : "Kevin",
                    age : 23,
                    language : "American"
                },
                {
                    title : "Pro Gaming",
                    author : "KayAs",
                    age : 28,
                    language : "Chinese"
                },
                {
                    title : "How To Live",
                    author : "KyawSwa",
                    age : 32,
                    language : "English"
                }
            ],
            showBook : true
        }
    },

});

app.mount("#app");