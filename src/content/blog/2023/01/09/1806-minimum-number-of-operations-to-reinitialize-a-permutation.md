---
title: "1806-minimum-number-of-operations-to-reinitialize-a-permutation"
pubDatetime: 2023-01-09T13:23:00+08:00
description: ""
type: "post"
categories:
  - "leetcode"
  - "rust"
tags:
  - "leetcode"
  - "rust"
---

1806 https://leetcode.cn/problems/minimum-number-of-operations-to-reinitialize-a-permutation/

内循环+闭环

```
struct Solution {}

impl Solution {
  pub fn reinitialize_permutation(n: i32) -> i32 {
    let mut m: i32 = n / 2 + (1 - 1) / 2;
    let mut steps: i32 = 1;
    while m != 1 {
      if m % 2 == 0 {
        m = m / 2;
      } else {
        m = n / 2 + (m - 1) / 2;
      }
      steps+=1;
    }
    steps
  }
}
```
