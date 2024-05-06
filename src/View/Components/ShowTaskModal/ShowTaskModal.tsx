import { AlertDialogFooter, Button, ButtonGroup, ButtonText, CloseIcon, Heading } from '@gluestack-ui/themed';
import { AlertDialogBody } from '@gluestack-ui/themed';

import { AlertDialogCloseButton } from '@gluestack-ui/themed';
import { AlertDialog, AlertDialogBackdrop, AlertDialogContent, AlertDialogHeader } from '@gluestack-ui/themed';
import React from 'react';

import moment from 'moment';
import { ITaskInfo } from '../../interfaces/TodoInterfaces';
function ShowTaskModal(props: ITaskInfo) {



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
                    <Heading size="lg">Task Info</Heading>
                    <AlertDialogCloseButton>
                        <CloseIcon />
                    </AlertDialogCloseButton>
                </AlertDialogHeader>
                <AlertDialogBody>
                    <Heading size="sm">{props.title}</Heading>
                    <Heading size="sm">{
                        'Created Time : ' + moment.unix(parseInt(`${props.createdTime}`.substring(0, 10), 10)).format('LL')}</Heading>
                    <Heading size="sm">{
                        'Time To do : ' + moment.unix(parseInt(`${props.time}`.substring(0, 10), 10)).format('LL')}</Heading>
                    <Heading size="sm">
                        {`Status : ${props.done ? 'Done' : 'To do'}`}</Heading>
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
                            <ButtonText>Close</ButtonText>
                        </Button>

                    </ButtonGroup>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog >
    );
}

export default ShowTaskModal;