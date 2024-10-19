import { TouchableOpacity, View, StyleSheet } from "react-native";
import { colors } from "../styles/global";

const Button = ({ children, onPress, btnStyle }) => {
  return (
    <View>
      <TouchableOpacity onPress={onPress} style={[styles.button, btnStyle]}>
        {children}
      </TouchableOpacity>
    </View>
  );
};

export default Button;

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.orange,
    borderRadius: 100,
    paddingVertical: 16,
    paddingHorizontal: 32,
  },
});
