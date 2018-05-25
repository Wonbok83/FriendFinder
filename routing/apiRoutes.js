var friendData = require("../data/friend");
var abs = require( 'math-abs' );


module.exports = function(app){
    app.get("/api/friends", function(req, res){
        res.json(friendData)
    });
    
    app.post("/api/friends/comparison", function(req, res){
        var score2;
      

        for(var i = 0; i < friendData.length; i++){

            var total=0;
            friendData[i].comparisonScore =0;
            for(var k = 0; k <friendData[i].scores.length;k++){
                var score = friendData[i].scores[k] ;
                 score2 = req.body.scores[k];
                var difference = parseInt(score)-parseInt(score2);
                 if(difference < 0){
                    difference *= -1;
                }
               total += parseInt(difference);
               console.log(score);
               console.log(score2); 
               console.log("difference:  "+ difference);
               console.log(parseInt(total));
               
            }
            friendData[i].comparisonScore = total;
        }

            var lowestComparisonScore = 100;
            var matchingFriend; 
            for(var i = 0; i < friendData.length; i++){
                if(friendData[i].comparisonScore < lowestComparisonScore){
                    lowestComparisonScore = friendData[i].comparisonScore;
                    matchingFriend = friendData[i];
                } 
            }
        res.json(matchingFriend)
    })
        

    app.post("/api/friends", function (req, res){
        friendData.push(req.body);
        res.json(friendData);



    });
}