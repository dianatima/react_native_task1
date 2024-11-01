import { createStackNavigator } from "@react-navigation/stack"
import LoginScreen from "../screens/LoginScreen"
import RegistrationScreen from "../screens/RegistrationScreen"
import BottomTabNavigator from "./BottomTabNavigator"
import CommentsScreen from "../screens/CommentsScreen"
import ArrowLeftIcon from "../icons/ArrowLeftIcon"
import BackButton from "../components/BackButton"

const Stack = createStackNavigator()

const StackNavigator = () => {
    return (
        <Stack.Navigator initialRouteName="Login"
            screenOptions={{
                headerShown: false
        }}
        >
            <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen name="Registration" component={RegistrationScreen}
                options={{
                    title: ""
            }}
            />
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
            <Stack.Screen name="Home" component={BottomTabNavigator}
                options={{
                    title: ""
            }}
            />
        </Stack.Navigator>
    )

}

export default StackNavigator