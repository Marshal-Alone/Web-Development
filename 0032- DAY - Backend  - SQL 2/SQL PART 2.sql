#											PRACTICE Q1
# 
#Create a database for your college.
#Create a table named Teacher to store (id, name, subject, salary)
#Insert following data in the table :
#		23, "ajay", "math", 50,000
#		47, "bharat", "english", 60,000
#		18, "chetan", "chemistry", 45,000
#		9, "divya", "physics", 75,000

CREATE DATABASE clg;
USE clg;

CREATE TABLE teacher(
	id INT PRIMARY KEY,
    name VARCHAR(20),
    subject VARCHAR(20),
    salary INT
);

INSERT INTO teacher
VALUES 
 (23,"ajay","math",50000),
 (47,"bharat","english",60000),
 (18,"chetan","physics",45000),
 (9,"divya","chemistry",75000);
 
 SELECT * FROM teacher; 
 
#
# 							NEXT QUESTIONS
# 
#	• Select teachers whose salary is more than 55K
SELECT * 
FROM teacher
WHERE salary>55000;

#	• Rename the salary column of teacher table to ctc
ALTER TABLE teacher
CHANGE COLUMN salary ctc INT ;

#	• Update salary of all teachers by giving them an increment of 25%
SET SQL_SAFE_UPDATES=0;

UPDATE  teacher
SET ctc = ctc + ctc * (25/100);

#	• Add a new column for teachers called city. The default city should be "Gurgaon"
ALTER TABLE teacher
ADD COLUMN city VARCHAR(50) DEFAULT "Gurgaon";

#	• Delete the salary column for teacher table
ALTER TABLE teacher
DROP COLUMN ctc;

SELECT * FROM teacher;


 
 
 #####################################################################################
 
 #####################################################################################
 

#									PRACTICE Q2 
#
#Create a table to store student info (roll_no, name, city, marks).
#Insert following data in the table :
#	110,"adam", "Delhi", 76
#	108,"bob", "Mumbai", 65
#	124,"casey", "Pune", 94
#	112,"duke", "Pune", 80

CREATE TABLE std_info(
	roll_no INT PRIMARY KEY,
    name VARCHAR(50),
    city VARCHAR(50),
    marks INT
    );
    
INSERT INTO std_info
(roll_no,name,city,marks)
VALUES
    (110,"adam", "Delhi", 76),
    (108,"bob", "Mumbai", 65),
    (124,"casey", "Pune", 94),
    (112,"duke", "Pune", 80);


#Select all students who scored 75+
SELECT * FROM std_info
WHERE marks>75;

#Find names of all cities where students are from
SELECT DISTINCT city 
FROM std_info;
				#or
SELECT city
FROM std_info
GROUP BY city;

#Find the maximum marks of students from each city
SELECT city, MAX(marks)
FROM std_info
GROUP BY city;

#Find the average of the class
SELECT AVG(marks) AS AVG_OF_CLASS
FROM std_info;

#Add a new column grade, assign grade such that :
#		marks > 80, grade  = A+
#		marks 70-80, grade = A
#		marks 60-70, grade = B
ALTER TABLE std_info
ADD COLUMN grade VARCHAR(2);

UPDATE std_info
SET  grade = "A+"
WHERE marks>=80;

UPDATE std_info
SET grade="A"
WHERE marks >= 70 AND marks< 80;

UPDATE  std_info
SET grade = "B"
WHERE marks BETWEEN 60 AND 70;

SELECT * FROM std_info;