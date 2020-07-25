const chalk = require('chalk');
const yargs = require('yargs');
const notes = require('./notes');

yargs.version('1.1.0');

//Create add command
yargs.command({
  command: 'add',
  describe: 'add a note',
  builder: {
    title: {
      describe: 'Note title',
      demandOption: true,
      type: 'string',
    },
    body: {
      describe: 'Note body',
      demandOption: true,
      type: 'string',
    },
  },
  handler(argv) {
    notes.addNote(argv.title, argv.body);
  },
});

yargs.command({
  command: 'remove',
  describe: 'Remove a note',
  builder: {
    title: {
      describe: 'title',
      demandOption: true,
      type: 'string',
    },
  },
  handler(argv) {
    notes.removeNote(argv.title);
  },
});

yargs.command({
  command: 'list',
  describe: 'List all notes',
  handler() {
    console.log('Listing notes');
  },
});

yargs.command({
  command: 'read',
  describe: 'Read a note',
  handler() {
    console.log('Reading note');
  },
});

yargs.parse();
