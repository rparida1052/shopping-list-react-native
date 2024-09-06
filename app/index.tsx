import { StatusBar } from "expo-status-bar";
import {
  Alert,
  FlatList,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import ShoppingListItems from "../components/ShoppingListItems";
import { Link } from "expo-router";
import { theme } from "../theme";
import { useState } from "react";

type shoppingListItemType = {
  id: string;
  name: string;
  completeAt?: number;
};

const initialShoppingList: shoppingListItemType[] = [
  // { id: "1", name: "Tea" },
  // { id: "2", name: "Coffee" },
  // { id: "3", name: "Milk" },
  // { id: "4", name: "Bread" },
];
export default function App() {
  const [shoppingList, setShoppingList] =
    useState<shoppingListItemType[]>(initialShoppingList);
  const [value, setValue] = useState<string>("");

  const handleAddItem = () => {
    if (value) {
      setShoppingList([
        { id: new Date().toTimeString(), name: value },
        ...shoppingList,
      ]);
    }
    setValue("");
  };
  const handleDelete = (id: string) => {
    const newShoppingList = shoppingList.filter((item) => item.id !== id);
    setShoppingList(newShoppingList);
  };
  const handleComplete = (id: string) => {
    const newShoppingList = shoppingList.map((item) => {
      if (item.id === id) {
        return {
          ...item,
          completeAt: item.completeAt ? undefined : Date.now(),
        };
      }
      return item;
    });
    setShoppingList(newShoppingList);
  };
  return (
    <FlatList
      data={shoppingList}
      renderItem={({ item }) => {
        return (
          <ShoppingListItems
            name={item.name}
            onDelete={() => handleDelete(item.id)}
            onComplete={() => handleComplete(item.id)}
            isComplete={Boolean(item.completeAt)}
          />
        );
      }}
      ListEmptyComponent={
        <View style={styles.emptyList}>
          <Text>Your shoppinglist is empty</Text>
        </View>
      }
      ListHeaderComponent={
        <TextInput
          placeholder="Eg. coffee"
          style={styles.textInput}
          value={value}
          onChangeText={setValue}
          onSubmitEditing={handleAddItem}
        />
      }
    />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingBottom: 12,
  },
  textInput: {
    height: 50,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    backgroundColor: "white",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    borderRadius: 10,
  },
  emptyList: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 25,
  },
});
