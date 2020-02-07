insert into post(
    title,
    body,
    image_url,
    user_id
)values(
    $1,
    $2,
    $3,
    $4
);
select * from post
join users on post.user_id = users.user_id;