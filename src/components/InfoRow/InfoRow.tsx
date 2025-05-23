import React from 'react';
import { View, Text } from 'react-native';
import { styles } from '../ProfessorCard/ProfessorCard.Style';
const InfoRow: React.FC<{ label: string; value: string }> = ({ label, value }) => (
  <View style={styles.otherInfoView}>
    <Text style={styles.label}>{label}</Text>
    <Text style={styles.text}>{value}</Text>
  </View>
);

export default InfoRow;
