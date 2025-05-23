import React, { useMemo, useState, useCallback } from 'react';
import {
  View,
  FlatList,
  Text,
  Keyboard,
  TouchableWithoutFeedback,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import LinearGradient from 'react-native-linear-gradient';

import { styles } from './HomeScreen.styles';
import { professors } from '../../constants/professors';
import colors from '../../constants/colors';

import Header from '../../components/Header/Header';
import SearchBar from '../../components/SearchBar/SearchBar';
import ProfessorCard from '../../components/ProfessorCard/ProfessorCard';
import ContinueButton from '../../components/ContinueButton/ContinueButton';
import Footer from '../../components/Footer/Footer';

const HomeScreen = () => {
  const [selectedId, setSelectedId] = useState<number | null>(null);
  const [search, setSearch] = useState<string>('');

  // Optional chaining used here in case professors or name are undefined
  const filteredProfessors = useMemo(() => {
    return professors?.filter(p =>
      p?.name?.toLowerCase().includes(search.toLowerCase())
    ) ?? [];
  }, [search]);

  // Used practical optional chaining in case item fields are missing
  const renderProfessor = useCallback(
    ({ item }: { item: (typeof professors)[0] }) => (
      <ProfessorCard
        name={item?.name}
        personality={item?.personality}
        behavior={item?.behavior}
        type={item?.type}
        selected={selectedId === item?.id}
        onPress={() => setSelectedId(item?.id)}
        iconColor={item?.iconColor}
      />
    ),
    [selectedId]
  );

  // Practical chaining in case id or toString is not present
  const keyExtractor = useCallback(
    (item: (typeof professors)[0]) => item?.id?.toString?.() ?? Math.random().toString(),
    []
  );

  return (
    <SafeAreaView style={styles.safeArea}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={{ flex: 1 }}>
          <LinearGradient
            colors={[colors.primary, colors.secondary]}
            style={styles.gradient}
            useAngle
            angle={135}
            angleCenter={{ x: 0.5, y: 0.5 }}
          >
            <Header />
            <Text style={styles.title}>Slide Coach</Text>
            <Text style={styles.subtitle}>My Presentations</Text>
            <SearchBar search={search} onChangeSearch={setSearch} />
          </LinearGradient>

          <View style={styles.cardContainer}>
            <FlatList
              data={filteredProfessors}
              keyExtractor={keyExtractor}
              renderItem={renderProfessor}
              contentContainerStyle={{ paddingBottom: 80 }}
              showsVerticalScrollIndicator={false}
              keyboardShouldPersistTaps="handled"
            />
            <ContinueButton />
            <Footer />
          </View>
        </View>
      </TouchableWithoutFeedback>
    </SafeAreaView>
  );
};

export default HomeScreen;
