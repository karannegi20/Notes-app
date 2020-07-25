const fs = require('fs');
const chalk = require('chalk');

const getNotes = () => {
  return 'Your notes....';
};

const addNote = (title, body) => {
  const notes = loadNotes();

  // const duplicateNotes = notes.filter((note) => note.title === title);
  const duplicateNote = notes.find((note) => note.title === title);

  if (!duplicateNote) {
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

const listNotes = () => {
  console.log(chalk.bgBlue('Your Notes'));

  const notes = loadNotes();

  notes.map((note) => console.log(note.title));
};

const readNote = (title) => {
  const notes = loadNotes();

  const note = notes.find((note) => note.title === title);

  if (note) {
    console.log(chalk.bgBlue(note.title));

    console.log(note.body);
  } else {
    console.log(chalk.bgRed('No note with this title'));
  }
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
  listNotes: listNotes,
  readNote: readNote,
};
