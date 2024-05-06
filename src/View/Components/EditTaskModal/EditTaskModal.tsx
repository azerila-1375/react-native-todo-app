import { AlertDialogFooter, Button, ButtonGroup, ButtonText, CloseCircleIcon, CloseIcon, FormControl, FormControlError, FormControlErrorText, FormControlLabel, FormControlLabelText, Heading, Input, InputField, TextareaInput } from '@gluestack-ui/themed';
import { AlertDialogBody } from '@gluestack-ui/themed';

import { Box } from '@gluestack-ui/themed';
import { AlertDialogCloseButton } from '@gluestack-ui/themed';
import { AlertDialog, AlertDialogBackdrop, AlertDialogContent, AlertDialogHeader } from '@gluestack-ui/themed';
import React, { useState } from 'react';
import { IEditTask } from '../../interfaces/TodoInterfaces';

import { DateTimePickerEvent } from '@react-native-community/datetimepicker';
import RNDateTimePicker from '@react-native-community/datetimepicker';
import { useAppDispatch, useAppSelector } from '../../../Redux/Hooks';
import HomeController from '../../../controller/TodoListController';
import { todoEdited } from '../../../Redux/Todo/TodoSlice';
import { RootState } from '../../../Redux/Store';
import { showToast } from '../Functions/Functions';
import Toast, { ErrorToast } from 'react-native-toast-message';
import { toastConfig } from '../../../ToastConfig';
function EditTaskModal(props: IEditTask) {
  const [title, setTitle] = useState(props.title);
  const [dateTime, setDateTime] = useState(new Date(props.dateTime));
  const dispatch = useAppDispatch();


  const handleTitleOnChange = (text: string): void => {
    setTitle(text);
  }

  const handleDateTimeOnChange = (e: DateTimePickerEvent): void => {
    setDateTime(new Date(e.nativeEvent.timestamp));
  }

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
          <Heading size="lg">Add New Task</Heading>
          <AlertDialogCloseButton>
            <CloseIcon />
          </AlertDialogCloseButton>
        </AlertDialogHeader>
        <AlertDialogBody>
          <Box h="$32" w="100%">
            <FormControl
              size="md"
              isDisabled={false}
              isInvalid={title == ''}
              isReadOnly={false}
              isRequired={true}
            >
              <FormControlLabel mb="$1">
                <FormControlLabelText>Title</FormControlLabelText>
              </FormControlLabel>
              <Input>
                <InputField value={title} onChangeText={handleTitleOnChange} type="text" defaultValue="" placeholder="Enter title" />
              </Input>

              <FormControlError>
                <CloseCircleIcon color='$error700' />
                <FormControlErrorText>
                  Title field is required.
                </FormControlErrorText>
              </FormControlError>
            </FormControl>
          </Box>
          <RNDateTimePicker value={dateTime} mode="date" onChange={handleDateTimeOnChange} />
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
              bg="green"
              action="negative"
              onPress={() => {
                if (title != '') {
                  HomeController.editTodoItem({
                    id: props.id,
                    title: title,
                    time: dateTime.getTime(),
                  });
                  dispatch(todoEdited(
                    {
                      id: props.id,
                      title: title,
                      time: dateTime.getTime(),
                    }
                  ));
                  props.onPress(false);
                } else {
                  showToast('error', 'Error', 'Title is required');
                }


              }}
            >
              <ButtonText>Submit</ButtonText>
            </Button>
          </ButtonGroup>
        </AlertDialogFooter>
      </AlertDialogContent>
      <Toast config={toastConfig} />
    </AlertDialog >
  );
}

export default EditTaskModal;