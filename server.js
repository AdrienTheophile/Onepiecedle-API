import express from "express"
import cors from "cors"
import fs from "fs"

const app = express()
const port = process.env.PORT || 3000

const jsonString = fs.readFileSync("./personnages.json", "utf-8");
const personnages = JSON.parse(jsonString);

app.use(cors())

//dossier 'images' ouvert a tout le monde 
app.use(express.static("public"))

//config routes
app.get('/', (req, res) => {
    res.send('API Onepiecedle 2.0 en ligne !')
})

app.get('/api/personnages', (req, res) => {
    res.json(personnages)
})

app.listen(port, () => {
    console.log(`Serveur lancé sur le port : ${port}`)
})
