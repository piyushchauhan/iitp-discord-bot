const colors = require('colors/safe');

colors.setTheme({
    header: ["brightCyan", "bold", "underline"],
    messageHeader: ["brightGreen", "bold"],
    messageString: ["green"],
    info: ["yellow", "dim"],
});

module.exports = colors;