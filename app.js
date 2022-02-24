const app = Vue.createApp({
    data(){
        return{
            title : "Vuejs",
            author : "Kevin",
            age : 23,
            showBook : true
        }
    },

    methods:{
        mouseoverHandler(event,data){
            console.log("Mouse over is working!",event.type,data)
        },
                    //enent is default
        mouseleaveHandler(){
            console.log("Mouse leaving!",event.type)
        },

        doubleclickHandler(event){
            console.log("Double ckick working!",event.type)
        }
    }

});

app.mount("#app");