import React, { useEffect, useId, useState } from 'react';

import { AlertDialogFooter, Button, ButtonGroup, ButtonText, CloseCircleIcon, CloseIcon, FormControl, FormControlError, FormControlErrorText, FormControlLabel, FormControlLabelText, Heading, Input, InputField } from '@gluestack-ui/themed';
import { AlertDialogBody } from '@gluestack-ui/themed';
import { Box } from '@gluestack-ui/themed';
import { AlertDialogCloseButton } from '@gluestack-ui/themed';
import { AlertDialog, AlertDialogBackdrop, AlertDialogContent, AlertDialogHeader } from '@gluestack-ui/themed';
import { IAddTask } from '../../interfaces/TodoInterfaces';
import RNDateTimePicker, { DateTimePickerEvent } from '@react-native-community/datetimepicker';
import HomeController from "./../../../controller/TodoListController";
import { useDispatch, useSelector } from 'react-redux';
import { todoAdded} from
  '../../../Redux/Todo/TodoSlice';
import { showToast } from '../Functions/Functions';
import { toastConfig } from '../../../ToastConfig';
import Toast from 'react-native-toast-message';

function AddTaskModal(props: IAddTask) {
  const [title, setTitle] = useState('');
  const [dateTime, setDateTime] = useState(new Date());
  const dispatch = useDispatch();
  const todo = useSelector((state: any) => state.todo)

  const handleTitleOnChange = (text: string): void => {
    setTitle(text);
  }

  const handleDateTimeOnChange = (e: DateTimePickerEvent): void => {
    setDateTime(new Date(e.nativeEvent.timestamp));
  }

  useEffect(() => {
    setTitle('');
    setDateTime(new Date());
  }, [props.showAlertDialog])

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
          <Heading size="sm">Time to do :</Heading>
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
              onPress={async () => {
                if (title != '') {
                  await HomeController.addTodoItem(title, dateTime.getTime(), Date.now(), false);
                  dispatch(todoAdded(
                    {
                      id: todo.length + 1,
                      title: title,
                      time: dateTime.getTime(),
                      createdTime: Date.now(),
                      done: false,
                    }
                  ));
                  props.onPress(false);
                } else {
                  showToast('error', 'Error', 'Title is required');

                }

              }
              }
            >
              <ButtonText>Submit</ButtonText>
            </Button>
          </ButtonGroup>
        </AlertDialogFooter>
      </AlertDialogContent>
      <Toast config={toastConfig} />
    </AlertDialog>
  );
}

export default AddTaskModal;