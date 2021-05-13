class Contestant {
  constructor(){
    this.index = null;
    this.answer = 0;
    this.name = null;
  }

  getCount(){
    var contestantCountRef = database.ref('contestantCount');
    contestantCountRef.on("value",(data)=>{
      contestantCount = data.val();
    })
  }

  updateCount(count){
    database.ref('/').update({
      contestantCount: count
    });
  }

  update(){
    var contestantIndex = "contestants/contestant" + this.index;
    database.ref(contestantIndex).set({
      name:this.name,
      answer:this.answer
    });
  }

  getName(){
    var contestantRef = database.ref('contestants/contestant1');
    contestantRef.on("value",(data)=>{
    this.name = data.val();
    })
  }

  getName2(){
    var contestantRef2 = database.ref('contestants/contestant2');
    contestantRef2.on("value",(data)=>{
    this.name = data.val();
    })
  }

  static getPlayerInfo(){
    var contestantInfoRef = database.ref('contestants');
    contestantInfoRef.on("value",(data)=>{
      allContestants = data.val();
    })
  }
}
