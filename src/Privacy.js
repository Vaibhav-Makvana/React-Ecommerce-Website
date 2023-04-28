import { NavLink } from "react-router-dom";
import styled from "styled-components";

const Privacy = () => {
	return (
		<Wrapper>
			<div className="container">
				<h3 style={{ color: "rgb(126 126 147)", fontSize: "42px" }}>
					For What Purposes Does Laxmi Store Use Your Personal Information?{" "}
				</h3>
				<br />
				<p
					style={{
						letterSpacing: "1px",
						textAlign: "justify",
						color: "rgb(98 92 92 / 80%)",
					}}
				>
					<b>Purchase and delivery of products and services.</b> We use your
					personal information to take and handle orders, deliver products and
					services, process payments, and communicate with you about orders,
					products and services, and promotional offers.
				</p>
				<br />
				<p
					style={{
						letterSpacing: "1px",
						textAlign: "justify",
						color: "rgb(98 92 92 / 80%)",
					}}
				>
					<b>Communicate with you.</b> We use your personal information to
					communicate with you in relation to Amazon Services via different
					channels (e.g., by phone, email).
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
				<h3 style={{ color: "rgb(126 126 147)", fontSize: "42px" }}>
					Does Laxmi Store Share Your Personal Information?
				</h3>
				<br />
				<p
					style={{
						letterSpacing: "1px",
						textAlign: "justify",
						color: "rgb(98 92 92 / 80%)",
					}}
				>
					<b>Transactions involving Third Parties:</b> We make available to you
					services, products, applications, or skills provided by third parties
					for use on or through Laxmi Store Services. For example, you can order
					products from third parties through our stores, download applications
					from third-party application providers from our App Store, and enable
					third-party skills through our services interface. We also offer
					services or sell product lines jointly with third-party businesses,
					such as co-branded credit cards. You can tell when a third party is
					involved in your transactions, and we share customers' personal
					information related to those transactions with that third party.
				</p>
				<br />
				<p
					style={{
						letterSpacing: "1px",
						textAlign: "justify",
						color: "rgb(98 92 92 / 80%)",
					}}
				>
					<b>Third-Party Service Providers:</b> We employ other companies and
					individuals to perform functions on our behalf. Examples include
					fulfilling orders for products or services, delivering packages,
					sending postal mail and email, removing repetitive information from
					customer lists, analyzing data, providing marketing assistance,
					providing search results and links (including paid listings and
					links), processing payments, transmitting content, scoring, assessing
					and managing credit risk, and providing customer service. These
					third-party service providers have access to personal information
					needed to perform their functions, but may not use it for other
					purposes.
				</p>
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

export default Privacy;
