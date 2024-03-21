console.log('Express Tutorial')
const { products } = require("./data");
const express = require('express')
const app = express()
const logger = require('./logger')
const people = require('./routes/people')


app.use(express.static("./public"))
app.use(logger)
app.use(express.urlencoded({ extended: false }))
app.use(express.json())

//week4 middleware setup

  
  app.get('/', logger, (req, res) => {
    res.send('Home')
  })
  app.get('/about', logger, (req, res) => {
    res.send('About')
  })

// week4 API methods 
// GET
 app.get('/api/v1/people', (req, res) => {
    res.status(200).json({ success: true, data: people })
  })

// //POST
  app.post('/api/v1/people', (req, res) =>{
    const { name, id } = req.body
  if (!name) {
    return res
      .status(400)
      .json({ success: false, msg: 'Please provide name value' })
  }
  people.push({ id: people.length + 1, name: req.body.name })
  res.status(201).json({ success: true, person: name })
  })

// Week4 People Router

app.use('/api/v1/people', people)


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
