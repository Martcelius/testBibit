
-- query for get data username and parent userName
SELECT a.id, a.username AS UserName, b.username AS ParentUserName
FROM test_db.bibit a 
LEFT JOIN test_db.bibit b
ON b.id = a.parent;


-- sample output
--| ID | UserName | ParentUserName |
--——————————————————————————————————
--| 1  | Ali      |     Budi       |
--| 2  | Budi     |     NULL       |
--| 3  | Cecep    |     Ali        |