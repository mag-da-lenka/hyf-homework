-- HYF HOMEWORK DATABASES-3, part 2 : Meal application
-- https://github.com/HackYourFuture-CPH/databases/blob/class12_hw_adapted/lesson2/README.md#part-4-meal-application 
-- https://www.mealsharing.com/ -- https://dbdiagram.io/d/5d5bff66ced98361d6ddc18c

CREATE DATABASE db3_homework_meal_application;

SET NAMES utf8mb4;

CREATE TABLE `meal` (
`id` int(10) unsigned NOT NULL AUTO_INCREMENT PRIMARY KEY, 
`title` varchar(255) NOT NULL,
`description` text NULL DEFAULT NULL, 
`location` varchar(255) NOT NULL,
`when` DATETIME NOT NULL,
`max_reservations` int(10) unsigned NOT NULL,
`price` DECIMAL(6,2) NOT NULL,                         -- is that ok? -- https://www.mysqltutorial.org/mysql-decimal/
`created_date` DATE NOT NULL
)ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE `reservation` (
`id` int(10) unsigned NOT NULL AUTO_INCREMENT PRIMARY KEY,
`number_of_guests` int(10) unsigned NOT NULL,
`meal_id` int(10) unsigned NOT NULL,
`created_date` DATE NOT NULL,
  CONSTRAINT `fk_meal_reservation` FOREIGN KEY (`meal_id`) REFERENCES `meal` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
)ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE `review` (
`id` int(10) unsigned NOT NULL AUTO_INCREMENT PRIMARY KEY,
`title` varchar(255) NOT NULL,
`description` text NULL DEFAULT NULL,
`meal_id` int(10) unsigned NOT NULL,
`stars` int(5) unsigned NULL,
  CONSTRAINT `fk_meal_review` FOREIGN KEY (`meal_id`) REFERENCES `meal` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
)ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;


-- test
SELECT * FROM 
reservation JOIN meal   on reservation.meal_id = meal.id
	    JOIN review on review.meal_id = meal.id; 

-- meal
INSERT INTO meal (id, title,              description,                     location,        `when`,                  max_reservations,  price,      created_date ) 
VALUES           (1,  'Pineapple Pizza',  'DANGER! Contains pineapples!',  'Cph Nordhavn',  '2020-08-01 08:00:00',   50,                000666.99,  '2020-02-01 08:00:00');  
INSERT INTO meal (id, title, description, location, `when`, max_reservations,  price,      created_date ) 
VALUES           (2,  'Pineapple Hummus', 'DANGER! Contains pineapples and ketchup!', 'Cph Forest Street',  '2020-08-05 08:00:00',  50,  000677.93, '2020-02-03 08:00:00');  
INSERT INTO meal (id, title, description, location, `when`, max_reservations,  price,      created_date ) 
VALUES           (3,  'Green Salad', 'Green beabs, grass, asparagus and avocado!', 'Cph Yellow Street',  '2020-06-07 08:00:00',  31,  000678.91, '2020-02-02 08:00:01');  
INSERT INTO meal (id, title, description, location, `when`, max_reservations,  price,      created_date ) 
VALUES           (4,  'Pink Salad', 'flamingo feathers, grapefruit juice and 2 beetroots.', 'Cph Green Street',  '2020-06-09 08:00:00',  25,  000110.31, '2020-02-05 08:27:01');  
SELECT * FROM meal; 


-- reservation
INSERT INTO reservation (id, number_of_guests, meal_id, created_date ) 
VALUES                  (1,  21,               4,       '2020-03-01 07:00:00');  
INSERT INTO reservation (id, number_of_guests, meal_id, created_date ) 
VALUES                  (2,  37,               2,       '2020-03-02 07:05:00');  
INSERT INTO reservation (id, number_of_guests, meal_id, created_date ) 
VALUES                  (3,  21,               3,       '2020-03-01 07:00:00');  
INSERT INTO reservation (id, number_of_guests, meal_id, created_date ) 
VALUES                  (4,  17,               1,       '2020-03-06 09:20:00');  
INSERT INTO reservation (id, number_of_guests, meal_id, created_date ) 
VALUES                  (5,  2,                1,       '2020-03-06 09:25:00');  
INSERT INTO reservation (id, number_of_guests, meal_id, created_date ) 
VALUES                  (6,  7,                1,       '2020-03-06 09:29:00');  
SELECT * FROM reservation; 


-- review
INSERT INTO review (id, title, description, meal_id, stars ) 
VALUES             (1,  'Awesome!', 'Sooo green!', 3, 7); 
INSERT INTO review (id, title, description, meal_id, stars ) 
VALUES             (2, 'Omg!', 'I still dream green!', 3, 9); 
INSERT INTO review (id, title, description, meal_id, stars ) 
VALUES             (3, 'Wooohoo!', 'I feel like a frog!', 3, 11); 
INSERT INTO review (id, title, description, meal_id, stars ) 
VALUES             (4, 'Wow!', 'Green peace :-)!', 3, 9);  
INSERT INTO review (id, title, description, meal_id, stars ) 
VALUES             (5, 'Yuck!', 'They put pinapples on the pizza', 1, 1); 
INSERT INTO review (id, title, description, meal_id, stars ) 
VALUES             (6, 'Hmm!', 'They put pinapples on the pizza. Interesting', 1, 5); 
INSERT INTO review (id, title, description, meal_id, stars ) 
VALUES             (7, 'Gross', 'Pineapples and ketchup in hummus...', 2, 0); 
INSERT INTO review (id, title, description, meal_id, stars ) 
VALUES             (8, 'Yumm!', 'My Barbie doll loved it.', 4, 8); 
INSERT INTO review (id, title, description, meal_id, stars ) 
VALUES             (9, 'Good!', 'I\'m a fan. Thanks guys. -Ken, Miami', 4, 9); 
SELECT * FROM review; 
