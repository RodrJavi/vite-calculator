<script setup>
import { ref, computed, watch } from "vue";

const percentage = ref();
const customInput = ref();
const emit = defineEmits(["percent"]);

const things = [5, 10, 15, 25, 50];

const output = computed(() => {
  if (customInput.value) return (customInput.value / 100);
  if (percentage.value) return percentage.value;
  return 0;
});

watch(output, (newOutput) => {
  emit("percent", newOutput);
});
</script>

<template>
    <span class="text-dgcyan">Select Tip %</span>
    <form class="grid grid-cols-2 gap-5 md:grid-cols-3">
      <div v-for="i in things">
        <input
          v-model="percentage"
          name="tip"
          type="radio"
          :value="(i/100)"
          :id="i"
          class="peer hidden"
          @change="customInput = ''"
        />
        <label
          :for="i"
          class="text-white w-10 bg-dcyan rounded py-1.5 px-10 hover:bg-cyan peer-checked:bg-cyan"
        >
          {{ i }}%
        </label>
      </div>

      <input
        @click="percentage = ''"
        v-model="customInput"
        name="tip"
        type="number"
        id="custom"
        placeholder="custom"
        class="text-dcyan bg-vlgcyan rounded p-1.5 text-right hover:border-10 border-cyan"
      />
    </form>
</template>
