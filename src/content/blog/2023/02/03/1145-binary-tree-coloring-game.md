---
title: "1145-binary-tree-coloring-game"
pubDatetime: 2023-02-03T10:40:00+08:00
description: ""
type: "post"
categories:
  - "leetcode"
  - "go"
tags:
  - "leetcode"
  - "go"
---

1145 https://leetcode.cn/problems/binary-tree-coloring-game/

```go
package main

type TreeNode struct {
  Val   int
  Left  *TreeNode
  Right *TreeNode
}

func btreeGameWinningMove(root *TreeNode, n int, x int) bool {
  var target *TreeNode
  candi := []*TreeNode{root}
  isFound := false
  for !isFound {
    t := []*TreeNode{}
    for _, c := range candi {
      if c == nil {
        continue
      }
      if c.Val == x {
        target = c
        isFound = true
        break
      }
      t = append(t, c.Left, c.Right)
    }
    candi = t
  }

  var count func(n *TreeNode) int
  count = func(n *TreeNode) int {
    if n == nil {
      return 0
    }
    return count(n.Left) + count(n.Right) + 1
  }

  left, right := count(target.Left), count(target.Right)
  other := n - 1 - left - right
  if left > n-left || right > n-right || other > n-other {
    return true
  }
  return false
}
```
