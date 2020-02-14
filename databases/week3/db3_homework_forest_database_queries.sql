USE db3_homework_forest_database_schema; 

SELECT * FROM squirrels; 
SELECT * FROM tasks;
SELECT * FROM tags; 
SELECT * FROM squirrels_tasks;
SELECT * FROM tasks_tags;  

SELECT * FROM      squirrels JOIN squirrels_tasks   ON squirrels.id               =  squirrels_tasks.squirrel_id 
							 JOIN tasks             ON squirrels_tasks.task_id    =  tasks.id 
                             JOIN tasks_tags        ON tasks_tags.task_id         =  tasks.id 
                             JOIN tags              ON tasks_tags.tag_id          =  tags.id;

SELECT 
squirrels.id AS `SQUIRRELS_id`, squirrels.name AS `SQUIRRELS_name`, squirrels.fur_type AS `SQUIRRELS_fur_type`, squirrels.email AS `SQUIRRELS_email`, 
tasks.id AS `TASKS_id`, tasks.title AS `TASKS_title`, tasks.description AS `TASKS_description`, tasks.created AS `TASKS_created`, tasks.starts AS `TASKS_starts`, tasks.ends AS `TASKS_ends`, 
tags.id AS TAGS_id, tags.name AS TAGS_name 
FROM               squirrels JOIN squirrels_tasks   ON squirrels.id               =  squirrels_tasks.squirrel_id 
							 JOIN tasks             ON squirrels_tasks.task_id    =  tasks.id 
                             JOIN tasks_tags        ON tasks_tags.task_id         =  tasks.id 
                             JOIN tags              ON tasks_tags.tag_id          =  tags.id
ORDER BY squirrels.id; 

SELECT 
squirrels.id AS `SQUIRRELS_id`, squirrels.name AS `SQUIRRELS_name`, squirrels.fur_type AS `SQUIRRELS_fur_type`, squirrels.email AS `SQUIRRELS_email`, 
tasks.id AS `TASKS_id`, tasks.title AS `TASKS_title`, tasks.description AS `TASKS_description`, tasks.created AS `TASKS_created`, tasks.starts AS `TASKS_starts`, tasks.ends AS `TASKS_ends`, 
tags.id AS TAGS_id, tags.name AS TAGS_name 
FROM               squirrels JOIN squirrels_tasks   ON squirrels.id               =  squirrels_tasks.squirrel_id 
							 JOIN tasks             ON squirrels_tasks.task_id    =  tasks.id 
                             JOIN tasks_tags        ON tasks_tags.task_id         =  tasks.id 
                             JOIN tags              ON tasks_tags.tag_id          =  tags.id
ORDER BY tasks.id; 

SELECT 
squirrels.id AS `SQUIRRELS_id`, squirrels.name AS `SQUIRRELS_name`, squirrels.fur_type AS `SQUIRRELS_fur_type`, squirrels.email AS `SQUIRRELS_email`, 
tasks.id AS `TASKS_id`, tasks.title AS `TASKS_title`, tasks.description AS `TASKS_description`, tasks.created AS `TASKS_created`, tasks.starts AS `TASKS_starts`, tasks.ends AS `TASKS_ends`, 
tags.id AS TAGS_id, tags.name AS TAGS_name 
FROM               squirrels JOIN squirrels_tasks   ON squirrels.id               =  squirrels_tasks.squirrel_id 
							 JOIN tasks             ON squirrels_tasks.task_id    =  tasks.id 
                             JOIN tasks_tags        ON tasks_tags.task_id         =  tasks.id 
                             JOIN tags              ON tasks_tags.tag_id          =  tags.id
ORDER BY tags.id;
                             
