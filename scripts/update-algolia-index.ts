// eslint-disable-next-line @typescript-eslint/no-var-requires
require("dotenv").config()
// eslint-disable-next-line @typescript-eslint/no-var-requires
const fs = require("fs")

// eslint-disable-next-line @typescript-eslint/no-var-requires
const algoliasearch = require("algoliasearch")

if (!process.env.ALGOLIA_APP_ID) throw Error("ALGOLIA_APP_ID secret is missing")
if (!process.env.ALGOLIA_WRITE_API_KEY) throw Error("ALGOLIA_WRITE_API_KEY secret is missing")
if (!process.env.ALGOLIA_INDEX_NAME) throw Error("ALGOLIA_INDEX_NAME secret is missing")

const client = algoliasearch(process.env.ALGOLIA_APP_ID, process.env.ALGOLIA_WRITE_API_KEY)

let objects: { index?: any } = {}

try {
  const data = JSON.parse(fs.readFileSync(process.cwd() + "/public/search-index.json", "utf-8"))
  objects = data
} catch (err) {
  throw Error(err)
}

const index = client.initIndex(process.env.ALGOLIA_INDEX_NAME)

if (!objects.index) throw Error("no index object")

index
  .replaceAllObjects(objects.index, { autoGenerateObjectIDIfNotExist: true })
  .then(({ objectIDs }) => {
    console.log(objectIDs)
  })
  .catch((e) => {
    throw Error("There was an error replacing the index")
  })
