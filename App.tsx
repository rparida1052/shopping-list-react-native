import { StatusBar } from "expo-status-bar";
import { Alert, Pressable, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function App() {

  const handleDelete = ()=>{
    Alert.alert("Are you sure you want to delete this item?", "It will good", [
      {
        text: "Yes",
        onPress: () => console.log("Deleting"),
        style: "destructive",
      },
      {
        text: "Cancel",
        onPress: () => console.log("cancel"),
        style: "cancel",
      },
    ]);
  }
  return (
    <View style={styles.container}>
      <View style={styles.itemContainer}>
        <Text style={{ fontSize: 18, fontWeight: "semibold" }}>Coffee</Text>
        <TouchableOpacity style={styles.deleteButton} onPress={handleDelete}>
          <Text style={{color:"white",textTransform:"uppercase",letterSpacing:1}}>Delete</Text>
        </TouchableOpacity>
      </View>
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
  itemContainer: {
    borderBottomWidth: 1,
    borderBottomColor: "1a759f",
    paddingHorizontal: 10,
    paddingVertical: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  deleteButton:{
    backgroundColor:"black",
    padding:8,
    borderRadius:6,
  }
});
