import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { styles } from '../../screens/HomeScreen/HomeScreen.styles';
const Header = () => (
    <View style={styles.header}>
        <TouchableOpacity style={styles.backButton}>
            <Icon name="chevron-back-outline" size={24} color="#fff" />
        </TouchableOpacity>
        <View style={styles.headerTextView}>
            <Text style={styles.headerText}>Choose Your Professor</Text>
        </View>
    </View>
);

export default Header;
