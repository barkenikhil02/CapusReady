import React from 'react';
import { View } from 'react-native';
import { styles } from '../ProfessorCard/ProfessorCard.Style';

const Icon: React.FC<{ color: string }> = ({ color }) => (
  <View style={[styles.iconContainer, { borderColor: color }]}>
    <View style={[styles.bar, { backgroundColor: color, height: 20 }]} />
    <View style={[styles.bar, { backgroundColor: color }]} />
    <View style={[styles.bar, { backgroundColor: color, height: 20 }]} />
  </View>
);

export default Icon;
