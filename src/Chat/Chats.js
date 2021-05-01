import Chat from "./Chat";

import "./ChatScreen.css";

function Chats() {
  return (
    <div className="chats">
      <Chat
        name="Elon"
        message="whats up"
        timestamp="40 seconds ago"
        profilePic="https://images.unsplash.com/photo-1486578077620-8a022ddd481f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8&w=1000&q=80"
      />

      <Chat
        name="Nancum"
        message="hook up"
        timestamp="4 seconds ago"
        profilePic="https://cache.desktopnexus.com/thumbseg/805/805345-bigthumbnail.jpg"
      />

      <Chat
        name="Timstood"
        message="hayp"
        timestamp="20 seconds ago"
        profilePic="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS845rbIaHsatI-iPLONNHi5R7nIvTZ4Hh9ZsqNmV0D4WSXzWC_QjDlsNJRd5Iit0s_zqU&usqp=CAU"
      />

      <Chat
        name="Bravo"
        message="Aur batao"
        timestamp="32 seconds ago"
        profilePic="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBQPLx8A9nBN4h-pAr05QcK3OuKdhWBVRO9g&usqp=CAU"
      />
       <Chat
        name="AB Devi"
        message="Rancho"
        timestamp="2 seconds ago"
        profilePic=""
      />
    </div>
  );
}

export default Chats;
