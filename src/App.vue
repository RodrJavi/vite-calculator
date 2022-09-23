<script setup>
import { ref, computed } from "vue";
import TipPercent from "./components/TipPercent.vue";

const cost = ref();
const guests = ref();
const percent = ref();

const tip = computed(() => {
  let pre = ((cost.value * percent.value) / guests.value);
  let rounded = Math.round(pre * 100) / 100;
  return rounded
})

const share = computed(() => {
  let pre = (cost.value / guests.value);
  let rounded = Math.round(pre * 100) / 100;
  return rounded
})
</script>

<template>
  <div class="bg-lgcyan flex-none flex-col justify-end">
    <div class="flex justify-center p-7"><img src="./assets/logo.svg" alt=""></div>
    <div class="flex flex-col bg-white rounded-t-xl p-5 gap-5">
      <div class="flex flex-col">
        <label class="text-dgcyan" for="bill">Bill</label>
        <input
          v-model="cost"
          name="bill"
          type="number"
          class="bg-vlgcyan text-dcyan text-right"
        />
      </div>
      <TipPercent @percent="(percentage) => (percent = percentage)" />
      <div>
        <label for="people" class="text-dgcyan">Number of People</label>
        <input
          type="number"
          name="people"
          id=""
          v-model="guests"
          class="bg-vlgcyan text-dcyan text-right"
        />
      </div>
      <div class="flex flex-col bg-dcyan p-5">
        <span class="text-white">Tip Amount/person</span>
        <span class="text-lgcyan" v-if="tip>0">${{tip}}</span>
        <span class="text-white">Total/person</span>
        <span class="text-lgcyan" v-if="share>0">${{share}}</span>
        <button class="bg-cyan hover:bg-lgcyan">RESET</button>
      </div>
    </div>
  </div>
</template>
