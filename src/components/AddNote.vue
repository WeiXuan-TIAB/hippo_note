<script setup>
import { toast } from "vue3-toastify";
import { ref } from "vue";
import { useNoteStore } from "../stores/noteStore";
import { useRouter } from "vue-router";

const router = useRouter()
const noteStore = useNoteStore();
const { addNote } = noteStore;

const newTitle = ref("");
const newContent = ref("");

const createAddNote = () => {
  if (newTitle.value) {
    addNote(newTitle.value, newContent.value);
    toast("Successfully added note!", {
      theme: "dark",
      type: "success",
      autoClose: 2000,
      position: "bottom-right",
      pauseOnHover: false,
      pauseOnFocusLoss: false,
    });
    setTimeout(()=>{
      router.push({name:"NoteGrid"})
      newTitle.value = "";
      newContent.value = "";
    },2000)
  } else {
    toast("Please enter note title", {
      theme: "dark",
      type: "warning",
      autoClose: 2000,
      position: "bottom-right",
      pauseOnHover: false,
      pauseOnFocusLoss: false,
    });
  }
};
</script>
<template>
  <div class="w-full flex flex-col items-end">
    <form class="w-full flex flex-col items-start gap-2">
      <!-- Label -->
      <label for="title" class="text-xl font-bold text-white">
        Note Title
      </label>
      <!-- Input -->
      <input
        v-model="newTitle"
        id="title"
        name="title"
        type="text"
        placeholder="Enter title"
        class="w-full rounded-xl bg-white/5 glass"
      />
      <label for="content" class="mt-5 text-xl font-bold text-white">
        Note Content
      </label>
      <!-- Input -->
      <textarea
        v-model="newContent"
        id="content"
        name="title"
        placeholder="Enter content"
        class="w-full h-[200px] py-2 rounded-xl bg-white/5 glass"
      />
    </form>
    <button
      type="button"
      @click="createAddNote"
      class="w-20 h-12 mt-12 bg-red-600/30"
    >
      Add
    </button>
  </div>
</template>

<style scoped>
.glass {
  border-radius: 12px;
  backdrop-filter: blur(10px);
  background-image: linear-gradient(to right bottom, #ffffff09, #dfdfdf0f);
  position: relative;
  padding: 12px 16px;
  box-shadow: inset 0 0 32px 0px rgba(2, 11, 46, 0.3),
    4px 8px 20px 5px rgba(2, 11, 46, 0.5);
  &::before {
    content: "";
    position: absolute;
    inset: 0;
    border-width: 1px;
    border-style: solid;
    border-color: transparent;
    border-radius: 12px;
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
