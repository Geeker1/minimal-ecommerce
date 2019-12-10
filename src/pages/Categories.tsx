import React, { useState } from 'react';
import styled from 'styled-components';
import { Menu, MenuItemProps,Input, Container } from 'semantic-ui-react'
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

	const [ state, setState ] = useState<string | undefined>('All')
	const { Item } = Menu;

	const handleItemClick = (
		e: React.MouseEvent,
		{ name }:MenuItemProps) => setState(name)

	return (
		<ProductWrapper>
			<Container>
				<h1>Welcome to Mariano Collections, Minimal Ecommerce website
				 for Traditional Attires and Shoes</h1>
				<p>Starting your Project with Mariano. Only $20!</p>

				<Menu
					stackable
					color='orange'
					className='menu'
					pointing
					secondary
				>
					<Item
						name='All'
						active={state === 'All'}
						onClick={handleItemClick}
					/>
					<Item
						name="Men's Clothing"
						active={state === "Men's Clothing"}
						onClick={handleItemClick}
					/>
					<Item
						name='Fashion Shoes'
						active={state === "Fashion Shoes"}
						onClick={handleItemClick}
					/>
					<Item
						name='Hats and Caps'
						active={state === "Hats and Caps"}
						onClick={handleItemClick}
					/>
					<Item
						name='Mobile Phones'
						active={state === "Mobile Phones"}
						onClick={handleItemClick}
					/>

					<Menu.Menu position='right'>
			          <Item>
			            <Input icon='search' placeholder='Search...' />
			          </Item>
			        </Menu.Menu>
				</Menu>

				<Product/>
			</Container>
		</ProductWrapper>
	)
}

export default Category;
