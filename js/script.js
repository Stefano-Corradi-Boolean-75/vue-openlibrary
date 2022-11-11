const {createApp } = Vue;

//console.log(axios);

createApp({

  data(){
    return{
      title: 'Open Library',
      autore: 'ibrahimovic',
      apiUrl: 'http://openlibrary.org/search.json?author=',
      libri: [],
      isLoaded:false
    }
  },
  methods:{

    getApi(){
     this.isLoaded = false;
     axios.get(this.apiUrl + this.autore)
     .then( result => {
      console.log(result.data);
      this.libri = result.data.docs;
      this.isLoaded = true;
     })
    }
  },
  mounted(){
    
    this.getApi();
    console.log('LOG SCRITTO DOPO AXIOS');
  }

}).mount('#app');