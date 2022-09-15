<script setup>
import {ref} from 'vue';

const percentage = ref();
const emit = defineEmits(['percent'])

emit('percent')
</script>

<template>
    <div>
        <span className="text-dgcyan">Select Tip %</span>
        <form className="grid grid-cols-2 gap-3 md:grid-cols-3">
          <input type="button" value="5%" className="text-white bg-dcyan rounded p-1.5 hover:bg-cyan">
          <input type="button" value="10%" className="text-white bg-dcyan rounded p-1.5 hover:bg-cyan">
          <input type="button" value="15%" className="text-white bg-dcyan rounded p-1.5 hover:bg-cyan">
          <input type="button" value="25%" className="text-white bg-dcyan rounded p-1.5 hover:bg-cyan">
          <input type="button" value="50%" className="text-white bg-dcyan rounded p-1.5 hover:bg-cyan">
          <input type="text" value="Custom" className="text-gcyan bg-vlgcyan rounded p-1.5 hover:bg-cyan">
        </form>
    </div>
</template>