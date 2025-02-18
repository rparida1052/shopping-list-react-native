import { Alert, Pressable, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { theme } from "../theme";
import Entypo from "@expo/vector-icons/Entypo";



type Props = {
  name:string;
  onDelete:()=> void;
  onComplete:()=>void;
  isComplete?:boolean;
}
const ShoppingListItems = ({ name ,onDelete,onComplete,isComplete}:Props) => {
  const handleDelete = () => {
    Alert.alert("Are you sure you want to delete this item?", "It will good", [
      {
        text: "Yes",
        onPress: () => onDelete(),
        style: "destructive",
      },
      {
        text: "Cancel",
        onPress: () => console.log("cancel"),
        style: "cancel",
      },
    ]);
  };
  return (
    <Pressable onPress={onComplete}>
      <View
        style={[
          styles.itemContainer,
          isComplete ? { backgroundColor: "grey" } : undefined,
        ]}>
        <View style={{flexDirection:"row",gap:8}}>
          <Entypo name={isComplete ? "check" : "circle"} size={24} color="black" />
          <Text
            style={[
              { fontSize: 18, fontWeight: "semibold" },
              isComplete
                ? { textDecorationLine: "line-through" }
                : { textDecorationLine: "none" },
            ]}>
            {name}
          </Text>
        </View>

       {!isComplete && <TouchableOpacity
          style={[
            styles.deleteButton,
           
          ]}
          onPress={isComplete ? undefined : onDelete}>
          <Text
            style={{
              color: "white",
              textTransform: "uppercase",
              letterSpacing: 1,
            }}>
            Delete
          </Text>
        </TouchableOpacity>}
      </View>
    </Pressable>
  );
};

export default ShoppingListItems;

const styles = StyleSheet.create({
  itemContainer: {
    borderBottomWidth: 1,
    backgroundColor: theme.colorGrey,
    borderBottomColor: "1a759f",
    paddingHorizontal: 10,
    paddingVertical: 10,
    marginHorizontal: 10,
    marginBottom: 10,
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
