  class Quiz {
  constructor(){
    this.title2 = createElement('h1');
  }

  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
      gameState = data.val();
    })

  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      contestant1 = new Contestant();
      contestant2 = new Contestant();
      var contestantCountRef = await database.ref('contestantCount').once("value");
      var contestantRef = await database.ref('contestants/contestant1/name').once("value");
      var contestantRef2 = await database.ref('contestants/contestant2/name').once("value");
      if(contestantCountRef.exists()){
        contestantCount = contestantCountRef.val();
        contestant1.name = contestantRef.val();
        contestant2.name = contestantRef2.val();

        contestant1.getName();
        contestant2.getName2();
        contestant1.getCount();
      }
      question = new Question();
      question.display();
    }
  }
  hide2(){
  this.title2.hide();
  }
  show(){
    this.title2.show();
  }
  play(){
      //write code here to hide question elements

      //write code to change the background color here
        background("yellow")
      

      //write code to show a heading for showing the result of Quiz
      this.hide2()
      this.title2.html("Results Of The Quiz");
      this.title2.position(300, 0);
      this.show()


      //call getContestantInfo( ) here
      Contestant.getPlayerInfo();
      //write condition to check if contestantInfor is not undefined
      if(allContestants !== undefined){
        fill("purple");
        textSize(20);
        text("*NOTE: Contestant who answered correct are highlighted in green colour!",130,230)
      }
      //write code to add a note here
      var index = 0;
      //write code to highlight contest who answered correctly
      for(var plr in allContestants){
        index = index + 1 ;
      if (index === contestant1.index){
        var correctAns = "4";
        
        for(plr in allContestants)
{          if (correctAns === allContestants[plr].answer){
          
        fill("green");
        text("Correct Answer -> " + allContestants[plr].name + " : " + allContestants[plr].answer, 300, 270);
       // fill("red");
        //text("Incorrect Answer -> " + contestant2.name.name + " : " + contestant2.name.answer, 300, 300);
        
        }
        else{
       fill("red");
        text("Incorrect Answer -> " + allContestants[plr].name + " : " + allContestants[plr].answer, 300, 300);
        }
      }
         // if (correctAns !== allContestants[plr].answer){
        //   fill("green");
        //   text("Correct Answer -> " + contestant.name  + " : " + contestant.answer , 300, 270);
        //   }
        //   else{
        //   fill("d");
        //   text("Incorrect Answer -> " + contestant2.name.name + " : " + contestant2.name.answer, 300, 300);
        // }
      }
    }
  }
}