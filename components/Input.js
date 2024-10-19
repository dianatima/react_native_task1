import { StyleSheet, TextInput, View } from "react-native";
import { colors } from "../styles/global";
import { useState } from "react";

const Input = ({
  autofocus = false,
  placeholder,
  outerStyles,
  rightBtn,
  value,
  onTextChange,
  secureTextEntry,
}) => {
  const [isFocused, setIsFocused] = useState(false);

  const onFocuse = () => {
    setIsFocused(true);
  };

  const onBlur = () => {
    setIsFocused(false);
  };

  const [inputQuery, setInputQuery] = useState("");

  const handlTextChange = (value) => {
    setInputQuery(value);
  };

  return (
    <View style={[styles.input, isFocused && styles.focused, outerStyles]}>
      <TextInput
        placeholder={placeholder}
        value={value}
        onChangeText={onTextChange}
        secureTextEntry={secureTextEntry}
        style={styles.inputText}
        autoFocus={autofocus}
        autoCapitalize="none"
        onFocus={onFocuse}
        onBlur={onBlur}
      />
      {rightBtn}
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  input: {
    height: 50,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: colors.border_gray,
    backgroundColor: colors.ligth_gray,
    padding: 16,
  },
  inputText: {
    fontWeight: 400,
    fontSize: 16,
    lineHeight: 18,
    color: colors.balack_main,
  },
  focused: {
    backgroundColor: colors.white,
    borderColor: colors.orange,
  },
});
