const runAccessTest = (practiceShape) => {

  // practice accessing data from a large object,
  // with and without arguments
  // you can use as much code as you like here


  // Example of how your code could look like:
  function example_accessAllBirds() {
    return practiceShape.birds;
  }


  function accessChicken() {
    // 2. Access 'chicken' from practiceShape (line 51)
    return practiceShape.birds[3]
  }

  function accessWinstonChurchillsIceCream() {
    // 1. Access 'Vanilla' (Winston' Churchill's favourite ice-cream) from practiceShape (line 7)
    return practiceShape.items.quotes[0].person.favouriteIceCream
  }

  function accessQuoteByIndex(index) {
    // 2. Access the quote using the index param
    // e.g. accessQuoteByIndex(2) returns "What a wonderful world"
    return practiceShape.items.quotes[index].quote

  }

  function accessQuoteById(id) {
    // 3. Access the imgUrl using the id.
    // e.g. accessQuoteById(2) returns "It's my life"
    return practiceShape.items.quotes.find(quote => quote.id === id).quote
  }

  function findIceCreamById(id) {
    // 4. Given an id, return the person's favourite ice-cream.
    // e.g. find findIceCreamById(2) should return "Chocolate"
    return practiceShape.items.quotes.find(quote => quote.id === id).person.favouriteIceCream

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


  console.log(
    "[Example] Should be an array of birds: ",
    example_accessAllBirds()
  );
  console.log("accessChicken - Should be Chicken: ", accessChicken());
  console.log(
    "accessWinstonChurchillsIceCream - Should be Vanilla: ",
    accessWinstonChurchillsIceCream()
  );
  console.log(
    "accessQuoteByIndex - Should be 'I am the greatest': ",
    accessQuoteByIndex(0)
  );
  console.log(
    "accessQuoteById - Should be 'It's my life': ",
    accessQuoteById(2)
  );
  console.log(
    "accessQuoteById - Should be 'What a wonderful world': ",
    accessQuoteById(3)
  );
  console.log(
    "findIceCreamById - Should be 'Pistaccio': ",
    findIceCreamById(3)
  );
};


export default runAccessTest;