import {gql} from "@apollo/client";

export const getAllProducts = gql`
query {
products {
    id
    title
    images
    category {
        name
        image
    }
}
}
`;