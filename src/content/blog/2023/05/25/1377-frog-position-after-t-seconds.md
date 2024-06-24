---
title: "1377-frog-position-after-t-seconds"
pubDatetime: 2023-05-25T18:20:00+08:00
description: ""
type: "post"
categories:
  - "leetcode"
  - "rust"
  - "bfs"
tags:
  - "leetcode"
  - "rust"
  - "bfs"
---

1377 https://leetcode.cn/problems/frog-position-after-t-seconds/

> VecDeque, BFS

```rust
struct Solution {}

use std::collections::HashMap;
use std::collections::HashSet;
use std::collections::VecDeque;
impl Solution {
  #[allow(unused_variables)]
  pub fn frog_position(n: i32, edges: Vec<Vec<i32>>, t: i32, target: i32) -> f64 {
    let mut connect: HashMap<i32, Vec<i32>> = HashMap::new();

    edges.iter().for_each(|x| {
      connect.entry(x[0]).or_insert(Vec::new()).push(x[1]);
      connect.entry(x[1]).or_insert(Vec::new()).push(x[0]);
    });

    let mut queue: VecDeque<(i32, HashSet<i32>, i32, f64)> = VecDeque::new();
    let mut s: HashSet<i32> = HashSet::new();
    s.insert(1);
    queue.push_back((1, s, 0, 1.0));

    let mut res: f64 = 0.0;
    while queue.len() > 0 {
      let (candi, visit, step, prop) = queue.pop_front().unwrap();
      if candi == target && step == t {
        res += prop;
      }

      let next = match connect.get(&candi) {
        None => Vec::new(),
        Some(next) => next.clone(),
      };

      let mut nextcnt: i32 = 0;
      next.iter().for_each(|&x| {
        if !visit.contains(&x) {
          nextcnt += 1;
        }
      });

      if step + 1 > t {
        continue;
      }
      if nextcnt == 0 && candi == target {
        res += prop;
        continue;
      }

      next.iter().for_each(|&x| {
        if !visit.contains(&x) {
          let mut newvisit = visit.clone();
          newvisit.insert(x);
          queue.push_back((x, newvisit, step + 1, prop / nextcnt as f64));
        }
      });
    }

    res
  }
}

```
