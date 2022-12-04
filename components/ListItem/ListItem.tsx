import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { IListItemProps } from "./ListItem.props";

export default function ListItem({ item, deleteTask }: IListItemProps) {
  return (
    <TouchableOpacity onPress={() => deleteTask(item.id)}>
      <Text style={styles.text}>{item.text}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  text: {
    color: "green",
    padding: 10,
    textAlign: "center",
    borderRadius: 5,
    backgroundColor: "#fafafa",
    borderWidth: 1,
    marginTop: 10,
    marginBottom: 10,
    width: "70%",
    marginLeft: "15%",
  },
});
