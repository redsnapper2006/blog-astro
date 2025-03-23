---
title: "1280-students-and-examinations"
pubDatetime: 2023-04-07T14:38:00+08:00
description: ""
type: "post"
categories:
  - "leetcode"
  - "sql"
tags:
  - "leetcode"
  - "sql"
---

1280 https://leetcode.cn/problems/students-and-examinations/

```sql
select s.student_id, s.student_name, ss.subject_name, ifnull(t.attended_exams,0) as attended_exams
FROM Students s
INNER JOIN Subjects ss
LEFT OUTER JOIN
(
Select e.student_id, e.subject_name, count(e.subject_name) as attended_exams
from Examinations e
group by e.student_id, e.subject_name
) t
ON s.student_id = t.student_id
and ss.subject_name = t.subject_name
order by s.student_id, ss.subject_name
```
