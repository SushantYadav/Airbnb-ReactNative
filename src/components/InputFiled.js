import React, { Component } from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from "react-native";
import colors from "../styles/color";
class InputField extends Component {
    constructor(props) {
        super(props);
        this.state = {
            TextInput: !(props.inputType === "text" || props.inputType === "email")
        };
    };
    toggleShowPassword() {
        this.setState({ TextInput: !this.state.TextInput });
    }
    render() {
        const { labelText, labelTextSize, labelColor, textColor, borderBottomColor, inputType, customStyle } = this.props;
        const color = labelColor || colors.white;
        const fontSize = labelTextSize || 14;
        const inputColor = textColor || colors.white;
        const borderBottom = borderBottomColor || "transparent";
        return (
            <View style={[customStyle, styles.wrapper]}>
                <Text style={[{ color, fontSize }, styles.label]}>{labelText}</Text>
                {inputType === "password" ? (
                    <TouchableOpacity
                        style={styles.showButton}
                        onPress={this.toggleShowPassword}
                    >
                        <Text style={styles.showButtonText}>
                            {TextInput ? "Show" : "Hide"}
                        </Text>
                    </TouchableOpacity>
                ) : null}
                <TextInput
                    autoCorrect={false}
                    style={[
                        { color: inputColor, borderBottomColor: borderBottom },
                        styles.InputField
                    ]}
                    secureTextEntry={TextInput}
                />
            </View>
        );
    }
}
const styles = StyleSheet.create({
    wrapper: {
        display: "flex"
    },
    label: { fontWeight: "700", marginBottom: 10 },
    InputField: {
        borderBottomWidth: 1,
        paddingTop: 5,
        paddingBottom: 5
    },
    showButton: {
        position: "absolute",
        right: 0
    },
    showButtonText: {
        color: colors.white,
        fontWeight: "700"
    }
});
export default InputField;