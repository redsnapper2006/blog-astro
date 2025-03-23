---
title: "interview1614-best-line-lcci"
pubDatetime: 2023-07-11T21:52:00+08:00
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

interview1614 https://leetcode.cn/problems/best-line-lcci/

> 数学 AX + BY = C

```rust
struct Solution {}

#[derive(PartialEq, Hash, Eq, Clone, Debug)]
pub struct Key {
  pub SM: u64,
  pub SE: i16,
  pub SS: i8,
  pub IM: u64,
  pub IE: i16,
  pub IS: i8,
  pub X: i32,
  pub T: bool,
}

use std::collections::HashMap;
use std::collections::HashSet;
use std::mem;
impl Solution {
  pub fn best_line(points: Vec<Vec<i32>>) -> Vec<i32> {
    fn integer_decode(val: f64) -> (u64, i16, i8) {
      let bits: u64 = unsafe { mem::transmute(val) };
      let sign: i8 = if bits >> 63 == 0 { 1 } else { -1 };
      let mut exponent: i16 = ((bits >> 52) & 0x7ff) as i16;
      let mantissa = if exponent == 0 {
        (bits & 0xfffffffffffff) << 1
      } else {
        (bits & 0xfffffffffffff) | 0x10000000000000
      };

      exponent -= 1023 + 52;
      (mantissa, exponent, sign)
    }

    let mut m: HashMap<Key, HashSet<usize>> = HashMap::new();

    (0..points.len()).for_each(|start| {
      (start + 1..points.len()).for_each(|next| {
        let mut key = if points[start][0] == points[next][0] {
          Key {
            SM: 0,
            SE: 0,
            SS: 0,
            IM: 0,
            IE: 0,
            IS: 0,
            X: points[start][0],
            T: true,
          }
        } else {
          let (sm, se, ss) = integer_decode(
            (points[start][1] - points[next][1]) as f64
              / (points[start][0] - points[next][0]) as f64,
          );
          let (im, ie, is) = integer_decode(
            points[start][1] as f64
              - ((points[start][1] - points[next][1]) as f64
                / (points[start][0] - points[next][0]) as f64)
                * points[start][0] as f64,
          );
          Key {
            SM: sm,
            SE: se,
            SS: ss,
            IM: im,
            IE: ie,
            IS: is,
            X: 0,
            T: false,
          }
        };
        let hs = m.entry(key).or_insert(HashSet::new());
        hs.insert(start);
        hs.insert(next);
        // println!("start {} next {} m {:?}", start, next, m);
      });
    });

    let mut vv = m
      .into_iter()
      .map(|(_, v)| {
        let mut vv = v.into_iter().collect::<Vec<usize>>();
        vv.sort();
        vv
      })
      .collect::<Vec<Vec<usize>>>();
    vv.sort_by(|v1, v2| {
      if v1.len() != v2.len() {
        return v2.len().cmp(&v1.len());
      }
      if v1[0] != v2[0] {
        return v1[0].cmp(&v2[0]);
      }
      v1[1].cmp(&v2[1])
    });
    vec![vv[0][0] as i32, vv[0][1] as i32]
  }
}

```
