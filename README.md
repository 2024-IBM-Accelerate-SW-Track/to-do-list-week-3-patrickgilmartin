<<<<<<< HEAD
<<<<<<< HEAD
[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-22041afd0340ce965d47ae6ef1cefeee28c7c493a6346c4f15d667ab976d596c.svg)](https://classroom.github.com/a/r9S7wyqT)
[![Open in Visual Studio Code](https://classroom.github.com/assets/open-in-vscode-2e0aaae1b6195c2367325f4f02e2d04e9abb55f0b24a779b69b11b9e10269abc.svg)](https://classroom.github.com/online_ide?assignment_repo_id=15290727&assignment_repo_type=AssignmentRepo)
# Project Week 2: To-do list application (Cont.)

## Introduction
As of now, you have completed Project Week 1 and should now have a React Application that can navigate to an **About me** page and a **Home** page currently hosting the To-do List Application that we will continue to build upon for Project Week 2. For Project Week 2, Look to implement more Material UI components to the front-end of your to-do list web application to give it a sleek and modern appearance. Aside from styling, A typical user wants to be able to use a to-do list to organize tasks. Keeping user stories in mind when designing applications helps determine important features. We encourage you to take a unique approach to this lab, as there is no one right answer. 

- [**Material Design**](https://material.io/design/introduction) is a design system that can guide you on what UI decisions to make if you would like to explore best practices, but functionality is the key focus of the lab.
- No back-end is required for this lab. All data (tasks) should live in the front-end.

## Requirements
Feature requirements (Week 2 task is complete when you):
+ Provide the date and time of item addition
+ Allow users to mark items as complete
+ Remove completed items from the list
+ Validate there are no duplicated items

Implementation requirements:
+ Use [**Material UI components**](https://material-ui.com/) at least once throughout the app
+ Use Javascript's list.map function at least once to manipulate list items
+ Implement at least one **functional component**

Hints (Useful Resources):
+ Click [**here**](https://react.dev/learn/rendering-lists) for an example on utilizing the list.map function

## Instructions

### To-do list application
1. In this step, we will be adding the feature to display the date and time an item was added along with its task to the user. Also, we will be implementing a new component to display each item in the Todo list.
      + Navigate to `src/component/AddTodo.js`
        1. In the Constructor method, add a new key w/ the name `date` set to an empty string to represent the current date 
        2. In the handleChange function, place the newly created `date` key and update the value using `Date().toLocaleString('en-US')` method
        3. In the handleSubmit function, make sure to set the newly created `date` key back to an empty string after passing the user values to the addTodo function
      + Navigate to `src/component/todos.js`
        1. If not present, import ListItemButton and ListItemText components from the material UI library
        2. Within the Card component, substitute the CardContent component with a ListItemButton Component
            + **Before:**
               ```
                  <CardContent>
                    <span style={{ padding: "50px" }}>{todo.content}</span>
                  </CardContent>
               ```
            + **After:**
               ```
                  <ListItemButton component="a" href="#simple-list">
                    <ListItemText primary={todo.content}/>
                  </ListItemButton>
                ```
        3. Within the ListItemText component, add the `secondary` property next to the `primary` property to display the date for each task
        4. (optional) Add `style={{marginTop:10}}` to the Card component to give space between each item in the Todo list and avoid item cards from overlapping each other

2. In this step, we will be adding the checkbox feature to correspond to a task being completed
      + Navigate to `src/component/todos.js`
        1. If not present, import Checkbox from the material UI library
        2. Within the ListItemButton component, Add a Checkbox component before the ListItemText component with a `style` property set to `paddingLeft:0` and a `color` property set to `primary`. **Hint:** `color` is a property of its own and not a property of `style`.
3. In this step, we will be adding the delete feature which will remove an item from the Todo list once it is complete (user clicks on checkbox button)
      + Navigate to `src/pages/Home.js`
        1. Implement the code snippet below for the deleteTodo() function before or after the addTodo() function\
        **Note:** Click [**here**](https://upmostly.com/tutorials/react-filter-filtering-arrays-in-react-with-examples) to learn more about the **filter** function and how it is being used w/in the deleteTodo function to remove an item from our Todo list
        ```
        deleteTodo = (id) => {
            const todos = this.state.todos.filter((todo) => {
              return todo.id !== id;
            });
            this.setState({
              todos: todos,
            });
        };
        ```
        2. Within the Todos component in the render() function, pass in an additional property\
           `deleteTodo={make your change}` to correspond to the deleteTodo function. **Hint:** replace `make your change` with deleteTodo() function
      + Navigate to `src/component/todos.js`
        1. Add `deleteTodo` as a new property to the Todos component to correspond to the new deleteTodo() function
        2. Within the Checkbox component, add an onClick event handler to call the deleteTodo() function and pass the todo item's `id` as a parameter. **Hint:** Use an Arrow Function. Click [**here**](https://reactjs.org/docs/faq-functions.html) to learn about passing functions to components.
4. In this final step, We will be adding a validation feature to avoid having duplicate tasks w/in the Todo list.
      + Navigate to `src/pages/Home.js`
        1. In the addTodo() function, implement a code to determine if a task already exists before performing the action to add an item to the Todo list. There are plenty of ways to implement this feature.\
        A psudeo code example can be seen below:
        ```
        if (item exists in todo list) {
            do nothing and just return
            to break out the function
        } else {
            perform the action to add
            the item to the Todo list }
        ```
      + **Note:** Look into utilizing the [**find**](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find) function to check if current item already exists w/in the Todo list. 
      ```
      array = [1,2,3,4,5,6]
      const exists = array.find(t => t === '4')
      console.log(exists)
      
      Output: true
      ```

### To-do list application stretch assignment (optional challenge)

Tasks can have pre-conditions and acceptance criteria. For this stretch assignment, create two new text fields for them, and when the user clicks submit, these fields should be displayed in the card as well.

Hint: Add two new variables to the state and take a look at [**this tutorial**](https://www.tutorialspoint.com/how-to-use-the-handlechange-function-in-react-component#:~:text=In%20the%20handleChange()%20function%2C%20we%20can%20get%20the%20name,()%20function%20handles%20all%20inputs.)


## Testing
Upon completion of the Week 2 Lab Project, all the necessary components and functions should be implemented in order to successfully complete the test cases mentioned below:
+ Add Button Component adds the task to the list (on click)
+ Add Button Component doesn't add blank tasks to the list (on click)
+ Add Button Component doesn't add duplicate tasks to the list (on click)
+ Checkbox Button component removes the task from the list (on click)

**Note:** Material UI components (and other libraries) render as HTML components under the hood, so using Material UI's TextField would still render in the DOM as an Input element and pass the tests for this lab.


## Pre-session Material
[**Here**](https://ibm.box.com/s/ir3pw5dzwluftvvh96ywbfx46senjlbb) are the pre-session materials that were provided to you earlier.
=======
[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-22041afd0340ce965d47ae6ef1cefeee28c7c493a6346c4f15d667ab976d596c.svg)](https://classroom.github.com/a/XXiOzV4T)
[![Open in Visual Studio Code](https://classroom.github.com/assets/open-in-vscode-2e0aaae1b6195c2367325f4f02e2d04e9abb55f0b24a779b69b11b9e10269abc.svg)](https://classroom.github.com/online_ide?assignment_repo_id=15324313&assignment_repo_type=AssignmentRepo)
# Project Week 3 To-do list application (Cont.)
## Introduction
As of now, you have completed Project Week 2 and should now have a React Todo List Application that can add and delete unique tasks. For Project Week 3, we will finish up the front end and make our own unit tests to make sure our App is working properly. We encourage you to take a unique approach to this lab, as there is no one right answer. 
- [Material Design](https://material.io/design/introduction) is a design system that can guide you on what UI decisions to make if you would like to explore best practices, but functionality is the key focus of the lab.
- No back-end is required for this lab, and all data (tasks) should live on the front end.


## Requirements
Feature requirements (Week 3 task is complete when you):
+ Provide the due date for the task
+ Change the color of overdue tasks
+ Make test cases to test your application

Implementation requirements:
+ Use [**DesktopDatePicker**](https://mui.com/x/react-date-pickers/date-picker/)  to store the date that the task should be finished by.
+ Use [**React Testing Library**](https://testing-library.com/docs/react-testing-library/cheatsheet) to create unit tests to test your code.

Instructions:
1. To start this project we need to add a component that allows us to select a due date for our tasks.
    + To add the Date Picker add these imports to `src/component/AddTodo.js` 
 ```
 import { DesktopDatePicker , LocalizationProvider} from '@mui/x-date-pickers';
 import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
 ``` 
    + Next, inside the constructor, when initializing `this.state` add a new variable to store the due date and set it to null (i.e. `due : null,`)
    + Then you need to add this between the TextField and the Button in the render function.
 ```   
 <LocalizationProvider dateAdapter={AdapterDateFns}>         
 <DesktopDatePicker
 id="new-item-date"
 label="Due Date"
 value={/*value*/}
 onChange={/*onChange*/}
 renderInput={(params) => <TextField {...params} />}
 />
 </LocalizationProvider>
 ```
    + Replace `\*value*\` with the new state variable.
    + Create a new handleChange function for the datepicker to set the value of your due date. You are free to name this function. 
        1. (Hint: use handleChange as a template. Don't forget to remove the content and date values. You won't need that here.) 
        2. Note that the value from the date picker will give more than just the date in mm/dd/yyyy. To format the date, we need to set the due date variable to `new Date(event).toLocaleDateString()`
    + Change `\*OnChange*\` to the new handle function that you created.
    + Finally, reset the value of the due date to null in the `onSubmit` function

2. Right now the button works however we are able submit a task with an empty due date. We need to change this so that only task with both a task name and due date create a task. 

    + We need to go to `src/pages/Home.js` and go to the `addTodo` function where we made sure no duplicate tasks were added. (Hint: The date picker will give us three values: A valid date in string form, `"Invalid Date"` or `null`.) Create a check for `"Invalid Date"` or `null` so no task is made.
        1. Recall the psudeo code from week 2
 ```
 if (null or "Invalid Date" in todo list) {
 do nothing and just return
 to break out the function
 } else {
 perform the action to add
 the item to the Todo list }
 ```    

3. At this point, we have a working button that properly creates tasks with due dates; however, the due date value isn't currently being used.

    + We want to display these due dates and highlight any overdue items. We can do this in `src/component/todos.js`
    + Inside the map function above the return function, make a variable called `color` and set it to `"#ffffffff"` or `"white"` (#ffffffff is white's hex color value)
    + Then check if todays date to the due date of the task. If the due date is in the past change then set `color` to a different color. 
        1. (You do not have to keep the original card white, however you MUST make overdue cards a different color. Play around and find colors that you like.) 
        2. Note that your due date value is a string. You will have to use `new Date(/*due date variable*/)` to compare it to the current date 
        3. (Hint: you can get the current date with `new Date()`)  
    + Next, inside the card that you used to display the tasks, set the `background` to `color`. 
        1. (Hint: This is in  `<Card style={{\*Code*\}}>` from last week. If you did not add a style in the card, add it now)
    + Add `data-testid={/*task-name*/}` inside the card as well. Where `task-name` is the variable that holds the task name. 
        1. (Hint: Look in `ListItemText primary={}` for this value)
    + Finally in ListItemText change the value of `secondary={/*Somevalue*/}` with your due date value.


## Running Your Application
Run the below commands to render the application and open it on the browser:
* `npm install` - This command is used to install all the dependencies listed in a project's `package.json` file.
* `NODE_OPTIONS=--openssl-legacy-provider npm start` - Compiles and starts your application. It runs the script defined in the start property of the scripts section in package.json.


## Testing
This week we will be writing some test cases. Below is an example of a unit test that adds a History Test task due 05/30/2023.
```
test('test that App component renders Task', () => {
 render(<App />);
 const inputTask = screen.getByRole('textbox', {name: /Add New Item/i});
 const inputDate = screen.getByPlaceholderText("mm/dd/yyyy");
 const element = screen.getByRole('button', {name: /Add/i});
 const dueDate = "05/30/2023";
 fireEvent.change(inputTask, { target: { value: "History Test"}});
 fireEvent.change(inputDate, { target: { value: dueDate}});
 fireEvent.click(element);
 const check = screen.getByText(/History Test/i);
 const checkDate = screen.getByText(new RegExp(dueDate, "i"));
 expect(check).toBeInTheDocument();
 expect(checkDate).toBeInTheDocument();
 });

```
+ `render(<App />);` mocks the compentent so that we can do the testing
+ `screen.getByRole('textbox', {name: /Add New Item/i})` Looks for a textbox compentent with the words "Add New Item"
+ `fireEvent.change(inputTask, { target: { value: "History Test"}})` Types the value "History Test" into the text box.
+ `fireEvent.click()` clicks the selected element.
+ `screen.getByText(/History Test/i)` searches for "History Test" on the screen ignoring case using regex. (Note: getBy only looks for one value. If more than one value or no value is present then an error will occur.  If you want to get more then use `getAllBy`). 
+ `expect(check).toBeInTheDocument();` the element should be on the page if it is the test case is passed. Otherwise, the test fails. 
+ If you want to check if a value is equal to something, you can use `expect(value).toBe(value_I_want)`.
+ Note: The elements returned by `getByRole` or `getByText` may not have CSS or styling. If you want to have those values, put a `data-testid` in that component and use `getByTestId` to grab those IDs.
+ If we want to check if a value is 
1. Complete the Following Test Cases in `src/AddTodo.test.js`
    + No duplicate task
    + Submit Task with No Due Date
    + Submit Task with No Task Name
    + Late Tasks have Different Colors
        1. Hint if we wanted to grab the color of the card for "History Test" we can use `const historyCheck = screen.getByTestId(/History Test/i).style.background`
    + Delete Task
        1. Hint: Earlier, we used `screen.getByRole` for getting a Button and a Text Box. How would we get a Checkbox? 
 
 To run these tests run `npm run test`
 ## Pre-session Material
Here is a [**link**](https://ibm.box.com/s/c7caqj7u5fft4bmaugwdive16jfw1s0r) to the pre-session material that was provided to you earlier.
>>>>>>> week3/main
=======
[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-22041afd0340ce965d47ae6ef1cefeee28c7c493a6346c4f15d667ab976d596c.svg)](https://classroom.github.com/a/tISmtzRD)
[![Open in Visual Studio Code](https://classroom.github.com/assets/open-in-vscode-2e0aaae1b6195c2367325f4f02e2d04e9abb55f0b24a779b69b11b9e10269abc.svg)](https://classroom.github.com/online_ide?assignment_repo_id=15388093&assignment_repo_type=AssignmentRepo)
# Project Week 4: To-do list application (Cont.)
## Introduction
As of now, you have completed Project Week 3 and should now have a fully functional React Application with the ability to navigate to an **About me** page and a **Home** page hosting the Todo List Application. The Todo List Application itself allows users to provide a task with a due date, create a list with those user inputs to be displayed on a webpage, mark those tasks as complete, remove them from the list, etc. Currently, all data, which is essentially our task in this case, lives on the frontend (Todo List Application). Every time we refresh the page or restart our application, that data is lost. This is where the backend component comes into play. The backend component will allow us to communicate to our front-end component (Todo List Application) using express and save our data inside a database (json file) where data will not be lost after a page refresh or application restart. For Project Week 4, you will go through the process of initializing and creating a backend component, using express to communicate with the front-end component, and using axios to communicate with backend component.

## Requirements
Feature requirements (Week 4 task is complete when you):
+ Create and Initialize an Express application (Backend)
+ Create a connection between the Backend and Front-end
+ Create a json file to represent your database
+ Create a **POST** request to submit data to a json file

Implementation requirements:
+ Use [**Express**](https://www.npmjs.com/package/express) within the backend component
+ Use [**Axios**](https://www.npmjs.com/package/axios) within the front-end component (Todo List Application)

## Instructions

### Express APP (Backend)
1. In this step, we will be going through the process of creating an Express application within our Todo List Application. **Note:** From here on out, the term Backend will correspond to our Express Application, Front-end will correspond to our Todo List Application, and vice versa.
      + Navigate to our project's root directory and run the following command within the terminal. **Hint:** Essentially, this is the directory where our `src` and `public` folders are located.
        1. Create a new folder called `backend` that will essentially host our Express application by running the following command: `mkdir backend`
      + Navigate to the newly created `backend` folder and run the following commands within the terminal. **Hint:** Currently, this directory should be empty with no such sub-folders or files present. **Hint** Run the command `cd backend` or similar to change directory.
        1. Run the following command to initialize your directory with some basic information: `npm init --yes`
        2. Run the following command to install Express as a dependency: `npm install express`
        3. Run the following command to install cors as a dependency: `npm install cors`\
           **Note:** Cors allows us to relax the security applied to an API. You can learn more about this module [**here**](https://www.section.io/engineering-education/how-to-use-cors-in-nodejs-with-express/)
        5. Create a new file called `index.js` out of which we'll run our Express server by running this command: `touch index.js`\
           **Note:** If this command doesn't work, look into creating the file through a file explorer or VS code.
         
      + The file structure of your project should now look similar to what is shown on the screenshot below:
        <img width="299" alt="Screen Shot 2022-06-23 at 6 25 55 AM" src="https://user-images.githubusercontent.com/57464095/175310108-65d0525c-c0b4-4432-8c12-a01ce7a0c05e.png">
           
2. In this step, we will be using Express to create a simple web server that will then be ran on a specified port.\
   **Note:** As you follow along with these sub-steps, place each snippet of code below the other.
      + Navigate to `backend/index.js`
        1. Implement the code snippet provided below:
           ```javascript
           const express = require("express"),
                  app = express(),
                  port = process.env.PORT || <port>,
                  cors = require("cors");
           const bodyParser = require('body-parser');
           const fs = require("fs").promises;
           ```
           **Note:** This snippet of code imports external modules and reads the environment variables. Make sure to replace `<port>` with a port number of your choosing, such as **8080** or **3001** keep note of this port number for future usage. Click on the following links [**express**](https://expressjs.com/en/5x/api.html), [**cors**](https://expressjs.com/en/resources/middleware/cors.html), [**body-parser**](https://expressjs.com/en/resources/middleware/body-parser.html), and [**fs**](https://nodejs.dev/learn/the-nodejs-fs-module) to learn more about these modules and their usage.
        2. Implement the code snippet provided below:
           ```javascript
           app.use(cors());
           app.use(bodyParser.json({ extended: true }));
           app.listen(port, () => console.log("Backend server live on " + port));
           ```
           **Note:** This snippet of code sets up our express application and returns a message back to console once our application is running.
        3. Implement the code snippet provided below:
           ```javascript
           app.get("/", (req, res) => {
               res.send({ message: "Connected to Backend server!" });
           });
           ```
           **Note:** This snippet of code returns a message once a **GET** request to the specified route is made.
         4. Implement the code snippet provided below:
            ```javascript
            app.post("/add/item", addItem)
            ```
            **Note:** This snippet of code makes a call the `addItem` function once a **POST** request to the specified route is made.
         5. Implement the code snippet provided below:
            ```javascript
            async function addItem (request, response) {
                try {
                    // Converting Javascript object (Task Item) to a JSON string
                    const id = request.body.jsonObject.id
                    const task = request.body.jsonObject.task
                    const curDate = request.body.jsonObject.currentDate
                    const dueDate = request.body.jsonObject.dueDate
                    const newTask = {
                      ID: id,
                      Task: task,
                      Current_date: curDate,
                      Due_date: dueDate
                    }

                    const data = await fs.readFile("database.json");
                    const json = JSON.parse(data);
                    json.push(newTask);
                    await fs.writeFile("database.json", JSON.stringify(json))
                    console.log('Successfully wrote to file') 
                    response.sendStatus(200)
                } catch (err) {
                    console.log("error: ", err)
                    response.sendStatus(500)
                }
            }
            ```
            **Note:** This snippet of code takes in a request body from the Todo List Application which represents a `todo` item. The body is then converted into a new json object called `newTask` to represent the new `todo` item. The new json object is finally appended to a json list located in a file called `database.json` to represent our `todos` list.
           
3. In this step, we will be creating a json file to act as our database and hold data submitted from our Front-end application once a user clicks on the **Add** button.
      + Navigate to the `backend` directory. **Hint:** This is the directory that only contains package.json, package-lock.json, and index.js files.
        1. Create a new file called `database.json` out of which we'll store the data received from the front-end by running this command: `touch database.json`\
           **Note:** If this command doesn't work, look into creating the file through a file explorer or VS code.
      + Navigate to `backend/database.json`
        1. Implement the code snippet provided below:
           ```
           []
           ```
           **Note:** The square brackets must be placed within this json file or we will receive an error when trying to append `todo` items within a list. Square brackets corresponds to an array.
      + The file structure of your project should now look similar to what is shown on the screenshot below:
        <img width="302" alt="Screen Shot 2022-06-23 at 11 27 59 AM" src="https://user-images.githubusercontent.com/57464095/175369370-5a323053-deff-43a3-ad1c-bca2918135f8.png">

### Todo List APP (Front-End)
1. In this step, we will be implementing axios in order to submit requests to the Express Application as well as to receive a response.
      + Navigate to our project's root directory and run the following command within the terminal. **Hint:** Essentially, this is the directory where our `src` and `public` folders are located.
        1. Run the following command to install Axios as a dependency: `npm install axios`
      + Navigate to `src/component/AddTodo.js`
        1. Import the Axios library at the top of our file:
           ```javascript
           import Axios from "axios";
           ```
        2. In the handleSubmit function, implement the code snippets provided below before performing the **addTodo** action:
           ```javascript
           const jsonObject = {
              id: this.state.id,
              task: <value representing the task content>,
              currentDate: <value representing the date/time task was added>,
              dueDate: <value representing the date/time task is due>
           };
           ```
           **Note:** This snippet of code is creating a json object that will be used as a body request to be sent to the `addItem` function located in our Express application. Place this code snippet below the code snippet above and make sure to replace the comments with the updated values for the following remaining keys: `task`, `currentDate`, and `dueDate`.
           ```javascript
           Axios({
              method: "POST",
              url: "http://localhost:<port>/add/item",
              data: {jsonObject},
              headers: {
                 "Content-Type": "application/json"
              }
           }).then(res => {
              console.log(res.data.message);
           });
           ```
           **Note:** This snippet of code is making a **POST** request the `addItem` function located in our Express Application and returning a response message. Make sure to replace `<port>` with the port number that was used in the Express Application process such as **8080** or **3001**.

## Running Application
Upon completion of Week 4 Lab Project, all the necessary components and functions should be implemented in order to successfully send and receive data between the Client Side (Todo List Application) and Server side (Express Application). Now we will go through the steps in simplifying the process of setting up and and running your applications. 

1. Navigate to `package.json` file located in our project's root directory. **Hint:** Essentially, this is the directory where our `src` and `public` folders are located.
   + Add the following scripts to the `scripts` property and save the file.
     ```
     "install-backend": "cd backend && npm install",
     "install-both": "npm install & npm run install-backend",
     "backend": "cd backend && node index.js",
     "start-both": "npm run backend & npm start"
     ```
   + The `package.json` file `scripts` property should now look similar to the screen shot shown below:
     ![Screen Shot 2022-06-24 at 12 31 47 AM](https://user-images.githubusercontent.com/57464095/175486138-37ee5abb-1409-4305-aeaa-eb821dff3781.png)

     **Note:** This configuration will allow us install all dependencies needed for both our Front-end and Backend application as well as running both application from one directory instead of creating multiple terminals.
     
2. Navigate to our project's root directory once again and run the following commands within the terminal. **Hint:** Essentially, this is the directory where our `src` and `public` folders are located.
  + Run `npm run install-both` to install all dependencies for both applications (Todo List Application and Express Application)
  + Run `npm run start-both` to start up both applications (Todo List Application and Express Application)

**Optional:** To Test and see if your Express Application was implemented correctly, run the following command: `npm run backend`\
**Note:** Make sure all processes are terminated before running this command.
  + There should be no error message and a message similar to the screenshot provided below should be displayed:
    ![Screen Shot 2022-06-24 at 12 40 20 AM](https://user-images.githubusercontent.com/57464095/175487997-f8b2bd8c-8ee6-41bb-83da-f82f39c92dea.png)

## Pre-session Material
Here is a [**link**](https://ibm.box.com/s/250jt0y92fa8wvyyjsmmfsr9f3j8161c) to the pre-session material that was provided to you earlier.

## Optional Challenge
As a completely optional challenge of this lab, you can add support in your backend app to talk to a real database instead of the local file.

1. Setup MongoDB, a NoSQL Database, to run on your computer.
    1. [Follow the instructions here to install the Community Edition of MongoDB for your operating system.](https://www.mongodb.com/docs/manual/installation/#mongodb-installation-tutorials)
    1. When you are not running the To-do list app, you do not need to run the `mongod` service. Remember to stop the service when you don't need it.
    1. Once installed, you can test that it works correctly by running `mongosh` in your terminal.
1. Install the [mongodb npm package](https://www.npmjs.com/package/mongodb) for your backend app. You'll need to use this to easily connect to mongodb from your code.
1. In order to maintain the existing functionality of using the JSON file for storage, implement a feature flag to switch between using the JSON file and mongodb.
    1. You can [read an environment variable in your code](https://nodejs.org/api/process.html#processenv) to decide when to use the file or mongo.
    1. Based on that variable, you can conditionally call your new code.
1. Import the package into your code. **Hint**: [follow the example code from the npm package web page](https://www.npmjs.com/package/mongodb#connect-to-mongodb)
1. When your app starts, load your collection object.
1. Use methods on the `collection` object to implement the creating a todo-list item in your app.
    1. [Creating objects](https://www.npmjs.com/package/mongodb#insert-a-document)
1. For future weeks, you can also implement this in the database for the functions.
    1. [Finding objects](https://www.npmjs.com/package/mongodb#find-documents-with-a-query-filter)
    1. [Updating objects](https://www.npmjs.com/package/mongodb#update-a-document)
    1. [Deleting objects](https://www.npmjs.com/package/mongodb#remove-a-document)
>>>>>>> 6c174a370c08c86a2581337c2cea2fc9edbe9de3
