---
title: "1789-primary-department-for-each-employee"
pubDatetime: 2023-04-06T16:59:00+08:00
description: ""
type: "post"
categories:
  - "leetcode"
  - "sql"
tags:
  - "leetcode"
  - "sql"
---

1789 https://leetcode.cn/problems/primary-department-for-each-employee/

```sql
(
    SELECT t.employee_id, t.department_id
    FROM Employee t
    INNER JOIN (SELECT employee_id, department_id FROM Employee WHERE primary_flag='Y') s
        ON t.employee_id = s.employee_id AND t.department_id = s.department_id
)
UNION
(
    SELECT t.employee_id, t.department_id
    FROM Employee t
    INNER JOIN (SELECT employee_id, COUNT(*) AS CNT FROM Employee GROUP BY employee_id) s
        ON t.employee_id = s.employee_id AND s.CNT=1
)
```
