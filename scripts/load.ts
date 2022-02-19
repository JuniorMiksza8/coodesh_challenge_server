import { join } from 'path'
import { parse } from './helpers/parseFromCsv'
import { Cases, PrismaClient } from '@prisma/client'
import { isValidDate } from './helpers/isDateValid'
import { existsSync } from 'fs'

export async function loadCovidCases() {
  const pathToFile = join(__dirname, '..', 'data', 'covid-variants.csv')

  if (existsSync(pathToFile)) {
    console.time('Database loaded in ')
    const data = await parse(pathToFile)

    const database = new PrismaClient()

    const parsed = parseToCaseModel(data)
    const validObjects = parsed.filter(({ date }) => isValidDate(new Date(date)))

    await database.cases.createMany({
      data: validObjects,
      skipDuplicates: true,
    })
    
    console.timeEnd('Database loaded in ')
  } else {
    console.error('CSV dump file not found')
  }
}

function parseToCaseModel(data: any[]) {
  return data.map(({ location, date, variant, num_sequences, perc_sequences, num_sequences_total }) => {
    return {
      location,
      date: new Date(date),
      variant,
      num_sequences: Number(num_sequences),
      perc_sequences: parseFloat(perc_sequences),
      num_sequences_total: parseFloat(num_sequences_total),
    } as Cases
  })
}
