import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const PageNavigation = ({ title }) => {
	return (
		<Wrapper style={{ color: "rgb(126 126 147)"}}>
			<NavLink to="/products">Products&nbsp;</NavLink>/&nbsp;{title}
		</Wrapper>
	);
};

const Wrapper = styled.section`
	margin-top: 10px;
	height: 9rem;
	background-color: ${({ theme }) => theme.colors.bg};
	display: flex;
	justify-content: flex-start;
	align-items: center;
	font-size: 3.2rem;
	padding-left: 1.2rem;

	a {
		color: rgb(126 126 147);
		margin-left: 40px;
		font-weight: 600;
		font-size: 3.2rem;
	}
`;

export default PageNavigation;
