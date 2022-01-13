
const runDataMappingTest = (practiceShape) => {

  // Practice transforming data with map
  // Your solution should only contain the map function and return its result.

  function getCatImages() {
    // 1. Using map, create an array of only cat images
    // > ["http://...", "http://...", etc..]
  }

  function getNames() {
    // 1. Using map, create an array of only peoples' names.
    // > ["Winston Churchill". "John Lennon",  etc..]
  }

  function getUpperCaseBirds() {
    // 2. Using map, create an array of uppercased birds
    // > ["PIGEON", "HAWK", "EAGLE", etc..]
  }

  function getPeopleAndQuotes() {
    // 3. Using map, create an array of "Person said: Quote", e.g.:
    // > ["John Lennon said: It's my life", "George Orwell said: What a wonderful world", etc..]
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
   * 
   * 
   */

  console.log('Should be an array of URLs: ', getCatImages())
  console.log('Should be an array of Names: ', getNames())
  console.log('Should be an array of uppercased Birds: ', getUpperCaseBirds())
  console.log(`Should look like ["John Lennon said: It's my life", "George Orwell said: What a wonderful world" ...] :`, getPeopleAndQuotes())
}

export default runDataMappingTest