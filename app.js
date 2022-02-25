const app = Vue.createApp({
    data(){
        return{
            books:[
                {
                    title : "One Piece",
                    author : "Kevin",
                    age : 23,
                    language : "American",
                    image : "images/one piece.jpg",
                    isFav : true
                },
                {
                    title : "One Piece After Two Years ",
                    author : "KayAs",
                    age : 28,
                    language : "Chinese",
                    image : "images/op.jpg",
                    isFav : false
                },
                {
                    title : "Pokemon (Sun and Moon)",
                    author : "KyawSwa",
                    age : 32,
                    language : "English",
                    image : "images/sun_moon.jpg",
                    isFav : true
                }
            ],
            showBook : true,
            
        }
    },

});

app.mount("#app");