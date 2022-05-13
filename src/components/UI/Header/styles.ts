import styled from 'styled-components';

import { SearchBarContainer } from '../../SearchBar/styles';
import { LogoContainer } from '../Logo/styles';

interface IHeaderProps {
	menuIsActive: boolean;
}

export const Menu = styled.div<IHeaderProps>`
	display: ${({ menuIsActive }) => (menuIsActive ? 'block' : 'none')};
	border-top: 2px solid ${({ theme }) => theme.colors.purple01};
	width: 25px;
	border-top-color: ${({ menuIsActive, theme }) =>
		menuIsActive ? 'transparent' : theme.colors.purple01};
	cursor: pointer;
	position: fixed;
	right: 0;
	top: 2.5vw;
	margin-right: 7vh;

	::after,
	::before {
		content: '';
		display: block;
		width: 25px;
		height: 2px;
		background-color: ${({ theme }) => theme.colors.purple01};
		margin-top: 5px;
		transition: 0.3s;
		position: relative;
	}

	&::before {
		transform: ${({ menuIsActive }) => (menuIsActive ? 'rotate(135deg)' : '')};
	}

	&::after {
		transform: ${({ menuIsActive }) => (menuIsActive ? 'rotate(-135deg)' : '')};
		top: ${({ menuIsActive }) => (menuIsActive ? '-7px' : '0')};
	}

	@media (max-width: 500px) {
		margin-right: 2vh;
		top: 1.5rem;
	}
`;

export const AuthContainer = styled.div`
	display: flex;
	flex-direction: row;
	gap: 0.5rem;
	position: fixed;
	right: 0;
	margin-right: 7vh;

	@media (max-width: 900px) {
		margin-right: 2vh;
	}
`;

export const HeaderContainer = styled.header<IHeaderProps>`
	width: 100%;
	height: ${({ menuIsActive }) => (menuIsActive ? '100vh' : '4.5rem')};
	box-shadow: 0px 10px 30px ${({ theme }) => theme.colors.grey07};
	display: flex;
	align-items: center;
	flex-direction: ${({ menuIsActive }) => (menuIsActive ? 'column' : 'row')};
	justify-content: ${({ menuIsActive }) => (menuIsActive ? 'start' : 'center')};
	background-color: ${({ theme }) => theme.colors.white01};
	padding: 0 6vw;
	position: fixed;
	top: 0;
	overflow: hidden;
	transition: 0.5s;
	z-index: 1000;

	@media (max-width: 1000px) {
		${SearchBarContainer}, ${AuthContainer} {
			display: none;
		}

		${Menu} {
			display: block;
		}
	}

	${SearchBarContainer}, ${AuthContainer} {
		display: ${({ menuIsActive }) => (menuIsActive ? 'block' : '')};
		position: ${({ menuIsActive }) => (menuIsActive ? 'relative' : '')};
	}

	${LogoContainer} {
		top: ${({ menuIsActive }) => (menuIsActive ? '3vw' : '')};
	}

	${AuthContainer} {
		margin-top: ${({ menuIsActive }) => (menuIsActive ? '25px' : '')};

		& button {
			width: ${({ menuIsActive }) => (menuIsActive ? '150px' : '')};
			height: ${({ menuIsActive }) => (menuIsActive ? '50px' : '')};

			& p {
				font-size: ${({ menuIsActive }) => (menuIsActive ? '1.3rem' : '')};;
			}
		}
	}

	@media (max-width: 500px) {
		${LogoContainer} {
			top: ${({ menuIsActive }) => (menuIsActive ? '1rem' : '')};
			margin-left: ${({ menuIsActive }) => (menuIsActive ? '0' : '')};
			padding-left: ${({ menuIsActive }) => (menuIsActive ? '0.9rem' : '')};;
		}

		${AuthContainer} {
			& button {
				width: ${({ menuIsActive }) => (menuIsActive ? '100px' : '5rem')};
				height: ${({ menuIsActive }) => (menuIsActive ? '30px' : '2rem')};

				& p {
					font-size: ${({ menuIsActive }) => (menuIsActive ? '1rem' : '1rem')};;
				}
			}
		}
	}
`;
