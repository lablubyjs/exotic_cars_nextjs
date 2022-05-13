import styled from 'styled-components';

export const SearchBarContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	width: 30rem;
	height: 50%;
	background-color: ${({ theme }) => theme.colors.purple02};
	border-radius: 18px;
	padding: 0.23rem;

	@media (max-width: 1000px) {
		flex-direction: column;
		padding: 3rem;
		align-items: center;
		justify-content: center;
		margin-top: 70px;

		& button {
			width: 150px;
			height: 50px;

			::before {
				content: 'Search';
				font-family: inherit;
				font-size: 1.2rem;
				font-weight: 600;
				color: ${({ theme }) => theme.colors.purple01};
				padding: 10px;
			}
		}
	}

	@media (max-width: 520px) {
		width: 70%;

		& button {
			width: 125px;
			height: 45px;
		}
	}

	@media (max-width: 475px) {
		& button {
			width: 100px;
			height: 30px;

			::before {
				font-size: 0.9rem;
			}
		}
	}

	@media (max-width: 300px) {
		width: 100%;
	}
`;

export const SearchForm = styled.form`
	display: grid;
	grid-template-columns: 2fr 1fr 1fr 0fr;
	justify-items: center;

	label {
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: center;
		gap: 0;

		& input {
			border: none;
			background-color: transparent;
			text-decoration: none;
			margin-left: 0.5rem;
		}

		& input:focus {
			outline: none;
		}

		& input,
		input[type='date'],
		input::placeholder,
		input:active {
			font-family: ${({ theme }) => theme.fonts.main};
			color: ${({ theme }) => theme.colors.grey09};
			font-weight: 500;
			font-size: 0.75rem;
		}

		& input[type='date']::-webkit-calendar-picker-indicator {
			display: none;
		}
	}

	@media (max-width: 1000px) {
		width: 100%;
		height: 100%;
		grid-template-columns: 1fr;
		grid-template-rows: repeat(1fr);
		align-items: center;
		justify-items: center;

		& label {
			input,
			input[type='date'],
			input::placeholder,
			input:active {
				font-size: 1.2rem;
			}
		}
	}

	@media (max-width: 520px) {
		width: 95%;

		& label {
			input,
			input[type='date'],
			input::placeholder,
			input:active {
				font-size: 1rem;
			}
		}
	}

	@media (max-width: 475px) {
		width: 100%;

		& label {
			input,
			input[type='date'],
			input::placeholder,
			input:active {
				font-size: 0.75rem;
			}
		}
	}
`;
