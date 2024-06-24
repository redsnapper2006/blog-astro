---
title: "1944-number-of-visible-people-in-a-queue"
pubDatetime: 2024-01-05T12:16:00+08:00
description: ""
type: "post"
categories:
  - "leetcode"
  - "rust"
  - "monotonic stack"
tags:
  - "leetcode"
  - "rust"
  - "monotonic stack"
---

1944 https://leetcode.cn/problems/number-of-visible-people-in-a-queue/

> 单调栈

```rust
struct Solution {}

impl Solution {
  pub fn can_see_persons_count(heights: Vec<i32>) -> Vec<i32> {
    let mut stack: Vec<i32> = vec![heights[heights.len() - 1]];
    let mut ret: Vec<i32> = vec![0];

    (0..heights.len() - 1).rev().for_each(|idx| {
      let mut count: i32 = 0;
      while stack.len() > 0 && stack[stack.len() - 1] < heights[idx] {
        stack.pop();
        count += 1;
      }
      if stack.len() > 0 {
        count += 1;
      }
      ret.push(count);
      stack.push(heights[idx]);
    });

    ret.reverse();
    ret
  }
}
```
