---
title: "1653-minimum-deletions-to-make-string-balanced"
pubDatetime: 2023-03-06T12:30:00+08:00
description: ""
type: "post"
categories:
  - "leetcode"
  - "rust"
tags:
  - "leetcode"
  - "rust"
---

1653 https://leetcode.cn/problems/minimum-deletions-to-make-string-balanced/

```rust
struct Solution {}

impl Solution {
  pub fn minimum_deletions(s: String) -> i32 {
    let mut a_cnt: Vec<i32> = vec![0; s.len()];
    let mut b_cnt: Vec<i32> = vec![0; s.len()];

    let mut cnt: i32 = 0;
    (0..s.len()).for_each(|idx| {
      if s.as_bytes()[idx] == 'b' as u8 {
        cnt += 1;
      }
      a_cnt[idx] = cnt;
    });
    cnt = 0;
    (0..s.len()).rev().for_each(|idx| {
      if s.as_bytes()[idx] == 'a' as u8 {
        cnt += 1;
      }
      b_cnt[idx] = cnt;
    });

    a_cnt
      .iter()
      .zip(b_cnt.iter())
      .map(|(a, b)| a + b - 1)
      .min()
      .unwrap()
  }
}
```
