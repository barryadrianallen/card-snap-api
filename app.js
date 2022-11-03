import Model from './scripts/model.js';
import View from './scripts/view.js';
import Controller from './scripts/controller.js';

const shuffleBtn = document.getElementById('shuffleBtn');
const drawCardBtn = document.getElementById('drawBtn');

for(let i=0; i<View.imgTagList.length; i++){
  View.imgTagList[i].onclick=()=>{Controller.pickCard(i)};
}

window.onload = (event) => {
    Controller.resetCards();
    Controller.getCardDataFromAPI();
  };

  shuffleBtn.addEventListener('click', () => {
    Controller.getCardImagesFromAPIData();
  });

  drawCardBtn.addEventListener('click', () => {
    Model.shuffledGameCards = Controller.shuffle(Model.unshuffledGameCards);
    console.log("Cards are in new array and shuffled...")
  })


