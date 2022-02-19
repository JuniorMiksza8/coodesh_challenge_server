import { loadCovidCases } from "../../scripts/load"
import database from "../database"

export class LoaderService {
  async loadCases() {
    try {
      await database.cases.deleteMany()
      const count = await database.cases.count()

      if (count === 0) {
        console.log('Database empty, loading it from data/covid-variants.csv')
        await loadCovidCases()
      }
    } catch (error) {
      console.log('could not load database')
    }
  }
}
