const express = require('express');

const PORT = process.env.PORT || 3002;
const app = express();

//express middleware
app.use(express.urlencoded({ extended: false}));
app.use(express.json());


//default response for any other request (not found)
app.use((req,res) => {
    res.status(404).end();
})






app.listen(PORT, () => {
    console.log(`SERVER RUNNING ON PORT: ${PORT} :) `);
});