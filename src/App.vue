<template>
	<div id="app" class="container mx-auto flex flex-col h-screen justify-center">

		<div class="p-3 w-1/2 mx-auto">
			<img src="./img/content.png" alt="" ref="logo" width="100">
			<div class="flex flex-row my-4 justify-between">
				<date-picker v-model="value" lang="de" format="DD.MM.YYYY" range class="border-none outline-none" style="width: 65%"></date-picker>
				<input type="text" placeholder="Woche" class="h-9 border rounded border-gray-400 pl-2" style="width: 25%" v-model="woche" autofocus>
				<svg xmlns="http://www.w3.org/2000/svg" @click="clear" class="border h-auto stroke-current text-gray-800 rounded border-gray-400 p-1 hover:shadow" width="30" height="30" viewBox="0 0 24 24" fill="none"  stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path></svg>
			</div>

			<textarea name="content" id="" cols="30" rows="10" class="border rounded w-full p-3 border-gray-400" placeholder="Bericht einfügen" v-model="text"></textarea>
			<button class="bg-blue-600 w-full my-3 text-white text-xl font-medium p-3 rounded hover:shadow-md" @click="create"><span class="p-3">Bericht erstellen</span></button>

		</div>



		<img src="./img/banner.png" alt="" ref="banner" width="600" style="display: none">
	</div>
</template>

<script>

import DatePicker from 'vue2-datepicker';
import de from 'vue2-datepicker/locale/de'
import 'vue2-datepicker/index.css';
import jspdf from 'jspdf';

export default {
	name: 'app',
	components: { DatePicker },
	data() {
		return {
			value: '',
			woche: '',
			text: ''
		}
	},
	mounted() {
		de.formatLocale.firstDayOfWeek = 0
	},
	methods: {
		clear: function() {
			this.value = null,
			this.woche = null,
			this.text = null
		},
		create: function() {

			var doc = new jspdf({
				orientation: 'p',
				unit: 'px',
				format: 'a4'
			});

			console.log(doc.getFontList());

			doc.addImage(this.$refs.logo, 'PNG', 355, 10, 80, 88);
			doc.addImage(this.$refs.banner, 'PNG', 80, 500, 266, 18);

			doc.setFont('helvetica', 'bold');

			doc.setFont('helvetica', 'bold');
			doc.setFontSize(12);

			doc.text('Ausbildungsnachweis', 330, 110);
			doc.setFont('Helvetica', '');
			doc.setFontSize(12);

			doc.text(`${this.woche}. Ausbildungswoche | 4ACES Tech | vom ${this.dateReturn(this.value[0], this.value[1])}`, 425, 125, {align:'right'});
			doc.text(`BBS2 Wolfsburg | Max Walter | Ausbildungsjahr: 2`, 425, 135, {align:'right'})


			doc.setFont("Helvetica", "bold");
			doc.setFontSize(14);
			doc.text(`${this.woche}. Ausbildungswoche`, 425, 175, {align:'right'})

			doc.text('Tätigkeiten:', 50, 210);

			doc.setFont("Helvetica", "");
			doc.setFontSize(12);

			doc.text(this.text, 50, 230, {align:'left'});

			doc.save(`${this.woche}_Woche_${this.dateReturn(this.value[0], this.value[1])}.pdf`);

		},
		dateReturn: function(firstDate, secondDate) {
			/* this.dateReturn(this.value[0], this.value[1]) */
			var FirstNewDate = new Date(Date.parse(firstDate));
			var SecondNewDate = new Date(Date.parse(secondDate));
			return (FirstNewDate.getDate() + "." + (FirstNewDate.getMonth() + 1) + "." + FirstNewDate.getFullYear()) + " bis " + (SecondNewDate.getDate() + "." + (SecondNewDate.getMonth() + 1) + "." + SecondNewDate.getFullYear());
		}
	},

}
</script>
