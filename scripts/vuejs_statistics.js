var app = new Vue({

    el: '#app',
    data: {
        data: [],
        loading: true,
        statistics: {
            "numR": 0,
            "numD": 0,
            "numI": 0,
            "votedWithPartyR": 0,
            "votedWithPartyD": 0,
            "votedWithPartyI": 0,
            "leastEngaged": [],
            "mostEngaged": [],
            "bestLoyal": [],
            "worstLoyal": []

        },
        members: [],
        everyMember: {},
        myTotal: 0,
        totalPercentage: 0,
        sortedArray: [],
        checkedPrecent: 0,
        tenPrcArray: [],
        specialArray: [],
        numberParty: 0,
        specialArray: [],
        myArray: []

    },

    beforeCreate() {

        var key = config.key
        var url;

        if (document.title.includes("House")) {
            url = "https://api.propublica.org/congress/v1/113/house/members.json"
            //                        url = "https://api.propublica.org/congress/v1/113/house/members.json";
        }

        if (document.title.includes("Senate")) {
            url = "https://api.propublica.org/congress/v1/113/senate/members.json";
            //                        url = "https://api.propublica.org/congress/v1/113/senate/members.json";
        }
        //        fetch(url)

        fetch(url, {
                headers: new Headers({
                    'X-API-Key': key
                })
            })
            .then(response => response.json())
            .then(realData => {

                this.data = realData;
                this.loading = false;

//                this.allMembers = this.data.results[0].members;
                this.members = this.data.results[0].members;
                this.calculateStatisticsSmallTable();


                if (document.title.includes('Attendance')) {
                    this.engaged("least");
                    this.engaged("most");
                }
                if (document.title.includes('Loyalty')) {
                    this.loyal("best");
                    this.loyal("worst");
                }


            })
    },


    methods: {


        calculateStatisticsSmallTable() {
            //              this.myTotal = this.members.length; would also work

            for (var i = 0; i < this.members.length; i++) {

                this.myTotal++;


                this.everyMember = this.members[i];

                switch (this.everyMember.party) {
                    case "R":
                        this.statistics.numR++;
                        break;
                    case "D":
                        this.statistics.numD++;
                        break;
                    case "I":
                        this.statistics.numI++;
                        break;
                }

            }

var Reps = [];
var Dems = [];
var Inds = [];
var All = [];
            
            

            // now we calculated the total amount - next we will calculate the votes with party 


            for (var i = 0; i < this.members.length; i++) {

                All.push(this.everyMember.votes_with_party_pct);

                this.everyMember = this.members[i];


                switch (this.everyMember.party) {
                    case "R":
                        Reps.push(this.everyMember.votes_with_party_pct);
                        break;
                    case "D":
                        Dems.push(this.everyMember.votes_with_party_pct);
                        break;
                    case "I":
                        Inds.push(this.everyMember.votes_with_party_pct);
                        break;

                }

            }


            this.statistics.votedWithPartyR = Math.round(this.addElements(Reps) / this.statistics.numR);
            this.statistics.votedWithPartyD = Math.round(this.addElements(Dems) / this.statistics.numD);
            this.totalPercentage = Math.round(this.addElements(All) / this.myTotal);


            if (this.statistics.numI == 0) {
                this.statistics.votedWithPartyI = 0;
            } else {
                this.statistics.votedWithPartyI = Math.round(this.addElements(Inds) / this.statistics.numI);

            }
        },
        
        addElements (reveivedArray){
            
            var sum = reveivedArray.reduce((total, amount) => total + amount);
            return sum;
        },
        


        engaged(direction) {

            if (direction == "least") {
                this.sortedArray = this.members.sort((fst, snd) => snd.missed_votes_pct - fst.missed_votes_pct);
                //we sort the members based on how many votes they missed
            } else if (direction == "most") {
                this.sortedArray = this.members.sort((fst, snd) => fst.missed_votes_pct - snd.missed_votes_pct);

            }


            // take only 10% from sortedArray now we know how many are 10%
            this.checkedPrecent = (this.sortedArray.length / 10).toFixed(0); // returns a number 
            // save in statistics this 10%



            this.sortedArray.forEach(member => {
                if (this.tenPrcArray.length < (this.checkedPrecent - 1)) {
                    this.tenPrcArray.push(member); //44
    

                } else if (this.tenPrcArray.length == (this.checkedPrecent - 1)) {
                    this.myArray.push(member);
                    this.tenPrcArray.push(member); //45

                } else {

                    this.specialArray.push(member); // 405
                }

            })


            this.specialArray.forEach(item => {

                this.myArray.forEach(thing => {
                    if (thing != item) {
                        if (item.missed_votes_pct == thing.missed_votes_pct) {
                            if (!this.tenPrcArray.includes(item)) {
                                this.tenPrcArray.push(item)
                            }

                        }

                    }


                })
            })

            if (direction == "least") {
                this.statistics.leastEngaged = this.tenPrcArray;
            } else if (direction == "most") {
                this.statistics.mostEngaged = this.tenPrcArray;

            }

        },


        loyal(direction) {




            if (direction == "worst") {
                this.sortedArray = this.members.sort(function (a, b) {
                    return a.votes_with_party_pct - b.votes_with_party_pct //we sort the members based on how many votes they missed 
                });
            } else {
                this.sortedArray = this.members.sort(function (a, b) {
                    return b.votes_with_party_pct - a.votes_with_party_pct
                });
            }

            // what is 10%?
            this.checkedPrecent = (this.sortedArray.length / 10).toFixed(0);



            //remove this number from the sortedArray and put it in the array tenPrcArray

            this.sortedArray.forEach(member => {
                if (this.tenPrcArray.length <= (this.checkedPrecent - 1)) { // as long as the length of tenPrcArray is lower than our number  
                    this.tenPrcArray.push(member);
                } else { //if it is longer 
                    if (member.votes_with_party_pct == (member - 1).votes_with_party_pct) {
                        this.tenPrcArray.push(member);
                    }
                }

            })


            if (direction == "worst") {
                this.statistics.worstLoyal = this.tenPrcArray;

            } else {
                this.statistics.bestLoyal = this.tenPrcArray;

            }



        }



    }

})
