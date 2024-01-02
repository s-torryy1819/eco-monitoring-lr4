export default {
    components: {},
    data() {
        return {
            dataSet: this.getDataSet(),
            selectedPollutionEntry: null,
            selectedTax: null
        }
    },
    methods: {
        setSelectedPollution(selectedPollutionEntry) {
            if (this.selectedPollutionEntry === selectedPollutionEntry)
                this.selectedPollutionEntry = null
            else
                this.selectedPollutionEntry = selectedPollutionEntry
        },
        setSelectedTax(selectedTax) {
            if (this.selectedTax === selectedTax)
                this.selectedTax = null
            else
                this.selectedTax = selectedTax
        },
        getDataSet() {
            let response = ""

            $.ajax({
                type: "GET",
                url: "/getDataSet",
                async: false,
                encode: false,
            }).done(function (data) {
                response = data;
            })

            return response
        }
    },
    computed: {
        atmosphericTax() {
            return this.selectedPollutionEntry?.pollutantVolume * this.selectedPollutionEntry?.atmosphericTax;
        },
        waterTax() {
            return this.selectedPollutionEntry?.pollutantVolume * this.selectedPollutionEntry?.waterTax;
        },
        wasteTax() {
            return this.selectedPollutionEntry?.pollutantVolume * this.selectedPollutionEntry?.wasteTax;
        },
        radioactiveTax() {
            return this.selectedPollutionEntry?.pollutantVolume * this.selectedPollutionEntry?.radioactiveTax;
        },
        wholeTaxSum() {
            return (this.atmosphericTax + this.waterTax + this.wasteTax + this.radioactiveTax);
        },
    },
    template: `
        <div id="tax_background">

            <br><h1>Ecological Tax</h1><br/>
            <div id="title_description_wrapper">
                <div class="badge-warning text-white" id="title_wrapper">
                    <div id="title">
                    This is a service for calculating an ecological tax that companies, which pollute the environment, have to pay
                    </div>
                </div>
            </div><br/>

            <table class="table table-bordered table-hover">
                <thead class="table-success">
                    <tr>
                        <th scope="col">Index of Pollution</th>
                        <th scope="col">Company Name</th>
                        <th scope="col">Pollutant name</th>
                        <th scope="col">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    <template v-for="data in dataSet">
                        <tr>
                            <td scope="row">{{data.indexOfpollution}}</td>
                            <td>{{data.company}}</td>
                            <td>{{data.pollutant}}</td>
                            <td>
                                <input type="button" class="btn btn-info" @click="setSelectedPollution(data)" value="Show volume"/>
                            </td>
                        </tr>
                        <tr>
                            <td colspan="4" style="padding-top: 0px;padding-bottom: 0px;">
                                <div class="pollutant-selector-wrapper" :class="selectedPollutionEntry?.indexOfpollution === data.indexOfpollution ? 'show' : 'hide'">
                                
                                
                                <table class="table table-bordered table-hover">
                                <thead class="table-success">
                                    <tr>
                                        <th scope="col">Pollutant Name</th>
                                        <th scope="col">Pollutant Volume (tonne)</th>
                                        <th scope="col">Atmospheric Tax Standart Value(ua hryvnia)</th>
                                        <th scope="col">Water Tax Standart Value(ua hryvnia)</th>
                                        <th scope="col">Waste Tax Standart Value(ua hryvnia)</th>
                                        <th scope="col">Radioactive Tax Standart Value(ua hryvnia)</th>
                                        <th scope="col">Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                        <tr>
                                            <td>{{selectedPollutionEntry?.pollutant}}</td>
                                            <td scope="row">{{selectedPollutionEntry?.pollutantVolume}}</td>
                                            <td scope="row">{{selectedPollutionEntry?.atmosphericTax}}</td>
                                            <td scope="row">{{selectedPollutionEntry?.waterTax}}</td>
                                            <td scope="row">{{selectedPollutionEntry?.wasteTax}}</td>
                                            <td scope="row">{{selectedPollutionEntry?.radioactiveTax}}</td>
                                            <td>
                                                <input type="button" class="btn btn-info" @click="setSelectedTax(data.indexOfpollution)" value="Show Taxes"/>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td colspan="7" style="padding-top: 0px;padding-bottom: 0px;">
                                                <div class="pollutant-selector-wrapper" :class="selectedTax === data.indexOfpollution ? 'show' : 'hide'">
                                                
                                                    <h3 class="text-info">Whole Tax Sum : {{wholeTaxSum}} <i>ua hryvnia</i></h3>
                                                    <h3 class="text-success">Atmopspheric Tax : {{atmosphericTax}} <i>ua hryvnia</i></h3>
                                                    <h3 class="text-primary">Water Tax : {{waterTax}} <i>ua hryvnia</i></h3>
                                                    <h3 class="text-warning">Waste Tax : {{wasteTax}} <i>ua hryvnia</i></h3>
                                                    <h3 class="text-danger">Radioactive Tax : {{radioactiveTax}} <i>ua hryvnia</i></h3>

                                                </div>
                                            </td>
                                        </tr>
                                </tbody>
                            </table>
                                </div>
                            </td>
                        </tr>
                    </template>
                </tbody>
            </table>
        </div>
    `
}
