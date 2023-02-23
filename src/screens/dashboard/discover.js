import {StyleSheet, Text, View, Dimensions, FlatList} from 'react-native';
import React, {useState} from 'react';
import globalStyles from '../../assets/styles/global-styles';
import {SceneMap, TabBar, TabView} from 'react-native-tab-view';
import colors from '../../assets/colors/colors';
import PrimaryText from '../../components/texts/primary-text';

import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import DiscoverItem from '../../components/cards/discover-item';

export default function Discover() {
  const [index, setIndex] = useState(0);
  const [routes] = useState([
    {key: 'Discover', title: 'Discover'},
    {key: 'History', title: 'History'},
  ]);

  const discoverItems = [
    {
      iconType: 'FontAwesome',
      iconName: 'edit',
      title: 'Notes to summary',
      description: 'Turn meeting notes into a summary',
    },
    {
      iconType: 'Ionicons',
      iconName: 'ios-newspaper',
      title: 'Essay outline',
      description: 'Generate an outline for a research topic',
    },
    {
      iconType: 'Entypo',
      iconName: 'briefcase',
      title: 'Interview Questions',
      description: 'Create interview questions',
    },
    {
      iconType: 'MaterialCommunityIcons',
      iconName: 'code-not-equal-variant',
      title: 'Text description to code',
      description: 'Generate or manipulate code',
    },
  ];

  const discoverTab = () => {
    return (
      <FlatList
        data={discoverItems}
        renderItem={({item}) => <DiscoverItem item={item} />}
      />
    );
  };

  const historyTab = () => {
    return <View></View>;
  };

  const renderTabBar = props => (
    <TabBar
      bounces
      tabStyle={{borderBottomColor: colors.gray, borderBottomWidth: 0.5}}
      {...props}
      renderLabel={({route, focused, color}) => (
        <PrimaryText
          style={{
            color: focused ? colors.white : colors.gray,
            margin: 8,
          }}>
          {route.title}
        </PrimaryText>
      )}
      indicatorStyle={{backgroundColor: colors.orange}}
      style={{backgroundColor: colors.bar}}
    />
  );

  return (
    <View style={globalStyles.container}>
      <TabView
        renderTabBar={renderTabBar}
        style={globalStyles.container}
        navigationState={{index: index, routes: routes}}
        renderScene={SceneMap({
          Discover: discoverTab,
          History: historyTab,
        })}
        onIndexChange={setIndex}
        initialLayout={{width: Dimensions.get('window').width}}
      />
    </View>
  );
}

const styles = StyleSheet.create({});
