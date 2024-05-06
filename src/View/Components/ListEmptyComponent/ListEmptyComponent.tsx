import React from "react";
import { View, Text, StyleSheet } from 'react-native';

function ListEmptyComponent() {
    return (<View style={styles.container}>
        <Text>Nothing to do</Text>
    </View>);
}

const styles = StyleSheet.create({
    container: {
        paddingVertical: 30, display: 'flex', justifyContent: 'center',
        alignItems: 'center'
    }
});

export default ListEmptyComponent;