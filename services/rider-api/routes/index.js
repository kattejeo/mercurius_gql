
import { AddressType } from "./module/AddressType"
import { mergeTypeDefs} from "@graphql-tools/merge"

// const typeDefs = mergeTypeDefs({
//     AddressType
// })

// export default typeDefs

export default mergeTypeDefs({
    AddressType
})