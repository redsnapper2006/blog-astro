---
title: "2299-strong-password-checker-ii"
pubDatetime: 2023-01-19T12:48:00+08:00
description: ""
type: "post"
categories:
  - "leetcode"
  - "rust"
tags:
  - "leetcode"
  - "rust"
---

2299 https://leetcode.cn/problems/strong-password-checker-ii/

一行流

```
struct Solution {}

impl Solution {
  pub fn strong_password_checker_ii(password: String) -> bool {
    let p = password.as_bytes();
    password.len() >= 8
      && p
        .iter()
        .map(|&c| c >= 'a' as u8 && c <= 'z' as u8)
        .any(|x| x)
      && p
        .iter()
        .map(|&c| c >= 'A' as u8 && c <= 'Z' as u8)
        .any(|x| x)
      && p
        .iter()
        .map(|&c| c >= '0' as u8 && c <= '9' as u8)
        .any(|x| x)
      && password
        .as_str()
        .find(&['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '+'])
        .is_some()
      && !(1..password.len())
        .map(|idx| p[idx] == p[idx - 1])
        .any(|x| x)
  }
}
```
