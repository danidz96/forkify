import Axios from "../../../node_modules/axios";

export default class Search {
    constructor(query) {
        this.query = query;
    }

    async getResults() {
        //Proxy
        const proxy = 'https://cors-anywhere.herokuapp.com/';
        //API key from food2fork
        const key = '14224aad6c5521861ef86fc8b3e60981';
        
        try {
            const res = await Axios(`${proxy}http://food2fork.com/api/search?key=${key}&q=${this.query}`);
            this.result = res.data.recipes;
            //console.log(this.result);
        } catch (error) {
            console.error(error);            
        }
    }
}

