const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/tubes", {
    useNewUrlParser:true,
    useUnifiedTopology:true,
    useCreateIndex:true
}).then(() => {
    console.log(`Connected`);
}).catch((e) => {
    console.log(`Error Connecting`);
})