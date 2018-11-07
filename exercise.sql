SELECT DATE_FORMAT(MIN(created_at), '%M %D %Y') as earlist_date FROM users;

SELECT * FROM users WHERE created_at = (SELECT MIN(created_at) from users);

SELECT DATE_FORMAT(created_at, '%M') as month, COUNT(email) as count FROM  users GROUP BY month ORDER BY count DESC;

SELECT COUNT(*) FROM users WHERE email LIKE '%@yahoo.com%';
SELECT 
    CASE
       WHEN email LIKE '%@yahoo.com' THEN 'yahoo'
       WHEN email LIKE '%@gmail.com' THEN 'gmail'
       WHEN email LIKE '%@hotmail.com' THEN 'hotmail'
       ELSE 'other'
    END as provider,
    COUNT(*) as total_users
    FROM users
    GROUP BY provider;
    