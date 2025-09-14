<template>
  <nav class="fixed z-50 backdrop-blur-md  top-0 left-0 w-screen h-20 bg-gray-800/30 p-8 flex items-center justify-between"
  >
    <div class="flex items-center justify-start">
      <router-link :to="{name: 'Home'}" class="flex items-center gap-6">
        <icon-fa6-solid-hippo class="w-10 h-10 text-white" />
        <span class="text-lg md:text-2xl font-bold me-20 text-white">Hippo Note</span>
      </router-link>
      <div class="hidden md:flex items-center justify-start gap-6">
        <router-link :to="{ name: 'NoteGrid' }"
          class="text-white hover:text-blue-300 relative py-1 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[3px] after:bg-blue-200 after:transition-all after:duration-300 hover:after:w-full">Note</router-link>
        <p>|</p>
        <a
          class=" text-white hover:text-blue-300 relative py-1 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[3px] after:bg-blue-200 after:transition-all after:duration-300 hover:after:w-full"
          href="#"
          >Todo List</a
        >
      </div>
    </div>
    <a class="text-white font-bold hover:text-blue-300 transition-all duration-300 " href="#">Login</a>
  </nav>
</template>

<script setup>

</script>

<style scoped></style>
