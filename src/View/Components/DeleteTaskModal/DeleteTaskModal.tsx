import { AddIcon, AlertDialogFooter, Button, ButtonGroup, ButtonText, CloseCircleIcon, CloseIcon, FormControl, FormControlError, FormControlErrorText, FormControlLabel, FormControlLabelText, Heading, Input, InputField, TextareaInput } from '@gluestack-ui/themed';
import { AlertDialogBody } from '@gluestack-ui/themed';
import { FormControlHelperText } from '@gluestack-ui/themed';
import { FormControlHelper } from '@gluestack-ui/themed';
import { FormControlErrorIcon } from '@gluestack-ui/themed';
import { Box } from '@gluestack-ui/themed';
import { AlertDialogCloseButton } from '@gluestack-ui/themed';
import { AlertDialog, AlertDialogBackdrop, AlertDialogContent, AlertDialogHeader } from '@gluestack-ui/themed';
import React, { useState } from 'react';
import { IDeleteTask, IEditTask } from '../../interfaces/TodoInterfaces';
import { NativeSyntheticEvent, TextInputChangeEventData } from 'react-native';
import { MinusIcon } from 'lucide-react-native';
import { Textarea } from '@gluestack-ui/themed';
import DateTimePicker, { DateTimePickerEvent } from '@react-native-community/datetimepicker';
import RNDateTimePicker from '@react-native-community/datetimepicker';
import { Text } from '@gluestack-ui/themed';
import HomeController from '../../../controller/TodoListController';
import { useAppDispatch, useAppSelector } from '../../../Redux/Hooks';
import { RootState } from '../../../Redux/Store';
import { todoDeleted } from '../../../Redux/Todo/TodoSlice';
function DeleteTaskModal(props: IDeleteTask) {

  const dispatch = useAppDispatch();

  const todo = useAppSelector((state: RootState) => state.todo);

  return (
    <AlertDialog
      isOpen={props.showAlertDialog}
      onClose={() => {
        props.onPress(false);
      }}
    >
      <AlertDialogBackdrop />
      <AlertDialogContent>
        <AlertDialogHeader>
          <Heading size="lg">Delete Task</Heading>
          <AlertDialogCloseButton>
            <CloseIcon />
          </AlertDialogCloseButton>
        </AlertDialogHeader>
        <AlertDialogBody>
          <Text size="sm">
            Are you sure you want to delete your task? Your data will
            be removed and cannot be undone.
          </Text>
        </AlertDialogBody>
        <AlertDialogFooter>
          <ButtonGroup space="lg">
            <Button
              variant="outline"
              action="secondary"
              onPress={() => {
                props.onPress(false);
              }}
            >
              <ButtonText>Cancel</ButtonText>
            </Button>
            <Button
              bg="$error600"
              action="negative"
              onPress={() => {
                HomeController.deleteTodoItem(props.item);
                dispatch(todoDeleted(
                  props.item.id
                ));
                props.onPress(true);
              }}
            >
              <ButtonText>Delete</ButtonText>
            </Button>
          </ButtonGroup>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}

export default DeleteTaskModal;