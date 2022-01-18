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