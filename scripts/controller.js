import Model from './model.js';
import View from './view.js';

let Controller = {

    resetCards: ()=> {
        for(let i=0; i<View.imgTagList.length; i++){
            View.imgTagList[i].src = "../public/images/blue_back.png";
        }
    },

    getCardDataFromAPI: () => {
        fetch(Model.apiMainEndpoint)
        .then((res) => { return res.json()})
        .then((data) => {
        Model.deckID = data.deck_id;
        Model.apiDrawCardEndpoint = "https://www.deckofcardsapi.com/api/deck/" + data.deck_id + "/draw/?count=104";
    }   )
    .catch((err)=> {
    console.log(err);
    });  
    },

    getCardImagesFromAPIData: () => {
        console.log('deckID is ' + Model.deckID);
        console.log('apiDrawCardEndpoint is ' + Model.apiDrawCardEndpoint);
        fetch(Model.apiDrawCardEndpoint)
        .then((res) => { return res.json()})
        .then((data) => {    
        for (let i = 0; i < Model.gameCards.length; i++) {
            for (let j = 0; j < data.cards.length; j++) {
                if (Model.gameCards[i] === data.cards[j].code) {
                 Model.cardURL.push(data.cards[j].image);
                } 
            } 
        }
    })
    .catch((err)=> {
        console.log(err);
    });
    },

    shuffle: (array) => {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];        
        }
        return array;
    }
}

export default Controller;