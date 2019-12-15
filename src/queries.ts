import { gql } from 'apollo-boost';

export const as: string = "23"


export const FETCH_ALL_PRODUCTS = gql`
    query{
        allProducts(category:1){
            edges{
                node{
                    name
                    available
                    image
                    id
                    description
                }
            }
        }
    }
    
`

export default FETCH_ALL_PRODUCTS;
