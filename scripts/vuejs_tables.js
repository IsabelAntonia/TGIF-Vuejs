new Vue({
    el: '#vueTest',
    data: {
        loading: true,
        allMembers: [],
        members: [],
        sortedStates: [],
        noResults: false
    },

    beforeCreate() {   
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
                    'X-API-Key': 'JlFF4jpgMcRs9zuQsaUDjWkjbRE3KL1b3H2cs0Kl'
                })
            })
            .then(response => response.json())
            .then(realData => {

                data = realData;
                this.loading = false;

                this.allMembers = data.results[0].members;
                this.members = data.results[0].members;

                this.createOptionElements();
            })
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
            
            if (this.members.length === 0){
                this.noResults = true;
            }
            
          
        },
        createOptionElements() {
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
