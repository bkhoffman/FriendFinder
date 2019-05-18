const friendData = require("../data/friends");

module.exports = function(app) {
  app.get("/api/friends", function(req, res) {
    res.json(friendData);
  });
  app.post("/api/friends", function(req, res){
    friendData.push(req.body);
    //setup friend obj to populate and test against until lowest scoreDiff is reached and loop ends
    let bestFriend = {
      name: "",
      photo: "",
      scoreDiff: 1000
    };
    //scores for newly entered friend
    let newFriendScores = req.body.scores;
    //loop through friends arr and totalDiff var to add scores up
    for(let i = 0; i < friendData.length; i++){
      let totalDifference = 0;
      //loop through Scores as we loop through friends arr
      //parseInt the strings to numbers, subtract new Friends scores at each index and each friend in arr scores at same index 
      for(let j = 0; j < friendData[i].scores[j]; j++){
        totalDifference += Math.abs(parseInt(newFriendScores[j]) - parseInt(friendData[i].scores[j]));
        //check Difference against scoreDiff to see which is lower and put in new bestFriend if lower
        //update scoreDiff with the new "lowest" totalDiff to compare next cycle through
        if(totalDifference < scoreDiff){
          bestFriend.name = friendData[i].name;
          bestFriend.photo = friendData[i].photo;
          bestFriend.scoreDiff = totalDifference;
        }
      }
    }
    res.json(bestFriend);
  })
}