create table users(
    user_id serial primary key,
    password varchar(20),
    username varchar(20)
);

create table post(
post_id serial primary key,
title varchar(50),
body varchar(500),
image_url TEXT,
user_id int REFERENCES users(user_id),
username varchar(20)
)