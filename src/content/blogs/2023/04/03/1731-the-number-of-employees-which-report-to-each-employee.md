---
title: "1731-the-number-of-employees-which-report-to-each-employee"
pubDatetime: 2023-04-03T13:26:00+08:00
description: ""
type: "post"
categories:
  - "leetcode"
  - "sql"
tags:
  - "leetcode"
  - "sql"
---

1731 https://leetcode.cn/problems/the-number-of-employees-which-report-to-each-employee/

```sql
SELECT
  p.employee_id,
  p.name,
  t.reports_count,
  t.average_age
FROM Employees p
JOIN (
  SELECT
    reports_to,
    round(AVG(age)) as average_age,
    COUNT(*) as reports_count
  FROM Employees
  GROUP BY reports_to
) t ON p.employee_id = t.reports_to
order by p.employee_id

```
