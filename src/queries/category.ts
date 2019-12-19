import { gql } from 'apollo-boost';

export interface CategoryDetail{
    name: string;
    id: string;
    slug: string;
}

export interface AllCategoryNodes{
    node: CategoryDetail
    __typename: string
}

interface AllCategoryReasult {
    edges: AllCategoryNodes[];
    __typename: string
}

export interface CategoryVars{
    cursor: String;
}

export interface CategoryInterface{
    allCategories: AllCategoryReasult;
}

export const FETCH_ALL_CATEGORIES = gql`
    query allCategories($cursor: String){
        allCategories(first:6, after: $cursor){
            edges{
                node{
                    name
                    slug
                    id
                }
            }
        }
    }
     
`

export default FETCH_ALL_CATEGORIES;
