---
title: "1029-two-city-scheduling"
pubDatetime: 2023-01-15T15:05:00+08:00
description: ""
type: "post"
categories:
  - "leetcode"
  - "rust"
tags:
  - "leetcode"
  - "rust"
---

1029 https://leetcode.cn/problems/two-city-scheduling/

贪心算法

```
struct Solution {}

impl Solution {
  pub fn two_city_sched_cost(costs: Vec<Vec<i32>>) -> i32 {
    let mut a_sum = costs.iter().fold(0, |acc, v| acc + v[0]);
    let mut diff: Vec<i32> = costs.iter().map(|v| v[1] - v[0]).collect();
    diff.sort();
    diff.resize(costs.len() / 2, 0);

    a_sum + diff.iter().fold(0, |acc, x| acc + x)
  }
}


```
