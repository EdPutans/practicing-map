import Image from "../components/Image";

function MappingComponents(props) {
  if (!props.practiceShape) return null;

  return (
    <>
      <div>
        <h3>Fruits:</h3>
        {/*
          1. With map, create a <p></p> element for each bird.
          E.g. <p>Eagle</p> 
          */}

        {/* code your solution here */}

      </div>


      <div>
        <h3>Quotes:</h3>
        {/* 
         Create a <h6> element for each quote, in the form of:
         <h6>"Think different"</h6>
        */}
        {/* code your solution here */}

      </div>


      <div>
        <h3>People and their fav ice-cream:</h3>
        {/* 
         Create a <h5> element for each person and their fav ice-cream:
         <h5>Winston Churchill likes Vanilla ice-cream</h5>
        */}
        {/* code your solution here */}

      </div>



      <div>
        <h3>Cat pictures:</h3>
        {/* 
         Create an <Image /> component for each cat picture.

        {/* code your solution here */}

      </div>
    </>
  )
}

export default MappingComponents