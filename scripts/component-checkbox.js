    Vue.component("my-checkbox", {
        template: `<div>


              <div class="checkBoxArea d-none d-md-block mb-2 mt-4"><span class="mr-4">Filter by party:</span>

        <input type="checkbox" name="party" value="R" id="partyR" @click="filter"><span class="ml-2 mr-4">Republican</span>
        <input type="checkbox" name="party" value="D" id="partyD" @click="filter"><span class="ml-2 mr-4">Democrat</span>
        <input type="checkbox" name="party" value="I" id="partyI" @click="filter"><span class="ml-2 mr-4">Independant</span>



   Filter by State: <select name = "state" id = "stateId" @change = "filter">
        <option value = "ALL">ALL</option><option v-for = "item in sortedStates"> 
{{item}}
    </option>

        </select>


            
           </div>
           
             <div class="checkBoxArea d-xs-block d-md-none mb-2 mt-4"><span>Filter by party:</span>
             
             <div class="row mt-2 mb-2">
        <div class="col pr-0"><input type="checkbox" name="party" value="R" id="partyR" @click="filter"><span class="ml-1">Republican</span></div> 
        <div class="col pr-0 pl-0"><input type="checkbox" name="party" value="D" id="partyD" @click="filter"><span class="ml-1">Democrat</span></div>
        <div class="col pl-0"><input type="checkbox" name="party" value="I" id="partyI" @click="filter"><span class="ml-1">Independant</span></div>
         </div>
         
          Filter by State: <select name = "state" id = "stateId" @change = "filter">
        <option value = "ALL">ALL</option><option v-for = "item in sortedStates"> 
{{item}}
    </option>

        </select>
 
         
            
           </div>





            </div>`
    })

    new Vue({
        el: '#component-checkbox'
    })
