const handleNotes = require('./readAndWriteFiles');

handleNotes.addNote('title1', 'author1');
handleNotes.getAllNotes();
handleNotes.removeNote('The Grapes of Wrath');
handleNotes.readNote('The Catcher in the Rye');