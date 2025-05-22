import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Platform } from 'react-native';
import colors from '../constants/colors';

interface Props {
    name: string;
    personality: string;
    behavior: string;
    type: string;
    selected: boolean;
    onPress: () => void;
    iconColor: string;
}

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
        <TouchableOpacity onPress={onPress} style={[styles.card, selected && styles.selected]}>
            <View style={[styles.iconContainer, { borderColor: iconColor }]}>
                <View style={[styles.bar, { backgroundColor: iconColor, height: 20 }]} />
                <View style={[styles.bar, { backgroundColor: iconColor }]} />
                <View style={[styles.bar, { backgroundColor: iconColor, height: 20 }]} />
            </View>
            <View style={styles.info}>
                <View style={styles.titleView}>
                    <Text style={styles.name}>{name}</Text>
                    <View style={styles.typeView}>
                    <Text style={styles.typeText}>Type: </Text>
                    <Text style={styles.type}>{type}</Text>
                    </View>
                </View>

                <View style={styles.otherInfoView}>
                    <Text style={styles.label}>Personality</Text>
                    <Text style={styles.text}>{personality}</Text>
                </View>
                <View style={styles.otherInfoView}>
                    <Text style={styles.label}>Presentation Behavior</Text>
                    <Text style={styles.text}>{behavior}</Text>
                </View>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    card: {
        backgroundColor: colors.white,
        borderRadius: 12,
        padding: 16,
        marginVertical: 15,
        // flexDirection: 'column',
        // justifyContent: 'center',
        // Shadow (iOS)
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.1,
        shadowRadius: 6,

        // Shadow (Android)
        elevation: 2,
    },
    selected: {
        borderWidth: 1,
        borderColor: colors.button,
    },
    iconContainer: {
        width: 32,
        height: 32,
        borderRadius: 16,
        borderWidth: 2,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 12,
        marginTop: -30,
    },
    bar: {
        width: 4,
        height: 14,
        marginHorizontal: 1,
        borderRadius: 2,
    },
    info: {
        flex: 1,
    },
    titleView: {
        marginTop: 5,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 5,
    },
    otherInfoView:{
        marginVertical: 2,
    },
    name: {
        fontWeight: 'bold',
        fontSize: 16,
        color: colors.cardHeader,
    },
    typeView:{
        flexDirection:'row',
    },
    type: {
        fontSize: 13,
        marginBottom: 8,
        color: '#444',
    },
    typeText: {
        color: colors.purple,
        fontWeight: '600',
    },
    label: {
        fontWeight: '600',
        color: colors.purple,
        fontSize: 13,
    },
    text: {
        fontSize: 13,
        color: '#444',
        marginBottom: 4,
    },
});

export default ProfessorCard;
