import { StyleSheet } from "react-native";
import colors from "../../constants/colors";

export  const styles = StyleSheet.create({
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