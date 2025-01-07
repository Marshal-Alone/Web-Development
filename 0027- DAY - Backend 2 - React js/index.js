const express = require('express');
const app = express();

// Set the port number for the server
const port = 3000;

// Start the server and listen on the specified port
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

// Middleware to handle all incoming requests and send a predefined HTML response
// sendResponse();
function sendResponse() {
    app.use((req, res) => {
        console.log("Request received");

        // Define HTML content to be sent as the response
        const htmlContent = `
            <h1>Fruits</h1>
            <ul>
                <li>Apple</li>
                <li>Mango</li>
                <li>Banana</li>
            </ul>`;
        res.send(htmlContent);
    });
}

// Define route handlers for specific paths
Routing();
function Routing() {
    app.get("/", (req, res) => {
        res.send("You are on the root path");
    });
    app.get("/apple", (req, res) => {
        res.send("You are on the Apple path");
    });
    app.get("/banana", (req, res) => {
        res.send("You are on the Banana path");
    });
    // Handle all undefined routes ->done at ending
    // app.get('*', (req, res) => {
    //     res.send("This path does not exist");
    // });
}

// Handle dynamic routes with path parameters
PathParameters()
function PathParameters() {
    app.get("/:userName/:id", (req, res) => {
        const { userName, id } = req.params;
        console.log(req.params);
        res.send(`
            User Name: ${userName} <br>
            User ID: ${id}`);
    });
}

// Handle routes with query parameters
QueryStrings();
function QueryStrings() {
    app.get("/search", (req, res) => {
        console.log(req.query);
        const { q, color } = req.query;

        // Check if the 'q' query parameter is provided
        if (!q) {
            return res.send("No search query provided.");
        }

        // Send a response displaying the search query and color
        const responseHtml = `
            Query: ${q} <br>
            Color: ${color}`;
        res.send(responseHtml);
    });
}

// Default route handler for undefined paths
app.get('*', (req, res) => {
    res.send("This path does not exist currently");
});
