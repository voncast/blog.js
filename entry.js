require('babel-register')({
    plugins: ['transform-async-to-generator']
});

require("./app/app.js");
