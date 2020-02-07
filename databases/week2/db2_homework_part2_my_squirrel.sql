-- Part 2: School database -- Create a new database containing the following tables: 

CREATE DATABASE db2_for_homework2_part2_squirrels; 

USE db2_for_homework2_part2_squirrels;
SET NAMES utf8mb4; 

-- 2.1 Class: with the columns: id, name, begins (date), ends (date)  
CREATE TABLE `class`  (
  `id`     int(10) unsigned NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `name`   varchar(255) NOT NULL,
  `begins` DATETIME NOT NULL,
  `ends`   DATETIME NOT NULL
)  ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- 2.2 Student: with the columns: id, name, email, phone, class_id (foreign key)  
CREATE TABLE `student` (
  `id`     int(10) unsigned NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `name`   varchar(255) NOT NULL,
  `email`  varchar(255) NOT NULL,
  `phone`  varchar(255) NOT NULL,
  `class_id` int(10) unsigned NOT NULL,
  CONSTRAINT `fk_class` FOREIGN KEY (`class_id`) REFERENCES `class` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

INSERT INTO class   (id, name, begins, ends) 
VALUES (12, 'Class12', '2019-10-06 12:00:00', '2020-06-30 18:00:00');
INSERT INTO student (id, name, email, phone, class_id) 
VALUES (1, 'Squirrel 01', 'sq01@forrest.nuts', '11111111', 12); 
INSERT INTO student (id, name, email, phone, class_id) 
VALUES (2, 'Squirrel 02', 'sq02@forrest.nuts', '22222222', 12); 
INSERT INTO student (id, name, email, phone, class_id) 
VALUES (3, 'Squirrel 03', 'sq03@forrest.nuts', '33333333', 12); 
INSERT INTO student (id, name, email, phone, class_id) 
VALUES (4, 'Squirrel 04', 'sq04@forrest.nuts',  '4444444', 12); 
INSERT INTO student (id, name, email, phone, class_id) 
VALUES (5, 'Squirrel 05', 'sq05@forrest.nuts', '55555555', 12); 

SELECT * FROM class; 
SELECT * FROM student; 

-- If you are done with the above tasks, you can continue with these advanced tasks:

-- 2.3 Create an index on the name column of the student table. -- https://www.w3schools.com/sql/sql_create_index.asp
CREATE INDEX idx
ON student(name); 
SELECT * FROM student;  -- Why can't I see this?
 
-- 2.4 Add a new column to the class table named status which can only have the following values: not-started, ongoing, finished (hint: enumerations).
ALTER TABLE class 
ADD status
ENUM('not-started', 'ongoing', 'finished') 
NOT NULL; 
SELECT * FROM class; -- Why can't I see this? 
