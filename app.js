const chalk = require('chalk');
const yargs = require('yargs');
const getNotes = require('./notes');

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
  handler: function (argv) {
    console.log('Title : ' + argv.title);
    console.log('Body : ' + argv.body);
  },
});

yargs.command({
  command: 'remove',
  describe: 'Remove a note',
  handler: function () {
    console.log('Removing note');
  },
});

yargs.command({
  command: 'list',
  describe: 'List all notes',
  handler: function () {
    console.log('Listing notes');
  },
});

yargs.command({
  command: 'read',
  describe: 'Read a note',
  handler: function () {
    console.log('Reading note');
  },
});

yargs.parse();
