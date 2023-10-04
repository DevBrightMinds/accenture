# Introduction 
This is the app api - it will give access to the DB and whatever datas tha can be obtained from as per the definitions provided

# Getting Started | Build and Test
TODO: 
1.  First make sure yo have nodejs installed and MySQL installed on your machine - if not download them and set them up (you could use any DB but you would also need to configure some parts of the project)
2.  Open your mysql workbench and run the code on line 18 & 19-23, 24-29  respectively - in a new query - 18 will create your app DB, 19-23 will create the table you need while 24-39 will add your brands to the table
3.	Open the api folder as a seperate project on your prefered editor - say vscode
4.	Run 'npm install' to install the packages defined in the package.json file
5.	Then 'npm run dev' to run this project locally, it will run on port 5500, else you could define by opening the app.ts file and changing the port on line 15
    you can also get the build files should you want to host this on a live server by runnng the npm run build - then open the dist folder to see the build files
    you may also test the build app by navigating to the dist folder, cd dist - then running 'npm run start'
6.	To run a test, open postman or use this address on your browser and postman http://localhost:5500/Brands/GetBrands
7.  You will need to ofcourse modify the .env file as per your settings - else the DB connections will fail

CREATE DATABASE `accenture` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
CREATE TABLE `brands` (
  `ID` int NOT NULL AUTO_INCREMENT,
  `Name` varchar(255) NOT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
INSERT INTO accenture.brands (`Name`) VALUES
    ('Visa'), 
    ('TymeBank'),
    ('Distel'),
    ('Spotify'),
    ('Microsoft'),
    ('Engine'),
    ('Nike'),
    ('Wesgrow'),
    ('Multichoice'),
    ('PnP'),
    ('Liquid'),
    ('Tfg'),
    ('Sanlam'),
    ('Santam'),
    ('BBC');