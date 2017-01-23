const prompt = require('prompt');

prompt.start();

prompt.get(['choice'], (err, res) => {
  console.log(res.choice);
});
