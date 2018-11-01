var app = new Vue({

    el: '#app',
    data: {
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
        allMembers: [],
        everyMember: {},
        Reps: [],
        Dems: [],
        Inds: [],
        All: [],
        mytotal: 0,
        totalPercentage: 0,
        sum: 0,
        sortedArray: [],
        checkedPrecent: 0,
        tenPrcArray: [],
       


    },

    beforeCreate() {
        var data;
        var url;

        if (document.title.includes("House")) {
            url = "https://api.myjson.com/bins/j83do"
            //            url = "https://api.propublica.org/congress/v1/113/house/members.json";
        }

        if (document.title.includes("Senate")) {
            url = "https://api.myjson.com/bins/1eja30";
            //            url = "https://api.propublica.org/congress/v1/113/senate/members.json";
        }
        fetch(url)
            //
            //        fetch(url, {
            //                headers: new Headers({
            //                    'X-API-Key': 'JlFF4jpgMcRs9zuQsaUDjWkjbRE3KL1b3H2cs0Kl '
            //                })
            //            })
            .then(response => response.json())
            .then(realData => {

                data = realData;
                this.loading = false;

                this.allMembers = data.results[0].members;
                this.members = data.results[0].members;
                this.calculateStatistics();
                this.addElements1();
                this.addElements2();
                this.addElements3();
                this.addElements4();

                if (document.title.includes('Attendance')) {
                    engaged("least");
                    engaged("most");
                }
                if (document.title.includes('Loyalty')) {
                    loyal("best");
                    loyal("worst");
                }
                this.loyal();
                this.engaged();




            })
    },


    methods: {


        calculateStatistics() {
            for (var i = 0; i < this.members.length; i++) {

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

            this.mytotal = this.statistics.numR + this.statistics.numD + this.statistics.numI;

            // now we calculated the total amount - next we will calculate the votes with party 


            for (var i = 0; i < this.members.length; i++) {

                this.All.push(this.everyMember.votes_with_party_pct);

                this.everyMember = this.members[i];


                switch (this.everyMember.party) {
                    case "R":
                        this.Reps.push(this.everyMember.votes_with_party_pct); // basically we add all the percentages in an array, we build the sum and divide it by the amount of members 
                        break;
                    case "D":
                        this.Dems.push(this.everyMember.votes_with_party_pct);
                        break;
                    case "I":
                        this.Inds.push(this.everyMember.votes_with_party_pct);
                        break;

                }

            }




            //    console.log(statistics.numR)
            //    console.log(addElements(Reps)/statistics.numR);
            this.statistics.votedWithPartyR = Math.round(this.addElements2() / this.statistics.numR);
            this.statistics.votedWithPartyD = Math.round(this.addElements3() / this.statistics.numD);
            this.totalPercentage = Math.round(this.addElements4() / this.mytotal);
//            console.log(this.totalPercentage);

            if (this.statistics.numI == 0) {
                this.statistics.votedWithPartyI = 0;
            } else {
                this.statistics.votedWithPartyI = Math.round(this.addElements1() / this.statistics.numI);
//                console.log(this.statistics.votedWithPartyI);
            }
        },

        addElements1 (Inds) {
            //    if (recievedArray.length != 0) {

            this.sum = this.Inds.reduce((total, amount) => total + amount);
            //    console.log(sum);
            return this.sum;
            
            //    } else return 0;

        },
        
          addElements2 (Reps) {
            //    if (recievedArray.length != 0) {

            this.sum = this.Reps.reduce((total, amount) => total + amount);
            //    console.log(sum);
            return this.sum;
            
            //    } else return 0;

        },
        
          addElements3(Dems) {
            //    if (recievedArray.length != 0) {

            this.sum = this.Dems.reduce((total, amount) => total + amount);
            //    console.log(sum);
            return this.sum;
            
            //    } else return 0;

        },
        
               addElements4(All) {
            //    if (recievedArray.length != 0) {

            this.sum = this.All.reduce((total, amount) => total + amount);
            //    console.log(sum);
            return this.sum;
            
            //    } else return 0;

        },



       engaged(direction) {

            if (direction == "least") {
                this.sortedArray = this.members.sort(function (a, b) {
                    return b.missed_votes - a.missed_votes //we sort the members based on how many votes they missed 
                    console.log(this.sortedArray);
                });
            } else {
                this.sortedArray = this.members.sort(function (a, b) {
                    return a.missed_votes - b.missed_votes
                });
            }

            // take only 10% from sortedArray now we know how many are 10%
            this.checkedPrecent = this.sortedArray.length / 10; // returns a number 
            this.checkedPrecent = this.checkedPrecent.toFixed(0);
            // save in statistics this 10%


            for (i = 0; i < this.checkedPrecent; i++) {
                this.tenPrcArray.push(this.members[i]);
            }

            if (direction == "least") {
                this.statistics.leastEngaged = this.tenPrcArray;

            } else {
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

            // take only 10% from sortedArray
            this.checkedPrecent = this.sortedArray.length / 10;
            this.checkedPrecent = this.checkedPrecent.toFixed(0);
            // save in statistics this 10%


            for (i = 0; i < this.checkedPrecent; i++) {
                this.tenPrcArray.push(this.members[i]);
            }

            if (direction == "worst") {
                this.statistics.worstLoyal = this.tenPrcArray;

            } else {
                this.statistics.bestLoyal = this.tenPrcArray;

            }


        }



    }

})
