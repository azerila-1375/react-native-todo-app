import React from "react";
import { View, StyleSheet, FlatList, } from "react-native";
import ListItem from "../ListItem/ListItem";
import { ITodoList } from "../../interfaces/TodoInterfaces";
import ListEmptyComponent from "../ListEmptyComponent/ListEmptyComponent";




export function TodoList(props: ITodoList) {
    return <View style={styles.container}>
        <FlatList
            scrollEnabled={false}
            contentContainerStyle={{
                display: "flex",
                flexGrow: 1,
            }}
            ListEmptyComponent={<ListEmptyComponent />}
            keyExtractor={(item) => `${item.id}`}
            ItemSeparatorComponent={() => <View style={styles.divider} />}
            data={props.data}
            renderItem={({ item, index }) => <ListItem id={item.id} title={item.title} time={item.time} createdTime={item.createdTime} done={item.done} key={item.id} />}
        />
    </View>
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        width: '100%',
        borderRadius: 15,
        marginBottom: 100,
    },
    divider: {
        height: 1,
        width: '100%',
        backgroundColor: '#E6E9ED'
    }
});