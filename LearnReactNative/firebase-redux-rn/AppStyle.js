import { StyleSheet, Dimensions  } from "react-native";

const screenWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
    container:{
        backgroundColor: 'red',
        flex: 1
    },
    child1:{
        backgroundColor:'yellow',
        flex:1,
        flexDirection: screenWidth < 200 ? 'column': 'row',
        flexWrap: 'wrap'
    },
    subChild1:{
        width: 50,
        height:50,
        backgroundColor: 'white',
    },
    subChild2:{
        width: 50,
        height:50,
        backgroundColor: 'black',
    },
    subChild3:{
        width: 50,
        height:50,
        backgroundColor: 'blue',
    }
    ,
    box1:{
        backgroundColor: 'green',
        flex: 2
    },
    box2:{
        backgroundColor: 'black',
        flex: 1,
    },
    box3:{
        backgroundColor: 'white',
         flex:3,
        justifyContent:'center', 
        alignItems:'center'
    },

})

export default styles