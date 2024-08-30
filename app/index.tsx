import { StatusBar } from "expo-status-bar";
import {
  Alert,
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
};

const initialShoppingList: shoppingListItemType[] = [
  { id: "1", name: "Tea" },
  { id: "2", name: "Coffee" },
  { id: "3", name: "Milk" },
  { id: "4", name: "Bread" },
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
  return (
    <ScrollView
      style={{ backgroundColor: theme.colorCerulean }}
      // stickyHeaderIndices={[0]}
      contentContainerStyle={{paddingTop:24}}
      >
      <View style={styles.container}>
        <View style={[StyleSheet.absoluteFill, { marginHorizontal: 154 }]} />
        <TextInput
          placeholder="Eg. coffee"
          style={styles.textInput}
          value={value}
          onChangeText={setValue}
          onSubmitEditing={handleAddItem}
        />

        {shoppingList.map((item) => (
          <ShoppingListItems name={item.name} key={item.id} />
        ))}
        <StatusBar style="auto" />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingBottom:12,
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
});
