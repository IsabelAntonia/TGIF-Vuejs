//Declare Global Vars
let statistics = {
    "numR": 0,
    "numD": 0,
    "numI": 0,
    "votedWithPartyR": 0,
    "votedWithPartyD": 0,
    "votedWithPartyR": 0,
}

let members = data.results[0].members;


//Function Calls
calculateStatistics();
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

    }

    var Reps = [];
    var Dems = [];
    var Inds = [];
    for (var i = 0; i < members.length; i++) {

        let everyMember = data.results[0].members[i];


        switch (everyMember.party) {
            case "R":
                Reps.push(everyMember.votes_with_party_pct);
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

}
