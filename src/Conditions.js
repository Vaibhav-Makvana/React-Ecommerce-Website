import { NavLink } from "react-router-dom";
import styled from "styled-components";

const Conditions = () => {
	return (
		<Wrapper>
			<div className="container">
				<h3 style={{ color: "rgb(126 126 147)", fontSize: "42px" }}>
					Conditions Relating to Your Use of Laxmi Store E-Plateform.
				</h3>
				<br />
				<p
					style={{
						letterSpacing: "1px",
						textAlign: "justify",
						color: "rgb(98 92 92 / 80%)",
					}}
				>
					<b>E-Platform for Communication.</b> You agree, understand and
					acknowledge that the website is an online platform that enables you to
					purchase products listed on the website at the price indicated therein
					at any time from any location. You further agree and acknowledge that
					Laxmi Store is only a facilitator and is not and cannot be a party to
					or control in any manner any transactions on the website.
				</p>
				<br />
				<p
					style={{
						letterSpacing: "1px",
						textAlign: "justify",
						color: "rgb(98 92 92 / 80%)",
					}}
				>
					<b> Access to Laxmi Store</b> We will do our utmost to ensure that
					availability of the website will be uninterrupted and that
					transmissions will be error-free. However, due to the nature of the
					Internet, this cannot be guaranteed. Also, your access to the website
					may also be occasionally suspended or restricted to allow for repairs,
					maintenance, or the introduction of new facilities or services at any
					time without prior notice. We will attempt to limit the frequency and
					duration of any such suspension or restriction.
				</p>
				<br />
				<p
					style={{
						letterSpacing: "1px",
						textAlign: "justify",
						color: "rgb(98 92 92 / 80%)",
					}}
				>
					<b>Fraud Prevention and Credit Risks.</b> We use personal information
					to prevent and detect fraud and abuse in order to protect the security
					of our customers, Amazon, and others. We may also use scoring methods
					to assess and manage credit risks.
				</p>
				<br />
				<br />
				<br />
				<br />
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

export default Conditions;
