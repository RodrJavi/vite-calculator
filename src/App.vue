<script setup>
  import {ref} from 'vue';
  import TipPercent from './components/TipPercent.vue';

  const cost = ref();
  const guests = ref();

</script>

<template>
  <div className="bg-lgcyan">
    <h2 className="text-dgcyan">Splitter</h2>
    <div className="flex flex-col bg-white rounded-t-xl p-5 gap-5">
      <div className="flex flex-col">
        <label className="text-dgcyan" for="bill">Bill</label>
        <input v-model="cost" name="bill" type="number" className="bg-vlgcyan text-dcyan" />
      </div>
      <TipPercent/>
      <div>
        <label for="people" className="text-dgcyan">Number of People</label>
        <input
          type="number"
          name="people"
          id=""
          className="bg-vlgcyan text-dcyan"
        />
      </div>
      <div className="flex flex-col bg-dcyan p-5">
        <span className="text-white">Tip Amount/person</span>
        <span className="text-white">Total/person</span>
        <button className="bg-cyan hover:bg-lgcyan">RESET</button>
      </div>
    </div>
  </div>
</template>
