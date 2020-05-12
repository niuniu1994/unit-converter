let app = new Vue({
        el: "#app",
        data: {
            inputNum: 0,
            inputValue: 1,
            outputValue: 1,
            selected: "1",
            selectedInput: "1",
            selectedOutput: "1",

            options: [
                {text: "Time", value: "1"},
                {text: "Length", value: "2"},
            ],
            optionTime: [
                {text: "Nanosecond", value: 1e-9},
                {text: "Microsecond", value: 1e-6},
                {text: "Millisecond", value: 1e-3},
                {text: "Second", value: 1},
                {text: "Minute", value: 60},
                {text: "Hour", value: 3600},
                {text: "Day", value: 86400},
                {text: "Week", value: 604800},
                {text: "Month", value: 2.628e+6},
                {text: "Year", value: 3.154e+7},
                // num * input-value / output-value
            ],
            optionLength: [
                {text: "Kilometre", value: 1000},
                {text: "Metre", value: 1},
                {text: "Centimetre", value: 0.01},
                {text: "Millimetre", value: 0.001},
                {text: "Micrometre", value: 1e-6},
                {text: "Nanometre", value: 1e-9},
                {text: "Mile", value: 1609},
                {text: "Yard", value: 0.9144},
                {text: "Inch", value: 0.0244}
            ],
            optionSelected: []
        },
        mounted: function () {
            this.checkOption();
        },
        watch: {
            selected: function () {
                this.checkOption();
            }
        },
        computed: {
            outputNum: function () {
                if (this.outputValue != 0){
                    let str = parseFloat(this.inputNum) * parseFloat(this.inputValue) / parseFloat(this.outputValue);
                    let nums = String(str).split(".");
                    if (nums.length > 1) {
                        if (nums[1].length > 5) {
                            return str.toExponential(5);
                        }
                    }
                    return str;
                }
                return 0;
            }
        },
        methods: {
            checkOption() {
                switch (this.selected) {
                    case "1":
                        this.optionSelected = this.optionTime;
                        this.inputValue = 1;
                        this.outputValue = 1;
                        break;
                    case "2":
                        this.optionSelected = this.optionLength;
                        this.inputValue = 1;
                        this.outputValue = 1;
                        break;
                }
            }
        }

    }
)