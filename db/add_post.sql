insert into post(
    title,
    body,
    image_url,
    user_id,
    username
)values(
    $1,
    $2,
    $3,
    $4,
    $5
);
select * from post;