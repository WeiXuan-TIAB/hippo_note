<script setup>
import { toast } from "vue3-toastify";
import { ref, computed, watch } from "vue";
import { useNoteStore } from "../stores/noteStore";
import { useRouter, useRoute } from "vue-router";

const route = useRoute()  // 取得網址列用
const router = useRouter() // 跳頁用
const noteStore = useNoteStore();
const { editNote } = noteStore;

const currentNote = computed(()=> noteStore.notes.find(note => note.id === parseInt(route.params.id)))
const newTitle = ref(currentNote.value? currentNote.value.title : "")
const newContent = ref(currentNote.value? currentNote.value.content : "")
watch(currentNote, (newVal) => {
  if (newVal) {
    newTitle.value = newVal.title
    newContent.value = newVal.content
  }
}, { immediate: true })

const createNote = () => {
  if (newTitle.value) {
    editNote(currentNote.value.id, newTitle.value, newContent.value);
    toast("Successfully Edited note!", {
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
    <div class="w-full flex flex-col items-start gap-2">
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
    </div>
    <button @click="createNote" type="button" class="w-20 h-12 mt-12 btn">Save</button>
  </div>
</template>

<style scoped>
.btn {
  background-color: rgb(1, 119, 3,0.7);
}
.glass {
  border-radius: 12px;
  backdrop-filter: blur(10px);
  background-image: linear-gradient(to right bottom, #c5c5f109, #0e3d6c0f);
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
