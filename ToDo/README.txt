
                          To-Do Application React Native.

	With ToDo application user can create and add to-do or notes in list. It’s a simple application with funktion ’delete’ when user decides that the note is no longer needed. 
The project contains the following components: Main.js, Header.js, Content.js, AddInput.js and TodoList.js.

AddInput.js has a form where user write to-do tasks and add them to the list when click on the button icon. The file contains native components as View, TextInput, TouchbleOpacity and StyleSheet. Icons used in the application are imported from the library ’@expo/vector-icon’. Function ’SubmitHandler’ passed as a prop to work inside ’Addinput’ component.

Content.js file is rendered when there are no tasks and the list is empty.

Main.js file contains components that are displayed immediately when the Application is loaded. All other components are imported into this file. To display scrollable list of tasks used Flatlist component. Flatlist has two props which include data and the renderItem. Data takes an empty array and depends on the ’AddInput’ component for data to fill up the empty array. Functions ’submitHandler’ adds each item to the list and passed into onPress and ’deleteItem’ removes item from the array. The FlatList has props as ListHeaderComponent which contains ’Header’ component and ListEmptyComponent  which renders ’Content’ component.

TodoList.js file contains native components as View, Text, StyleSheet and TouchbleOpacity. Icons imported from the library ’@expo/vector-icon’.  ’item and deleteItem’ passed as a props inside this component.

App.js file contains ’useFonts’ component imported from ’expo-font’ which allows to use downloaded fonts for customize visual part of application. Another component is ’Main’ .

For the design of the applicaon were used:

LinearGradient library installed and imported from ’expo-linear-gradient’;
Satisfy-Regular.ttf and Rancho-Regular.ttf fonts;
StyleSheet component.
