<script setup>
import draggable from "vuedraggable";
import { useNoteStore } from "../stores/noteStore";
import BtnAddNote from "./BtnAddNote.vue";

const noteStore = useNoteStore();
const { togglePin } = noteStore;

</script>

<template>
  <!-- search -->
  <form class="relative flex justify-end mb-4">
    <input
      type="search"
      placeholder="search..."
      class="glass-input bg-white/5"
    />
    <icon-fa6-solid-magnifying-glass class="absolute right-4 top-3" />
  </form>
  <div class="w-full">
    <!-- drag card -->
    <draggable
      v-model="noteStore.notes"
      item-key="id"
      animation="200"
      class="flex flex-row flex-wrap"
    >
      <template #item="{ element }">
        <div class="relative w-1/4 h-[200px] p-4">
          <router-link :to="{ name: 'EditNote', params: { id: element.id } }">
          <div
            class="w-full h-full glass rounded-xl cursor-move hover:bg-blue-400/10 transition"
          >
            <p class="text-lg font-bold py-3 mx-3 border-b-2">
              {{ element.title }}
            </p>
            <icon-ep-star-filled
              v-if="element.is_pinned"
              @click="togglePin(element.id)"
              class="absolute bottom-3 right-3 text-yellow-400 w-5 h-5 cursor-pointer"
            />
            <icon-ep-star
              v-else="element.is_pinned"
              @click="togglePin(element.id)"
              class="absolute bottom-3 right-3 text-yellow-400 w-5 h-5 cursor-pointer"
            />
            <p class="text-base text-start pt-3 px-3">{{ element.content }}</p>
          </div>
        </router-link>
        </div>
      </template>
    </draggable>
  </div>
  <BtnAddNote class="fixed bottom-[88px] right-10 rounded-full z-20" />

</template>

<style scoped>
.glass-input {
  border-radius: 16px;
  backdrop-filter: blur(10px);
  background-image: linear-gradient(
    to right bottom,
    #95a6fb16,
    #ad95fb19,
    #5ba5ff2f
  );
  position: relative;
  padding: 10px 44px 10px 16px;
  box-shadow: inset 0 0 32px 0px rgba(2, 11, 46, 0.3),
    4px 8px 20px 5px rgba(2, 11, 46, 0.5);
  &::before {
    content: "";
    position: absolute;
    inset: 0;
    border-width: 1px;
    border-style: solid;
    border-color: transparent;
    border-radius: 16px;
    background-image: linear-gradient(
      to right bottom,
      rgba(212, 184, 184, 0.107),
      rgba(170, 151, 190, 0.15),
      rgba(79, 48, 111, 0.441)
    );
    background-origin: border-box;
    mask-image: linear-gradient(white, white), linear-gradient(white, white);
    mask-clip: padding-box, border-box;
    mask-composite: exclude, add;
  }
}
.glass {
  border-radius: 16px;
  backdrop-filter: blur(10px);
  background-image: linear-gradient(
    to right bottom,
    #95a6fb16,
    #ad95fb19,
    #5ba5ff2f
  );
  position: relative;
  padding: 8px;
  box-shadow: inset 0 0 32px 0px rgba(2, 11, 46, 0.3),
    4px 8px 20px 5px rgba(2, 11, 46, 0.5);
  &::before {
    content: "";
    position: absolute;
    inset: 0;
    border-width: 1px;
    border-style: solid;
    border-color: transparent;
    border-radius: 16px;
    background-image: linear-gradient(
      to right bottom,
      rgba(212, 184, 184, 0.107),
      rgba(170, 151, 190, 0.15),
      rgba(79, 48, 111, 0.441)
    );
    background-origin: border-box;
    mask-image: linear-gradient(white, white), linear-gradient(white, white);
    mask-clip: padding-box, border-box;
    mask-composite: exclude, add;
  }
}
</style>
