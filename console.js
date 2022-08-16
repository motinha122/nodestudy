const getFlagValue = require('./require');

console.log(`Hello ${getFlagValue('--name')}, ${getFlagValue('--greeting')}`)