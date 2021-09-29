import React from 'react';
import { SafeAreaView, FlatList, TouchableOpacity } from 'react-native';
import { Layout } from '@ui-kitten/components';
import Header from '../components/Header.jsx';
import FloatingButton from '../components/FloatingButton.jsx';
import Note from '../components/Note.jsx';

const Home = () => {

  return (

    <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
      <Layout style={{ flex: 1 }}>
        <Header />

        <Layout style={{ marginTop: 70 }}>
          <FlatList
          keyExtractor={(item, index) => String(index)}
            data={[
              { title: 'SWEN 325', description: 'Finish report for A2', colour: '#F1F58F' },
              { title: 'CYBR 372', description: 'Test secure encryption between client and server', colour: '#A9EDF1' },
              { title: 'Work', description: 'Meeting at 2:00pm', colour: '#74ED4B' },
              { title: 'Groceries', description: 'TBA', colour: '#FFA930' },
              { title: 'Photography Club', description: 'Moon Photography Class at 7:30pm', colour: 'pink' },
              { title: 'Badminton', description: 'Pick up new racket from Rebel Sport', colour: '#74ED4B' },
              { title: 'Bills', description: 'Spark Bill: pay by 30th of September', colour: 'violet' },
              { title: 'NWEN 301', description: 'Test implementation on PintOS', colour: '#F1F58F' }
            ]}

            renderItem={({ item: { title, description, colour, navigation }, index }) => {
              return (
                <Note
                  title={title}
                  description={description}
                  colour={colour}
                  navigation={navigation}
                  onPress={() =>  navigation.navigate("NoteScreen", { title, description, colour }) }
                />
              );
            }}
            numColumns={2}
          />
        </Layout>
        <TouchableOpacity>
          <FloatingButton />
        </TouchableOpacity>
      </Layout>
    </SafeAreaView>

  )

}

export default Home;