<script setup>
import { ref } from "vue";
import { useNoteStore } from "../stores/noteStore";
import BtnAddNote from "./BtnAddNote.vue";

const noteStore = useNoteStore();
const { togglePin, deleteNote } = noteStore;

const showModal = ref(false);
const selectedNoteId = ref(null);
const selectedNoteTitle = ref(null);

const openModal = (id, title) => {
  selectedNoteId.value = id;
  selectedNoteTitle.value = title;
  showModal.value = true;
};

const closeModal = () => {
  showModal.value = false;
  selectedNoteId.value = null;
};
const handleDeleteNote = () => {
  deleteNote(selectedNoteId.value);
  showModal.value = false;
  selectedNoteId.value = null;
  selectedNoteTitle.value = null;
};
</script>

<template>
  <div>
    <div class="container w-full my-6">
      <div class="w-full mb-4">
        <div
          class="flex flex-col gap-3 items-start m-0 py-4 ps-6 rounded-xl glass"
        >
          <p class="text-lg font-bold ps-3 pt-2">Important Notes</p>
          <ul class="w-full mb-3">
            <li
              v-for="note in noteStore.pinnedNotes"
              class="group mx-4 ps-3 rounded-lg cursor-pointer transition-colors mb-2"
            >
              <div
                class="flex justify-between items-center gap-3 rounded-lg px-4 py-3 backdrop-blur-sm transition-colors group-hover:bg-blue-800/10"
              >
                <router-link :to="{ name: 'EditNote', params: { id: note.id } }"
                  >
                  <div class="flex flex-col items-start ps-4 py-4">
                    <p class="text-lg md:text-base text-white">
                      {{ note.title }}
                    </p>
                    <p class="text-base text-start block md:hidden text-white mt-3">
                      {{ note.content }}
                    </p>
                  </div>
                </router-link>
                <div class="flex gap-3 items-center pe-4 md:pe-3">
                  <icon-ep-star-filled
                    @click="togglePin(note.id)"
                    class="text-yellow-400 w-5 h-5 cursor-pointer"
                  />
                  <icon-fa6-solid-trash
                    @click="openModal(note.id, note.title)"
                    class="text-red-500 w-4 h-4 cursor-pointer"
                  />
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="container w-full my-6">
      <div class="w-full mb-4">
        <div
          class="flex flex-col gap-3 items-start m-0 py-4 ps-6 rounded-xl glass"
        >
          <p class="text-lg font-bold ps-3 pt-2">Notes</p>
          <ul class="w-full mb-3">
            <li
              v-for="note in noteStore.allNotes"
              :key="note.id"
              class="group mx-4 ps-3 rounded-lg cursor-pointer transition-colors mb-2"
            >
              <div
                class="flex justify-between items-center gap-3 rounded-lg px-4 py-3 backdrop-blur-sm transition-colors group-hover:bg-blue-800/10"
              >
                <router-link
                  :to="{ name: 'EditNote', params: { id: note.id } }"
                >
                  <div class="flex flex-col items-start ps-4 py-4">
                    <p class="text-lg md:text-base text-white">
                      {{ note.title }}
                    </p>
                    <p class="text-base text-start block md:hidden text-white mt-3">
                      {{ note.content }}
                    </p>
                  </div>
                </router-link>
                <div class="flex gap-3 items-center pe-5 md:pe-3">
                  <icon-ep-star
                    @click="togglePin(note.id)"
                    class="text-yellow-400 w-5 h-5 cursor-pointer"
                  />
                  <icon-fa6-solid-trash
                    @click="openModal(note.id, note.title)"
                    class="text-red-500 w-4 h-4 cursor-pointer"
                  />
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
      <BtnAddNote class="block md:hidden fixed bottom-[80px] right-4 rounded-full z-20" />
  <!-- Modal -->
  <div
    v-if="showModal"
    class="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50"
  >
    <div class="w-[400px] h-[200px] modal-bg relative">
      <div class="text-2xl">
        Are you sure you want to delete
        <span class="text-red-600">{{ selectedNoteTitle }}</span>
        note?
      </div>
      <div class="flex gap-4 justify-end mt-10">
        <button
          type="button"
          @click="closeModal"
          class="w-20 h-10 bg-slate-800/70 hover:bg-slate-900/80 rounded"
        >
          Cancel
        </button>
        <button
          @click="handleDeleteNote"
          class="w-20 h-10 bg-red-700/70 hover:bg-red-700/90 rounded"
        >
          Delete
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.modal-bg {
  border-radius: 16px;
  backdrop-filter: blur(10px);
  background-image: linear-gradient(
    to right bottom,
    #ddffdc16,
    #6787f130,
    #5b76ff1a
  );
  padding: 40px 32px;
  box-shadow: inset 0 0 32px 0px rgba(2, 11, 46, 0.3),
    4px 8px 20px 5px rgba(2, 11, 46, 0.5);
  border: 5px transparent;
}
.glass {
  border-radius: 16px;
  backdrop-filter: blur(10px);
  background-image: linear-gradient(to right bottom, #ffffff09, #dfdfdf0f);
  position: relative;
  padding: 8px;
  box-shadow: inset 0 0 32px 0px rgba(2, 11, 46, 0.3),
    4px 8px 20px 5px rgba(2, 11, 46, 0.322);
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
