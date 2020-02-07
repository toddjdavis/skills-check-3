select * from post
join users on post.user_id = users.user_id
where title ilike '%' ||$1 || '%';