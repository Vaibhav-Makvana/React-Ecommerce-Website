import { NavLink } from "react-router-dom";
import styled from "styled-components";

const About = () => {
	return (
		<Wrapper>
			<div className="container">
				<div className="grid grid-two-column">
					<div className="hero-section-data">
						<p className="intro-data">Welcome to </p>
						<h1> Laxmi Dops </h1>
						<p
							style={{
								letterSpacing: "1px",
								textAlign: "justify",
								color: "#666",
							}}
						>
							Established in the year <b>2004</b>, We, <b>“Laxmi Dops”</b>, are
							engaged in <b>manufacturing, supplying and exporting</b>
							commendable range of Diamond Cutting & Polishing Dops.
							Manufactured by making use of high-grade basic material and
							advanced technology, this range is in compliance with the
							established parameters of the industry. We design all our products
							with utmost precision keeping in mind their usage and
							applicability Designed to perfection, all our products are ensure
							longer service life, robust construction and resistance against
							corrosion and fine-finish. Furthermore, the offered range of
							diamond cutting and polishing tools ensures high grinding
							efficiency, low grinding force, resistance against wear and longer
							serviceability that are required for changing diamond from a rough
							stone into an alluring gem.
						</p>
					</div>
					<div className="hero-section-image">
						<figure>
							<img
								src="images/hero.jpg"
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
			background-color: rgba(81, 56, 238, 0.4);
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

export default About;
