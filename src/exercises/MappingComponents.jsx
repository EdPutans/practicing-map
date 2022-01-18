import Image from "../components/Image";

function MappingComponents(props) {
  if (!props.practiceShape) return null;

  // console.log(props.practiceShape)

  function getPersonsQuotesById(id) {
    // find the full person by their name
    const person = props.practiceShape.items.quotes.find(personObj => {
      return personObj.id === id
    })
    // navigate into their hobbies
    const hobbies = person.person.hobbies

    // map through their hobbies and return as p tags.
    return hobbies.map(hobby => {
      return <p>{hobby}</p>
    })

  }

  function getAllOfTheHobbiesEverySingleOneOfThem() {
    return props.practiceShape.items.quotes.map(quoteObject => {
      return quoteObject.person.hobbies.map(hobby => <p>{hobby}</p>)
    })
  }

  return (
    <>
      <div>
        <h3>Fruits:</h3>
        {/*
          1. With map, create a <p></p> element for each bird.
          E.g. <p>Eagle</p> 
          */}
        {props.practiceShape.birds.map(bird => <p key={bird}>{bird}</p>)}
        {/* code your solution here */}

      </div>


      <div>
        <h3>Quotes:</h3>
        {/* 
         Create a <h6> element for each quote, in the form of:
         <h6>"Think different"</h6>
                
        */}
        {props.practiceShape.items.quotes.map(quote => <h6 key={quote.quote}>{quote.quote}</h6>)}
        {/* code your solution here */}

      </div>


      <div>
        <h3>People and their fav ice-cream:</h3>
        {/* 
         Create a <h5> element for each person and their fav ice-cream:
         <h5>Winston Churchill likes Vanilla ice-cream</h5>
        */}
        {props.practiceShape.items.quotes.map(quote =>
          <h5 key={quote.person.name}>{quote.person.name} likes {quote.person.favouriteIceCream} ice-cream</h5>
        )}


        {/* code your solution here */}

      </div>



      <div>
        <h3>Cat pictures:</h3>
        {/* 
         Create an <Image /> component for each cat picture.
        {/* code your solution here */}
        {props.practiceShape.items.images.map(img => <Image key={img.imgUrl} imgUrl={img.imgUrl} />)}

      </div>

      <div>
        {/* <h3>John Lennon's hobbies</h3>
        {props.practiceShape.items.quotes. */}
        {getPersonsQuotesById(2)}
      </div>
      <div>
        {/* <h3>John Lennon's hobbies</h3>
        {props.practiceShape.items.quotes. */}
        {getAllOfTheHobbiesEverySingleOneOfThem()}

      </div>
    </>
  )
}

export default MappingComponents