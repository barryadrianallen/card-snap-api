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
        console.log("Data received from API..")
    }   )
    .catch((err)=> {
    console.log(err);
    });  
    },

    getCardImagesFromAPIData: () => {
        console.log('deckID is ' + Model.deckID);
        console.log("Card images are in array and unshuffled...");
        fetch(Model.apiDrawCardEndpoint)
        .then((res) => { return res.json()})
        .then((data) => {    
        for (let i = 0; i < Model.gameCards.length; i++) {
            for (let j = 0; j < data.cards.length; j++) {
                if (Model.gameCards[i] === data.cards[j].code) {
                 Model.unshuffledGameCards.push(data.cards[j].image);
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
    },

    pickCard: (cardLocation) => {
        console.log(Model.cardGuess);
        if(Model.cardGuess == 0){
            View.revealCard1(cardLocation);
        }
        else if(Model.cardGuess == 1){
            View.revealCard2(cardLocation);
            setTimeout(Controller.checkForMatch, 800);
        }
        else{
            return;
        }
      },
      
    checkForMatch: ()=> {
        if (Model.firstCardUrl == Model.secondCardUrl){
            View.removeCards();
            console.log("match!");
            Model.cardGuess = 0;
            Model.cardsRemaining -= 2;
            Controller.checkGameState();
        }
        else{
            View.hideCards();
            Model.cardGuess = 0;
        }
    },

    checkGameState: ()=> {
        if (Model.cardsRemaining == 0){
            let reset = window.confirm("Game Over: Play again?");
            if (reset){
                Controller.resetGame();
            }
            else{
                return;
            }
        }
        else{
            return;
        }
    },

    resetGame: ()=> {
        Model.deckID = "";
        Model.apiDrawCardEndpoint = "";
        Model.cardsRemaining = 24;
        Model.unshuffledGameCards = [];
        Model.shuffledGameCards = [];
        Model.firstCardUrl = "";
        Model.secondCardUrl = "";
        Model.cardGuess = 0;
        Model.firstCardLocation = 0;
        Model.secondCardLocation = 0;
        Controller.resetCards(); 
    }
};

export default Controller;