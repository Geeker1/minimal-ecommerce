import { gql } from 'apollo-boost';

export interface ProductDetail{
    name: string;
    available: boolean;
    image: string;
    id: number;
    description: string;
    shortDescription: string;
}

export interface AllProductData{
    node: ProductDetail
}

interface AllProductResult {
    edges: AllProductData[];
    pageInfo: {
        endCursor: string,
        hasNextPage: boolean
    };
    __typename: string
}

export interface ProductVars{
    cursor: String;
}

export interface ProductInterface{
    allProducts: AllProductResult;
}

export const FETCH_ALL_PRODUCTS = gql`
    query allProducts($cursor: String){
        allProducts(first:6, after: $cursor){
            edges{
                node{
                    name
                    available
                    image
                    id
                    description
                    shortDescription
                }
            }
            pageInfo{
                endCursor
                hasNextPage
            }
        }
    }
    
`

export default FETCH_ALL_PRODUCTS;
