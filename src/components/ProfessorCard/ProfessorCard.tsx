import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import { Props } from './ProfessorCard.types';
import { styles } from './ProfessorCard.Style';
import Icon from '../Icon/Icon';
import TitleSection from '../TitleSection/TitleSection';
import InfoRow from '../InfoRow/InfoRow';

const ProfessorCard: React.FC<Props> = ({
  name,
  personality,
  behavior,
  type,
  selected,
  onPress,
  iconColor,
}) => {
  return (
    <TouchableOpacity onPress={onPress} style={[styles.card]}>
      <Icon color={iconColor} />
      <View style={styles.info}>
        <TitleSection name={name} type={type} />
        <InfoRow label="Personality" value={personality} />
        <InfoRow label="Presentation Behavior" value={behavior} />
      </View>
    </TouchableOpacity>
  );
};

export default ProfessorCard;
