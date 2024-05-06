import React, { useEffect, useId, useState } from 'react';

import { AddIcon, AlertDialogFooter, Button, ButtonGroup, ButtonText, CloseCircleIcon, CloseIcon, FormControl, FormControlError, FormControlErrorText, FormControlLabel, FormControlLabelText, Heading, Input, InputField, TextareaInput } from '@gluestack-ui/themed';
import { AlertDialogBody } from '@gluestack-ui/themed';
import { Box } from '@gluestack-ui/themed';
import { AlertDialogCloseButton } from '@gluestack-ui/themed';
import { AlertDialog, AlertDialogBackdrop, AlertDialogContent, AlertDialogHeader } from '@gluestack-ui/themed';
import { IAddTask } from '../../interfaces/TodoInterfaces';
import RNDateTimePicker, { DateTimePickerEvent } from '@react-native-community/datetimepicker';
import { TodoItemModel } from "../../../model/TodoItemModel";
import HomeController from "../../../controller/TodoListController";
import { useDispatch, useSelector } from 'react-redux';
import { todoAdded, todoDeleted, todoEdited, todoPut, todoToggled } from
  '../../../Redux/Todo/TodoSlice';
import { ICalendar } from '../../interfaces/TodoInterfaces';

function CalendarModal(props: ICalendar) {
  const [title, setTitle] = useState('');
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [startChanged, setStartChanged] = useState(false);
  const [endChanged, setEndChanged] = useState(false);





  const handleTitleOnChange = (text: string): void => {
    setTitle(text);
  }

  const handleStartDateOnChange = (e: DateTimePickerEvent): void => {
    setStartDate(new Date(e.nativeEvent.timestamp));
    setStartChanged(true);
  }
  const handleEndDateOnChange = (e: DateTimePickerEvent): void => {
    setEndDate(new Date(e.nativeEvent.timestamp));
    setEndChanged(true);
  }


  useEffect(() => {
    setTitle('');
  }, [props.showAlertDialog])


  return (
    <AlertDialog
      isOpen={props.showAlertDialog}
      onClose={() => {
        props.onPress(false, -1, -1);
      }}
    >
      <AlertDialogBackdrop />
      <AlertDialogContent>
        <AlertDialogHeader>
          <Heading size="lg">Select Date</Heading>
          <AlertDialogCloseButton>
            <CloseIcon />
          </AlertDialogCloseButton>
        </AlertDialogHeader>
        <AlertDialogBody>
          <Heading size="sm">From :</Heading>
          <RNDateTimePicker value={startDate} mode="date" onChange={handleStartDateOnChange} />
          <Heading size="sm">To :</Heading>
          <RNDateTimePicker value={endDate} mode="date" onChange={handleEndDateOnChange} />
        </AlertDialogBody>
        <AlertDialogFooter>
          <ButtonGroup space="lg">
            <Button
              variant="outline"
              action="secondary"
              onPress={() => {
                props.onPress(false, -1, -1);
              }}
            >
              <ButtonText>Cancel</ButtonText>
            </Button>
            <Button
              bg="green"
              action="negative"
              onPress={async () => {

                props.onPress(false, startChanged ? startDate.getTime() : -1, endChanged ? endDate.getTime() : -1);
              }
              }
            >
              <ButtonText>Submit</ButtonText>
            </Button>
          </ButtonGroup>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}

export default CalendarModal;