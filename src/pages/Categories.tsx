import React from 'react';
import styled from 'styled-components';
import { Container } from 'semantic-ui-react'
import ProductMenu from '../components/Menu';
import Product from '../components/Product';

const ProductWrapper = styled.section`
	padding: 10px;
	margin: 20px 0;

	h1{
		width: 800px;
		max-width: 100%;
		line-height: 40px;
		letter-spacing: 1px;
	}

	input:focus, input:active{
		border-color: orange !important;
	}

	.menu{
		margin-top: 30px;
	}
`

const Category: React.FC = () =>{

	return (
		<ProductWrapper>
			<Container>
				<h1>Welcome to Mariano Collections, Minimal Ecommerce website
				 for Traditional Attires and Shoes</h1>
				<p>Starting your Project with Mariano. Only $20!</p>

				<ProductMenu/>
				<Product/>
			</Container>
		</ProductWrapper>
	)
}

export default Category;
