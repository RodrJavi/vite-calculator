<script setup>
import { ref } from "vue";
import TipPercent from "./components/TipPercent.vue";

const cost = ref();
const guests = ref();
const percent = ref(0);
</script>

<template>
  <div class="bg-lgcyan">
    <h2 class="text-dgcyan">Splitter</h2>
    <div class="flex flex-col bg-white rounded-t-xl p-5 gap-5">
      <div class="flex flex-col">
        <label class="text-dgcyan" for="bill">Bill</label>
        <input
          v-model="cost"
          name="bill"
          type="number"
          class="bg-vlgcyan text-dcyan"
        />
      </div>
      <TipPercent @percent="(percentage) => (percent = percentage)" />
      <div>
        <label for="people" class="text-dgcyan">Number of People</label>
        <input
          type="number"
          name="people"
          id=""
          class="bg-vlgcyan text-dcyan"
        />
      </div>
      <div class="flex flex-col bg-dcyan p-5">
        <span class="text-white">Tip Amount/person</span>
        <span class="text-white">Total/person</span>
        <button class="bg-cyan hover:bg-lgcyan">RESET</button>
      </div>
    </div>
  </div>
</template>
