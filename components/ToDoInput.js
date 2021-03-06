import {
  TextInput,
  Button,
  View,
  StyleSheet,
  Modal,
  Image,
} from "react-native";
import { useState } from "react";

export default function ToDoInput(props) {
  const [enteredToDoText, setEnteredToDoText] = useState("");

  const toDoInputHandler = (enteredText) => {
    setEnteredToDoText(enteredText);
  };

  const addToDoHandler = () => {
    props.onAddToDo(enteredToDoText);
    setEnteredToDoText("");
  };

  const imageLocation = require("../assets/images/target.png");

  return (
    <Modal visible={props.showModal} animationType={"slide"}>
      <View style={styles.inputContainer}>
        <Image source={imageLocation} style={styles.image} />
        <TextInput
          style={styles.textInput}
          placeholder="Your to-do"
          onChangeText={toDoInputHandler}
          value={enteredToDoText}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title="Cancel" onPress={props.onCancel} color="#189AB4" />
          </View>
          <View style={styles.button}>
            <Button title="Add Goal" onPress={addToDoHandler} color="#D4F1F4" />
          </View>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
    backgroundColor: "#05445E",
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#D4F1F4",
    backgroundColor: "#D4F1F4",
    width: "100%",
    padding: 8,
    borderRadius: 6,
    color: "#05445E",
    padding: 16,
  },
  buttonContainer: {
    flexDirection: "row",
    marginTop: 16,
  },
  button: {
    width: 100,
    marginHorizontal: 8,
  },
  image: {
    width: 100,
    height: 100,
    margin: 20,
  },
});
