import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import CustomTabBar from '../Components/CustomTabBar/CustomTabBar';
import CustomAttendanceIcon from '../Components/CustomAttendanceIcon/CustomAttendanceIcon';

const Tab = createBottomTabNavigator();

export default AppNavigation = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        showLabel: false,
      }}
      tabBar={(props) => <CustomTabBar {...props} />}>
      <Tab.Screen
        name="Home"
        component={() => <></>}
        options={{
          tabBarIcon: () => (
            <MaterialIcons name="home" color={'#000000'} size={30} />
          ),
        }}
      />
      <Tab.Screen
        name="Leaderboard"
        component={() => <Text>Leaderboard</Text>}
        options={{
          tabBarIcon: () => (
            <MaterialIcons name="leaderboard" color={'#000000'} size={30} />
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
          tabBarIcon: () => (
            <MaterialIcons name="calendar-today" color={'#000000'} size={30} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={() => <></>}
        options={{
          tabBarIcon: () => (
            <MaterialIcons name="person" color={'#000000'} size={30} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};
