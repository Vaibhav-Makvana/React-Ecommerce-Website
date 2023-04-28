import styled from "styled-components";

const Contact = () => {
	const Wrapper = styled.section`
		padding: 9rem 0 5rem 0;
		text-align: center;

		.container {
			margin-top: 6rem;

			.contact-form {
				max-width: 50rem;
				margin: auto;

				.contact-inputs {
					display: flex;
					flex-direction: column;
					gap: 3rem;

					input[type="submit"] {
						cursor: pointer;
						transition: all 0.2s;
						border: none;
						&:hover {
							background-color: ${({ theme }) => theme.colors.white};
							border: 1px solid #b9e35f;
							color: #b9e35f;
							transform: scale(0.9);
						}
					}
				}
			}
		}
	`;

	return (
		<Wrapper>
			<h2 className="common-heading">free feel to contact us</h2>

			<iframe
				src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3719.4819962590655!2d72.85301797594383!3d21.212727181433152!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04f22447dd2a5%3A0xc214902bb338ca23!2sLaxmi%20Dops!5e0!3m2!1sen!2sin!4v1682269579457!5m2!1sen!2sin"
				width="70%"
				height="600"
				style={{ border: "0" }}
				allowfullscreen=""
				loading="lazy"
				referrerpolicy="no-referrer-when-downgrade"
			></iframe>

			<div className="container">
				<div className="contact-form">
					<form
						action="https://formspree.io/f/mzbqyjpb"
						method="POST"
						className="contact-inputs"
					>
						<input
							type="text"
							placeholder="username"
							name="username"
							required
							autoComplete="off"
						/>

						<input
							type="email"
							name="Email"
							placeholder="Email"
							autoComplete="off"
							required
						/>

						<textarea
							name="Message"
							cols="30"
							rows="10"
							required
							autoComplete="off"
							placeholder="Enter you message"
						></textarea>

						<input type="submit" value="send" />
					</form>
				</div>
			</div>
		</Wrapper>
	);
};

export default Contact;
