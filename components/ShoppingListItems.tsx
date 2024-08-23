import { Alert, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const ShoppingListItems = ({name}:{name:string}) => {
    const handleDelete = () => {
      Alert.alert(
        "Are you sure you want to delete this item?",
        "It will good",
        [
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
        ]
      );
    };
  return (
    <View>
      <View style={styles.itemContainer}>
        <Text style={{ fontSize: 18, fontWeight: "semibold" }}>{name}</Text>
        <TouchableOpacity style={styles.deleteButton} onPress={handleDelete}>
          <Text
            style={{
              color: "white",
              textTransform: "uppercase",
              letterSpacing: 1,
            }}>
            Delete
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default ShoppingListItems

const styles = StyleSheet.create({
  itemContainer: {
    borderBottomWidth: 1,
    borderBottomColor: "1a759f",
    paddingHorizontal: 10,
    paddingVertical: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  deleteButton: {
    backgroundColor: "black",
    padding: 8,
    borderRadius: 6,
  },
});