import React from 'react';
import { StyleSheet, SafeAreaView, TouchableOpacity } from 'react-native';
import { Layout, Icon, Text } from '@ui-kitten/components';

const Header = () => {
  return (
    <SafeAreaView>
      <Layout style={styles.layout}>
        <TouchableOpacity>
          <Icon
            style={styles.list}
            fill='black'
            name='list'
          />
        </TouchableOpacity>
        <Text
          style={styles.text}
          category='h1'
        >Reminders
        </Text>
        <TouchableOpacity>
          <Icon
            style={styles.settings}
            fill='black'
            name='search'
          />
        </TouchableOpacity>
      </Layout>

    </SafeAreaView>

  )

}

const styles = StyleSheet.create({
  layout: {
    flex: 1,
    position: 'absolute',
    top: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    zIndex: 100,
    paddingHorizontal: 20
  },
  list: {
    width: 50,
    height: 50,
    resizeMode: 'contain'
  },
  text: {
    fontSize: 35,
    top: 3,
    color: 'black',
  },
  settings: {
    width: 50,
    height: 50,
    resizeMode: 'contain'
  },
})

export default Header;