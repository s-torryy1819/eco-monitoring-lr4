export default {
    components: {},
    data() {
        return {
            allData: this.getDataSet()
        }
    },
    computed: {},
    methods: {
        getDataSet() {
            let response = "";

            $.ajax({
                type: "GET",
                url: "/getDataSet",
                async: false,
                encode: false,
            }).done(function (data) {
                response = data;
            });

            return response;
        }
    },
    template: `

    <div>
    <br/><h1>All data about pollution of the environment</h1><br/>
    <table class="table table-bordered table-hover">
        <thead class="table-success">
            <tr>
                <th scope="col">Id of pollution</th>
                <th scope="col">Company Name</th>
                <th scope="col">Pollutant Name</th>
                <th scope="col">Pollutant Volume (tonne)</th>
                <th scope="col">Atmospheric Tax Standart Value(ua hryvnia)</th>
                <th scope="col">Water Tax Standart Value(ua hryvnia)</th>
                <th scope="col">Waste Tax Standart Value(ua hryvnia)</th>
                <th scope="col">Radioactive Tax Standart Value(ua hryvnia)</th>
                <th scope="col">Whole Tax Sum(ua hryvnia)</th>
            </tr>
        </thead>
        <tbody>
            <template v-for="data in allData">
                <tr>
                    <td scope="row">{{data.indexOfpollution}}</td>
                    <td>{{data.company}}</td>
                    <td>{{data.pollutant}}</td>
                    <td>{{data.pollutantVolume}}</td>
                    <td>{{data.atmosphericTax}}</td>
                    <td>{{data.waterTax}}</td>
                    <td>{{data.wasteTax}}</td>
                    <td>{{data.radioactiveTax}}</td>
                    <td>{{data.wholeTax}}</td>
                </tr>
            </template>
        </tbody>
    </table>
    </div>
    `
}
