CREATE DATABASE db3_homework_forest_database_schema;  
USE db3_homework_forest_database_schema; 
SET NAMES utf8mb4;

CREATE TABLE `squirrels` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `fur_type` varchar(255) NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE `tasks` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `title` varchar(255) NOT NULL,
  `description` text NULL DEFAULT NULL,
  `created` DATETIME NOT NULL,
  `starts` DATETIME NOT NULL,
  `ends` DATETIME NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE `tags` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `name` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE `squirrels_tasks` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `squirrel_id` int(10) unsigned NOT NULL,
  `task_id` int(10) unsigned NOT NULL,
  CONSTRAINT `fk_squirrel_id_to_SQUIRRELS_id` FOREIGN KEY (`squirrel_id`) REFERENCES   `squirrels` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `fk_task_id_to_TASKS_id`         FOREIGN KEY (`task_id`)     REFERENCES       `tasks` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci; 

CREATE TABLE `tasks_tags` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `task_id` int(10) unsigned NOT NULL,
  `tag_id` int(10) unsigned NOT NULL,
  CONSTRAINT `fk_task_id_to_TASKS_id2`       FOREIGN KEY (`task_id`)      REFERENCES     `tasks` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `fk_tag_id_to_TAGS_id`          FOREIGN KEY (`tag_id`)        REFERENCES      `tags` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci; 



-- SQUIRRELS
insert into squirrels (id, name, email, fur_type) values (1, 'afrouz',   'afrouz@cphforest.hyf',    'arctic silver');
insert into squirrels (id, name, email, fur_type) values (2, 'marta',    'marta@cphforest.hyf',     'arctic silver'); 
insert into squirrels (id, name, email, fur_type) values (3, 'babak',    'babak@cphforest.hyf',     'forrest grey'); 
insert into squirrels (id, name, email, fur_type) values (4, 'mohammed', 'mohammed@cphforest.hyf',  'ginger basic'); 
insert into squirrels (id, name, email, fur_type) values (5, 'magda',    'magda@cphforest.hyf',     'ginger basic'); 

-- TASKS
insert into tasks (id, title, description, created, starts, ends) values (1, 'eat nuts',        'get protein from hazelnuts',     '2020-08-01 08:00:00', '2020-09-01 08:00:00', '2020-10-31 22:00:00');
insert into tasks (id, title, description, created, starts, ends) values (2, 'eat cranberries', 'get vitamin C from cranberries', '2020-08-01 08:00:00', '2020-11-01 08:00:00', '2020-11-30 22:00:00');
insert into tasks (id, title, description, created, starts, ends) values (3, 'eat mushrooms',   'get special nutrients',          '2020-08-01 08:00:00', '2020-12-01 08:00:00', '2020-12-10 22:00:00');
insert into tasks (id, title, description, created, starts, ends) values (4, 'nap',             'get sleep in micro doses',       '2020-08-01 08:00:00', '2020-09-01 08:00:00', '2020-11-30 22:00:00');
insert into tasks (id, title, description, created, starts, ends) values (5, 'sleep',           'get sleep in normal doses',      '2020-08-01 08:00:00', '2020-11-30 22:00:01', '2020-12-01 07:59:59');
insert into tasks (id, title, description, created, starts, ends) values (6, 'hibernate',       'get ultra deep winter sleep',    '2020-08-01 08:00:00', '2020-12-10 22:00:01', '2021-03-10 07:59:59');
insert into tasks (id, title, description, created, starts, ends) values (7, 'sing "forest"',   'sing it like robert smith',      '2020-08-01 08:00:00', '2020-09-01 07:50:00', '2020-09-01 07:59:00');
insert into tasks (id, title, description, created, starts, ends) values (8, 'collect food',    'go freegan and pick berries',    '2020-08-01 08:00:00', '2020-09-01 12:00:01', '2020-11-30 20:00:00');
insert into tasks (id, title, description, created, starts, ends) values (9, 'buy food',        'trade with other creatures',     '2020-08-01 08:00:00', '2020-09-01 13:00:01', '2020-11-30 20:00:00');
insert into tasks (id, title, description, created, starts, ends) values (10, 'jump',           'jump up and down a tree',        '2020-08-01 08:00:00', '2021-03-10 08:00:00', '2021-03-10 08:04:59');

-- TAGS 
insert into tags (id, name) values (1, 'food');
insert into tags (id, name) values (2, 'sleep');
insert into tags (id, name) values (3, 'sport');
insert into tags (id, name) values (4, 'art');
insert into tags (id, name) values (5, 'pleasure');
insert into tags (id, name) values (6, 'supplies');

-- SQUIRRELS_TASKS
insert into squirrels_tasks (squirrel_id, task_id) values(1, 1); 
insert into squirrels_tasks (squirrel_id, task_id) values(1, 4); 
insert into squirrels_tasks (squirrel_id, task_id) values(1, 6); 
insert into squirrels_tasks (squirrel_id, task_id) values(2, 2); 
insert into squirrels_tasks (squirrel_id, task_id) values(3, 6); 
insert into squirrels_tasks (squirrel_id, task_id) values(4, 6); 
insert into squirrels_tasks (squirrel_id, task_id) values(5, 3);
insert into squirrels_tasks (squirrel_id, task_id) values(5, 6); 
insert into squirrels_tasks (squirrel_id, task_id) values(5, 9);   

-- TASKS_TAGS
insert into tasks_tags (task_id, tag_id) values(1, 1);
insert into tasks_tags (task_id, tag_id) values(2, 1);
insert into tasks_tags (task_id, tag_id) values(3, 1);
insert into tasks_tags (task_id, tag_id) values(3, 5);
insert into tasks_tags (task_id, tag_id) values(4, 2);
insert into tasks_tags (task_id, tag_id) values(5, 2);
insert into tasks_tags (task_id, tag_id) values(6, 2);
insert into tasks_tags (task_id, tag_id) values(7, 4);
insert into tasks_tags (task_id, tag_id) values(7, 5);
insert into tasks_tags (task_id, tag_id) values(8, 6);
insert into tasks_tags (task_id, tag_id) values(9, 6);
insert into tasks_tags (task_id, tag_id) values(10, 3);
