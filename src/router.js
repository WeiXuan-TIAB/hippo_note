import { createRouter, createWebHashHistory } from "vue-router";
import Home from "./components/Home.vue";
import NotePage from "./components/NotePage.vue";
import NoteList from "./components/NoteList.vue";
import NoteGrid from "./components/NoteGrid.vue";
import AddNote from "./components/AddNote.vue";
import EditNote from "./components/EditNote.vue";

const routes = [
  { path: '/', name: 'Home', component: Home },
  { 
    path: '/note',
    name: 'Note', 
    redirect: '/note/',
    component: NotePage,
    children: [
      { 
        path: '', 
        name: 'NoteGrid',
        components: { 
          default:NoteList,
          right: NoteGrid }
      },
      { 
        path: 'add_note', 
        name: 'AddNote',
        components: { 
          default: AddNote,
          right: AddNote }
      },
      { 
        path: 'edit_note/:id', 
        name: 'EditNote',
        props: true,
        components: { 
          default: EditNote,
          right: EditNote }
      },
    ],
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router;