import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Button,
  Alert,
  Image,
  TouchableHighlight,
  TouchableWithoutFeedback,
  Platform,
  FlatList,
} from "react-native";
import Form from "./components/Form/Form";
import Header from "./components/Layout/Header";
import ListItem from "./components/ListItem/ListItem";
import { IListItem } from "./components/ListItem/ListItem.props";

export default function App() {
  const [list, setList] = useState<IListItem[]>([
    { text: "Buy milk", id: 1 },
    { text: "Clear car", id: 2 },
    { text: "Clear the house", id: 3 },
    { text: "Learn React-Native", id: 4 },
  ]);

  const getText = (text: string) => {
    setList((prev) => [{ id: prev.length + 1, text }, ...prev]);
  };

  const deleteTask = (id: number) => {
    const filter = list.filter((item) => item.id !== id);

    setList(filter);
  };

  return (
    <View style={styles.container}>
      <Header />

      <Form getText={getText} />

      <View style={styles.listBlock}>
        <FlatList
          data={list}
          renderItem={({ item }) => (
            <ListItem deleteTask={deleteTask} item={item} />
          )}
        />
      </View>

      <StatusBar style='auto' />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  listBlock: {
    marginTop: 20,
  },
});
