select * from post
where body ilike '%' + $1 + '%';