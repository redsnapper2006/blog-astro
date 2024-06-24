---
title: "2008-maximum-earnings-from-taxi"
pubDatetime: 2023-12-08T12:05:00+08:00
description: ""
tags:
  - "leetcode"
  - "rust"
  - "dp"
---

2008 https://leetcode.cn/problems/maximum-earnings-from-taxi/

> DP

```rust
struct Solution {}

impl Solution {
  pub fn max_taxi_earnings(n: i32, rides: Vec<Vec<i32>>) -> i64 {
    let mut buf: Vec<i64> = vec![0; n as usize + 1];
    let mut new_rides: Vec<Vec<Vec<i32>>> = vec![Vec::new(); n as usize + 1];

    rides.iter().for_each(|ride| {
      new_rides[ride[0] as usize].push(ride.to_vec());
    });

    (1..=n as usize).for_each(|i| {
      buf[i] = buf[i].max(buf[i - 1]);
      new_rides[i].iter().for_each(|ride| {
        buf[ride[1] as usize] = buf[ride[1] as usize].max(buf[i] + (ride[1] - ride[0] + ride[2]) as i64 );
      });
    });
    buf[n as usize]
  }
}
```
