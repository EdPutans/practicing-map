const runAccessTest = (practiceShape) => {

  // practice accessing data from a large object,
  // with and without arguments
  // you can use as much code as you like here
  // Example of how your code could look like:
  function example_accessAllBirds() {
    return practiceShape.birds;
  }


  function accessChicken() {
    return practiceShape.birds[3]
    // 2. Access 'chicken' from practiceShape (line 51)
  }

  function accessWinstonChurchillsIceCream() {
    const quote = practiceShape.items.quotes[0];
    return quote.person.favouriteIceCream
    // 1. Access 'Vanilla' (Winston' Churchill's favourite ice-cream) from practiceShape (line 7)
  }

  function accessQuoteByIndex(index) {
    const quote = practiceShape.items.quotes[index];
    return quote.quote
    // 2. Access the quote using the index param
    // e.g. accessQuoteByIndex(2) returns "What a wonderful world"
  }

  function accessQuoteById(id) {
    const quotes = practiceShape.items.quotes;
    const quote = quotes.filter(quote => quote.id === id);
    return quote[0].quote
    // 3. Access the quote using the id.
    // e.g. accessQuoteById(2) returns "It's my life"
  }

  function findIceCreamById(id) {
    const quotes = practiceShape.items.quotes;
    const quote = quotes.filter(quote => quote.id === id);
    return quote[0].person.favouriteIceCream;
    // 4. Given an id, return the person's favourite ice-cream.
    // e.g. find findIceCreamById(2) should return "Chocolate"
  }
  /**
   * 
   * 
   * 
   * 
   * 
   * 
   * 
   * 
   * 
   * 
   * 
   * 
   */


  console.log('[Example] Should get all birds: ', example_accessAllBirds())
  console.log("Should be Chicken: ", accessChicken())
  console.log("Should be Vanilla: ", accessWinstonChurchillsIceCream());
  console.log("Should be 'I am the greatest': ", accessQuoteByIndex(0));
  console.log("Should be 'What a wonderful world': ", accessQuoteById(3));
  console.log("Should be 'Pistaccio': ", findIceCreamById(3));
}

export default runAccessTest;