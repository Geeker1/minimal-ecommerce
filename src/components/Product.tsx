import React from 'react';
import styled from 'styled-components';
import orange from '../styles/img/orange.png'
import { Icon } from 'semantic-ui-react';
import _ from 'lodash';

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
		height: 100%;
		width: 100%;
	}
`

const Product: React.FC = () =>{
	return (
		<ProductList>
			{_.times(6).map(()=>{
				return <div className='product-item'>
				<img src={orange} />
				<div className='content'>
					<h4>Concho Product</h4>
					<div className='text'>
						<p>A sweet reminder not to cross me .....</p>
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
			})}
		</ProductList>
	)
}

export default Product;
