---
title: "1834-single-threaded-cpu"
pubDatetime: 2023-06-26T21:09:00+08:00
description: ""
type: "post"
categories:
  - "leetcode"
  - "rust"
  - "binaryheap"
tags:
  - "leetcode"
  - "rust"
  - "binaryheap"
---

1834 https://leetcode.cn/problems/single-threaded-cpu/

> 最小堆（优先队列）

```rust
struct Solution {}

use std::cmp::Reverse;
use std::collections::BinaryHeap;
impl Solution {
  pub fn get_order(tasks: Vec<Vec<i32>>) -> Vec<i32> {
    let mut tasks = tasks
      .into_iter()
      .enumerate()
      .collect::<Vec<(usize, Vec<i32>)>>();
    tasks.sort_by(|(ia, a), (ib, b)| {
      if a[0] == b[0] {
        ia.cmp(ib)
      } else {
        a[0].cmp(&b[0])
      }
    });
    let mut min_heap: BinaryHeap<Reverse<(i32, usize)>> = BinaryHeap::new();

    let mut res: Vec<i32> = Vec::new();
    let mut end: i32 = 0;

    let mut idx: usize = 0;

    while idx < tasks.len() || min_heap.len() > 0 {
      if min_heap.len() == 0 || idx < tasks.len() && end >= tasks[idx].1[0] {
        if idx < tasks.len() && end < tasks[idx].1[0] {
          end = tasks[idx].1[0];
        }

        while idx < tasks.len() && tasks[idx].1[0] <= end {
          min_heap.push(Reverse((tasks[idx].1[1], tasks[idx].0)));
          idx += 1;
        }
      }

      match min_heap.pop() {
        Some(Reverse((n_end, n_idx))) => {
          res.push(n_idx as i32);
          end += n_end;
        }
        None => {}
      }
    }
    res
  }
}

```
