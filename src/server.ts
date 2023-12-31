import { AppDataSource } from "./data-source";
import app from "./app"

AppDataSource.initialize().then((): void => {
    console.log("Database connected.")

    const PORT: number = Number(process.env.PORT) || 3000;
    app.listen(PORT, () => {
      console.log(`Server is running on ${PORT}`)
    })
  }).catch((err) => console.error(err));