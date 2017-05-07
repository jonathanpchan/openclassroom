#[What is Open Classroom?]

As computer science students, we have personally had issues finding open rooms to study in. So we created an app to let students know what classrooms and labs are open. Currently students have no easy way to find this out. They have to chance upon a room or search physically till they find one. We provide a listing of what rooms are open to make the lives of students easier. In addition, students will soon be able to upload their schedules and Open Classroom will suggest where they can go to study. There are also social elements in the works, where students can find other people to study with whether they are in the same class or taking a different section. Chat functionality and note sharing are also on the way. A means for users updating erroneous information and having it user moderated will also be implemented. This application will surely increase the student’s knowledgebase of where they can prepare for their next exam or simply get the help they need in a free space devoid of professor involvement.

#[Features]

Currently Live
	Signup
	Login/Logout
	Get Open Classroom by Building
In Progress
	Open Classroom based on Schedule
	User Schedule Building
	User Chatroom
	User Group Boards
	File Transfer between Users

#[Setup]

You can install the Open Classroom application by downloading the source code directly and unzipping the contents into a folder. Alternatively, you can also fork project. As this is a MEAN stack application, you must install the 4 dependencies:
	MongoDB (via website)
	Angular 2.0 (via npm install)
	ExpressJS (via npm install)
	NodeJS (via website)
Furthermore, you must install ("ng install") the node_modules folder into these 3 folders using a terminal at that path location:
	"scraper" folder
	"open-classroom" folder
	"open-classroom/angular-src" folder

#[Populate your MongoDB Database with Classroom Content]
	Navigate where you installed MongoDB (default location: C:\Program Files\MongoDB\Server\3.4\bin) and run "mongod.exe" or the "mongod.exe" shortcut in the scraper folder.
	Navigate to the "scraper" folder
	In a terminal at this path location, run "node scraper"
#[Run the Open Classroom Application]
	Make sure "mongod.exe" is running (if not, run "mongod.exe" as seen above)
	Open a new terminal in the "open-classroom" folder
	Use the command "npm start" or "npm serve" or "nodemon" (see dependencies)
	Open a web browser (Chrome, Edge, Firefox, etc.) and go to "localhost:3000".

#[Dependencies]

Open Classroom uses the MEAN stack
	MongoDB
	Angular 2.0
	ExpressJS
	NodeJS
(Angular 2.0 and ExpressJS are installed using "ng install". MongoDB and NodeJS shall be installed from their respective websites) Helpful Applications
	Nodemon - an application that updates your project without having to restart "npm start" or "ng serve"
	Robomongo - a MongoDB client that displays the data in your database (when connected)

#[How do I contribute?]

If you want to contribute to the project, feel free to report bugs, download the source code, or fork the project.
	Source Code: https://github.com/jonathanpchan/openclassroom
	Issue Tracker: https://github.com/jonathanpchan/openclassroom/issues

#[Support]

If you have any questions, feel free to contact us at openclassroom2017@gmail.com.