import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from '@expo/vector-icons/Ionicons';
import LogoutBotton from "../components/LogoutBottom";
import BackButton from "../components/BackButton";
import PostsScreen from "../screens/PostsScreen";
import CreatePostsScreen from "../screens/CreatePostsScreen";
import ProfileScreen from "../screens/ProfileScreen";
import { colors } from "../styles/global";
import { StyleSheet, View } from "react-native";
import FeatherIcon from "../icons/FeatherIcon";
import UserIcon from "../icons/UserIcon";
import CreatePostIcon from "../icons/CreatePostIcon";
import MapScreen from "../screens/MapScreen";

const Tab = createBottomTabNavigator()

const BottomTabNavigator = () => {
    return (
        <Tab.Navigator
            initialRouteName="PostsScreen"
            screenOptions={{
                headerRightContainerStyle: { paddingRight: 16 },
                headerLeftContainerStyle: { paddingLeft: 16 },
                tabBarLabel: '',
                tabBarStyle: { height: 83, paddingTop: 9, alignItems: "center" },
                }}
        >
            <Tab.Screen name="PostsScreen" component={PostsScreen}
            options={ ({navigation}) => ({
                title: 'Публікації',
                headerRight: () => <LogoutBotton onPress={() => console.log("LOG OUT!")} />,
                // tabBarIcon: ({ focused }) => <Ionicons name="grid-outline" size={24} color={focused ? colors.orange : colors.balack_main} />,
                tabBarIcon: ({ focused }) => <FeatherIcon color={focused ? colors.orange : colors.balack_main} />,
                
                
            })}
            />
            <Tab.Screen name="CreatePosts" component={CreatePostsScreen}
            barStyle={{ backgroundColor: '#694fad' }}
            options={ ({navigation}) => ({
                title: "Створити публікацію",
                headerLeft: () => <BackButton onPress={() => navigation.goBack()} />,
                tabBarIcon: () => <CreatePostIcon />,
                tabBarStyle: { display: "none" }
            })}
            />
            <Tab.Screen name="Profile" component={ProfileScreen}
            options={ ({navigation}) => ({
                title: "",
                headerShown: false,
                tabBarIcon: ({focused}) => <UserIcon color={focused ? colors.orange: colors.balack_main} />,
            })}
            />
            {/* <Tab.Screen name="Map" component={MapScreen}
            options={ ({navigation}) => ({
                title: "Map",
                // headerShown: false,
                tabBarIcon: ({focused}) => <UserIcon color={focused ? colors.orange: colors.balack_main} />,
            })}
            /> */}
        
            </Tab.Navigator>
    )
}

export default BottomTabNavigator;

const styles = StyleSheet.create({
    createPost: {
        backgroundColor: colors.orange, 
        width: 70, 
        height: 40, 
        borderRadius: 20, 
        justifyContent: "center", 
        alignItems: "center", 
    }
})