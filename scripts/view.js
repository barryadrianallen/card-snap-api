import Model from './model.js';

const startModal = document.getElementById('start-modal');
const gameOverModal = document.getElementById('game-over-modal');

let View = {
    imgTagList: document.getElementsByTagName("img"),

    revealCard1: (cardLocation)=> {
        View.imgTagList[cardLocation].src = Model.shuffledGameCards[cardLocation];
        Model.firstCardUrl = Model.shuffledGameCards[cardLocation];
        Model.cardGuess++;
        Model.firstCardLocation = cardLocation;
    },

    revealCard2: (cardLocation)=> {
        View.imgTagList[cardLocation].src = Model.shuffledGameCards[cardLocation];
        Model.secondCardUrl = Model.shuffledGameCards[cardLocation];
        Model.cardGuess++;
        Model.secondCardLocation = cardLocation;
    },

    hideCards: ()=> {
        View.imgTagList[Model.firstCardLocation].src = "public/images/blue_back.png";
        View.imgTagList[Model.secondCardLocation].src = "public/images/blue_back.png";
    },

    removeCards: ()=> {
        View.imgTagList[Model.firstCardLocation].src = "public/images/gray_back.png";
        View.imgTagList[Model.secondCardLocation].src = "public/images/gray_back.png";
    },

    startModalVisibility: ()=> {
        startModal.classList.toggle('hide-modal');
        startModal.classList.toggle('show-modal'); 
    },

    gameOverModalVisibility: ()=> {
        gameOverModal.classList.toggle('hide-modal');
        gameOverModal.classList.toggle('show-modal');
    },

    errorDisplay: document.getElementById('error-display')
}

export default View;