import Image from 'next/image';

import Button from '../UI/Buttons/Button';

import {theme} from '@styles';

import {SearchBarContainer, SearchForm} from './styles';

const SearchBar = (): JSX.Element => {
    return (
        <SearchBarContainer>
            <SearchForm>
                <label>
                    <Image
                        src="/assets/map.svg"
                        alt=""
                        height={15}
                        width={15}
                        layout="fixed"
                    />

                    <input placeholder="North Carolina, NC 90025" />
                </label>
                <label>
                    <Image
                        src="/assets/calendar.svg"
                        alt=""
                        height={15}
                        width={15}
                        layout="fixed"
                    />
                    <input defaultValue="2021-11-03" type="date" />
                </label>
                <label>
                    <Image
                        src="/assets/calendar.svg"
                        alt=""
                        height={15}
                        width={15}
                        layout="fixed"
                    />
                    <input defaultValue="2021-12-12" type="date" />
                </label>
                <Button
                    width={2}
                    height={2}
                    backgroundColor={theme.colors.white01}
                    borderRadius={50}
                >
                    <Image
                        src="/assets/search.svg"
                        alt=""
                        height={15}
                        width={15}
                        layout="fixed"
                    />
                </Button>
            </SearchForm>
        </SearchBarContainer>
    );
};

export default SearchBar;
