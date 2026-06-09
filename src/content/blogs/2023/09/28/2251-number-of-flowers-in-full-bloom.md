---
title: "2251-number-of-flowers-in-full-bloom"
pubDatetime: 2023-09-28T14:14:00+08:00
description: ""
tags:
  - "leetcode"
  - "rust"
  - "diffarray"
---

2251 https://leetcode.cn/problems/number-of-flowers-in-full-bloom/

> 查分数组

```rust
struct Solution {}

impl Solution {
  pub fn full_bloom_flowers(flowers: Vec<Vec<i32>>, people: Vec<i32>) -> Vec<i32> {
    let mut buf: Vec<i32> = Vec::new();
    flowers.iter().for_each(|flower| {
      buf.push(flower[0]);
      buf.push(flower[1] + 1);
    });
    buf.sort();
    buf.dedup();

    let mut aggr: Vec<i32> = vec![0; buf.len()];
    flowers.iter().for_each(|flower| {
      let offset1 = buf.binary_search(&flower[0]).unwrap();
      let offset2 = buf.binary_search(&(flower[1] + 1)).unwrap();
      aggr[offset1] += 1;
      aggr[offset2] -= 1;
    });

    let mut sum: i32 = 0;
    (0..buf.len()).for_each(|i| {
      sum += aggr[i];
      aggr[i] = sum;
    });

    people
      .iter()
      .map(|person| {
        match buf.binary_search(person) {
          Ok(offset) => aggr[offset],
          Err(offset) => match offset {
            0 => 0,
            _ => aggr[offset - 1],
          },
        }
      })
      .collect()
  }
}
```
