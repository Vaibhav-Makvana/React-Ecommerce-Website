import styled from "styled-components";

const About = () => {
	return (
		<Wrapper>
			<div className="container">
				<div className="grid grid-two-column">
					<div className="hero-section-data">
						<p className="intro-data" style={{ color: "#b9e35f" }}>
							<b>Vision of</b>
						</p>
						<h1 style={{ color: "rgb(126 126 147)" }}> Laxmi Store </h1>
						<p
							style={{
								letterSpacing: "1px",
								textAlign: "justify",
								color: "rgb(98 92 92 / 80%)",
							}}
						>
							Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum
							possimus exercitationem quidem debitis doloremque at? Minima,
							dignissimos. Consectetur optio itaque qui inventore veniam
							doloremque nihil adipisci exercitationem suscipit corporis.
							Voluptatem, provident. Reiciendis, temporibus consectetur fugiat
							ullam praesentium recusandae eum consequuntur voluptas ad cumque
							nesciunt corporis voluptatem harum vero culpa alias! Quaerat
							cumque quam iste fugiat atque nam. Suscipit perspiciatis sint
							accusantium quo pariatur! Ut dolorem sequi harum iure, deleniti
							quasi, aspernatur rerum minus fugiat amet facere, necessitatibus
							nulla! Asperiores corporis ratione facilis eum consectetur ea nemo
							repellat quos a, ipsam natus dignissimos voluptas saepe in rerum
							sed. Corporis, cupiditate perferendis.
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

export default About;
