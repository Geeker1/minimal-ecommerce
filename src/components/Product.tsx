import React, { useState } from 'react';
import styled from 'styled-components';
import orange from '../styles/img/orange.png'
import { Icon, Placeholder } from 'semantic-ui-react';
import _ from 'lodash';
import { useQuery } from '@apollo/react-hooks';
import {FETCH_ALL_PRODUCTS} from '../queries';
import Image from './Image';


const ProductList = styled.section`
	display: flex;
	flex-wrap: wrap;
	justify-content: space-between;
	align-items: center;

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
	const { loading, error, data } = useQuery(FETCH_ALL_PRODUCTS);
	return (
		<ProductList>
			{(!error && !loading) ? _.times(6).map((key,index)=>{
				return (
					<div key={key} className='product-item'>
						<Image index={index} src={orange}/>
					</div>
				)
			}):<LoadingItem/>}
		</ProductList>
	)
}

export default Product;
