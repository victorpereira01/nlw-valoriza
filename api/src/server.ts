import express from 'express';

const app = express();

app.get("/test", (req, res) => {
    return res.send("OLA NLW");
});

app.post("/test-post", (req, res) => {
    return res.send("OLA POST NLW");
});

app.listen(3000, () => console.log("Server is running!"));