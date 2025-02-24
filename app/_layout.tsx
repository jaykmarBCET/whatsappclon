import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import index from './index';
import Calls from './Calls';
import Tools from './Tools';
import Updates from './Updates';
import Fontisto from '@expo/vector-icons/Fontisto';
import Feather from '@expo/vector-icons/Feather';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { StatusBar } from 'expo-status-bar';

const Tabs = createBottomTabNavigator();

const RootLayout = () => {
  return (
    <>
      <StatusBar style="auto" />
      <Tabs.Navigator
        screenOptions={{
          tabBarStyle: {
            backgroundColor: '#000',
            elevation: 5,
          },
        }}
      >
        <Tabs.Screen
          name="index"
          component={index}
          options={{
            title: 'Chats',
            headerStyle: {
              backgroundColor: '#000',
              height: 0,
            },
            headerTintColor: 'white',
            tabBarIcon: ({ color }) => (
              <Fontisto name="hipchat" size={24} color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="Calls"
          component={Calls}
          options={{
            title: 'Calls',
            headerStyle: {
              backgroundColor: '#000',
              height: 0,
            },
            headerTintColor: 'white',
            tabBarIcon: ({ color }) => (
              <Feather name="phone-call" size={24} color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="Update"
          component={Updates}
          options={{
            title: 'Updates',
            headerStyle: {
              backgroundColor: '#000',
              height: 0,
            },
            headerTintColor: 'white',
            tabBarIcon: ({ color }) => (
              <Feather name="bell" size={24} color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="Tools"
          component={Tools}
          options={{
            title: 'Tools',
            headerStyle: {
              backgroundColor: '#000',
              height: 0,
            },
            headerTintColor: 'white',
            tabBarIcon: ({ color }) => (
              <Feather name="settings" size={24} color={color} />
            ),
          }}
        />
      </Tabs.Navigator>
    </>
  );
};

export default RootLayout;
