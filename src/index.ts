import app from './app'
import { standardConfig } from './config'

const PORT = standardConfig.LOCAL_PORT

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
