var os = require('os');

function timeFormat() {
    var secondsTotal = os.uptime();
    var days = Math.floor(secondsTotal / 86400);/*dzin ma 86400sekund */
    var hours = Math.floor((secondsTotal % 86400) / 3600);
    var minutes = Math.floor(((secondsTotal % 86400) % 3600) / 60);
    var seconds = ((secondsTotal % 86400) % 3600) % 60;
    process.stdout.write('Uptime: ' + days + 'd ' + hours + 'h ' + minutes + 'm ' + seconds + 's\n');
};

exports.print = timeFormat;