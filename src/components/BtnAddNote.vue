<template>
    <router-link to="/note/add_note" >
    <div  class="relative group w-12 h-12 cursor-pointer">
      <icon-ep-circle-plus
        class="absolute inset-0 w-12 h-12 text-red-400 opacity-0 md:opacity-100 group-hover:opacity-0 transition-opacity"
      />
      <icon-ep-circle-plus-filled
        class="absolute inset-0 w-12 h-12 text-red-400 opacity-100 md:opacity-0 group-hover:opacity-100 transition-opacity"
      />
    </div>
  </router-link>
</template>

<script setup>

</script>

<style scoped></style>
