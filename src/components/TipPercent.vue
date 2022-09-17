<script setup>
import { ref, computed, watch } from "vue";

const percentage = ref();
const customInput = ref();
const emit = defineEmits(["percent"]);

const things = [5, 10, 15, 25, 50];

const output = computed(() => {
  if (customInput.value) return customInput.value;
  if (percentage.value) return percentage.value;
  return 0;
});

watch(output, (newOutput) => {
  emit("percent", newOutput);
});
</script>

<template>
  <div>
    <span class="text-dgcyan">Select Tip %</span>
    <form class="grid grid-cols-2 gap-3 md:grid-cols-3">
      <div v-for="i in things">
        <input
          v-model="percentage"
          name="tip"
          type="radio"
          :value="i"
          :id="i"
          class="peer hidden"
          @change="customInput = ''"
        />
        <label
          :for="i"
          class="text-white bg-dcyan rounded p-1.5 hover:bg-cyan peer-checked:bg-cyan"
        >
          {{ i }}%
        </label>
      </div>
      <!-- <pre>
        {{
          {
            percentage,
            customInput,
            output,
          }
        }}
      </pre> -->

      <input
        @click="percentage = ''"
        v-model="customInput"
        name="tip"
        type="number"
        id="custom"
        placeholder="custom"
        class="text-gcyan bg-vlgcyan rounded p-1.5 hover:bg-cyan"
      />
    </form>
  </div>
</template>
