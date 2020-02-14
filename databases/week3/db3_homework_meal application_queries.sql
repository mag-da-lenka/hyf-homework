-- Part 4: Meal application - queries
-- https://github.com/HackYourFuture-CPH/databases/blob/class12_hw_adapted/lesson2/README.md#part-4-meal-application 
-- https://www.mealsharing.com/ -- https://dbdiagram.io/d/5d5bff66ced98361d6ddc18c

USE db3_homework_meal_application;


-- TEST QUERIES 

SELECT * FROM meal; SELECT * FROM reservation; SELECT * FROM review; 

SELECT * FROM 
reservation JOIN meal   on reservation.meal_id = meal.id
			JOIN review on review.meal_id      = meal.id; 
SELECT
meal.id AS `MEAL_id`, meal.title AS `MEAL_title`, meal.description AS `MEAL_description`, meal.location AS `MEAL_location`, meal.when AS `MEAL_when`, meal.max_reservations AS `MEAL_max_reservations`, meal.price AS `MEAL_price`, meal.created_date as `MEAL_created_date`,
reservation.id AS `RESERVATION_id`, reservation.number_of_guests AS `RESERVATION_number_of_guests`, reservation.meal_id AS `RESERVATION_meal_id`, reservation.created_date AS `RESERVATION_created_date`,  
review.id AS `REVIEW_id`, review.title AS `REVIEW_title`, review.description AS `REVIEW_description`, review.meal_id AS `REVIEW_meal_id`, review.stars AS `REVIEW_stars`
FROM 
reservation JOIN meal   on reservation.meal_id = meal.id
			JOIN review on review.meal_id      = meal.id;


-- MEAL --

-- Get all meals 
SELECT * FROM meal;

-- Add a new meal 
INSERT INTO meal (id, title, description, location, `when`, max_reservations,  price,      created_date ) 
VALUES           (5,  'Blue Salad', 'blue tit feathers, blueberry juice and curaçao.', 'Cph Navy Street',  '2020-06-12 20:00:00',  60,  000110.31, '2020-02-05 08:29:01');  

-- Get a meal with any id, fx 1 
SELECT * FROM meal WHERE meal.id = 4; 

-- Update a meal with any id, fx 1. Update any attribute fx the title or multiple attributes 
UPDATE meal 
SET location = 'Christiania' 
WHERE id = 3;  
SELECT * FROM meal WHERE id = 3; 
--
UPDATE meal 
SET description = 'Green beans, grass, asparagus, avocado and absinthe.'
WHERE id = 3;  
SELECT * FROM meal WHERE id = 3; 
--
UPDATE meal 
SET max_reservations = 271
WHERE id = 3;  
SELECT * FROM meal WHERE id = 3; 
--
UPDATE meal 
SET max_reservations = 249
WHERE id = 3;  
SELECT * FROM meal WHERE id = 3; 

-- Delete a meal with any id, fx 1 
SELECT * FROM meal WHERE id = 1;
DELETE from meal
WHERE id = 1;     
SELECT * FROM meal WHERE id = 1;   -- gone!   


-- RESERVATION -- 

-- Get all reservations 
SELECT * FROM reservation;

-- Add a new reservation 
INSERT INTO reservation (id, number_of_guests, meal_id, created_date ) 
VALUES                  (7,  230,               3,       '2020-03-01 07:03:00');

-- Get a reservation with any id, fx 1 
SELECT * FROM reservation WHERE reservation.id =3; 

-- Update a reservation with any id, fx 1. Update any attribute fx the title or multiple attributes
UPDATE reservation 
SET number_of_guests = 250
WHERE id = 7;  
SELECT * FROM reservation WHERE id = 7; 
-- 
UPDATE reservation 
SET number_of_guests = 17
WHERE id = 1;  
SELECT * FROM reservation WHERE id = 1; 
--
UPDATE reservation 
SET number_of_guests = 110
WHERE id = 7;  
SELECT * FROM reservation WHERE id = 7; 

-- Delete a reservation with any id, fx 1 
DELETE from reservation
WHERE id = 2;     
SELECT * FROM reservation WHERE id = 2;   -- gone! 

-- REVIEW -- 

-- Get all reviews 
SELECT * FROM review; 

-- Add a new review 
INSERT INTO review (id, title, description, meal_id, stars ) 
VALUES             (10, 'Lovely!', 'I\'m very pleased. -Hannibal F.', 4, 8); 

-- Get a review with any id, fx 1 
SELECT * FROM review WHERE id = 10;   

-- Update a review with any id, fx 1. Update any attribute fx the title or multiple attributes 
UPDATE review 
SET description = 'Hannibal Flamingsen'
WHERE id = 10;  
SELECT * FROM review WHERE id = 10;

-- Delete a review with any id, fx 1 
DELETE from review
WHERE id = 4;     
SELECT * FROM review WHERE id = 4;   -- gone!  

-- ADDITIONAL QUERIES -- 

