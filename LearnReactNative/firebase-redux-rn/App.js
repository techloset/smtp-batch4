import 'react-native-gesture-handler';
import React, { useState } from 'react';
import {Provider} from 'react-redux';
import Navigation from './src/navigation/Navigation';
import Store from './src/config/Store';

export default function App() {

  // const [loading, setLoading] = useState(false)
  
  // useEffect(() => {
  //   loadUsers()
  // }, []);
  return (
    <Provider store={Store}>

      <Navigation />
    </Provider>
  );
}


// import React from 'react';
// import {View, Text} from 'react-native';

// import styles from './AppStyle';

// function App() {
//   return (
//     <View style={styles.container}>
//       <View style={styles.child1}>
//           <View style={styles.subChild1} ></View>

//           <View style={styles.subChild2}></View>

//           <View style={styles.subChild2}></View>

//           <View style={styles.subChild2}></View>


//           <View style={styles.subChild2}></View>


//           <View style={styles.subChild2}></View>

//           <View style={styles.subChild2}></View>

//           <View style={styles.subChild3}></View>
//       </View>
//       <View style={{flex:5}}>
//         <View style={styles.box1}>
//           <Text> Test</Text>
//         </View>
//         <View style={styles.box2}>
//           <Text> Test</Text>
//         </View>
//         <View style={styles.box3}>
//           <Text> Test</Text>
//         </View>
//       </View>
//     </View>
//   );
// }

// export default App;
