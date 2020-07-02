const mongoose = require('mongoose');
const connection = "mongodb+srv://cardinal:nutella@cluster0.g3lmp.azure.mongodb.net/cinema?retryWrites=true&w=majority";
mongoose.connect(connection,{ useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false})
    .then(() => console.log("Database Connected Successfully"))
    .catch(err => console.log(err));