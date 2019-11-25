<template>
  <div id="app" class="container mx-auto flex flex-col h-screen justify-center">

    <div class="p-3 w-1/2 mx-auto">
      <img src="./img/main.png" alt="" ref="logo" width="200">
      <div class="row my-4">
        <date-picker v-model="value" :lang="lang" :first-day-of-week="1" range format="DD.MM.YYYY" class="w-4/6 border-none outline-none"></date-picker>
        <input type="text" placeholder="Woche" class="w-3/12 h-8 border rounded float-right p-1 border-gray-400" v-model="woche">
      </div>

      <textarea name="content" id="" cols="30" rows="10" class="border rounded w-full p-3 border-gray-400" placeholder="Bericht einfügen" v-model="text"></textarea>
      <button class="bg-blue-400 w-full my-3 text-white text-xl font-medium p-3 rounded" @click="create"><span class="p-3">Bericht erstellen</span></button>

    </div>


    
    <img src="./img/banner.png" alt="" ref="banner" width="600" style="display: none">
  </div>
</template>

<script>

import DatePicker from 'vue2-datepicker';
import jspdf from 'jspdf';

export default {
  name: 'app',
  components: { DatePicker },
  data() {
    return {
      value: '',
      woche: '',
      text: '',
      lang: {
        days: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
        months: ['Januar', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
      },
    }
  },
  methods: {
    create: function() {

      var doc = new jspdf({
        orientation: 'p',
        unit: 'px',
        format: 'a4'
      });

      doc.addImage(this.$refs.logo, 'PNG', 225, 35, 200, 48);
      doc.addImage(this.$refs.banner, 'PNG', 80, 500, 266, 18);


      doc.setFontStyle("bold");
      doc.setFontSize(12);

      doc.text('Ausbildungsnachweis', 330, 110);
      doc.setFontStyle("normal");
      doc.setFontSize(12);

      doc.text(`${this.woche}. Ausbildungswoche | NeosIT | vom ${this.dateReturn(this.value[0], this.value[1])}`, 425, 125, {align:'right'});
      doc.text(`BBS2 Wolfsburg | Max Walter | Ausbildungsjahr: 1`, 425, 135, {align:'right'})


      doc.setFontStyle("bold");
      doc.setFontSize(14);
      doc.text(`${this.woche}. Ausbildungswoche`, 425, 175, {align:'right'})

      doc.text('Tätigkeiten:', 50, 210);

      doc.setFontStyle("normal");
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
