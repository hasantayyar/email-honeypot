const express = require('express')
const app = express()
const port = process.env.PORT || 8080

const randomTld = () => (['com', 'net', 'org', 'io', 'cc'])[Math.floor(Math.random() * Math.floor(4))]
const randomStr = () =>  Math.random().toString(36).substring(2, 15)
const newEmail = () => `${randomStr()}@${randomStr()}.${randomTld()}`


app.get('/*', (req, res) => res.send(`
<a href='/emails/${randomStr()}'/>next</a>
<br/>
${newEmail()}
`
))

app.listen(port, () => console.log(`app listening on port ${port}!`))

