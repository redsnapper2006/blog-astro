---
title: "2425-bitwise-xor-of-all-pairings"
pubDatetime: 2023-01-15T14:09:00+08:00
description: ""
type: "post"
categories:
  - "leetcode"
  - "rust"
tags:
  - "leetcode"
  - "rust"
---

2425 https://leetcode.cn/problems/bitwise-xor-of-all-pairings/

XOR运算

```
struct Solution {}

impl Solution {
  pub fn xor_all_nums(nums1: Vec<i32>, nums2: Vec<i32>) -> i32 {
    let x1 = nums1.iter().fold(0, |acc, x| acc ^ x);
    let x2 = nums2.iter().fold(0, |acc, x| acc ^ x);

    match (nums1.len() % 2, nums2.len() % 2) {
      (0,0) => 0,
      (0,1) => x1,
      (1,0) => x2,
      (_,_) => x1^x2
    }
  }
}
```
