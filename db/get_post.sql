select * from post
join users on post.user_id = users.user_id
where post_id = $1;