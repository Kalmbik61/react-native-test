import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableHighlight,
  TextInput,
  Button,
  Alert,
} from "react-native";
import { IFormProps } from "./Form.props";

export default function Form({ getText }: IFormProps) {
  const [text, setText] = useState<string>("");

  const onChange = (t: string) => setText(t);

  const addTask = () => {
    if (text.length === 0) {
      return Alert.alert("Empty field", "You should to enter some text");
    }
    getText(text);
    setText("");
  };

  return (
    <View style={styles.form}>
      <TextInput
        style={styles.input}
        onChangeText={onChange}
        placeholder='Text your task'
        value={text}
      />

      <Button title='Save' onPress={addTask} />
    </View>
  );
}

const styles = StyleSheet.create({
  form: {
    flexDirection: "row",
  },
  input: {
    flex: 1,
    borderBottomWidth: 1,
    padding: 10,
  },
});
