import React, { useState } from "react";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";

function App() {
  const [count, setCount] = useState(0);
  const [bg, setbg] = useState("#fg6");
  function onAdd() {
    setCount(count + 1);
    onbgColor();
  }

  const onReset = () => {
    setCount(0);
    onbgColor();
  };

  const onSub = () => {
    setCount(count - 1);
    onbgColor();
  };

  const onbgColor = () => {
    if (count > 0) {
      setbg("yellow");
    } else if (count < 0) {
      setbg("red");
    } else {
      setbg("blue");
    }
  };

  return (
    <View style={styles.app}>
      <View style={{ margin: 10 }}>
        <Text style={{ textAlign: "center", color: bg }}>{count}</Text>
      </View>
      <View style={{ flexDirection: "row" }}>
        <Pressable onPress={onAdd} style={buttonStyles.button}>
          <Text style={buttonStyles.text}>ADD</Text>
        </Pressable>

        <Pressable onPress={(e) => onReset(e)} style={buttonStyles.button}>
          <Text style={buttonStyles.text}>RESET</Text>
        </Pressable>

        <Pressable onPress={onSub} style={buttonStyles.button}>
          <Text style={buttonStyles.text}>SUBTRACT</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  app: {
    marginHorizontal: "auto",
    maxWidth: 500
  },

  title: {
    fontWeight: "bold",
    fontSize: "1.5rem",
    marginVertical: "1em",
    textAlign: "center"
  },
  text: {
    lineHeight: "1.5em",
    fontSize: "1.125rem",
    marginVertical: "1em",
    textAlign: "center"
  },
  link: {
    color: "#1B95E0"
  },
  code: {
    fontFamily: "monospace, monospace"
  }
});

const buttonStyles = StyleSheet.create({
  button: {
    backgroundColor: "#2196F3",
    borderRadius: 2,
    margin: 8
  },
  text: {
    color: "#fff",
    fontWeight: "500",
    padding: 8,
    textAlign: "center",
    textTransform: "uppercase"
  }
});

export default App;
