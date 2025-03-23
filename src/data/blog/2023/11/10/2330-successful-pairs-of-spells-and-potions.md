---
title: "2330-successful-pairs-of-spells-and-potions"
pubDatetime: 2023-11-10T10:49:00+08:00
description: ""
tags:
  - "leetcode"
  - "rust"
  - "binarysearch"
---

2300 https://leetcode.cn/problems/successful-pairs-of-spells-and-potions/

> 排序 + 二分查找

```rust
struct Solution {}

impl Solution {
  pub fn successful_pairs(spells: Vec<i32>, potions: Vec<i32>, success: i64) -> Vec<i32> {
    let mut potions = potions;
    potions.sort();

    spells
      .iter()
      .map(|&s| {
        let mut start: i32 = 0;
        let mut end: i32 = potions.len() as i32 - 1;

        while start <= end {
          let m = (start + (end - start) / 2) as usize;
          if (potions[m] as i64 * s as i64) < success {
            start = m as i32 + 1;
          } else {
            end = m as i32 - 1;
          }
        }
        potions.len() as i32 - start
      })
      .collect::<Vec<i32>>()
  }
}
```
