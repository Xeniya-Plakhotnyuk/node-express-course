const { products } = require("./data");
const express = require('express')
const app = express()


app.use(express.static("./public"))

app.get('/api/v1/test',(req, res) =>{
    res.json({ message: "It worked!" })
})

app.get('/api/v1/products', (req, res) =>{
    res.json(products);
})


app.get('/api/v1/products/:productID', (req, res) => {
    console.log(req.params)
    const idToFind = parseInt(req.params.productID);
  
    const product = products.find((p) => p.id === idToFind);
  
    if (!product) {
      res.status(404).json({ error: 'Product not found' });
    } else {
      
        res.json(product);
    }
  });

  app.get('/api/v1/query', (req, res) => {
    console.log(req.query)
    const { search, limit, maxPrice } = req.query
    let sortedProducts = [...products]

    if (search) {
        sortedProducts = sortedProducts.filter((product) => {
            return product.name.toLowerCase().includes(search.toLowerCase())
        })
    }

    if (maxPrice) {
        sortedProducts = sortedProducts.filter((product) => {
            return product.price < parseFloat(maxPrice)
        })
    }

    if (limit) {
        sortedProducts = sortedProducts.slice(0, Number(limit))
    }

    if (sortedProducts.length < 1) {
        res.status(200).send('No products were found!')
    } else {
        res.status(200).json(sortedProducts)
    }
})


  

app.all('*', (req, res) =>{
    res.status(404).send ('page not found')
})

app.listen(3000, () =>{
    console.log('My server is on port 3000...')
})

