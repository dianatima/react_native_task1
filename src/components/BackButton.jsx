import { TouchableOpacity } from "react-native";
import ArrowLeftIcon from "../../icons/ArrowLeftIcon";
import { useNavigation, useRoute } from "@react-navigation/native";


const BackButton = ({ onPress }) => {
    const navigation = useNavigation();
    const route = useRoute();

    const handleGoBack = () => {
        navigation.goBack();
        // navigation.navigate('Registration')
    }

    return (
        <TouchableOpacity onPress={handleGoBack}>
            <ArrowLeftIcon />
        </TouchableOpacity>
    )
}

export default BackButton;
