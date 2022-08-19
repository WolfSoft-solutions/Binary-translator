console.clear();

require(`./deploy`)

setTimeout(() => console.log("Starting bot..."), 1000);

setTimeout(() => require("./index"), 1000);