import { promises as fs } from 'fs'

export async function parse(path: string) {
  const buffer = await fs.readFile(path)

  const parsed = buffer.toString()

  const headers = parsed.slice(0, parsed.indexOf('\n')).split(',')

  const rows = parsed.slice(parsed.indexOf('\n') + 1).split('\n')

  // Map trough lines of csv, ex : 'Angola,2020-10-26,B.1.1.519,0,0.0,7',
  const arr = rows.map(function (row) {
    // split values to array, ex : [Angola,2020-10-26,B.1.1.519,0,0.0,7]
    const values = row.split(',')

    //parse array to object using Headers as keys
    /**
       * ex : 
       * {
          location: 'Angola',
          date: '2020-07-06',
          variant: 'Alpha',
          num_sequences: '0',
          perc_sequences: '0.0',
          num_sequences_total: '3'
        }
       * 
       * 
       */
    const reduced = headers.reduce(function (object, header, index) {
      object[header] = values[index]
      return object
    }, {})
    return reduced
  })

  return arr
}
