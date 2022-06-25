import 'react-native-gesture-handler';
import React from 'react';
import {Provider} from 'react-redux';
import Navigation from './src/navigation/Navigation';
import Store from './src/config/Store';

export default function App() {
  // const loadUsers = async () => {
  //   try {
  //     let snapshot = await db.collection('users').get();
  //     let data = [];
  //     snapshot.forEach(item => {
  //       data.push({id: item.id, ...item.data()});
  //     });
  //     console.log(data);
  //   } catch (error) {
  //     console.log('err', error);
  //   }
  // };
  // useEffect(() => {
  //   loadUsers()
  // }, []);
  return (
    <Provider store={Store}>
      <Navigation />
    </Provider>
  );
}

// import React, {useState} from 'react';
// import {
//   Text,
//   View,
//   ScrollView,
//   ActivityIndicator,
//   Button,
//   Image,
//   ImageBackground,
//   StyleSheet,
//   TextInput,
//   KeyboardAvoidingView
// } from 'react-native';
// import FlatlistComp from './src/components/Flatlist';
// import imageName from './src/assets/tiny_logo.png';

// export default function App() {
//   const onPressHandler = () => {};
//   return (
//     <KeyboardAvoidingView style={styles.container
//     }>
//       {/* <FlatlistComp /> */}
//       {/* <Image
//         style={{width:250, height:250}}
//         source={{
//           uri: 'https://reactnative.dev/img/tiny_logo.png',
//         }}
//       /> */}
//       {/* <Image
//         style={{width: 250, height: 250}}
//         source={require('./src/assets/tiny_logo.png')}
//       /> */}
//       {/* <Image
//         style={{width:250, height:250}}
//         source={imageName}
//       /> */}
//       {/* <ImageBackground
//         source={{uri: 'https://reactjs.org/logo-og.png'}}
//         resizeMode="cover"
//         style={styles.image}>
//         <Text style={styles.text}>Inside</Text>
//         <Text style={styles.text}>Inside</Text>
//       </ImageBackground> */}
//       <TextInput placeholder="Username" style={styles.textInput} />
//     </KeyboardAvoidingView>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
//   image: {
//     flex: 1,
//     justifyContent: "center"
//   },
//   text: {
//     color: "white",
//     fontSize: 42,
//     lineHeight: 84,
//     fontWeight: "bold",
//     textAlign: "center",
//     backgroundColor: "#000000c0"
//   }
// });

// import React, { useState } from "react";
// import { Alert, Modal, StyleSheet, Text, Pressable, View } from "react-native";

// const App = () => {
//   const [modalVisible, setModalVisible] = useState(false);
//   return (
//     <View style={styles.centeredView}>
//       <Modal
//         animationType="slide"
//         transparent={true}
//         visible={modalVisible}
//         onRequestClose={() => {
//           Alert.alert("Modal has been closed.");
//           setModalVisible(!modalVisible);
//         }}
//       >
//         <View style={styles.centeredView}>
//           <View style={styles.modalView}>
//             <Text style={styles.modalText}>Hello World!</Text>
//             <Pressable
//               style={[styles.button, styles.buttonClose]}
//               onPress={() => setModalVisible(!modalVisible)}
//             >
//               <Text style={styles.textStyle}>Hide Modal</Text>
//             </Pressable>
//           </View>
//         </View>
//       </Modal>
//       <Pressable
//         style={[styles.button, styles.buttonOpen]}
//         onPress={() => setModalVisible(true)}
//       >
//         <Text style={styles.textStyle}>Show Modal</Text>
//       </Pressable>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   centeredView: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//     marginTop: 22
//   },
//   modalView: {
//     margin: 20,
//     backgroundColor: "white",
//     borderRadius: 20,
//     padding: 35,
//     alignItems: "center",
//     shadowColor: "#000",
//     shadowOffset: {
//       width: 0,
//       height: 2
//     },
//     shadowOpacity: 0.25,
//     shadowRadius: 4,
//     elevation: 5
//   },
//   button: {
//     borderRadius: 20,
//     padding: 10,
//     elevation: 2
//   },
//   buttonOpen: {
//     backgroundColor: "#F194FF",
//   },
//   buttonClose: {
//     backgroundColor: "#2196F3",
//   },
//   textStyle: {
//     color: "white",
//     fontWeight: "bold",
//     textAlign: "center"
//   },
//   modalText: {
//     marginBottom: 15,
//     textAlign: "center"
//   }
// });

// export default App;

// import React from "react";
// import { StyleSheet, Text, View, SafeAreaView, SectionList, StatusBar, TouchableOpacity, TouchableHighlight } from "react-native";
// import Pressable from "react-native/Libraries/Components/Pressable/Pressable";

// const DATA = [
//   {
//     title: "Main dishes",
//     data: ["Piza", "Burger", "Risotto"]
//   },
//   {
//     title: "Sides",
//     data: ["French Fries", "Onion Rings", "Fried Shrimps"]
//   },
//   {
//     title: "Drinks",
//     data: ["Water", "Coke", "Beer"]
//   },
//   {
//     title: "Desserts",
//     data: ["Cheese Cake", "Ice Cream"]
//   }
// ];

// const Item = ({ title }) => (
//   <View style={styles.item}>
//     <Text style={styles.title}>{title}</Text>
//   </View>
// );

// const App = () => (
//   <>
//   <SafeAreaView style={styles.container}>
//      <StatusBar
//         animated={true}
//         backgroundColor="red"
//         hidden={false} />
//          <TouchableOpacity
//       >
//         <Text>Press Here</Text>
//       </TouchableOpacity>

//       <Pressable

//      >
//        <Text>Press Here</Text>
//      </Pressable>

//      <TouchableHighlight
//       activeOpacity={0.9}
//       underlayColor="#DDDDDD"
//       onPress={()=>'sdf'}
//      >
//        <Text>Press asd</Text>
//      </TouchableHighlight>

//     <SectionList
//       sections={DATA}
//       keyExtractor={(item, index) => item + index}
//       renderItem={({ item }) => <Item title={item} />}
//       renderSectionHeader={({ section: { title } }) => (
//         <Text style={styles.header}>{title}</Text>
//       )}
//     />
//   </SafeAreaView>

//   </>
// );

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     paddingTop: StatusBar.currentHeight,
//     marginHorizontal: 16
//   },
//   item: {
//     backgroundColor: "#f9c2ff",
//     padding: 20,
//     marginVertical: 8
//   },
//   header: {
//     fontSize: 32,
//     backgroundColor: "#fff"
//   },
//   title: {
//     fontSize: 24
//   }
// });

// export default App;
