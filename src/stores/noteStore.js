import { defineStore } from 'pinia';
export const useNoteStore = defineStore('note', {
  state: () => ({
    notes: [
      { id: 1, title: 'Sample Note', content: 'This is a sample note.', img: '', is_pinned: false },
      { id: 2, title: 'Sample Note 2', content: 'This is a sample note.', img: '', is_pinned: false },
      { id: 3, title: 'Sample Note 3', content: 'This is a sample note.', img: '', is_pinned: true },
      { id: 4, title: 'Sample Note 4', content: 'This is a sample note.', img: '', is_pinned: false },
      { id: 5, title: 'Sample Note 5', content: 'This is a sample note.', img: '', is_pinned: false },
    ],
  }),
  getters: {
    allNotes(state) {
      return state.notes.filter(note => !note.is_pinned);
    },
    pinnedNotes(state) {
      return state.notes.filter(note => note.is_pinned)
    },
  },
  actions: {
    togglePin(noteId) {
      const note = this.notes.find(note => note.id === noteId)
      note.is_pinned = !note.is_pinned
    },
    addNote(title, content){
      if(!title) return
      const last_id = this.notes.length +1
      this.notes.push({
        id:last_id,
        title,
        content,
        img:"",
        is_pinned:false,
      })
    },
    editNote(id, newTitle, newContent){
      const note = this.notes.find(note => note.id === id)
      note.title = newTitle
      note.content = newContent
    },
    deleteNote(noteId){
      const index = this.notes.findIndex(note => note.id === noteId)
      if(index !== -1){
          this.notes.splice(index, 1);
      }
    }
  },
});