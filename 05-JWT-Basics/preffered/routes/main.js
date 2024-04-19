const express = require('express')
const router = express.Router()

const { login, dashboard } = require('../controllers/main')

const authMiddleware = require('../middleware/auth')

router.route('/hello').get(authMiddleware, dashboard)
router.route('/logon').post(login)

module.exports = router



// The application should have two routes, 
// a POST for /api/v1/logon, and a GET for /api/v1/hello. 
// The POST request takes a JSON body with two attributes, "name" and 
// "password". It returns a 200 (OK) return code and a JSON object 
// with one attribute, a "token", which is the JSON web token. You’ll need 
// a secret (which is a long, hard-to-guess string) and a lifetime, which should be “24h”. 
// These values should be read out of a .env file using the dotenv package. 
// You should store the user’s name inside the token.