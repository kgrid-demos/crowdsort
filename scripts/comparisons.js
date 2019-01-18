

Vue.component("swatch", {
	props: ["active", "swatch", "effect"],
	template: `
		<div class="grid-item">

			<div class="grid-cell--top" :style="effect(swatch)" >
              
                <span
                    :class="{ bounce: swatch == active }"
                ></span>
            </div>
			
              <div class="grid-cell--bottom" :style="{ color: swatch.color }">
				{{ swatch.drug.toUpperCase() }}
			</div>
		</div>
	`,
              
              
    methods:  {
        onClickButtonLeft (event) {
        this.$emit('clicked', "Not Very Certain")
    },
        onClickButtonRight (event) {
        this.$emit('clicked', "Very Certain")
    }

              
}
    
})

var app = new Vue({
	el: "#app",
	data: {
		active: "",
		possibleColors: ["#04315D","#D3A40A"],
		swatches: [
		    { color: "", drug: "Levothyroxine"},
				{ color: "", drug: "Lisinopril"},
				{ color: "", drug: "Atorvastatin"},
				{ color: "", drug: "Metformin"},
				{ color: "", drug: "Amlodipine"},
				{ color: "", drug: "Metoprolol"},
				{ color: "", drug: "Omeprazole"},
				{ color: "", drug: "Simvastatin"},
				{ color: "", drug: "Losartan"},
				{ color: "", drug: "Albuterol"},
				{ color: "", drug: "Gabapentin"},
				{ color: "", drug:"Hydrochlorothiazide"},
				{ color: "", drug:"Acetaminophen "},
				{ color: "", drug:"Hydrocodone"},
				{ color: "", drug:"Sertraline "},
				{ color: "", drug:"Furosemide"},
				{ color: "", drug:"Fluticasone"},
				{ color: "", drug:"Acetaminophen"},
				{ color: "", drug:"Amoxicillin"},
				{ color: "", drug:"Alprazolam"},
				{ color: "", drug:"Atenolol"},
				{ color: "", drug:"Citalopram"},
				{ color: "", drug:"Insulin Glargine"},
				{ color: "", drug:"Montelukast"},
				{ color: "", drug:"Trazodone "},
				{ color: "", drug:"Pantoprazole "},
				{ color: "", drug:"Escitalopram "},
				{ color: "", drug:"Pravastatin "},
				{ color: "", drug:"Bupropion"},
				{ color: "", drug:"Fluoxetine "},
				{ color: "", drug:"Carvedilol"},
				{ color: "", drug:"Prednisone"},
				{ color: "", drug:"Tamsulosin "},
				{ color: "", drug:"Potassium"},
				{ color: "", drug:"Clopidogrel "},
				{ color: "", drug:"Ibuprofen"},
				{ color: "", drug:"Meloxicam"},
				{ color: "", drug:"Rosuvastatin "},
				{ color: "", drug:"Aspirin"},
				{ color: "", drug:"Tramadol "},
				{ color: "", drug:"Zolpidem "},
				{ color: "", drug:"Warfarin"},
				{ color: "", drug:"Clonazepam"},
				{ color: "", drug:"Propranolol "},
				{ color: "", drug:"Glipizide"},
				{ color: "", drug:"Dextroamphetamine"},
				{ color: "", drug:"Amphetamine"},
				{ color: "", drug:"Cyclobenzaprine"},
				{ color: "", drug:"Methylphenidate"},
				{ color: "", drug:"Duloxetine"},
				{ color: "", drug:"Azithromycin"},
				{ color: "", drug:"Ranitidine"},
				{ color: "", drug:"Venlafaxine "},
				{ color: "", drug:"Allopurinol"},
				{ color: "", drug:"Hydrochlorothiazide"},
				{ color: "", drug:"Lisinopril"},
				{ color: "", drug:"Oxycodone"},
				{ color: "", drug:"Ergocalciferol"},
				{ color: "", drug:"Lorazepam"},
				{ color: "", drug:"Estradiol"},
				{ color: "", drug:"Glimepiride"},
				{ color: "", drug:"Diltiazem"},
				{ color: "", drug:"Paroxetine"},
				{ color: "", drug:"Loratadine"},
				{ color: "", drug:"Spironolactone"},
				{ color: "", drug:"Fenofibrate"},
				{ color: "", drug:"Naproxen"},
				{ color: "", drug:"Esomeprazole"},
				{ color: "", drug:"Lamotrigine"},
				{ color: "", drug:"Metronidazole"},
				{ color: "", drug:"Lovastatin"},
				{ color: "", drug:"Alendronate"},
				{ color: "", drug:"Cetirizine"},
				{ color: "", drug:"Finasteride"},
				{ color: "", drug:"Clonidine"},
				{ color: "", drug:"Diclofenac"},
				{ color: "", drug:"Latanoprost"},
				{ color: "", drug:"Sitagliptin"},
				{ color: "", drug:"Pregabalin"},
				{ color: "", drug:"Regular Insulin"},
				{ color: "", drug:"Topiramate"},
				{ color: "", drug:"Quetiapine"},
				{ color: "", drug:"Insulin Aspart"},
				{ color: "", drug:"Amitriptyline"},
				{ color: "", drug:"Levetiracetam"},
				{ color: "", drug:"Buspirone"},
				{ color: "", drug:"Ondansetron"},
				{ color: "", drug:"Valsartan"},
				{ color: "", drug:"Ferrous Sulfate"},
				{ color: "", drug:"Enalapril"},
				{ color: "", drug:"Tiotropium"},
				{ color: "", drug:"Folic Acid"},
				{ color: "", drug:"Hydroxyzine"},
				{ color: "", drug:"Donepezil"},
				{ color: "", drug:"Lisdexamfetamine"},
				{ color: "", drug:"Insulin Lispro"},
				{ color: "", drug:"Isosorbide Mononitrate"},
				{ color: "", drug:"Ciprofloxacin"},
				{ color: "", drug:"Benazepril"},
				{ color: "", drug:"Rivaroxaban"},
				{ color: "", drug:"Cephalexin"},
				{ color: "", drug:"Oxybutynin"},
				{ color: "", drug:"Doxycycline"},
				{ color: "", drug:"Ropinirole "},
				{ color: "", drug:"Diazepam"},
				{ color: "", drug:"Hydrocodone"},
				{ color: "", drug:"Sumatriptan"},
				{ color: "", drug:"Pioglitazone"},
				{ color: "", drug:"Tizanidine"},
				{ color: "", drug:"Thyroid"},
				{ color: "", drug:"Celecoxib"},
				{ color: "", drug:"Insulin Detemir"},
				{ color: "", drug:"Triamcinolone"},
				{ color: "", drug:"Apixaban"},
				{ color: "", drug:"Baclofen"},
				{ color: "", drug:"Famotidine"},
				{ color: "", drug:"Nebivolol"},
				{ color: "", drug:"Docusate"},
				{ color: "", drug:"Mirtazapine"},
				{ color: "", drug:"Divalproex"},
				{ color: "", drug:"Verapamil"},
				{ color: "", drug:"Aripiprazole"},
				{ color: "", drug:"Gemfibrozil"},
				{ color: "", drug:"Hydroxychloroquine"},
				{ color: "", drug:"Prednisolone"},
				{ color: "", drug:"Cyanocobalamin"},
				{ color: "", drug:"Hydralazine"},
				{ color: "", drug:"Omega-3-acid Ethyl Esters"},
				{ color: "", drug:"Lansoprazole"},
				{ color: "", drug:"Timolol"},
				{ color: "", drug:"Hydrocortisone"},
				{ color: "", drug:"Ezetimibe"},
				{ color: "", drug:"Digoxin"},
				{ color: "", drug:"Testosterone"},
				{ color: "", drug:"Memantine"},
				{ color: "", drug:"Methylprednisolone"},
				{ color: "", drug:"Estrogens, Conjugated"},
				{ color: "", drug:"Adalimumab"},
				{ color: "", drug:"Clindamycin"},
				{ color: "", drug:"Methotrexate"},
				{ color: "", drug:"Ramipril"},
				{ color: "", drug:"Nifedipine"},
				{ color: "", drug:"Methylcellulose"},
				{ color: "", drug:"Guanfacine"},
				{ color: "", drug:"Doxazosin"},
				{ color: "", drug:"Morphine"},
				{ color: "", drug:"Risperidone"},
				{ color: "", drug:"Promethazine"},
				{ color: "", drug:"Levofloxacin"},
				{ color: "", drug:"Meclizine"},
				{ color: "", drug:"Levocetirizine"},
				{ color: "", drug:"Olmesartan"},
				{ color: "", drug:"Mometasone"},
				{ color: "", drug:"Brimonidine"},
				{ color: "", drug:"Valacyclovir"},
				{ color: "", drug:"Terazosin"},
				{ color: "", drug:"Solifenacin"},
				{ color: "", drug:"Irbesartan"},
				{ color: "", drug:"Glyburide"},
				{ color: "", drug:"Fluconazole"},
				{ color: "", drug:"Chlorthalidone"},
				{ color: "", drug:"Beclomethasone"},
				{ color: "", drug:"Polyethylene Glycol 3350"},
				{ color: "", drug:"Dicyclomine"},
				{ color: "", drug:"Magnesium"},
				{ color: "", drug:"Nitroglycerin"},
				{ color: "", drug:"Carisoprodol"},
				{ color: "", drug:"Ipratropium"},
				{ color: "", drug:"Clobetasol"},
				{ color: "", drug:"Temazepam"},
				{ color: "", drug:"Nitrofurantoin"},
				{ color: "", drug:"Methocarbamol"},
				{ color: "", drug:"Liraglutide"},
				{ color: "", drug:"Progesterone"},
				{ color: "", drug:"Dexlansoprazole"},
				{ color: "", drug:"Nortriptyline"},
				{ color: "", drug:"Benzonatate"},
				{ color: "", drug:"Canagliflozin"},
				{ color: "", drug:"Acyclovir"},
				{ color: "", drug:"Linagliptin"},
				{ color: "", drug:"Carbamazepine"},
				{ color: "", drug:"Amiodarone"},
				{ color: "", drug:"Mupirocin"},

		],

        confidenceIndicator: "",
        answer: "",
        other:"",

	},

	computed:{
		randomize_swatches : function() {
			// Calculations to randomize
			var random_number = Math.floor(Math.random() * 183);
			var random_number2 = Math.floor(Math.random() * 183);
			while(random_number == random_number2){
					random_number2 = Math.floor(Math.random() * 183);
			}
			// Return array with two swatches
			var a = []
			a.push(this.swatches[random_number])
			a.push(this.swatches[random_number2])
			//console.log(a);
			var random_number3 = Math.floor(Math.random() * 2);
			var number4 = 0;
			a[0].color = this.possibleColors[random_number3];
			if (random_number3 == 1) {number4 = 0} else {number4 = 1};
			a[1].color = this.possibleColors[number4];
			return a
		}
	},
	methods: {
        onClickedChild: function (confidenceIn) {
            this.confidenceIndicator = confidenceIn
        },
		// activate actives a swatch (color)
		activate: function (swatch) {
			this.active = swatch
            this.answer = swatch.drug
            // reloads the drug selection; 1 second before reload
            setTimeout(function(){window.location.reload()}, 1500)
		},
        // finds and saves the drug not chosen
		findother: function (Swatcharray) {
			if (this.answer == Swatcharray[0].drug) {
				 this.other = Swatcharray[1].drug }
				 else { this.other = Swatcharray[0].drug }
		},
		// gradient returns a precomposed gradient
		gradient: function (swatch) {
			return {
				background: swatch.color,
			}
		}
	}
})