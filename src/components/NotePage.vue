<script setup>
import NoteList from "./NoteList.vue";

</script>
<template>
  <!-- table PC -->
  <div class="w-full mt-20 mb-12 hidden md:grid grid-cols-12 gap-6">
    <aside class="col-span-3">
      <NoteList />
    </aside>
    <div class="col-span-9 mx-10">
      <router-view name="right"/>
    </div>
  </div>
    <!-- phone -->
  <div class="block md:hidden w-full mt-20 mb-12">
    <router-view />
  </div>
</template>

<style coped></style>
