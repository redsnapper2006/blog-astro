---
title: "2379-minimum-recolors-to-get-k-consecutive-black-blocks"
pubDatetime: 2023-02-05T15:57:00+08:00
description: ""
type: "post"
categories:
  - "leetcode"
  - "rust"
tags:
  - "leetcode"
  - "rust"
---

2379 https://leetcode.cn/problems/minimum-recolors-to-get-k-consecutive-black-blocks/

```rust
struct Solution {}

impl Solution {
  pub fn minimum_recolors(blocks: String, k: i32) -> i32 {
    let mut w_count: i32 = 0;
    (0..k).for_each(|idx| {
      if blocks.as_bytes()[idx as usize] == 'W' as u8 {
        w_count += 1;
      }
    });

    let mut ret = w_count;
    (k..blocks.len() as i32).for_each(|idx| {
      if blocks.as_bytes()[(idx - k) as usize] == 'W' as u8 {
        w_count -= 1;
      }
      if blocks.as_bytes()[idx as usize] == 'W' as u8 {
        w_count += 1;
      }
      if ret > w_count {
        ret = w_count;
      }
    });
    ret
  }
}
```
