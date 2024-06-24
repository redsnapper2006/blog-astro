---
title: "1250-check-if-it-is-a-good-array"
pubDatetime: 2023-02-15T22:14:00+08:00
description: ""
type: "post"
categories:
  - "leetcode"
  - "rust"
tags:
  - "leetcode"
  - "rust"
---

1250 https://leetcode.cn/problems/check-if-it-is-a-good-array/

> 裴蜀定理

```rust
struct Solution {}

impl Solution {
  pub fn is_good_array(nums: Vec<i32>) -> bool {
    if nums.len() == 1 {
      return nums[0] == 1;
    }

    fn gcd(x: i32, y: i32) -> i32 {
      let mut n1 = x;
      let mut n2 = y;
      if (x < y) {
        n1 = y;
        n2 = x;
      }

      let mut rem = n1 % n2;
      while (rem != 0) {
        n1 = n2;
        n2 = rem;
        rem = n1 % n2;
      }
      n2
    }

    let mut g: i32 = gcd(nums[0], nums[1]);
    (2..nums.len()).for_each(|idx| {
      g = gcd(g, nums[idx]);
    });
    g == 1
  }
}
```
