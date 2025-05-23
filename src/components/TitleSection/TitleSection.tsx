import React from 'react';
import { View, Text } from 'react-native';
import { styles } from '../ProfessorCard/ProfessorCard.Style';

const TitleSection: React.FC<{ name: string; type: string }> = ({ name, type }) => (
  <View style={styles.titleView}>
    <Text style={styles.name}>{name}</Text>
    <View style={styles.typeView}>
      <Text style={styles.typeText}>Type: </Text>
      <Text style={styles.type}>{type}</Text>
    </View>
  </View>
);

export default TitleSection;
