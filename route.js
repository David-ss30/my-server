import http from "http";
import { notFoundPage, productsPage, homePage, aboutPage } from "./views.js";

export function route(req, res) {
    if (req.method === "GET" && req.url === "/"){
        res.writeHead(200, { "Content-Type": "text/html"})
        res.end(homePage())
        return;
    }
    if (req.method === "GET" && req.url === "/products"){
        res.writeHead(200, { "Content-Type": "text/html"})
        res.end(productsPage())
        return;
    }
    if (req.method === "GET" && req.url === "/about"){
        res.writeHead(200, { "Content-Type": "text/html"})
        res.end(aboutPage())
        return;
    }
    res.writeHead(404, {"Content-Type": "text/html"})
    res.end(notFoundPage())
}