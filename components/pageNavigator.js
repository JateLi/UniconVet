
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';
import ProductionsView from '../views/productions'
import CategoryListView from '../views/cart'

const Stack = createStackNavigator();

class PageNavigator extends React.Component {

    getActiveRouteName(navigationState) {
        if (!navigationState) {
            return null;
        }
        const route = navigationState.routes[navigationState.index];

        return route.name;
    }

    shouldComponentUpdate() {
        return false
    }

    render() {
        return (
            <NavigationContainer>
                <Stack.Navigator
                    initialRouteName="Main"
                    screenOptions={{
                        headerShown: false,
                        gestureEnabled: true,
                        cardOverlayEnabled: true,
                        ...TransitionPresets.SlideFromRightIOS,
                    }}>
                    <Stack.Screen name="Main" component={ProductionsView} />
                    <Stack.Screen name="Cart" component={CategoryListView} />
                </Stack.Navigator>
            </NavigationContainer>
        );
    }
}


export default PageNavigator;