---
title: "2591-distribute-money-to-maximum-children"
pubDatetime: 2023-03-25T17:23:00+08:00
description: ""
type: "post"
categories:
  - "leetcode"
  - "rust"
tags:
  - "leetcode"
  - "rust"
---

2591 https://leetcode.cn/problems/distribute-money-to-maximum-children/

```rust
struct Solution {}

impl Solution {
  pub fn dist_money(money: i32, children: i32) -> i32 {
    if money < children {
      return -1;
    }
    let mut cnt = (money - children) / 7;
    let m = (money - children) % 7;
    if cnt >= children {
      if m > 0 || cnt > children {
        return children - 1;
      }
      return children;
    }
    if cnt > 0 && cnt == children - 1 && m == 3 {
      cnt -= 1;
    }
    if cnt < 0 {
      return -1;
    }
    cnt
  }
}

```
