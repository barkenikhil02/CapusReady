import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import { styles } from '../../screens/HomeScreen/HomeScreen.styles';

const ContinueButton = () => (
    <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Continue</Text>
        </TouchableOpacity>
    </View>
);

export default ContinueButton;
