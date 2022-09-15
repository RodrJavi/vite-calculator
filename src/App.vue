<script setup></script>

<template>
  <div className="bg-lgcyan">
    <h2 className="text-dgcyan">Splitter</h2>
    <div className="flex flex-col bg-white rounded-t-xl p-5 gap-5">
      <div className="flex flex-col">
        <label className="text-dgcyan" for="bill">Bill</label>
        <input name="bill" type="number" className="bg-vlgcyan text-dcyan" />
      </div>
      <div>
        <span className="text-dgcyan">Select Tip %</span>
        <div className="grid grid-cols-2 gap-3 md:grid-cols-3">
          <button className="text-white bg-dcyan rounded p-1.5 hover:bg-cyan">
            5%
          </button>
          <button className="text-white bg-dcyan rounded p-1.5 hover:bg-cyan">
            10%
          </button>
          <button className="text-white bg-dcyan rounded p-1.5 hover:bg-cyan">
            15%
          </button>
          <button className="text-white bg-dcyan rounded p-1.5 hover:bg-cyan">
            25%
          </button>
          <button className="text-white bg-dcyan rounded p-1.5 hover:bg-cyan">
            50%
          </button>
          <button className="text-gcyan bg-vlgcyan rounded p-1.5 hover:bg-cyan">
            Custom
          </button>
        </div>
      </div>
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
