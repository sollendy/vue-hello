// creo la variabile che origina il codice vue
const { createApp } = Vue

createApp({

//creo il data dove nidificare tutte le informazioni che occorrono
data() {
    //inserisco il return, con il quale indico cosa deve "tornare" degli elementi che immetto
    return {
        title: "ciao, sono il tuo titolo generato con Vue!",
        image: "assets/yarni.jpg"
    }
}

}).mount('#app');