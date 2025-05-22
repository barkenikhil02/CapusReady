import React, { useState } from 'react';
import {
    View,
    Text,
    StyleSheet,
    FlatList,
    TextInput,
    TouchableOpacity,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import ProfessorCard from '../components/ProfessorCard';
import { professors } from '../constants/professors';
import colors from '../constants/colors';
import { SafeAreaView } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/Ionicons';

const HomeScreen = () => {
    const [selectedId, setSelectedId] = useState<number | null>(null);
    const [search, setSearch] = useState('');

    const filtered = professors.filter(p =>
        p.name.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <SafeAreaView style={styles.safeArea}>
            <LinearGradient
                colors={[colors.primary, colors.secondary]}
                style={styles.gradient}
                useAngle={true}
                angle={135}
                angleCenter={{ x: 0.5, y: 0.5 }}
            >
                {/* Header Area */}
                <View style={styles.header}>
                    <TouchableOpacity style={styles.backButton}>
                        <Icon name="chevron-back-outline" size={24} color="#fff" />
                    </TouchableOpacity>
                    <View style={styles.headerTextView}>
                        <Text style={styles.headerText}>Choose Your Professor</Text>
                    </View>
                </View>

                <Text style={styles.title}>Slide Coach</Text>
                <Text style={styles.subtitle}>My Presentations</Text>

                <TextInput
                    style={styles.search}
                    placeholder="Search"
                    placeholderTextColor={colors?.gray}
                    value={search}
                    onChangeText={setSearch}
                />
            </LinearGradient>

         
            <View style={styles.cardContainer}>
                <FlatList
                    data={filtered}
                    keyExtractor={item => item.id.toString()}
                    renderItem={({ item, index }) => (
                        <ProfessorCard
                            name={item.name}
                            personality={item.personality}
                            behavior={item.behavior}
                            type={item.type}
                            selected={selectedId === item.id}
                            onPress={() => setSelectedId(item.id)}
                            iconColor={item?.iconColor}
                        />
                    )}
                    contentContainerStyle={{ paddingBottom: 20 }}
                    showsVerticalScrollIndicator={false}
                />
                <View style={styles.buttonContainer}>
                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.buttonText}>Continue</Text>
                    </TouchableOpacity>
                </View>

                <Text style={styles.footer}>Powered by CAMPUS READY</Text>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: colors.white, 
    },
    gradient: {
        paddingHorizontal: 16,
        paddingTop: 10,
        paddingBottom: 20,
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#ffffff30',
        padding: 10,
        borderRadius: 12,
        marginVertical: 12,
    },
    backButton: {
        paddingRight: 8,
        width: '10%',
    },
    headerTextView: {
        width: '80%',
        alignItems: 'center',
    },
    headerText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: '600',
    },
    title: {
        textAlign: 'center',
        fontSize: 30,
        fontWeight: 'bold',
        color: colors.white,
        marginTop: 12,
        marginBottom: 5
    },
    subtitle: {
        textAlign: 'center',
        fontSize: 15,
        fontWeight: '600',
        color: '#eee',
        marginTop: 5,
        marginBottom: 12,
    },
    search: {
        alignSelf: 'center',
        height: 40,
        width: '93%',
        backgroundColor: '#ffffff60',
        borderRadius: 8,
        paddingHorizontal: 20,
        color: '#fff',
        marginBottom: 40,
    },
    cardContainer: {
        flex: 1,
        backgroundColor: colors.gray,
        borderTopLeftRadius: 28,
        borderTopRightRadius: 28,
        paddingTop: '7%',
        paddingHorizontal: '7%',
        paddingBottom: '1%',
        marginTop: -20, 
    },
    buttonContainer: {
        width: '100%',
        alignItems: 'center',
    },
    button: {
        backgroundColor: colors.button,
        padding: 14,
        borderRadius: 8,
        alignItems: 'center',
        marginTop: 12,
        width: '40%'
    },
    buttonText: {
        color: colors.white,
        fontWeight: '600',
    },
    footer: {
        textAlign: 'center',
        color: '#999',
        fontSize: 12,
        marginTop: 10,
    },
});

export default HomeScreen;
