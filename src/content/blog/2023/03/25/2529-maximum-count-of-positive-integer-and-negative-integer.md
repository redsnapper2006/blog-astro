---
title: "2529-maximum-count-of-positive-integer-and-negative-integer"
pubDatetime: 2023-03-25T16:50:00+08:00
description: ""
type: "post"
categories:
  - "leetcode"
  - "rust"
tags:
  - "leetcode"
  - "rust"
---

2529 https://leetcode.cn/problems/maximum-count-of-positive-integer-and-negative-integer/

```rust
struct Solutioin {}

impl Solution {
  pub fn maximum_count(nums: Vec<i32>) -> i32 {
    let (p, n): (i32, i32) = nums.iter().fold((0, 0), |(p, n), &v| {
      if v > 0 {
        (p + 1, n)
      } else if v < 0 {
        (p, n + 1)
      } else {
        (p, n)
      }
    });
    p.max(n)
  }
}

```
