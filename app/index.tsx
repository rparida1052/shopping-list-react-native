import { StatusBar } from "expo-status-bar";
import { Alert, Pressable, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import ShoppingListItems from "../components/ShoppingListItems";
import { Link } from "expo-router";

export default function App() {

  
  return (
    <View style={styles.container}>
      <View style={[StyleSheet.absoluteFill,{backgroundColor:"pink"}]}/>
      <Link href={"/counter"} style={{alignItems:"center",textAlign:"center",fontSize:18}}>Go to counter</Link>
      <ShoppingListItems name="Tea" />
      <ShoppingListItems name="Tea" />
      <ShoppingListItems name="Tea" />
      <ShoppingListItems name="Tea" />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
  },
 
});
