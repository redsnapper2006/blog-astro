---
title: "446-arithmetic-slices-ii-subsequence"
pubDatetime: 2024-01-09T13:40:00+08:00
description: ""
tags:
  - "leetcode"
  - "rust"
  - "dp"
---

446 <https://leetcode.cn/problems/arithmetic-slices-ii-subsequence/>

> DP

```rust
struct Solution {}

use std::collections::HashMap;
impl Solution {
  pub fn number_of_arithmetic_slices(nums: Vec<i32>) -> i32 {
    let mut res: i32 = 0;
    let mut diff_vec: Vec<i64> = Vec::new();
    let mut diff_vec_map: Vec<HashMap<i64, i32>> = Vec::new();
    diff_vec_map.push(HashMap::new());
    (1..nums.len()).for_each(|idx| {
      let d = nums[idx] as i64 - nums[idx - 1] as i64;
      (0..diff_vec.len()).for_each(|i| {
        diff_vec[i] += d;
      });
      diff_vec.push(d);
      let mut m: HashMap<i64, i32> = HashMap::new();
      (0..diff_vec.len()).for_each(|i| {
        let v = diff_vec[i];
        let c = diff_vec_map[i].entry(v).or_insert(0);
        *m.entry(v).or_insert(0) += *c + 1;
        res += *c;
      });
      diff_vec_map.push(m);
    });

    res
  }
}
```
