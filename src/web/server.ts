import { app } from "./express/app"
import { setupDb } from '../database/setupDb'

setupDb()

app.listen(3000, () => console.log('Server started on port 3000'))
