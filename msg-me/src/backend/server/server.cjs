const express = require('express')();
const app = express


module.exports = app.get('/', (req, res) => {
    res.send('Hello Backend')
})

module.exports = app.listen(process.env.PORT, () => console.log(`Server is running on port.`))