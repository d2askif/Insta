import React, { Component } from "react";
import { 
    View,
    Text,
    StyleSheet
} from "react-native";

class LikeScreen extends Component {
    
    render() {
            console.log(this.props.navigation);

        return (
            <View style={styles.container}>
                <Text>LikeScreen</Text>
            </View>
        );
    }
}
export default LikeScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});