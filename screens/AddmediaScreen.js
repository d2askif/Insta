import React, { Component } from "react";
import { 
    View,
    Text,
    StyleSheet
} from "react-native";

class Addmedia extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>Addmedia</Text>
            </View>
        );
    }
}
export default Addmedia;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});