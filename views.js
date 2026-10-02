// MOCK -> codigo que simula o dado real
const products = [
    { name: "keyboard" , price: 150},
    { name: "Mouse" , price: 80},
    { name: "monitor" , price: 900}
]

function layout(title, content) {
    return `
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <nav>
    <a href="/">home</a>
    <a href="/products">Products</a>
    <a href="/about">About</a>
    </nav>
    ${content}
</body>
</html>
    `
    
}

export function homePage() {
    return layout("Home", "<h1>Welcome to the store</h1>")
}
export function aboutPage() {
    return layout("About", "<h1>About us</h1>")
}
export function notFoundPage() {
    return layout("Not Found", "<h1>Page not found</h1>")
}
export function productsPage() {
    
    const rows = products.map((p) => `<tr>
    <td>${p.name}</td>
    <td>${p.price}</td>
    </tr>
    `)
    return layout("Products", `
        <h1>products</h1>
        <table>
        <tr>
        <th>Product</th>
        <th>Price</th>
        </tr>
        </table>
        ${rows}
        `
    )
    
}


