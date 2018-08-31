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
}

function putElements() {

    document.getElementById('Rep').innerHTML = statistics.numR;
    document.getElementById('Dem').innerHTML = statistics.numD;
    document.getElementById('Ind').innerHTML = statistics.numI;
}
