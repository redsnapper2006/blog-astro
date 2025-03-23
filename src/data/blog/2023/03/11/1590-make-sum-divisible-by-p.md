---
title: "1590-make-sum-divisible-by-p"
pubDatetime: 2023-03-11T19:19:00+08:00
description: ""
type: "post"
categories:
  - "leetcode"
  - "go"
tags:
  - "leetcode"
  - "go"
---

1590 https://leetcode.cn/problems/make-sum-divisible-by-p/

```go
package main

func minSubarray(nums []int, p int) int {
	sum := 0

	buf := []int{}
	for _, v := range nums {
		sum += v
		sum %= p
		buf = append(buf, sum)
	}

	if sum == 0 {
		return 0
	}

	ret := len(nums)

	idxs := map[int]int{}
	idxs[0] = -1

	for i := range nums {
		offset := (buf[i] - sum + p) % p
		v, ok := idxs[offset]
		if ok && ret > i-v {
			ret = i - v
		}
		idxs[buf[i]] = i
	}

	if ret == len(nums) {
		return -1
	}
	return ret
}
```
