//document.getElementById("senate-data").innerHTML = JSON.stringify(data,null,2); 

//console.log(data);


//var newTable = document.createElement("table");
//
//for (i = 0; i < data.results[0].members.length; i++) {
//
//    var someText1 = document.createTextNode(data.results[0].members[i].first_name)
//    var someText2 = document.createTextNode(data.results[0].members[i].middle_name)
//    var someText3 = document.createTextNode(data.results[0].members[i].last_name)
//    var someText4 = document.createTextNode(data.results[0].members[i].party)
//    var someText5 = document.createTextNode(data.results[0].members[i].state)
//    var someText6 = document.createTextNode(data.results[0].members[i].seniority)
//    var someText7 = document.createTextNode(data.results[0].members[i].votes_with_party_pct)
//
//
//    var newRow = document.createElement("tr");
//    var cell1 = document.createElement("td");
//    var cell2 = document.createElement("td");
//    var cell3 = document.createElement("td");
//    var cell4 = document.createElement("td");
//    var cell5 = document.createElement("td");
//    var cell6 = document.createElement("td");
//    var cell7 = document.createElement("td");
//    
//
//    cell1.appendChild(someText1);
//    cell2.appendChild(someText2);
//    cell3.appendChild(someText3);
//    cell4.appendChild(someText4);
//    cell5.appendChild(someText5);
//    cell6.appendChild(someText6);
//    cell7.appendChild(someText7);
//   
//    
//
//    newRow.appendChild(cell1);
//    newRow.appendChild(cell2);
//    newRow.appendChild(cell3);
//    newRow.appendChild(cell4);
//    newRow.appendChild(cell5);
//    newRow.appendChild(cell6);
//    newRow.appendChild(cell7);
//    newTable.appendChild(newRow);
//}
//
//var textDiv = document.getElementById("putDataHere");
//
//textDiv.appendChild(newTable);

//
//function createTable() {
//
//
//    for (i = 0; i < data.results[0].members.length; i++) {
//        var member = data.results[0].members[i];
//        var newRow = document.createElement("tr");
//        
//        var names= [member.first_name, member.middle_name, member.last_name]
//        var full_name = names.join(" ");
//
//        var link = "<a href=\"" + member.url + "\">" + full_name + "</a>";  
//        
//
//        newRow.insertCell().innerHTML = link;
//        newRow.insertCell().innerHTML = member.party;
//        newRow.insertCell().innerHTML = member.state;
//        newRow.insertCell().innerHTML = member.seniority;
//        newRow.insertCell().innerHTML = member.votes_with_party_pct + "%";
//       
//
//        document.getElementById("putDataHere").append(newRow);
//
//    }
//}
//
//createTable(); 


//
//createTable();
//
//function createTable() { // function A 
//
//    let putDataHere = document.querySelector('#putDataHere'); // We create a variable for the table
//    let allMembers = data.results[0].members; // We create a variable for all the elements of the array 
//
//    putDataHere.innerHTML = " "; // we empty the table every time before we rebuild 
//
//
//    //    for (i = 0; i < data.results[0].members.length; i++) {
//    allMembers.forEach(member => { // for each element of the array 
//
//
//        var newRow = document.createElement("tr"); // we create a row 
//
//        var names = [member.first_name, member.middle_name, member.last_name]
//        var full_name = names.join(" "); // we have a full name that we can use 
//
//        //            var link = "<a href=\"" + member.url + "\">" + full_name + "</a>"; 
//        var link = full_name.link(member.url); // we create a link variable it stores the linked full_name
//
//
//
//        newRow.insertCell().innerHTML = link; // in the new row we insert a td for the linked full name
//        newRow.insertCell().innerHTML = member.party; // in the new row we insert a td for the party etc. 
//        newRow.insertCell().innerHTML = member.state;
//        newRow.insertCell().innerHTML = member.seniority;
//        newRow.insertCell().innerHTML = member.votes_with_party_pct + "%";
//
//
//        if (showMember(member)) { // if the function B returns true 
//            document.getElementById("putDataHere").append(newRow); // append the new row to the table it could be only true for democratic candidates so only their rows are appended to the table 
//        }
//
//    });
//}
//
//
//
//function showMember(member) { // function B 
//    //    console.log(member.party); // this would display all R, D, Is there are basically all the party properties of all the members 
//    let partyFilterValue = false; // we set the end check to be false 
//
//    let CheckboxR = document.querySelector("#partyR"); // we get the checkbox from the HTML and store it in a variable here in JS
//    CheckboxR.addEventListener("click", createTable); // when it is clicked 
//
//    let CheckboxD = document.querySelector("#partyD");
//    CheckboxD.addEventListener("click", createTable);
//
//    let CheckboxI = document.querySelector("#partyI");
//    CheckboxI.addEventListener("click", createTable);
//
//
////    let checkedCheckbox = []; // we create an array where we store the R, D, Is depending on what is clicked 
////
////
////    // Alternative 1 to push the party values in the array 
////    if (CheckboxR.checked) {
////        checkedCheckbox.push("R"); // if R is clicked push R in the checkedCheckbox array 
////    }
////    if (CheckboxD.checked) {
////        checkedCheckbox.push("D");
////    }
////    if (CheckboxI.checked) {
////        checkedCheckbox.push("I");
////    }
////
////    if (!CheckboxR.checked && !CheckboxD.checked && !CheckboxI.checked) { // if none of them is checked it should still create the table right?
////        checkedCheckbox.push("R"); // is should push the R in the array, the array no contains one element namely R 
////        checkedCheckbox.push("D");
////        checkedCheckbox.push("I");
////
////    }
//
//        // Alternative 2 to push the party values in the array 
//         checkedCheckbox = Array.from(document.querySelectorAll('input[name=party]:checked'))  // select all input elements where the name is party and that are checked and put them in an array so now in the Array we have partyR, partyI and partyD
//                               .map(arrayElement => arrayElement.value); // replace them with their value so either R, D or I 
//        
//        console.log(checkedCheckbox);
//    //    
//    //
//    if (checkedCheckbox.includes(member.party) || checkedCheckbox.length==0) { // so for example after the user selected republican the R is in the array and it compares it to the party value of each member 
//        partyFilterValue = true; // if it includes member. party it sets it to be true only then it creates the table 
//    }
//
//    return partyFilterValue;
//}



