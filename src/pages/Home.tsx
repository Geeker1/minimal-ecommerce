import React from 'react';

// STYLED COMPONENTS
import styled from 'styled-components';

// REACT_ROUTER
import { Link } from 'react-router-dom';

// SlideShow Api
import { CarouselProvider,Image, Slider, Slide } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';

// Carousel pictures
import chart from '../styles/img/chart.png';
import orange from '../styles/img/orange.png';
import candle from '../styles/img/candle.png';

// Social Media Icons
import facebook from '../styles/img/facebook.svg';
import whatsapp from '../styles/img/whatsapp.svg';
import twitter from '../styles/img/twitter.svg';

// Semantic UI
import { Button } from 'semantic-ui-react';

const HomeStyling = styled.section`
	background-color: #232323;
	color: #fff;
	display: grid;
	grid-template-rows: 1fr 90px;
	p{margin:0;}
	height: calc(100vh - 90px);

	@media screen and (min-width: 768px){
		.description p{
			width: 70%;
		}
	}

	@media screen and (max-width: 768px){
		.section{
			grid-template-columns: 1fr !important;
		}
	}

	.section{
		display: grid;
		grid-template-columns: 0.7fr 1fr;
		// grid-template-rows: 1fr;
		height: 100%;
	}

	& .description{
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
		text-align: center;

		h1{
			font-size: calc(25px + 50%);
			letter-spacing: 2px;
			text-transform: uppercase;
		}

		p{font-size: 20px;}
	}

	& .showCase{
		display: flex;
		justify-content: center;
		flex-direction: column;

		& .slider-main{
			height: 600px;
			.sli{
				display: flex;
				.image{
					object-fit: cover;
					object-position: top left;
					width: 97%;
					height: 100%;
					border-radius: 10px;
				}
			}
		}
	}

	& button.cta{
		margin-top: 20px;
		padding: 15px;
		font-size: 17px;
		color: inherit;
		font-family: inherit;
	}

	& footer.home-footer{
		display: flex;
		justify-content: center;
		padding: 10px;
		align-items: center;
		flex-direction: column;
		align-items: center;

		span{
			margin-bottom: 10px;
		}

		.social-list{
			display: flex;
			list-style: none;
			padding-left: 0;
			margin-bottom: 10px;
			li{margin: 0 10px;}
		}

		.social-list li img{
			width: 20px;
			height: 20px;
		}
	}

}
`

const Home: React.FC = () =>{
	return(
		<HomeStyling className="homePage">
			<div className="section">
				<div className="description">
					<h1>A Minimalistic Approach to Online Shopping</h1>
					<p>Mariano Collections is an Ecommerce Product page showcasing
					different Products ranging from clothing to shoes, and
					jewelries e.t.c.</p>
					<Link to='/categories'>
					<Button className='cta' color='teal'>
						Shop All Products
					</Button>
					</Link>
				</div>
				<div className="showCase">
					<CarouselProvider
				        naturalSlideWidth={200}
				        naturalSlideHeight={200}
				        totalSlides={5}
				        visibleSlides={2}
				        isPlaying={true}
				        interval={3500}
				        // infinite={true}
				      >
				      	<Slider className='slider-main'>

				      	  	<Slide className='sli' index={0}>
				          	<Image
				          		className="image"
				          		hasMasterSpinner={true}
				          		src={orange} />
				          	</Slide>
				      	  	<Slide className='sli' index={1}>
				          	<Image
				          		className="image"
				          		hasMasterSpinner={true}
				          		src={chart} />
				          </Slide>
				      	  	<Slide className='sli' index={2}>
				          		<Image
				          		className="image"
				          		hasMasterSpinner={true}
				          		src={candle} />
				          	</Slide>
				          	<Slide className='sli' index={3}>
				          		<Image
				          		className="image"
				          		hasMasterSpinner={true}
				          		src={chart} />
				          	</Slide>
				          	<Slide className='sli' index={4}>
				          		<Image
				          		className="image"
				          		hasMasterSpinner={true}
				          		src={orange} />
				          	</Slide>
				        </Slider>

				    </CarouselProvider>
				</div>
			</div>
			<footer className='home-footer'>

				<ul className='social-list'>
					<li className='icon'>
						<img alt='facebook icon' src={facebook} />
					</li>
					<li className='icon'>
						<img alt='twitter icon' src={twitter} />
					</li>
					<li className='icon'>
						<img alt='whatsapp icon' src={whatsapp} />
					</li>
				</ul>
				<span>All Rights Reserved (c) 2020</span>
			</footer>
		</HomeStyling>
	)
}

export default Home;
