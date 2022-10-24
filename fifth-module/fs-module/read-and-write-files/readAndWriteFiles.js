const fs = require('fs');

const loadNotes = () => {
    const buffer = fs.readFileSync('notes.json');
    const dataStr = buffer.toString();
    const obj = JSON.parse(dataStr);
    return obj;
}

const addNote = (title, author) => {
    const existingNotes = loadNotes();

    const duplicatedNotes = existingNotes.filter(note => note.title === title);
    if (duplicatedNotes.length === 0) {
        existingNotes.push({
            title, author
        });
    } else {
        console.log("Note title is already taken");
    }
    saveNotes(existingNotes);
}

const saveNotes = (notes) => {
    const dataStr = JSON.stringify(notes);
    fs.writeFileSync('notes.json', dataStr);
}

const getAllNotes = () => {
    const notes = loadNotes();
    notes.forEach(note => console.log(note.title));
}

const readNote = (title) => {
    const notes = loadNotes();
    let note = notes.find(note => note.title === title);
    if (note) {
        console.log('title: ' + title + " author: " + note.author);
    } else {
        console.log('Note not found');
    }
}

const removeNote = (title) => {
    const existingNotes = loadNotes();
    const findIndex = existingNotes.findIndex(note => note.title === title);
    if (findIndex !== -1){
        existingNotes.splice(findIndex,1);
    } else {
        console.log('No notes found');
    }
}

module.exports = { loadNotes, addNote, saveNotes, getAllNotes, readNote, removeNote }