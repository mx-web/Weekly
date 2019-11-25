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

var htmlToPdfMake = require('html-to-pdfmake');
var pdfMake = require('pdfmake/build/pdfmake');
var pdfFonts = require('pdfmake/build/vfs_fonts');

pdfMake.vfs = pdfFonts.pdfMake.vfs;

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
      var html = htmlToPdfMake(`
        <div>
          <h1>My title</h1>
          <p>
            This is a sentence with a <strong>bold word</strong>, <em>one in italic</em>,
            and <u>one with underline</u>. And finally <a href="https://www.somewhere.com">a link</a>.
          </p>
        </div>
        `);


        var docDefinition = {
  content: [
    html
  ],
  styles:{
    'html-strong':{
      background:'yellow' // it will add a yellow background to all <STRONG> elements
    }
  }
};
 
var pdfDocGenerator = pdfMake.createPdf(docDefinition).download('dsdd.pdf');


    }
  
  }
  
}
</script>
