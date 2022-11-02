import Model from './scripts/model.js';
import View from './scripts/view.js';
import Controller from './scripts/controller.js';

window.onload = (event) => {
    Controller.resetCards();
    Controller.getCardDataFromAPI();
    Controller.getCardImagesFromAPIData();
    //Model.shuffledGameCards = Controller.shuffle(Model.cardURL);

    // console.log(Model.cardURL);
    // console.log(Model.shuffledGameCards);
  };

