import React, { useState, useEffect  } from "react";
import TinderCard from "react-tinder-card";  
import database from "../firebase";
import "./TinderCards.css"


 function TinderCards() { 
  const [people, setPeople] = useState([]);

    // {
    //   name: "Elon Musk",
    //   url:
    //     "https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Elon_Musk_Royal_Society_%28crop1%29.jpg/330px-Elon_Musk_Royal_Society_%28crop1%29.jpg",
    // },
   
    // {
    //   name: "steve-jobs",
    //   url:
    //     "https://upload.wikimedia.org/wikipedia/commons/thumb/d/dc/Steve_Jobs_Headshot_2010-CROP_%28cropped_2%29.jpg/330px-Steve_Jobs_Headshot_2010-CROP_%28cropped_2%29.jpg",
    // },
    // {
    //     name: "Rashmika Mandanna",
    //     url:
    //     "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/RashmikaMandanna_at_Bheeshma_event.jpg/330px-RashmikaMandanna_at_Bheeshma_event.jpg"
    // }

  //]);


  // useEffect is A piece of code which runs based on a condition.
  // If any one used  class based component useEffect replace it all of the life cycle hooks.
    
  useEffect(() => {

    // this is where code runs..
    // this will run ONCE when the comonent loads, and never again


  //  database
  //   .collection("people")
  //   .onSnapshot(snapshot =>
  //   setPeople(snapshot.docs.map((doc) => doc.data()))
  //   )
   
  // }, [people]);

 const unrefresh =  database
  .collection('people')
  .onSnapshot(snapshot =>
  setPeople(snapshot.docs.map((doc) => doc.data()))
  );
  
  return () => {
    //this is the cleanup...
    unrefresh();
  }
 

}, []);



  //Bad
  // const people = [];
  // people.push('amit','ssk')

  //Good (Push to an array in REACT)
  //setPeople([...people,'amit','ssk '])

  // Always give KEYS in REACT because it allows REACT to efficiently re-render a LIST
  // and Makes your APP SUPER fast
  // ALWAYS do this REACT (sometimes you might not see the benefit immediately)

  return (
    <div>
      {/* <h1>Tinder cards</h1> */}
      <div className="tinderCards_cardContainer">

      </div>

      {people.map((person) => (
        <TinderCard
          className="swipe"
          key={person.name}
          preventSwipe={["up", "down"]}
        >
          <div
            style={{ backgroundImage: `url(${person.url})` }}
            className="card"
          >
            <h3>{person.name}</h3>
          </div>
        </TinderCard>
      ))}
    </div>
  );
}

export default TinderCards;
