---
title: "2356-number-of-unique-subjects-taught-by-each-teacher"
pubDatetime: 2023-04-06T19:25:00+08:00
description: ""
type: "post"
categories:
  - "leetcode"
  - "sql"
tags:
  - "leetcode"
  - "sql"
---

2356 https://leetcode.cn/problems/number-of-unique-subjects-taught-by-each-teacher/

```sql
SELECT t.teacher_id, COUNT(DISTINCT t.subject_id) AS cnt
FROM Teacher t
GROUP BY t.teacher_id
```
