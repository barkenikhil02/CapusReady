import { StyleSheet } from "react-native";
import colors from "../../constants/colors";

export const styles = StyleSheet.create({
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
        backgroundColor: colors.headerBackground,
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
        color: colors.white,
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
        color: colors.white,
        marginTop: 5,
        marginBottom: 12,
    },
    search: {
        alignSelf: 'center',
        height: 40,
        width: '93%',
        backgroundColor: colors.searchBackground,
        borderRadius: 8,
        paddingHorizontal: 20,
        color: colors.white,
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
        color: colors.footer,
        fontSize: 12,
        marginTop: 10,
    },
});