-- Get meals that has a price smaller than a specific price fx 90 
SELECT meal.id AS `MEAL_id`, meal.title AS `MEAL_title`, meal.price AS `MEAL_price` 
FROM meal
WHERE meal.price < 200; 




-- Get meals that still has available reservations 
SELECT
meal.title AS `MEAL_title`, meal.max_reservations AS `MEAL_max_reservations`, 
reservation.number_of_guests AS `RESERVATION_number_of_guests`
FROM 
reservation JOIN meal ON reservation.meal_id = meal.id
where reservation.number_of_guests < meal.max_reservations;
-- vs 
SELECT
meal.title AS `MEAL_title`, meal.max_reservations AS `MEAL_max_reservations`, 
reservation.number_of_guests AS `RESERVATION_number_of_guests`
FROM 
reservation JOIN meal ON reservation.meal_id = meal.id; 
--
SELECT
meal.title AS `MEAL_title`, meal.max_reservations AS `MEAL_max_reservations`, 
reservation.number_of_guests AS `RESERVATION_number_of_guests`
FROM 
reservation JOIN meal ON reservation.meal_id = meal.id 
ORDER BY meal.title;
-- -------- final version!!! 
SELECT 
meal.title                                                AS `MEAL_title`, 
meal.max_reservations                                     AS `MEAL_max_reservations`, 
SUM(reservation.number_of_guests)                         AS `number_of_reservations_so_far`, 
meal.max_reservations - SUM(reservation.number_of_guests) AS `number_of_available_spots`
FROM         reservation JOIN meal ON reservation.meal_id = meal.id
GROUP BY     meal.id
HAVING       SUM(reservation.number_of_guests) < meal.max_reservations; 


-- Get meals that partially match a title. Rød grød med will match the meal with the title Rød grød med fløde 
SELECT meal.id AS `MEAL_id`, meal.title AS `MEAL_title`, meal.price AS `MEAL_price` 
FROM meal 
WHERE title LIKE '%salad%';

-- Get meals that has been created between two dates 
SELECT * FROM meal;
SELECT * FROM meal WHERE day(created_date) BETWEEN 1 AND 10 AND month(created_date) BETWEEN 1 AND 10; -- this will show the result 
SELECT * FROM meal WHERE day(created_date) BETWEEN 1 AND 10 AND month(created_date) BETWEEN 9 AND 10; -- this will show NULL because all the meals were created in February

-- Get only specific number of meals fx return only 5 meals 
SELECT * FROM meal LIMIT 2;
SELECT * FROM meal LIMIT 3;

-- Get the meals that have good reviews  
SELECT meal.title AS `MEAL_title`,  review.stars AS `REVIEW_stars`
FROM 
reservation JOIN meal   on reservation.meal_id = meal.id
			JOIN review on review.meal_id      = meal.id
WHERE review.stars > 7;

-- Get reservations for a specific meal sorted by created_date 
SELECT
meal.title AS `MEAL_title`, meal.description AS `MEAL_description`, meal.created_date as `MEAL_created_date`,
reservation.created_date AS `RESERVATION_created_date`
FROM 
reservation JOIN meal   on reservation.meal_id = meal.id
			JOIN review on review.meal_id      = meal.id 
ORDER BY meal.created_date; 
-- or 
SELECT
meal.title AS `MEAL_title`, meal.description AS `MEAL_description`, meal.created_date as `MEAL_created_date`,
reservation.created_date AS `RESERVATION_created_date`
FROM 
reservation JOIN meal   on reservation.meal_id = meal.id
			JOIN review on review.meal_id      = meal.id 
ORDER BY reservation.created_date;


-- Sort all meals by average number of stars in the reviews 
SELECT
meal.title AS `MEAL_title`, meal.description AS `MEAL_description`, meal.created_date as `MEAL_created_date`, 
review.stars AS `REVIEW_stars`
FROM 
reservation JOIN meal   on reservation.meal_id = meal.id
			JOIN review on review.meal_id      = meal.id
-- GROUP BY review.stars
ORDER BY review.stars; -- ??????????????????????????????????????????
--
SELECT
meal.title AS `MEAL_title`, meal.description AS `MEAL_description`, meal.created_date as `MEAL_created_date`, 
review.stars AS `REVIEW_stars`
FROM 
reservation JOIN meal   on reservation.meal_id = meal.id
			JOIN review on review.meal_id      = meal.id
GROUP BY review.stars  -- ???????????????????????????????????????????
-- ORDER BY review.stars
; 
--
SELECT 
meal.title AS `MEAL_title`, meal.description AS `MEAL_description`, meal.created_date as `MEAL_created_date`, avg(review.stars) AS `REVIEW_stars_avg`
FROM 
reservation JOIN meal   on reservation.meal_id = meal.id
			JOIN review on review.meal_id      = meal.id
GROUP BY meal.id
ORDER BY review.stars;  -- corrected!!!
