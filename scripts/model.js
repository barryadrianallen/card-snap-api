let Model = {
    deckID: "",
    apiMainEndpoint: "https://www.deckofcardsapi.com/api/deck/new/shuffle/?deck_count=2",
    apiDrawCardEndpoint: "",
    cardsRemaining: 24,
    //the cards we want to play with
    gameCards: ['JH','JC','JS','QH','QC','QD','KH','KC','KS','AH','AC','AD'],
    //loop through api data & add each image to cardURL
    cardURL: [],
    shuffledGameCards: [],
    firstCardUrl: "",
    secondCardUrl: ""    
}

export default Model;