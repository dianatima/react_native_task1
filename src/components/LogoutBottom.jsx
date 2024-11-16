import { TouchableOpacity } from "react-native"
import LogoutIcon from "../../icons/LogoutIcon"

const LogoutBotton = ({onPress}) => {
    return (
        <TouchableOpacity onPress={onPress}>
            <LogoutIcon />
        </TouchableOpacity>
    )
}

export default LogoutBotton;
