import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { Button } from "../styles/Button";

const HeroSection = ({ myData }) => {
	const { name } = myData;

	return (
		<Wrapper>
			<div className="container">
				<div className="grid grid-two-column">
					<div className="hero-section-data">
						<p className="intro-data">
							<b>Welcome to</b>
						</p>
						<h1 style={{ color: "rgb(126 126 147)" }}>Laxmi Store</h1>
						<p style={{ color: "rgb(98 92 92 / 80%)" }}>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
							atque temporibus veniam doloribus libero ad error omnis voluptates
							animi! Suscipit sapiente.
						</p>
						<NavLink to="/products">
							<Button>show now</Button>
						</NavLink>
					</div>
					<div className="hero-section-image">
						<figure>
							<img
								src="images/hero1.jpg"
								alt="hero-section-pic"
								className="img-style"
							/>
						</figure>
					</div>
				</div>
			</div>
		</Wrapper>
	);
};

const Wrapper = styled.section`
	padding: 12rem 0;

	img {
		min-width: 10rem;
		height: 10rem;
	}

	.hero-section-data {
		p {
			margin: 2rem 0;
		}

		h1 {
			text-transform: capitalize;
			font-weight: bold;
		}

		.intro-data {
			margin-bottom: 0;
			color: #b9e35f;
		}
	}

	.hero-section-image {
		width: 100%;
		height: auto;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	figure {
		position: relative;

		&::after {
			content: "";
			width: 60%;
			height: 80%;
			background-color: #b9e35f;
			position: absolute;
			left: 50%;
			top: -5rem;
			z-index: -1;
		}
	}
	.img-style {
		width: 100%;
		height: auto;
	}

	@media (max-width: ${({ theme }) => theme.media.mobile}) {
		.grid {
			gap: 10rem;
		}

		figure::after {
			content: "";
			width: 50%;
			height: 100%;
			left: 0;
			top: 10%;
			/* bottom: 10%; */
			background-color: rgba(81, 56, 238, 0.4);
		}
	}
`;

export default HeroSection;
