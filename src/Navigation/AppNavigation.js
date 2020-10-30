import React from 'react';
import {Text} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import styles from './AppNavigation.styles';

import Home from '../Containers/Home/Home';
import Leaderboard from '../Containers/Leaderboard/Leaderboard';
import ProfileNavigation from './ProfileNavigation';

import CustomAttendanceIcon from '../Components/CustomAttendanceIcon/CustomAttendanceIcon';

import {Colors} from '../Themes';

const Tab = createBottomTabNavigator();

export default AppNavigation = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        showLabel: false,
        activeTintColor: Colors.gold,
        inactiveTintColor: Colors.white,
        style: styles.tabBar,
      }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({color}) => (
            <MaterialIcons name="home" color={color} size={30} />
          ),
        }}
      />
      <Tab.Screen
        name="Leaderboard"
        component={Leaderboard}
        options={{
          tabBarIcon: ({color}) => (
            <MaterialIcons name="leaderboard" color={color} size={30} />
          ),
        }}
      />
      <Tab.Screen
        name="Attendance"
        component={() => <Text>Attendance</Text>}
        options={{
          tabBarIcon: () => <CustomAttendanceIcon />,
        }}
      />
      <Tab.Screen
        name="Calendar"
        component={() => <></>}
        options={{
          tabBarIcon: ({color}) => (
            <MaterialIcons name="calendar-today" color={color} size={30} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileNavigation}
        options={{
          tabBarIcon: ({color}) => (
            <MaterialIcons name="person" color={color} size={30} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};
