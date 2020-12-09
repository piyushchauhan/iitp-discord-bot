const colors = require('colors/safe');

colors.setTheme({
    header: ["brightCyan", "bold", "underline"],
    messageHeader: ["brightGreen", "bold"],
    messageString: ["green"],
    info: ["yellow", "dim"],
    error: ["red", "bold"]
});

console.log.header = str => console.log(colors.header(str));
console.log.message = (messageHeader, messageString) => {
    console.log(`${colors.messageHeader(messageHeader)}: ${colors.messageString(messageString)}`);
}
console.log.info = str => console.log(colors.info(str));
console.log.error = str => console.log(colors.error(str));


module.exports = console;