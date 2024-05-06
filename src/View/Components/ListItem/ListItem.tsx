import React, { useState, memo } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { ITodoItem } from "../../interfaces/TodoInterfaces";
import { Switch } from "@gluestack-ui/themed";
import { Check, Edit, EyeIcon, Hourglass, Trash } from 'lucide-react-native';
import * as moment from 'moment';
import EditTaskModal from "../EditTaskModal/EditTaskModal";
import DeleteTaskModal from "../DeleteTaskModal/DeleteTaskModal";
import HomeController from "../../../controller/TodoListController";
import { todoToggled } from "../../../Redux/Todo/TodoSlice";
import { useAppDispatch } from "../../../Redux/Hooks";
import ShowTaskModal from "../ShowTaskModal/ShowTaskModal";

const ListItem = memo(
    function ListItem(props: ITodoItem, key: string) {
        const [toggleCheckBox, setToggleCheckBox] = useState(props.done);
        const [showShowTaskAlertDialog, setShowShowTaskAlertDialog] = useState(false);
        const [showEditTaskAlertDialog, setShowEditTaskAlertDialog] = useState(false);
        const [showDeleteTaskAlertDialog, setShowDeleteTaskAlertDialog] = useState(false);
        const dispatch = useAppDispatch();


        return <View key={key} style={[styles.container, {}]}>
            <View style={styles.infoContainer}>


                <View style={[styles.iconContainer, {
                    backgroundColor: toggleCheckBox ? '#DEEBF5' : '#FCF5D6'
                }]} >
                    {toggleCheckBox ? <Check color="#274963" /> : <Hourglass color="#3E320A" />}

                </View>
                <View style={styles.info}>
                    <Text style={styles.titleStyle}>{props.title}</Text>
                    <Text style={styles.timeStyle}>{
                        'Created : ' + moment.unix(parseInt(`${props.createdTime}`.substring(0, 10), 10)).format('LL')}</Text>
                    <Text style={styles.timeStyle}>{
                        'Time : ' + moment.unix(parseInt(`${props.time}`.substring(0, 10), 10)).format('LL')}</Text>
                </View>
            </View>
            <View style={styles.actionsContainer}>
                <Switch
                    size="sm"
                    value={toggleCheckBox}
                    onToggle={(newValue) => {
                        HomeController.doneChangeTodoItem({
                            id: props.id,
                            done: newValue,
                        });
                        dispatch(todoToggled(
                            {
                                id: props.id,
                                done: newValue
                            }
                        ));
                        setToggleCheckBox(newValue)
                    }}
                />
                <View style={styles.actions}>
                    <TouchableOpacity onPress={() => {
                        setShowShowTaskAlertDialog(true);
                    }}>
                        <EyeIcon color='green' />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => {
                        setShowEditTaskAlertDialog(true);
                    }}>
                        <Edit />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => {
                        setShowDeleteTaskAlertDialog(true);
                    }}>
                        <Trash color='red' />
                    </TouchableOpacity>
                </View>
            </View>
            <ShowTaskModal onPress={
                (value) => {
                    setShowShowTaskAlertDialog(value);
                }
            }
                title={props.title}
                done={toggleCheckBox}
                time={props.time}
                createdTime={props.createdTime}
                showAlertDialog={showShowTaskAlertDialog}

            ></ShowTaskModal>
            <EditTaskModal onPress={
                (value) => {
                    setShowEditTaskAlertDialog(value);
                }
            }
                id={props.id}
                showAlertDialog={showEditTaskAlertDialog}
                title={props.title}
                dateTime={props.time}
            ></EditTaskModal>
            <DeleteTaskModal onPress={
                (value) => {
                    if (value === true) {
                        setShowDeleteTaskAlertDialog(false);
                    } else {
                        setShowDeleteTaskAlertDialog(value);
                    }
                }
            }
                showAlertDialog={showDeleteTaskAlertDialog}
                item={props}
            ></DeleteTaskModal>
        </View>
    }
);

export default ListItem;


const styles = StyleSheet.create({
    container: {
        width: '100%',
        paddingHorizontal: 10,
        paddingVertical: 20,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    infoContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'stretch',
    },
    actionsContainer: {
        width: '30%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'flex-end',
        gap: 20
    },
    actions: {
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-end',
        gap: 5
    },
    info: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        paddingHorizontal: 10,
        gap: 3,
    },
    titleStyle: {
        width: '50%',
        fontSize: 15,
        fontWeight: 'bold',
    },
    timeStyle: {
        fontSize: 12,
        color: '#5F5F61'
    },
    iconContainer: {
        width: 50,
        height: 50,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 25,
    },
});