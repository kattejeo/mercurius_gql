import { AddressResolver } from "./module/AddressResolver";
import { mergeResolvers } from "@graphql-tools/merge";

// const resolves = mergeResolvers({
//     AddressResolver
// })

// export default  resolves

export default mergeResolvers({
    AddressResolver
})