// Lets say the user selects republican; it pushes the checked R in the array, the array no contains one element the "R" right. It compares it to all the member.party values if they are republican the function returns true - if they are democratic it renturns falls and the row is not build for this candidate  









// this is an alternative more clean approach 

//fetch


(function () {

    var data;
    var url;

    if (document.title.includes("House")) {
        url = "https://api.propublica.org/congress/v1/113/house/members.json";
    }

    if (document.title.includes("Senate")) {
        url = "https://api.propublica.org/congress/v1/113/senate/members.json";
    }

    fetch(url, {
            headers: new Headers({
                'X-API-Key': 'JlFF4jpgMcRs9zuQsaUDjWkjbRE3KL1b3H2cs0Kl '
            })
        })
        .then(response => response.json())
        .then(realData => {

            data = realData;

            alternativeFilter();
        })


    function alternativeFilter() {


        new Vue({
            el: '#vueTest',
            data: {
                allMembers: data.results[0].members,
                members: data.results[0].members,
                sortedStates: []
            },
            created(){
                this.createOptionElements();
            },
            methods: {
                filter() {
                    
                    var checkedCheckbox = Array.from(document.querySelectorAll('input[name=party]:checked')).map(arrayElement => arrayElement.value)
                    this.members = this.allMembers.filter(everyMember => {

                        var partyFilter = checkedCheckbox.includes(everyMember.party) || checkedCheckbox.length == 0; // in here we have the test 

                        var mySelect = document.querySelector("#stateId");
                        var stateFilter = mySelect.value == everyMember.state || mySelect.value == 'ALL';

                        return partyFilter && stateFilter;


                    });
                },
                createOptionElements(){
                    var stateNames = [];
        
                    for (i = 0; i < this.allMembers.length; i++) {
                        if (!stateNames.includes(this.allMembers[i].state)) {
                            stateNames.push(this.allMembers[i].state)
                        }
                    }
                    
                    this.sortedStates = stateNames.sort();
                }
            }
        })



        //
        //    var allMembers = data.results[0].members;
        //    let mySelect = document.getElementById("stateId");
        //    
        //    let putDataHere = document.querySelector('#putDataHere');
        //    
        //    putDataHere.innerHTML = "";
        //
        //    //
        //    var checkedCheckbox = Array.from(document.querySelectorAll('input[name=party]:checked')).map(arrayElement => arrayElement.value); // so here we store R in the Array we do not actually need the name=party because for now all of our inputs have the name party 

        // whatever gets ckecked input party gets replaced by its value so either R, D, I and gets put into checkedCheckbox
        //
        //
        //    var filteredMembers = allMembers.filter(everyMember => { // the filter method creates an array filled with all array elements that pass a test 
        //
        //        var partyFilter = checkedCheckbox.includes(everyMember.party) || checkedCheckbox.length == 0; // in here we have the test 
        //
        ////        var mySelect = document.querySelector("#stateId");
        //        var stateFilter = mySelect.value == everyMember.state || mySelect.value == 'ALL'; 
        //
        //        return partyFilter && stateFilter;
        //
        //    });
        //
        //
        //    filteredMembers.forEach(member => {
        //
        //        var newRow = document.createElement("tr");
        //
        //        var names = [member.first_name, member.middle_name, member.last_name]
        //        var full_name = names.join(" ");
        //
        //        var link = "<a href=\"" + member.url + "\">" + full_name + "</a>";
        //        //            var link = full_name.link(member.url);
        //
        //        newRow.insertCell().innerHTML = link;
        //        newRow.insertCell().innerHTML = member.party;
        //        newRow.insertCell().innerHTML = member.state;
        //        newRow.insertCell().innerHTML = member.seniority;
        //        newRow.insertCell().innerHTML = member.votes_with_party_pct + "%";
        //        
        //        document.getElementById("putDataHere").append(newRow);
        //        
        //    });
        //
        //    let CheckboxR = document.querySelector("#partyR");
        //    CheckboxR.addEventListener("click", alternativeFilter);
        //
        //    let CheckboxD = document.querySelector("#partyD");
        //    CheckboxD.addEventListener("click", alternativeFilter);
        //
        //    let CheckboxI = document.querySelector("#partyI");
        //    CheckboxI.addEventListener("click", alternativeFilter);
        //
        //    mySelect.addEventListener("change",alternativeFilter);
        //
/*            function createOptionElements() {
                var stateNames = []
        
                for (i = 0; i < allMembers.length; i++) {
                    if (!stateNames.includes(allMembers[i].state)) {
                        stateNames.push(allMembers[i].state)
                    }
        
                }
                stateNames.sort();
        
        
                for (j = 0; j < stateNames.length; j++) {
                    var newElement = document.createElement("option")
                    newElement.innerHTML = stateNames[j]
        
                    mySelect.append(newElement);
                }
            }*/
        //    createOptionElements();
    }
    //alternativeFilter();


})()
