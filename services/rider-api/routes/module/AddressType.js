
export const AddressType = `#graphql
    type RiderAddres{
        id : ID!
        type : RiderAddressType!
        title : String!
        detail : String!
        location : Point!
        raiderId : ID!
    }
    
    type Point {
        lat: Float!
        lng: Float!
        heading : Int!
    }

    type Query{
        riderAddress(id: ID): RiderAddress
    }

    enum RiderAddressType {
        Home
        Work
        Partner
        Gym
        Parent
        Cafe
        Park
        Other
    }
`