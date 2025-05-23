import React from 'react';
import { TextInput } from 'react-native';
import colors from '../../constants/colors';
import { styles } from '../../screens/HomeScreen/HomeScreen.styles';
interface Props {
    search: string;
    onChangeSearch: (text: string) => void;
}

const SearchBar: React.FC<Props> = ({ search, onChangeSearch }) => (
    <TextInput
        style={styles.search}
        placeholder="Search"
        placeholderTextColor={colors.gray}
        value={search}
        onChangeText={onChangeSearch}
    />
);

export default SearchBar;
