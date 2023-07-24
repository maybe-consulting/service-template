import { readFileSync } from "fs";

const path = require.resolve("./schema.graphql");
const typeDefs = readFileSync(path).toString("utf-8");

export default typeDefs;
