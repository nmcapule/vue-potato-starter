<template>
  <div class="max-w-sm mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
    <span class="omg">omg <span class="omg2">omg</span></span>
    <div class="sm:flex sm:items-center px-6 py-4">
      <img class="block mx-auto sm:mx-0 sm:flex-shrink-0 h-16 sm:h-24 rounded-full" src="https://randomuser.me/api/portraits/women/17.jpg" alt="Woman's Face">
      <div class="mt-4 sm:mt-0 sm:ml-4 text-center sm:text-left">
        <p class="text-xl leading-tight">Erina Lindfordd</p>
        <p class="text-sm leading-tight text-gray-600">Customer Support Specikalista</p>
        <div class="mt-4">
          <button class="text-purple-500 hover:text-white hover:bg-purple-500 border border-purple-500 text-xs font-semibold rounded-full px-4 py-1 leading-normal">Message</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

export default class MyComponent extends Vue {
}
</script>

<style lang="scss">
  .omg {
    font-size: 3em;
    
    > .omg2 {
      color: red;
    }
  }
</style>
