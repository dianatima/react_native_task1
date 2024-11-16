import { createStackNavigator } from "@react-navigation/stack"
import LoginScreen from "../screens/LoginScreen"
import RegistrationScreen from "../screens/RegistrationScreen"
import BottomTabNavigator from "./BottomTabNavigator"
import CommentsScreen from "../screens/CommentsScreen"
import BackButton from "../components/BackButton"
import CameraScreen from "../screens/CameraScreen"
import MapScreen from "../screens/MapScreen"
import { useSelector } from "react-redux"
import EditUserScreen from "../screens/EditUserScreen"

const Stack = createStackNavigator()

const StackNavigator = () => {
    const user = useSelector((state) => state.user.userInfo);


    return (
        <Stack.Navigator initialRouteName="Login"
            screenOptions={{
                headerShown: false
        }}
        >
            {user ? (<Stack.Screen name="Home" component={BottomTabNavigator}
                options={{
                    title: ""
            }}
            />) : (<><Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen name="Registration" component={RegistrationScreen}
                options={{
                    title: ""
            }}
            /></>)}
            <Stack.Screen name="Comments" component={CommentsScreen}
                options={{
                    // presentation: "modal",
                    title: "Коментарі",
                    headerShown: true,
                    headerLeft: () => <BackButton onPress={() => navigation.goBack()} />,
                    headerLeftContainerStyle: { paddingLeft: 16 },
                    headerRightContainerStyle: { paddingLeft: 16 }
            }}
            />
            <Stack.Screen name="Camera" component={CameraScreen}
                options={{
                    title: "Камера",
                    headerShown: false
            }}
            />
            <Stack.Screen name="Map" component={MapScreen}
                options={{
                    title: "Карта",
                    headerShown: true,
                    headerLeft: () => <BackButton onPress={() => navigation.goBack()} />,
                    headerLeftContainerStyle: { paddingLeft: 16 },
                    headerRightContainerStyle: { paddingLeft: 16 }
            }}
            />
            <Stack.Screen name="EditUser" component={EditUserScreen}
                options={{
                    title: "Profile",
                    headerShown: true,
                    headerLeft: () => <BackButton onPress={() => navigation.goBack()} />,
                    headerLeftContainerStyle: { paddingLeft: 16 },
                    headerRightContainerStyle: { paddingLeft: 16 }
            }}
            />
        
        </Stack.Navigator>
    )

}

export default StackNavigator