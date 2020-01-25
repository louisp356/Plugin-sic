exports.action = function(data, callback, config, SARAH) {
 
var exec = require('child_process').exec;

var myArray = ["c'est fait", 'encore ?', "d'accord", 'si tu veux'];
  var tts = myArray[Math.floor(Math.random() * myArray.length)];

  if (data.val == "startsic"){
    var process = '%CD%/plugins/sic/startsic.bat';
  }
 var child = exec(process,
  function (error, stdout, stderr) {
    console.log(process);
   });
  if (data.val == "startsic"){
  callback({'tts': tts});}
  else


  if (data.val == "Reggea"){
    var process = '%CD%/plugins/sic/Reggea.bat';
  }
 var child = exec(process,
  function (error, stdout, stderr) {
    console.log(process);
   });
  if (data.val == "Reggea"){
  callback({'tts': tts});
   }

}