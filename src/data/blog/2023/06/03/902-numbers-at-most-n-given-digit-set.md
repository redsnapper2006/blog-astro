---
title: "902-numbers-at-most-n-given-digit-set"
pubDatetime: 2023-06-03T22:17:00+08:00
description: ""
type: "post"
categories:
  - "leetcode"
  - "rust"
  - "math"
tags:
  - "leetcode"
  - "rust"
  - "math"
---

902 https://leetcode.cn/problems/numbers-at-most-n-given-digit-set/

> Math

```rust
struct Solution {}

impl Solution {
  pub fn at_most_n_given_digit_set(digits: Vec<String>, n: i32) -> i32 {
    let base: Vec<i32> = digits
      .iter()
      .map(|v| v.parse().unwrap())
      .collect::<Vec<i32>>();

    let mut nn = n;
    let mut nums: Vec<i32> = Vec::new();
    while nn > 0 {
      nums.push(nn % 10);
      nn /= 10;
    }

    let mut factor: Vec<i32> = Vec::new();
    let mut t: i32 = base.len() as i32;
    (0..nums.len()).for_each(|_| {
      factor.push(t);
      t *= base.len() as i32;
    });

    let mut res: i32 = 0;
    (0..nums.len() - 1).for_each(|idx| {
      res += factor[idx];
    });

    let mut idx: i32 = nums.len() as i32 - 1;
    while idx >= 0 {
      let b = nums[idx as usize];
      let mut b_idx: i32 = base.len() as i32 - 1;
      while b_idx >= 0 {
        if base[b_idx as usize] <= b {
          break;
        }
        b_idx -= 1;
      }
      if b_idx < 0 {
        break;
      }
      let mut ff: i32 = 1;
      if idx > 0 {
        ff = factor[idx as usize - 1];
      }
      if base[b_idx as usize] == b && idx > 0 {
        res += b_idx * ff;
      } else {
        res += (b_idx + 1) * ff;
      }
      if base[b_idx as usize] != b {
        break;
      }
      idx -= 1;
    }

    res
  }
}

```
