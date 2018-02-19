console.log("connected")
var movieLists = [
  {
    title: "Cloverfield Paradox",
    rating: 5,
    hasWatched : true
  },

  {
    title:"Ritual",
    rating: 4.5,
    hasWatched: false
  },

  {
    title:"Trump is great",
    rating: 1,
    hasWatched: false
  },
]

for(var i = 0; i<movieLists.length;i++){
  if(movieLists[i].hasWatched!=true){
    console.log("You have not seen: \"" + movieLists[i].title + "\"" +" - " + movieLists[i].rating+" stars" );
  }
  else{
    console.log("You have seen: \"" + movieLists[i].title+"\"" + " - " + movieLists[i].rating+ " stars" );
  }
}
