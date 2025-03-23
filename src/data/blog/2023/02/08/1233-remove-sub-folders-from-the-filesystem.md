---
title: "1233-remove-sub-folders-from-the-filesystem"
pubDatetime: 2023-02-08T13:40:00+08:00
description: ""
type: "post"
categories:
  - "leetcode"
  - "rust"
tags:
  - "leetcode"
  - "rust"
---

1233 https://leetcode.cn/problems/remove-sub-folders-from-the-filesystem/

```rust
struct Solution {}

struct Hier {
  c: HashMap<String, Hier>,
}

use std::collections::HashMap;
use std::collections::HashSet;
impl Solution {
  pub fn remove_subfolders(folder: Vec<String>) -> Vec<String> {
    let mut root: Hier = Hier { c: HashMap::new() };
    let mut is_dir: HashSet<String> = HashSet::new();
    for f in &folder {
      let children: Vec<&str> = f.split("/").collect();
      let mut p: &mut Hier = &mut root;
      let mut path: String = "".to_string();
      for c in children.get(1..).unwrap() {
        path += &("/".to_string() + &c.to_string());

        let v = p
          .c
          .entry(path.clone())
          .or_insert(Hier { c: HashMap::new() });
        p = v;
      }
      is_dir.insert(f.to_string());
    }

    let mut ret: Vec<String> = Vec::new();

    unsafe {
      let mut candi: Vec<*const Hier> = vec![&root];
      while candi.len() > 0 {
        let mut t: Vec<*const Hier> = Vec::new();
        for c in candi {
          for (k, v) in &(*c).c {
            if !is_dir.contains(&k.clone()) {
              t.push(v);
            } else {
              ret.push(k.clone());
            }
          }
        }
        candi = t;
      }
    }

    ret
  }
}
```
