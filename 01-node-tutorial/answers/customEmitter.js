const EventEmitter = require('events');

const customEmitter = new EventEmitter();

customEmitter.on('greet', (name) => {
  console.log(`Hey, student ${name}!`);
});

customEmitter.on('bye', () => {
  console.log('Bye-bye!');
});

customEmitter.emit('greet', 'Xeniya');

customEmitter.emit('bye');