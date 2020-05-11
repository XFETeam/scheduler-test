const simpleGit = require('simple-git')();
const fs = require('fs');
const path = require("path")

fs.writeFile("./.tmp/test.text", (new Date()).toString(), { flag: 'w' }, function(err) {
  if(err) {
    return console.log(err);
  }
  console.log("The file was saved!");
  simpleGit.add("./*", function () {
    if (err) {
      console.log(err);
    }
    console.log('add success');
  }).commit('message', function (err) {
    if (err) {
      console.log(err);
    }
    console.log('commit success')
  }).push('origin', 'master', function () {
    if (err) {
      console.log(err);
    }
    console.log('push success')
  });
});


