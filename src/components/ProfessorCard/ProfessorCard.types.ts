export interface Props {
    name: string;
    personality: string;
    behavior: string;
    type: string;
    selected: boolean;
    onPress: () => void;
    iconColor: string;
}