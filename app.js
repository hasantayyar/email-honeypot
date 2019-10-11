const express = require('express')
const app = express()

const randomTld = () => (['com', 'net', 'org', 'io', 'cc'])[Math.floor(Math.random() * Math.floor(4))];
const randomStr = () =>  Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
const newEmail = () => `${randomStr()}@${randomStr()}.${randomTld()}`


app.get('/', (req, res) => res.send(newEmail()))

app.listen(process.env.PORT, () => console.log(`app listening on port ${process.env.PORT}!`))

