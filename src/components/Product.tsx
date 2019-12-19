import React, { useState } from 'react';
import styled from 'styled-components';
import orange from '../styles/img/orange.png';
import { Placeholder, Button, Icon } from 'semantic-ui-react';
import _ from 'lodash';
import { useQuery } from '@apollo/react-hooks';
import {FETCH_ALL_PRODUCTS,AllProductData,ProductDetail, ProductVars, ProductInterface} from '../queries/product';
import Image from './Image';


const ProductList = styled.section`
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	align-items: center;

	.button-div{
		text-align: center;
		width: 100%;
		margin: 30px 0;

		button{
			width: 100%;
			padding: 20px 0;
		}
	}
	.product-item{
		width: 350px;
		max-width: 100%;
		margin: 10px;
		box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
		position: relative;

		div.content{
			padding: 10px;

			div.text{
				width: 100%;
				display: inline-flex;
				justify-content: space-between;
				align-items: center;
			}
		}
	}

	.product-item img{
		height: 300px;
		width: 100%;
	}
`
const LoadingItem: React.FC = props=> (
	<>
	{_.times(6).map((key,index)=>{
		return(
			<div key={key} className='product-item'>
			<Placeholder fluid>
				<Placeholder.Image square />
			</Placeholder>
			</div>
		)
	})}
	</>
)

const Product: React.FC = () =>{
	
	const { loading, error, data, fetchMore } = useQuery<ProductInterface, ProductVars>(FETCH_ALL_PRODUCTS);
	const [load, setLoad] = useState(false);
	
	const loadMore = async function(){
		setLoad(true)
		await fetchMore({
			variables: {
				cursor:data!.allProducts.pageInfo.endCursor
			},
			updateQuery: (previousResult, { fetchMoreResult }) => {
				const newEdges = fetchMoreResult!.allProducts.edges;
				const pageInfo = fetchMoreResult!.allProducts.pageInfo;
	
				return newEdges.length
				  ? {
					  allProducts: {
						__typename: previousResult.allProducts.__typename,
						edges: [...previousResult.allProducts.edges, ...newEdges],
						pageInfo
					  }
					}
				  : previousResult;
			  }
		});
		setLoad(false);
	}
	
	return (
		<ProductList>

			{(!error && !loading) ? data!.allProducts.edges.map((key: AllProductData,index: number)=>{
				let item:ProductDetail = key.node;
				return (
					<div key={index} className='product-item'>
						<Image index={index} src={orange}/>
						<div className='content'>
							<h4>{ item.name }</h4>
							<div className='text'>
								<p>{item.shortDescription.substring(0, 40)} {item.shortDescription.length > 40 ? '....': ''}</p>
								<span>
									<Icon
										circular
										inverted
										color='orange'
										name='add to cart'/>
								</span>
							</div>
						</div>
					</div>
				)
			}):<LoadingItem/>}

			<div className="button-div">
				<Button 
					loading={load} 
					size="big" 
					disabled={(error || loading || data!.allProducts.pageInfo.hasNextPage) ? false : true} 
					color='orange'
					onClick={()=>loadMore()}>
					Load More Products
				</Button>
			</div>
		</ProductList>
	)
}

export default Product;
