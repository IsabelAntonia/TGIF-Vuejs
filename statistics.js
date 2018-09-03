//Declare Global Vars
let statistics = {
    "numR": 0,
    "numD": 0,
    "numI": 0,
    "votedWithPartyR": 0,
    "votedWithPartyD": 0,
    "votedWithPartyR": 0,
    "leastEngaged":0,
    "mostEngaged":0,
}

let members = data.results[0].members;


//Function Calls
calculateStatistics();
engaged("least");
engaged("most"); 
putElements();
//console.log(statistics);



//Function Declaration

function calculateStatistics() {
    for (var i = 0; i < members.length; i++) {

        let everyMember = data.results[0].members[i];

        switch (everyMember.party) {
            case "R":
                statistics.numR++;
                break;
            case "D":
                statistics.numD++;
                break;
            case "I":
                statistics.numI++;
                break;
        }

    }// no we calculated the total amount - next we will calculate the votes with party 

    var Reps = [];
    var Dems = [];
    var Inds = [];
    for (var i = 0; i < members.length; i++) {

        let everyMember = data.results[0].members[i];


        switch (everyMember.party) {
            case "R":
                Reps.push(everyMember.votes_with_party_pct); // basically we add all the percentages in an array, we build the sum and divide it by the amount of members 
                break;
            case "D":
                Dems.push(everyMember.votes_with_party_pct);
                break;
            case "I":
                Inds.push(everyMember.votes_with_party_pct);
                break;

        }

    }

    //    console.log(statistics.numR)
    //    console.log(addElements(Reps)/statistics.numR);
    statistics.votedWithPartyR = Math.round(addElements(Reps) / statistics.numR);
    statistics.votedWithPartyD = Math.round(addElements(Dems) / statistics.numD);
    statistics.votedWithPartyI = Math.round(addElements(Inds) / statistics.numI);

}

function addElements(recievedArray) {

    var sum = recievedArray.reduce((total, amount) => total + amount);
    //    console.log(sum);
    return sum;
}

function putElements() {

    document.getElementById('Rep').innerHTML = statistics.numR;
    document.getElementById('Dem').innerHTML = statistics.numD;
    document.getElementById('Ind').innerHTML = statistics.numI;
    document.getElementById('Rep1').innerHTML = statistics.votedWithPartyR + "%";
    document.getElementById('Dem1').innerHTML = statistics.votedWithPartyD + "%";
    document.getElementById('Ind1').innerHTML = statistics.votedWithPartyI + "%";

     var leastTable = document.getElementById('leastTable');
   buildSmallTable(statistics.leastEngaged, leastTable);

   var mostTable = document.getElementById("mostTable");
   buildSmallTable(statistics.mostEngaged, mostTable);
}











function engaged(direction) {

   if(direction == "least"){
       var sortedArray = members.sort(function (a, b) {
           return b.missed_votes - a.missed_votes //we sort the members based on how many votes they missed 
       });
   } else {
       var sortedArray = members.sort(function (a, b) {
           return a.missed_votes - b.missed_votes
       });
   }

   // take only 10% from sortedArray
   var checkedPrecent = sortedArray.length / 10;
   checkedPrecent = checkedPrecent.toFixed(0);
   // save in statistics this 10%

   var tenPrcArray = [];
   for (i = 0; i<checkedPrecent; i++){
       tenPrcArray.push(members[i]) ;
   }

   if(direction == "least"){
       statistics.leastEngaged = tenPrcArray;
   } else {
       statistics.mostEngaged = tenPrcArray;
   }
}


function buildSmallTable(smallArray, whereToPut){

       for(var k=0; k < smallArray.length; k++){
           var link = "<a href='" + smallArray[k].url + "'>" + smallArray[k].first_name + " " + smallArray[k].last_name + "</a>";
           var newRow = document.createElement("tr");
           newRow.insertCell().innerHTML = link;
           newRow.insertCell().innerHTML = smallArray[k].missed_votes;
           newRow.insertCell().innerHTML = smallArray[k].missed_votes_pct;
           whereToPut.append(newRow);
   }
}
