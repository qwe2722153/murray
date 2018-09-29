import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Icon } from '../components/Icon';
import color from '../constants/color';

export const headerOptions = props => {
  const {
    navigationOptions,
    visible = true,
    title = '',
  } = props;
  const header = visible === false ? null : undefined;
  return {
    header,
    title,
    headerBackTitle: null,
    headerTintColor: color.headerTintColor,
    headerTitleStyle: {
      fontSize: 16,
      alignSelf: 'center',
      color: color.black,
    },
    headerStyle: {
      height: 44,
      backgroundColor: color.White,
    },
    ...navigationOptions,
  };
};
export const tabOptions = options => {
  const {
    icon = null,
    activeIcon = null,
    label = null,
    extend = false,
  } = options;
  return {
    tabBarLabel: label,
    tabBarIcon: ({ focused }) => {
      const IcoName = focused ? icon : activeIcon;
      const IcoColor = focused ? color.theme : color.defaultTabColor;
      if (extend) {
        return <View style={styles.tabMark}><Icon name={`iconfont|${IcoName}`} size={38} color={IcoColor}/></View>;
      }
      return <Icon name={`ionicons|${IcoName}`} size={26} color={IcoColor}/>;
    },
  };
};
export const TabNavigatorConfig = options => {
  const {
    initialRouteName: InitialRouteName = '',
    swipeEnabled: SwipeEnabled = false,
    scrollEnabled: ScrollEnabled = false,
    animationEnabled: AnimationEnabled = false,
    showIcon: ShowIcon = true,
  } = options;
  return {
    lazy: true,
    initialRouteName: InitialRouteName,
    swipeEnabled: SwipeEnabled,
    scrollEnabled: ScrollEnabled,
    animationEnabled: AnimationEnabled,
    backBehavior: 'none',
    tabBarOptions: {
      labelStyle: {
        margin: 0,
        padding: 0,
        fontSize: 12,
      },
      style: {
        borderTopColor: '#e5e5e5',
        backgroundColor: '#fff',
        opacity: 0.95,
      },
      pressColor: '#e5e5e5',
      pressOpacity: 0.3,
      indicatorStyle: {
        height: 0,
      },
      inactiveTintColor: color.defaultTabColor,
      activeTintColor: color.theme,
      showLabel: true,
      showIcon: ShowIcon,
      upperCaseLabel: false,
    },
  };
};
export const StackNavigatorConfig = options => {
  const {
    initialRouteName: InitialRouteName = '',
  } = options;
  return {
    initialRouteName: InitialRouteName, mode: 'card',
    headerMode: 'screen',
    cardStyle: {
      backgroundColor: '#fff',
    },
  };
};

const styles = StyleSheet.create({
  tabMark: {
    width: 40,
    height: 40,
    borderRadius: 45,
    margin: 0,
    padding: 0,
    overflow: 'hidden',
    alignItems: 'center',
    backgroundColor: '#fff',
    marginTop: -20,
  },

});