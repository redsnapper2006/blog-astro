---
title: "1658-minimum-operations-to-reduce-x-to-zero"
pubDatetime: 2023-01-07T11:20:00+08:00
description: ""
type: "post"
categories:
  - "leetcode"
  - "rust"
tags:
  - "leetcode"
  - "rust"
---

1658 https://leetcode.cn/problems/minimum-operations-to-reduce-x-to-zero/

前缀和 + 哈希表

```rust
struct Solution {}

use std::collections::HashMap;
impl Solution {
  pub fn min_operations(nums: Vec<i32>, x: i32) -> i32 {
    let remain: i32 = nums.iter().sum::<i32>() - x;
    if remain < 0 {
      return -1;
    }
    if remain == 0 {
      return nums.len() as i32;
    }
    let mut m: HashMap<i32, i32> = HashMap::new();
    m.insert(0, -1);
    let mut sum: i32 = 0;
    let mut ret: i32 = nums.len() as i32;
    for i in 0..nums.len() {
      sum += nums[i];
      if sum == x && ret > i as i32 + 1 {
        ret = i as i32 + 1;
      }
      let d = sum - remain;
      if m.contains_key(&d) && ret > (nums.len() - i) as i32 + m.get(&d).unwrap() {
        ret = (nums.len() - i) as i32 + m.get(&d).unwrap();
      }
      m.insert(sum, i as i32);
    }
    if ret == nums.len() as i32 {
      return -1;
    }
    ret
  }
}
```

1. 此题难度等级为中等。

2. 数组累加和小于整数x的话，无论怎么做都无法满足条件，所以return -1。

3. 数组累加和等于整数x，需要移除整个数组，所以返回整个数组的长度。

4. 想象数组如此模式[a,a,a,b,b,b,b,a,a]，需要移除掉数组中标注a的元素，留下标注b的元素。则标注a的元素累加和为整数x，设标注b的元素累加和为整数y，可以得出整数x+整数y=数组累加和。数组累加和、整数x现在已知，所以可以算出整数y的值。

5. 循环数组计算累加和，用当前的累加和减去整数y得到数值z，判断在此前的累加和中是否存在数值z，如果存在，则此累加和所对应的index为标注b的开始index，当前index为标注b的结束index，整个数组的长度减去标注b的长度，即为结果。

6. 特例：数组如此模式[a,a,a,b,b,b,b]，标注a的元素累加和为整数x的情况，当前index即为结果。

7. 上述两种情况，在循环数组的过程保持最优值，最后返回最优值即可。
