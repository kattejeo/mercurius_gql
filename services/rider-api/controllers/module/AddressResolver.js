
export const AddressResolver = {
    Query : {
        async riderAddress(_, { id }){
            return {
                id : "1",
                type : "Home",
                title :"titme",
                detail : "detail",
                location : {
                    lat : 32.22,
                    lng : 21.33
                },
                raiderId : "2"
            }
        }
    }
}