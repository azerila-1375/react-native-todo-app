import React, { useEffect, useState } from "react";
import { View, StyleSheet, Text, Animated, Dimensions, TouchableOpacity } from 'react-native';
import { TodoList } from "../TodoList/TodoList";
import { Box, FormControl, FormControlLabel, FormControlLabelText, Icon, Input, InputField, ScrollView, SearchIcon } from "@gluestack-ui/themed";
import AddTaskModal from "../AddTaskModal/AddTaskModal";
import HomeController from "./../../../controller/TodoListController";
import { connect } from 'react-redux';
import { todoPut } from
  '../../../Redux/Todo/TodoSlice';
import { useAppDispatch, useAppSelector } from "../../../Redux/Hooks";
import { RootState } from "../../../Redux/Store";
import { CalendarDays } from "lucide-react-native";
import CalendarModal from "../CalendarModal/CalendarModal";
const HEADER_EXPANDED_HEIGHT = 300
const HEADER_COLLAPSED_HEIGHT = 100

const { width: SCREEN_WIDTH } = Dimensions.get('screen')

function Home(props: any) {


  const [search, setSearch] = useState("");
  const [scrollY, setScrollY] = useState(new Animated.Value(0));


  const [showAddTaskAlertDialog, setShowAddTaskAlertDialog] = useState(false);
  const [showCalendarAlertDialog, setShowCalendarAlertDialog] = useState(false);
  const [startCalendar, setStartCalendar] = useState(-1);
  const [endCalendar, setEndCalendar] = useState(-1);

  const dispatch = useAppDispatch();

  const todo = useAppSelector((state: RootState) => state.todo);



  const headerHeight = scrollY.interpolate({
    inputRange: [0, HEADER_EXPANDED_HEIGHT - HEADER_COLLAPSED_HEIGHT],
    outputRange: [HEADER_EXPANDED_HEIGHT, HEADER_COLLAPSED_HEIGHT],
    extrapolate: 'clamp'
  });

  const headerTitleOpacity = scrollY.interpolate({
    inputRange: [0, HEADER_EXPANDED_HEIGHT - HEADER_COLLAPSED_HEIGHT],
    outputRange: [0, 1],
    extrapolate: 'clamp',
  });

  const heroTitleOpacity = scrollY.interpolate({
    inputRange: [0, HEADER_EXPANDED_HEIGHT - HEADER_COLLAPSED_HEIGHT],
    outputRange: [1, 0],
    extrapolate: 'clamp'
  });

  const handleSearchOnChange = (text: string): void => {
    setSearch(text);
  }

  const getData = async () => {
    let data = await HomeController.getTodoList();
    dispatch(todoPut(data));
  }

  useEffect(() => {
    getData();
  }, []);

  const headerTitle = 'My Todo List';

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.header, { height: headerHeight }]}>
        <Animated.Image source={require('./../../../..//assets/images/home/home-header-bg.jpg')} style={{ position: 'absolute', height: headerHeight, top: 0, opacity: heroTitleOpacity }} ></Animated.Image>
        <Animated.Text style={{ textAlign: 'left', fontSize: 18, color: 'white', marginTop: 30, opacity: headerTitleOpacity }}>{headerTitle}</Animated.Text>
        <Animated.Text style={{ textAlign: 'center', fontSize: 32, color: 'white', position: 'absolute', bottom: 16, left: 16, opacity: heroTitleOpacity }}>{headerTitle}</Animated.Text>
      </Animated.View>
      <ScrollView
        contentContainerStyle={styles.scrollContainer}
        onScroll={Animated.event(
          [{
            nativeEvent: {
              contentOffset: {
                y: scrollY
              }
            }
          }], {
          useNativeDriver: false
        })
        }
        scrollEventThrottle={16}>
        <View style={styles.filterContainer}>
          <Box w="80%">
            <FormControl
              size="md"
              isDisabled={false}
              isInvalid={false}
              isReadOnly={false}
              isRequired={false}
            >
              <FormControlLabel mb="$1">
                <FormControlLabelText>Search</FormControlLabelText>
              </FormControlLabel>
              <Input>
                <InputField value={search} onChangeText={handleSearchOnChange} type="text" defaultValue="" placeholder="Search..." />
              </Input>
            </FormControl>
          </Box>
          <TouchableOpacity onPress={() => {
            setShowCalendarAlertDialog(true);
          }}>
            <CalendarDays></CalendarDays>
          </TouchableOpacity>
        </View>
        <View style={styles.content}>
          <TodoList data={todo.filter((item: any) =>
            item.title.toLowerCase().includes(search.toLowerCase())
          ).filter((item: any) =>
            startCalendar != -1 ? item.time >= startCalendar : true
          ).filter((item: any) =>
            endCalendar != -1 ? item.time <= endCalendar : true
          )}></TodoList>
        </View>

      </ScrollView>
      <TouchableOpacity style={styles.addContainer} onPress={() => {
        setShowAddTaskAlertDialog(true);
      }}>
        <Text style={styles.addText}>Add New Task</Text>
      </TouchableOpacity>
      <AddTaskModal onPress={
        (value) => {

          setShowAddTaskAlertDialog(value);
        }
      }

        showAlertDialog={showAddTaskAlertDialog}></AddTaskModal>
      <CalendarModal onPress={
        (status, start, end) => {
          setStartCalendar(start);
          setEndCalendar(end);
          setShowCalendarAlertDialog(status);
        }
      }
        showAlertDialog={showCalendarAlertDialog}></CalendarModal>
    </View>
  )
}


const mapState = (state: any) => ({
  todo: state.todo
})


const connector = connect(mapState, null)

export default connector(Home);




const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F2F5F8',
  },

  heading: {
    fontSize: 40,
    fontWeight: 'bold',
    color: 'white'
  },
  content: {
    width: '90%',
    marginHorizontal: '5%',
    paddingVertical: '5%'
  },

  scrollContainer: {
    padding: 16,
    paddingTop: HEADER_EXPANDED_HEIGHT
  },
  filterContainer: {
    width: '90%',
    marginHorizontal: '5%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'white',
    marginVertical: 10,
    padding: 10,
    elevation: 1,
    shadowOffset: { height: 1, width: 1 },
    shadowColor: 'black',
    shadowOpacity: .1,
    borderRadius: 5

  },
  header: {
    backgroundColor: '#47387C',
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    width: SCREEN_WIDTH,
    top: 0,
    left: 0,
    zIndex: 9999,
    display: 'flex',


  },
  title: {
    marginVertical: 16,
    color: "black",
    fontWeight: "bold",
    fontSize: 24
  },
  addContainer: {
    position: 'absolute',
    bottom: 50,
    left: '10%',
    width: '80%',
    backgroundColor: '#47387C',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    borderRadius: 20
  },

  addText: {
    fontSize: 15,
    fontWeight: 'bold',
    color: 'white',
  }



});