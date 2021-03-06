import React, { Component } from "react";
import { View, Text, KeyboardAvoidingView, ScrollView, StyleSheet } from "react-native";
import colors from "../styles/color";
import InputField from "../components/InputFiled";
import NextArrowButton from "../components/buttons/NextArrowButton";
export default class Login extends Component {
    render() {
        return (
            <KeyboardAvoidingView style={styles.wrapper} behavior="padding">
                <View style={styles.scrollViewWrapper}>
                    <ScrollView style={styles.scrollView}>
                        <Text style={styles.loginHeader}>Login</Text>
                        <InputField
                            labelText="EMAIL ADDRESS"
                            labelTextSize={14}
                            labelColor={colors.white}
                            textColor={colors.white}
                            borderBottomColor={colors.white}
                            inputType="email"
                            customStyle={{ marginBottom: 30 }}
                        />
                        <InputField
                            labelText="PASSWORD"
                            labelTextSize={14}
                            labelColor={colors.white}
                            textColor={colors.white}
                            borderBottomColor={colors.white}
                            inputType="password"
                            customStyle={{ marginBottom: 5 }}
                        />
                    </ScrollView>
                    <NextArrowButton />
                </View>
            </KeyboardAvoidingView>
        );
    }
}
const styles = StyleSheet.create({
    wrapper: {
        display: "flex",
        flex: 1,
        backgroundColor: colors.green01
    },
    scrollViewWrapper: {
        marginTop: 70,
        flex: 1
    },
    avoidView: {
        paddingLeft: 30,
        paddingRight: 30,
        paddingTop: 20,
        flex: 1
    },
    loginHeader: {
        paddingLeft: 10,
        fontSize: 28,
        color: colors.white,
        fontWeight: "300",
        marginBottom: 40
    }
});