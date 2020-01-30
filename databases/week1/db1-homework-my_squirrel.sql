-- Hello My_SQuirreLs, here is my homework ---> databases-1 (a.k.a. week 15) ---> Magda /HYF#12

USE hyf_db_1;   -- all the comments/questions will be removed once resolved :) 
SELECT * FROM status; 
SELECT * FROM task;  --  jest powiązany z tabelą status przez status_id i z tabelą user przez user_id
SELECT * FROM user;   

-- 01 -- Find out how many tasks are in the task table: 
SELECT count(id) AS `number_of_tasks_in_task_table`   -- backticks work with column aliases but not the values!!!
FROM task;
-- Question: Is the alias too long? Or should I leave it as descriptive as possible?
-- Question: Would count(*) be too redundant? 

-- 02 -- Find out how many tasks in the task table do not have a valid due date: 
SELECT count(id) AS `tasks_in_task_table_without_valid_due_date`  
FROM task 
WHERE due_date IS NULL;  

-- 03 -- Find all the tasks that are marked as done: 
SELECT task.*, status.name
FROM task INNER JOIN status 
ON task.status_id = status.id 
WHERE status.name = 'Done';  -- [LIKE] equals [=] 
-- or --
SELECT task.*, status.id
FROM task INNER JOIN status 
ON task.status_id = status.id 
WHERE status.id = 3; 
-- or -- 
SELECT * 
FROM task INNER JOIN status 
ON task.status_id = status.id
WHERE status.name = 'Done';

-- 04 -- Find all the tasks that are not marked as done   
SELECT task.*, status.name
FROM task INNER JOIN status 
ON task.status_id = status.id 
WHERE status.name NOT LIKE 'Done';  -- [NOT LIKE] equals [!=] 
-- or --
SELECT task.*, status.id
FROM task INNER JOIN status 
ON task.status_id = status.id 
WHERE status.id NOT LIKE 3; 
-- or -- 
SELECT * 
FROM task INNER JOIN status 
ON task.status_id = status.id
WHERE status.name NOT LIKE 'Done';

-- 05 -- Get all the tasks, sorted with the most recently created first
SELECT id, title AS `tasks_sorted_created_desc`, created 
FROM task 
ORDER BY created DESC; 

-- 06 -- Get the single most recently created task 
SELECT id, title AS `tasks_sorted_created_desc`, created 
FROM task 
ORDER BY created DESC 
limit 1; 

-- 07 -- Get the title and due date of all tasks where the title or description contains database 
SELECT title, due_date 
FROM task 
WHERE title LIKE '%database%' OR description LIKE '%database%';

-- 08 Get the title and status (as text = not integer!!!) of all tasks  
SELECT task.title, status.name AS `status_as_text`  -- , status.id AS `status_as_integer`  
FROM task INNER JOIN status 
ON task.status_id = status.id;

-- 09 Get the name of each status, along with a count of how many tasks have that status 
SELECT name, 
count(name) as `number_of_each_status_by_name`
FROM task INNER JOIN status 
ON task.status_id = status.id 
GROUP BY name;

-- 10 Get the names of all statuses, sorted by the status with most tasks first 
SELECT name, 
count(name) as `number_of_each_status_by_name`
FROM task INNER JOIN status 
ON task.status_id = status.id 
GROUP BY name 
ORDER BY count(*) DESC; 
