const express = require('express')
const app = express()
const sequelize = require('./database/db')
require('./database/asociations')
const port = process.env.PORT || 3000

app.use(express.urlencoded({extended: false}))
app.use(express.json())

app.use('/api/paciente', require('./routes/PacienteRoute'))
app.use('/api/doctor', require('./routes/DoctorRoute'))


app.listen(port,'192.168.1.87', () => {
  console.log(`Example app listening at http://localhost:${port}`)

  sequelize.sync({force:true})
  .then(()=>{
      console.log('conectado')
  })
  .catch((e)=>{
      console.log(`Se produjo un error ${e}`)
  })
})