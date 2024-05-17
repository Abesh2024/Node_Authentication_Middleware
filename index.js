const express = require("express");
const PORT = 5000;
const app = express();

// Logging Middleware
const loggingMiddleware = (req, res, next) => {
    const startTime = Date.now();
    const timestamp = new Date();
    
    console.log(`Request received: ${req.method} ${req.url} at ${timestamp}`);

    res.on("finish", () => {
        const endTime = Date.now();
        const duration = endTime - startTime;
        console.log(`Request processed in ${duration}ms`);
    });

    next();
};

app.use(loggingMiddleware);

app.get("/user/logging", (req, res) => {
    res.status(200).json({
        message: "All logging information"
    });
});

app.listen(PORT, () => {
    console.log("Server is up and running at port", PORT);
});
