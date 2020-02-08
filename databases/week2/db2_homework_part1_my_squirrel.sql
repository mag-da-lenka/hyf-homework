-- Part 1: Working with tasks --  Write the following sql queries:

USE db2_for_homework2_part1; 
SELECT * FROM task;  

-- 1.1 Add a task with these attributes: title, description, created, updated, due_date, status_id, user_id 
INSERT INTO task (title,             description,                                   created,       updated,     due_date,      status_id, user_id) 
VALUES           ('GO SWIMMIMNG!', 'Swimming is and activity performed in water.', '2020-02-06', '2020-02-07', '2020-02-07',   2,         4);

-- 1.2 Change the title of a task  
UPDATE task 
SET title = 'Walk the CAT, yaaay!' 
WHERE id = 8;  
SELECT * FROM task WHERE id = 8;  -- you're welcome :>

-- 1.3 Change a task due date 
UPDATE task 
SET due_date = '2020-02-20 20:20:02' 
WHERE id = 8; 
SELECT * FROM task WHERE id = 8;  

-- 1.4 Change a task status 
UPDATE task 
SET status_id = 2 
WHERE id = 8;  
SELECT * FROM task WHERE id = 8;  

-- 1.5 Mark a task as complete 
UPDATE task 
SET status_id = 3 
WHERE id = 8;  
SELECT * FROM task WHERE id = 8;  

-- 1.6 Delete a task  
SELECT * FROM task WHERE id = 11;  -- I hate ironing
DELETE from task
WHERE id = 11;     
SELECT * FROM task WHERE id =11;   -- gone!

-- In all the above queries, you choose which is the task that you will modify/delete.