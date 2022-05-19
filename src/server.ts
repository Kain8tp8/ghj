import express from 'express'
import cors from 'cors'
//Routes Import
import coffebrecRoutes from "./routes/coffebrec.routes"


const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

//Routes
app.use('/coffe', coffebrecRoutes)
// app.use('/menu',CFMenu)
// app.use('/avdBuks',ARoutes)
// app.use('/Gifs',GRoutes)

app.listen(2248, () => console.log('Server is running on http://localhost:2248'))
