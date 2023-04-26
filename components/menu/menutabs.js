import * as React from 'react';
import { View, StyleSheet, Text} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome5';



 

//import LinearGradient from 'react-native-linear-gradient';

 

function HomeScreen() {
    return (
        <View style={styles.container}>
            <Text>Bem vindo!</Text>
        </View>
    );
}

 

function ListScreen() {
    return (
        <View style={styles.container}>
            <Text></Text>
        </View>
    );
}

 

function PostScreen() {
    return <Produtos />
}

 

function NotificationsScreen() {
    return (
        <View style={styles.container}>
            <Text></Text>
        </View>
    );
}

 

const Tab = createBottomTabNavigator();

 

export default function App() {
    return (
        <NavigationContainer>
            <Tab.Navigator
                screenOptions={({ route }) => ({
                    tabBarIcon: ({ color, size }) => {
                        let iconName;

 

                        switch (route.name) {
                            case 'Home':
                                iconName = 'store';
                                break;
                            case 'Listar':
                                iconName = 'list';
                                break;
                            case 'Camisas':
                                iconName = 'shirt';
                                break;
                            case 'Ler API':
                                iconName = 'bell';
                                break;
                            default:
                                iconName = 'add-circle-outline';
                                break;
                        }

 

                        return <Icon name={iconName} size={size} color={color} />;
                    },
                })}
                tabBarOptions={{
                    activeTintColor: '#4682B4',
                    inactiveTintColor: '#777',
                    showLabel: true,
                }}
            >
                <Tab.Screen name="Home" component={HomeScreen} />
                <Tab.Screen name="Listar" component={ListScreen} />
                <Tab.Screen
                    name="Outros"
                    component={PostScreen}
                />
                <Tab.Screen name="Ler API" component={NotificationsScreen} />
                </Tab.Navigator>
        </NavigationContainer>
    );
}

 

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    iconTabRound: {
        width: 60,
        height: 90,
        borderRadius: 30,
        marginBottom: 20,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 6,
        shadowColor: '#9C27B0',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 5,
    }
});