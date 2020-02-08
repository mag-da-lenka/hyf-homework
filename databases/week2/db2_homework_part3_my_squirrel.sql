-- Part 3: More queries -- You should do these queries on the database hyf_lesson2, which we created last class. You can find the data here if you need to create the DB again. 
USE db2_for_homework2_part3;  

-- 3.0 TEST/REFERENCE  ---> btw are my queries pedantic? :D 
select * 
FROM user JOIN user_task   ON user.id               =  user_task.user_id
          JOIN task        ON user_task.task_id     =  task.id 
          JOIN status      ON task.status_id        =  status.id;

-- 3.1 Get all the tasks assigned to users whose email ends in @spotify.com 
SELECT user.email AS USER_email, task.id AS TASK_id, task.title AS TASK_title, task.description AS TASK_description 
FROM user JOIN user_task   ON user.id               =  user_task.user_id
          JOIN task        ON user_task.task_id     =  task.id 
--        JOIN status      ON task.status_id        =  status.id 
WHERE user.email LIKE "%spotify.com";

-- 3.2 Get all the tasks for 'Donald Duck' with status 'Not started' 
SELECT user.name AS USER_name, task.id AS TASK_id, task.title AS TASK_title, task.description AS TASK_description, status.name AS STATUS_name 
FROM user JOIN user_task   ON user.id               =  user_task.user_id
          JOIN task        ON user_task.task_id     =  task.id 
          JOIN status      ON task.status_id        =  status.id 
WHERE user.name = "Donald Duck" AND status.name = "Not started";

-- 3.3 Get all the tasks for 'Maryrose Meadows' that were created in september (hint: month(created)=month_number) 
SELECT user.name AS USER_name, task.id AS TASK_id, task.title AS TASK_title, task.description AS TASK_description, task.created AS TASK_created_in_sept 
FROM user JOIN user_task   ON user.id               =  user_task.user_id
          JOIN task        ON user_task.task_id     =  task.id 
--        JOIN status      ON task.status_id        =  status.id 
WHERE user.name = "Maryrose Meadows" AND month(created) = 9; 

-- 3.4 Find how many tasks where created in each month, e.g. how many tasks were created in october, how many tasks were created in november, etc. (hint: use group by) 
SELECT count(task.id) AS TASK_id_count, monthname(created) AS TASK_created
FROM task
GROUP BY monthname(created)
ORDER BY monthname(created) desc; 
