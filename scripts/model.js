let Model = {
    nealDeal: false,
    deckID: "",
    apiMainEndpoint: "https://www.deckofcardsapi.com/api/deck/new/shuffle/?deck_count=2",
    apiDrawCardEndpoint: "",
    cardsRemaining: 24,
    //the cards we want to play with
    gameCards: ['JH','JC','JS','QH','QC','QD','KH','KC','KS','AH','AC','AD'],
    //loop through api data & add each image to unshuffledGameCardUrls
    unshuffledGameCards: [],
    shuffledGameCards: [],
    firstCardUrl: "",
    secondCardUrl: "",
    cardGuess: 0,
    firstCardLocation: 0,
    secondCardLocation: 0 
}

export default Model;