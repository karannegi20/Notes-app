const fs = require('fs');
const chalk = require('chalk');

const getNotes = () => {
  return 'Your notes....';
};

const addNote = (title, body) => {
  const notes = loadNotes();

  const duplicateNotes = notes.filter((note) => note.title === title);

  if (duplicateNotes.length === 0) {
    notes.push({
      title: title,
      body: body,
    });

    saveNotes(notes);
    console.log('New note added');
  } else {
    console.log('Title already taken!');
  }
};

const removeNote = (title) => {
  const notes = loadNotes();

  const newNotes = notes.filter((note) => note.title !== title);

  if (newNotes.length !== notes.length) {
    console.log(chalk.bgGreen('Note Removed!'));
  } else {
    console.log(chalk.bgRed('No Note found!'));
  }

  saveNotes(newNotes);
};

const saveNotes = (notes) => {
  const dataJSON = JSON.stringify(notes);
  fs.writeFileSync('notes.json', dataJSON);
};

const loadNotes = () => {
  try {
    const dataBuffer = fs.readFileSync('notes.json');
    const dataJSON = dataBuffer.toString();
    return JSON.parse(dataJSON);
  } catch (e) {
    return [];
  }
};

module.exports = {
  getNotes: getNotes,
  addNote: addNote,
  removeNote: removeNote,
};
