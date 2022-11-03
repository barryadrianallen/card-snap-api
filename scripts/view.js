import Model from './model.js';
import Controller from './controller.js';

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
        View.imgTagList[Model.firstCardLocation].src = "../public/images/blue_back.png";
        View.imgTagList[Model.secondCardLocation].src = "../public/images/blue_back.png";
    },

    removeCards: ()=> {
        View.imgTagList[Model.firstCardLocation].src = "../public/images/gray_back.png";
        View.imgTagList[Model.secondCardLocation].src = "../public/images/gray_back.png";
    }
}

export default View;