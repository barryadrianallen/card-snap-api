import Model from './scripts/model.js';
import View from './scripts/view.js';
import Controller from './scripts/controller.js';

const newDealButton = document.getElementById('new-deal-btn');
const playBtn = document.getElementById('play-btn');
const playAgainBtn = document.getElementById('play-again-btn');

for(let i=0; i<View.imgTagList.length; i++){
  View.imgTagList[i].onclick=()=>{Controller.pickCard(i)};
}

window.onload = (event) => {
    Controller.resetCards();
    Controller.getCardDataFromAPI();
  };

  newDealButton.addEventListener('click', () => {
    Controller.getCardImagesFromAPIData();
  });

  playBtn.addEventListener('click', () => {
    Model.shuffledGameCards = Controller.shuffle(Model.unshuffledGameCards);
    View.startModalVisibility();
  });

  playAgainBtn.addEventListener('click', () => {
    View.gameOverModalVisibility();
  });


