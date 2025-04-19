import {gql} from "@apollo/client"

/**************************
 *       PROPERTY         *
 **************************/

export const GET_PROPERTIES = gql`query GetProperty($input: String!) {
    getProperty(propertyId: $input) {
        _id
        propertyType
        propertyStatus
        propertyLocation
        propertyAddress
        propertyTitle
        propertyPrice
        propertySquare
        propertyBeds
        propertyRooms
        propertyViews
        propertyLikes
        propertyComments
        propertyRank
        propertyImages
        propertyDesc
        propertyBarter
        propertyRent
        memberId
        soldA
        deletedAt
        constructedAt
        createAt
        updatedAt
    }
}
`


/**************************
 *       ARTICLE         *
 **************************/