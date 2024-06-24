---
title: "1140-stone-game-ii"
pubDatetime: 2023-02-22T23:56:00+08:00
description: ""
type: "post"
categories:
  - "leetcode"
  - "rust"
tags:
  - "leetcode"
  - "rust"
---

1140 https://leetcode.cn/problems/stone-game-ii/

> 记忆化搜索

```rust
struct Solution {}

use std::collections::HashMap;
impl Solution {
  pub fn stone_game_ii(piles: Vec<i32>) -> i32 {
    let mut m1: HashMap<usize, HashMap<usize, (i32, i32)>> = HashMap::new();
    let mut m2: HashMap<usize, HashMap<usize, (i32, i32)>> = HashMap::new();

    fn dfs(
      piles: &Vec<i32>,
      s_idx: usize,
      m: usize,
      times: i32,
      m1: &mut HashMap<usize, HashMap<usize, (i32, i32)>>,
      m2: &mut HashMap<usize, HashMap<usize, (i32, i32)>>,
    ) -> (i32, i32) {
      if s_idx >= piles.len() {
        return (0, 0);
      }
      if times % 2 == 0 {
        let v = m1.entry(s_idx).or_insert(HashMap::new());
        if v.contains_key(&m) {
          return *v.get(&m).unwrap();
        }
      } else {
        let v = m2.entry(s_idx).or_insert(HashMap::new());
        if v.contains_key(&m) {
          return *v.get(&m).unwrap();
        }
      }

      let mut sum: i32 = 0;
      let mut min_accum1: i32 = 0;
      let mut max_accum2: i32 = 0;
      (0..2 * m).for_each(|idx| {
        if s_idx + idx >= piles.len() {
          return;
        }

        sum += piles[s_idx + idx];
        let mut next_m = idx + 1;
        if next_m < m {
          next_m = m;
        }

        // println!("1 -> {} {} {}", s_idx, idx, sum);
        let (temp_accum1, temp_accum2) = dfs(piles, s_idx + idx + 1, next_m, times + 1, m1, m2);
        // println!("2 -> {} {} ", temp_accum1, temp_accum2);
        if times % 2 == 0 {
          if sum + temp_accum1 > min_accum1 {
            min_accum1 = sum + temp_accum1;
            max_accum2 = temp_accum2;
          } else if sum + temp_accum1 == min_accum1 && temp_accum2 > max_accum2 {
            max_accum2 = temp_accum2;
          }
        } else {
          if sum + temp_accum2 > max_accum2 {
            min_accum1 = temp_accum1;
            max_accum2 = sum + temp_accum2;
          } else if sum + temp_accum2 == max_accum2 && temp_accum1 < min_accum1 {
            min_accum1 = temp_accum1;
          }
        }
      });
      // println!("3 -> {} {} ", min_accum1, max_accum2);
      if times % 2 == 0 {
        let v = m1.entry(s_idx).or_insert(HashMap::new());
        v.insert(m, (min_accum1, max_accum2));
      } else {
        let v = m2.entry(s_idx).or_insert(HashMap::new());
        v.insert(m, (min_accum1, max_accum2));
      }
      (min_accum1, max_accum2)
    }

    let (r1, _) = dfs(&piles, 0, 1, 0, &mut m1, &mut m2);

    r1
  }
}

```
