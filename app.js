const express = require('express')
const app = express()
const port = process.env.PORT || 8080
const tld = () => (['com', 'net', 'org', 'io', 'co.uk'])[Math.floor(Math.random() * Math.floor(4))]
const str = () =>  Math.random().toString(36).substring(2, 15)
const email = () => `${str()}@${str()}.${tld()}`

app.get('/*', (req, res) => res.send(`<a href='/emails/${str()}'/>next</a><br/>${email()}`))
app.listen(port, () => console.log(`listening on port ${port}!`))
