/* Main function to shuffle drug comparisons*/

// Create Vue instance called app
var app = new Vue({
	el: "#app",
	data: {
		active: "",
		possibleColors: ["#04315D","#655a52"],
		comparisons: [
			{ drug1: "Lisinopril", drug2: "Losartan"},
			{ drug1: "Lisinopril", drug2: "Amlodipine"},
			{ drug1: "Lisinopril", drug2: "Ibuprofen"},
			{ drug1: "Lisinopril", drug2: "Aspirin"},
			{ drug1: "Lisinopril", drug2: "Naproxen"},
			{ drug1: "Lisinopril", drug2: "Alprazolam"},
			{ drug1: "Lisinopril", drug2: "Clonazepam"},
			{ drug1: "Lisinopril", drug2: "Lorazepam"},
			{ drug1: "Lisinopril", drug2: "Amoxicillin"},
			{ drug1: "Lisinopril", drug2: "Azithromycin"},
			{ drug1: "Lisinopril", drug2: "Ciprofloxacin"},
			{ drug1: "Lisinopril", drug2: "Metformin"},
			{ drug1: "Lisinopril", drug2: "Glyburide"},
			{ drug1: "Lisinopril", drug2: "Liraglutide"},
			{ drug1: "Lisinopril", drug2: "Warfarin"},
			{ drug1: "Lisinopril", drug2: "Rivaroxaban"},
			{ drug1: "Lisinopril", drug2: "Apixaban"},
			{ drug1: "Lisinopril", drug2: "Sertraline"},
			{ drug1: "Lisinopril", drug2: "Citalopram"},
			{ drug1: "Lisinopril", drug2: "Amitriptyline"},

			{ drug1: "Losartan", drug2: "Amlodipine"},
			{ drug1: "Losartan", drug2: "Ibuprofen"},
			{ drug1: "Losartan", drug2: "Aspirin"},
			{ drug1: "Losartan", drug2: "Naproxen"},
			{ drug1: "Losartan", drug2: "Alprazolam"},
			{ drug1: "Losartan", drug2: "Clonazepam"},
			{ drug1: "Losartan", drug2: "Lorazepam"},
			{ drug1: "Losartan", drug2: "Amoxicillin"},
			{ drug1: "Losartan", drug2: "Azithromycin"},
			{ drug1: "Losartan", drug2: "Ciprofloxacin"},
			{ drug1: "Losartan", drug2: "Metformin"},
			{ drug1: "Losartan", drug2: "Glyburide"},
			{ drug1: "Losartan", drug2: "Liraglutide"},
			{ drug1: "Losartan", drug2: "Warfarin"},
			{ drug1: "Losartan", drug2: "Rivaroxaban"},
			{ drug1: "Losartan", drug2: "Apixaban"},
			{ drug1: "Losartan", drug2: "Sertraline"},
			{ drug1: "Losartan", drug2: "Citalopram"},
			{ drug1: "Losartan", drug2: "Amitriptyline"},

			{ drug1: "Amlodipine", drug2: "Ibuprofen"},
			{ drug1: "Amlodipine", drug2: "Aspirin"},
			{ drug1: "Amlodipine", drug2: "Naproxen"},
			{ drug1: "Amlodipine", drug2: "Alprazolam"},
			{ drug1: "Amlodipine", drug2: "Clonazepam"},
			{ drug1: "Amlodipine", drug2: "Lorazepam"},
			{ drug1: "Amlodipine", drug2: "Amoxicillin"},
			{ drug1: "Amlodipine", drug2: "Azithromycin"},
			{ drug1: "Amlodipine", drug2: "Ciprofloxacin"},
			{ drug1: "Amlodipine", drug2: "Metformin"},
			{ drug1: "Amlodipine", drug2: "Glyburide"},
			{ drug1: "Amlodipine", drug2: "Liraglutide"},
			{ drug1: "Amlodipine", drug2: "Warfarin"},
			{ drug1: "Amlodipine", drug2: "Rivaroxaban"},
			{ drug1: "Amlodipine", drug2: "Apixaban"},
			{ drug1: "Amlodipine", drug2: "Sertraline"},
			{ drug1: "Amlodipine", drug2: "Citalopram"},
			{ drug1: "Amlodipine", drug2: "Amitriptyline"},

			{ drug1: "Ibuprofen", drug2: "Aspirin"},
			{ drug1: "Ibuprofen", drug2: "Naproxen"},
			{ drug1: "Ibuprofen", drug2: "Alprazolam"},
			{ drug1: "Ibuprofen", drug2: "Clonazepam"},
			{ drug1: "Ibuprofen", drug2: "Lorazepam"},
			{ drug1: "Ibuprofen", drug2: "Amoxicillin"},
			{ drug1: "Ibuprofen", drug2: "Azithromycin"},
			{ drug1: "Ibuprofen", drug2: "Ciprofloxacin"},
			{ drug1: "Ibuprofen", drug2: "Metformin"},
			{ drug1: "Ibuprofen", drug2: "Glyburide"},
			{ drug1: "Ibuprofen", drug2: "Liraglutide"},
			{ drug1: "Ibuprofen", drug2: "Warfarin"},
			{ drug1: "Ibuprofen", drug2: "Rivaroxaban"},
			{ drug1: "Ibuprofen", drug2: "Apixaban"},
			{ drug1: "Ibuprofen", drug2: "Sertraline"},
			{ drug1: "Ibuprofen", drug2: "Citalopram"},
			{ drug1: "Ibuprofen", drug2: "Amitriptyline"},

			{ drug1: "Aspirin", drug2: "Naproxen"},
			{ drug1: "Aspirin", drug2: "Alprazolam"},
			{ drug1: "Aspirin", drug2: "Clonazepam"},
			{ drug1: "Aspirin", drug2: "Lorazepam"},
			{ drug1: "Aspirin", drug2: "Amoxicillin"},
			{ drug1: "Aspirin", drug2: "Azithromycin"},
			{ drug1: "Aspirin", drug2: "Ciprofloxacin"},
			{ drug1: "Aspirin", drug2: "Metformin"},
			{ drug1: "Aspirin", drug2: "Glyburide"},
			{ drug1: "Aspirin", drug2: "Liraglutide"},
			{ drug1: "Aspirin", drug2: "Warfarin"},
			{ drug1: "Aspirin", drug2: "Rivaroxaban"},
			{ drug1: "Aspirin", drug2: "Apixaban"},
			{ drug1: "Aspirin", drug2: "Sertraline"},
			{ drug1: "Aspirin", drug2: "Citalopram"},
			{ drug1: "Aspirin", drug2: "Amitriptyline"},

			{ drug1: "Naproxen", drug2: "Alprazolam"},
			{ drug1: "Naproxen", drug2: "Clonazepam"},
			{ drug1: "Naproxen", drug2: "Lorazepam"},
			{ drug1: "Naproxen", drug2: "Amoxicillin"},
			{ drug1: "Naproxen", drug2: "Azithromycin"},
			{ drug1: "Naproxen", drug2: "Ciprofloxacin"},
			{ drug1: "Naproxen", drug2: "Metformin"},
			{ drug1: "Naproxen", drug2: "Glyburide"},
			{ drug1: "Naproxen", drug2: "Liraglutide"},
			{ drug1: "Naproxen", drug2: "Warfarin"},
			{ drug1: "Naproxen", drug2: "Rivaroxaban"},
			{ drug1: "Naproxen", drug2: "Apixaban"},
			{ drug1: "Naproxen", drug2: "Sertraline"},
			{ drug1: "Naproxen", drug2: "Citalopram"},
	 		{ drug1: "Naproxen", drug2: "Amitriptyline"},

 			{ drug1: "Alprazolam", drug2: "Clonazepam"},
			{ drug1: "Alprazolam", drug2: "Lorazepam"},
			{ drug1: "Alprazolam", drug2: "Amoxicillin"},
			{ drug1: "Alprazolam", drug2: "Azithromycin"},
			{ drug1: "Alprazolam", drug2: "Ciprofloxacin"},
			{ drug1: "Alprazolam", drug2: "Metformin"},
			{ drug1: "Alprazolam", drug2: "Glyburide"},
			{ drug1: "Alprazolam", drug2: "Liraglutide"},
			{ drug1: "Alprazolam", drug2: "Warfarin"},
			{ drug1: "Alprazolam", drug2: "Rivaroxaban"},
			{ drug1: "Alprazolam", drug2: "Apixaban"},
			{ drug1: "Alprazolam", drug2: "Sertraline"},
			{ drug1: "Alprazolam", drug2: "Citalopram"},
			{ drug1: "Alprazolam", drug2: "Amitriptyline"},

			{ drug1: "Clonazepam", drug2: "Lorazepam"},
			{ drug1: "Clonazepam", drug2: "Amoxicillin"},
			{ drug1: "Clonazepam", drug2: "Azithromycin"},
			{ drug1: "Clonazepam", drug2: "Ciprofloxacin"},
			{ drug1: "Clonazepam", drug2: "Metformin"},
			{ drug1: "Clonazepam", drug2: "Glyburide"},
			{ drug1: "Clonazepam", drug2: "Liraglutide"},
			{ drug1: "Clonazepam", drug2: "Warfarin"},
			{ drug1: "Clonazepam", drug2: "Rivaroxaban"},
			{ drug1: "Clonazepam", drug2: "Apixaban"},
			{ drug1: "Clonazepam", drug2: "Sertraline"},
			{ drug1: "Clonazepam", drug2: "Citalopram"},
			{ drug1: "Clonazepam", drug2: "Amitriptyline"},

			{ drug1: "Lorazepam", drug2: "Amoxicillin"},
			{ drug1: "Lorazepam", drug2: "Azithromycin"},
			{ drug1: "Lorazepam", drug2: "Ciprofloxacin"},
			{ drug1: "Lorazepam", drug2: "Metformin"},
			{ drug1: "Lorazepam", drug2: "Glyburide"},
			{ drug1: "Lorazepam", drug2: "Liraglutide"},
			{ drug1: "Lorazepam", drug2: "Warfarin"},
			{ drug1: "Lorazepam", drug2: "Rivaroxaban"},
			{ drug1: "Lorazepam", drug2: "Apixaban"},
			{ drug1: "Lorazepam", drug2: "Sertraline"},
			{ drug1: "Lorazepam", drug2: "Citalopram"},
			{ drug1: "Lorazepam", drug2: "Amitriptyline"},

			{ drug1: "Amoxicillin", drug2: "Azithromycin"},
			{ drug1: "Amoxicillin", drug2: "Ciprofloxacin"},
			{ drug1: "Amoxicillin", drug2: "Metformin"},
			{ drug1: "Amoxicillin", drug2: "Glyburide"},
			{ drug1: "Amoxicillin", drug2: "Liraglutide"},
			{ drug1: "Amoxicillin", drug2: "Warfarin"},
			{ drug1: "Amoxicillin", drug2: "Rivaroxaban"},
			{ drug1: "Amoxicillin", drug2: "Apixaban"},
			{ drug1: "Amoxicillin", drug2: "Sertraline"},
			{ drug1: "Amoxicillin", drug2: "Citalopram"},
			{ drug1: "Amoxicillin", drug2: "Amitriptyline"},

			{ drug1: "Azithromycin", drug2: "Ciprofloxacin"},
			{ drug1: "Azithromycin", drug2: "Metformin"},
			{ drug1: "Azithromycin", drug2: "Glyburide"},
			{ drug1: "Azithromycin", drug2: "Liraglutide"},
			{ drug1: "Azithromycin", drug2: "Warfarin"},
			{ drug1: "Azithromycin", drug2: "Rivaroxaban"},
			{ drug1: "Azithromycin", drug2: "Apixaban"},
			{ drug1: "Azithromycin", drug2: "Sertraline"},
			{ drug1: "Azithromycin", drug2: "Citalopram"},
			{ drug1: "Azithromycin", drug2: "Amitriptyline"},

			{ drug1: "Ciprofloxacin", drug2: "Metformin"},
			{ drug1: "Ciprofloxacin", drug2: "Glyburide"},
			{ drug1: "Ciprofloxacin", drug2: "Liraglutide"},
			{ drug1: "Ciprofloxacin", drug2: "Warfarin"},
			{ drug1: "Ciprofloxacin", drug2: "Rivaroxaban"},
			{ drug1: "Ciprofloxacin", drug2: "Apixaban"},
			{ drug1: "Ciprofloxacin", drug2: "Sertraline"},
			{ drug1: "Ciprofloxacin", drug2: "Citalopram"},
			{ drug1: "Ciprofloxacin", drug2: "Amitriptyline"},

			{ drug1: "Metformin", drug2: "Glyburide"},
			{ drug1: "Metformin", drug2: "Liraglutide"},
			{ drug1: "Metformin", drug2: "Warfarin"},
			{ drug1: "Metformin", drug2: "Rivaroxaban"},
			{ drug1: "Metformin", drug2: "Apixaban"},
			{ drug1: "Metformin", drug2: "Sertraline"},
			{ drug1: "Metformin", drug2: "Citalopram"},
			{ drug1: "Metformin", drug2: "Amitriptyline"},

			{ drug1: "Glyburide", drug2: "Liraglutide"},
			{ drug1: "Glyburide", drug2: "Warfarin"},
			{ drug1: "Glyburide", drug2: "Rivaroxaban"},
			{ drug1: "Glyburide", drug2: "Apixaban"},
			{ drug1: "Glyburide", drug2: "Sertraline"},
			{ drug1: "Glyburide", drug2: "Citalopram"},
			{ drug1: "Glyburide", drug2: "Amitriptyline"},

			{ drug1: "Liraglutide", drug2: "Warfarin"},
			{ drug1: "Liraglutide", drug2: "Rivaroxaban"},
			{ drug1: "Liraglutide", drug2: "Apixaban"},
			{ drug1: "Liraglutide", drug2: "Sertraline"},
			{ drug1: "Liraglutide", drug2: "Citalopram"},
			{ drug1: "Liraglutide", drug2: "Amitriptyline"},

			{ drug1: "Warfarin", drug2: "Rivaroxaban"},
			{ drug1: "Warfarin", drug2: "Apixaban"},
			{ drug1: "Warfarin", drug2: "Sertraline"},
			{ drug1: "Warfarin", drug2: "Citalopram"},
			{ drug1: "Warfarin", drug2: "Amitriptyline"},

			{ drug1: "Rivaroxaban", drug2: "Apixaban"},
			{ drug1: "Rivaroxaban", drug2: "Sertraline"},
			{ drug1: "Rivaroxaban", drug2: "Citalopram"},
			{ drug1: "Rivaroxaban", drug2: "Amitriptyline"},

			{ drug1: "Apixaban", drug2: "Sertraline"},
			{ drug1: "Apixaban", drug2: "Citalopram"},
			{ drug1: "Apixaban", drug2: "Amitriptyline"},

			{ drug1: "Sertraline", drug2: "Citalopram"},
			{ drug1: "Sertraline", drug2: "Amitriptyline"},

			{ drug1: "Citalopram", drug2: "Amitriptyline"}
		],
		answer: "",
        other: "",
        shuffledComparisons: "",
        index: 0,
        colorIndex: 0,
        postBody: {
			date: "",
			time: "",
			comparison: "",
			userSelected: "",
			userNotSelected: ""
		},
		clicked: false
    },
    computed: {
        shuffleComparisons: function () {
            return this.comparisons.sort((a, b) => Math.random() > .5 ? -1 : 1);
        },
        currentComparison: function () {
            var target = {};
            if (this.index < this.comparisons.length) {
                var a = this.shuffleComparisons[this.index];
                var b = [];
                b.push(a.drug1);
                b.push(a.drug2);
                // Random card assignment
                var i = Math.round(Math.random());
                target.left = b[i];
                target.right = b[1-i];
            }
            return target;
        },
		choicesLeft: function() {
        	var count =  this.comparisons.length - this.index;
			console.log(count);
			return count;
		},
        otherColor: function () {
            if (this.colorIndex == 0) {
                return 1;
            } else {
                return 0;
            }
        }
    },
	methods: {
        makeSelection: function(choice) {

            var self = this;

            if (this.clicked) {
            	return
			} else {

            	this.clicked = true;

				if (choice == 0) {
					this.answer = this.currentComparison.left;
					this.other = this.currentComparison.right;
				} else {
					this.answer = this.currentComparison.right;
					this.other = this.currentComparison.left;
				}

				// Populate postBody
				this.postBody.userSelected = this.answer;
				this.postBody.userNotSelected = this.other;
				this.postBody.comparison = this.currentComparison.left + ", " + this.currentComparison.right;
				this.postBody.date = moment().format('L');
				this.postBody.time = moment().format("HH:mm:ss.SSS");

				// TESTING
				console.log(`Comparison: ${this.postBody.comparison}`)

				// Send a POST request
				axios({
					method: 'post',
					url: './selectionSort',
					data: this.postBody
				})
					.then(function (response) {
						// increment index when successful response
						console.log(response);
						self.index += 1;
						self.clicked = false;
						self.colorIndex = Math.random() > .5 ? 0 : 1;
					})
					.catch(function (error) {
						console.log(error);
					});
			}
		}
	},
});