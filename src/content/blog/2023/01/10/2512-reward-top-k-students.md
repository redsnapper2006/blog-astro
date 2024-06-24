---
title: "2512-reward-top-k-students"
pubDatetime: 2023-01-10T13:07:00+08:00
description: ""
type: "post"
categories:
  - "leetcode"
  - "rust"
tags:
  - "leetcode"
  - "rust"
---

2512 https://leetcode.cn/problems/reward-top-k-students

哈希+自定义排序

```
struct Solution {}

use std::collections::HashMap;
impl Solution {
  pub fn top_students(
    positive_feedback: Vec<String>,
    negative_feedback: Vec<String>,
    report: Vec<String>,
    student_id: Vec<i32>,
    k: i32,
  ) -> Vec<i32> {
    let mut buf: Vec<(i32, i32)> = Vec::new();
    let mut score_map: HashMap<String, i32> = HashMap::new();
    for p in positive_feedback {
      score_map.insert(p, 3);
    }
    for n in negative_feedback {
      score_map.insert(n, -1);
    }
    for (i, r) in report.iter().enumerate() {
      let mut score: i32 = 0;
      for w in r.split(' ').collect::<Vec<&str>>() {
        let mut s = score_map.entry(w.to_string()).or_insert(0);
        score += *s;
      }
      buf.push((student_id[i], score));
    }
    buf.sort_by(|a, b| {
      if a.1 != b.1 {
        return b.1.cmp(&a.1);
      }
      a.0.cmp(&b.0)
    });
    buf.resize(k as usize, (-1, -1));
    buf.iter().map(|v| v.0).collect::<Vec<i32>>()
  }
}
```

1. 此题难度等级为中等。
1. 知识点：哈希+自定义排序。
1. 把 positive 和 negative 的 keyword 放到 hashmap，并且赋予对应分+3 和-1。
1. 循环数组处理每个 report。
1. 按照空格分割 report，循环每个 word，在 hashmap 存在的话，累加对应的分值。不存在，则 skip。
1. 自定义排序。

   1. 按照得分降序。

   1. 按照 id 升序。

1. 取排序后前 k 个。

1. 返回 id。
