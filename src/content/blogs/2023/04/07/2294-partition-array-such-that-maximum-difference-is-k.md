---
title: "2294-partition-array-such-that-maximum-difference-is-k"
pubDatetime: 2023-04-07T13:03:00+08:00
description: ""
type: "post"
categories:
  - "leetcode"
  - "rust"
tags:
  - "leetcode"
  - "rust"
---

2294 https://leetcode.cn/problems/partition-array-such-that-maximum-difference-is-k/

```rust
struct Solution {}

impl Solution {
  pub fn partition_array(nums: Vec<i32>, k: i32) -> i32 {
    let mut m = nums;
    m.sort();

    let mut base: i32 = -1;
    let mut ret: i32 = 0;
    for v in nums {
      if v > base {
        base = v + k;
        ret += 1;
      }
    }

    ret
  }
}
```
