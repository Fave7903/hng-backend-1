const express = require('express')
const app = express()
const cors = require('cors')


app.use(cors())
const PORT = process.env.PORT || 5000
app.get('/', (req, res) => {
    res.json({
        slackUsername: "Soar",
        backend: true,
        age: 19,
        bio: "I am a backend developer and student"
    })
})

app.listen(PORT, () => console.log(`Server is running on port: ${PORT}`))