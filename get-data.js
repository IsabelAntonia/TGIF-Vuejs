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


function createTable() {


    for (i = 0; i < data.results[0].members.length; i++) {
        var member = data.results[0].members[i];
        var newRow = document.createElement("tr");
        
        var names= [member.first_name, member.middle_name, member.last_name]
        var full_name = names.join(" ");

        var link = "<a href=\"" + member.url + "\">" + full_name + "</a>";  
        

        newRow.insertCell().innerHTML = link;
        newRow.insertCell().innerHTML = member.party;
        newRow.insertCell().innerHTML = member.state;
        newRow.insertCell().innerHTML = member.seniority;
        newRow.insertCell().innerHTML = member.votes_with_party_pct + "%";
       

        document.getElementById("putDataHere").append(newRow);

    }
}

createTable(); 
