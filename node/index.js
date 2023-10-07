var ping = require('ping');
var mysql = require('mysql');

const dbname = "asteroidmediaco_uptime";
const dbuser = "asteroidmediaco_uptime";
const dbpassword = "Alexcraven2000";
const dbhost = "109.70.148.39";

var connection = mysql.createConnection({
    host : dbhost,
    user : dbuser,
    password: dbpassword,
    database: dbname
});

connection.connect();






var aliveNetwork = false;
var aliveGoogle = false;

var hosts = ['192.168.50.1', 'google.com'];


let resGoogle = await ping.promise.probe('google.co.uk');
console.log("Res Network " + resGoogle.alive);
if(resGoogle.alive == true){
    aliveGoogle = true;
} else {
    aliveGoogle = false;
}
console.log("test");
console.log(aliveGoogle);






let date_time = new Date();

// get current date
// adjust 0 before single digit date
let date = ("0" + date_time.getDate()).slice(-2);

// get current month
let month = ("0" + (date_time.getMonth() + 1)).slice(-2);

// get current year
let year = date_time.getFullYear();

// get current hours
let hours = date_time.getHours();

// get current minutes
let minutes = date_time.getMinutes();

// get current seconds
let seconds = date_time.getSeconds();

// prints date & time in YYYY-MM-DD HH:MM:SS format
console.log(year + "-" + month + "-" + date + " " + hours + ":" + minutes + ":" + seconds);

var timestamp = year + "-" + month + "-" + date + " " + hours + ":" + minutes + ":" + seconds;

console.log(timestamp);

connection.query("INSERT INTO `update` (`timestamp`, `aliveGoogle`) VALUES")

const sql = `INSERT INTO update (timestamp, aliveGoogle) VALUES ('${timestamp}', '${aliveGoogle}')`;

connection.end();