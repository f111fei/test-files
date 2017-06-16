/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView
} from 'react-native';
import { Tabs, Carousel } from 'antd-mobile';

const TabPane = Tabs.TabPane;

export default class antmtabstest extends Component {

  bannerData = [
    { color: 'red' },
    { color: 'green' },
    { color: 'blue' },
    { color: 'yellow' },
    { color: '#ccc' }
  ];

  render() {
    return (
      <View style={styles.container}>
        <Tabs defaultActiveKey='news'>
          <TabPane tab='NEWS' key='news'>
            <ScrollView>
              <Carousel
                autoplayInterval={5000}
                autoplay
                infinite
              >
                {
                  this.bannerData.map((item, index) => {
                    const { color } = item;
                    return (
                      <View key={index} style={{ flex: 1, backgroundColor: color, height: 200 }}>
                      </View>
                    );
                  })
                }
              </Carousel>
            </ScrollView>
          </TabPane>
          <TabPane tab='LABS' key='labs'>
          </TabPane>
        </Tabs>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('antmtabstest', () => antmtabstest);
