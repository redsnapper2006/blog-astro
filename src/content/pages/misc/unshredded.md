---
title: "unshredded"
description: "unshredded"
tags:
  - "tech"
layout: "../../layouts/Misc.astro"
---

# one question of instagram

```python
from PIL import Image

image = Image.open('TokyoPanoramaShredded.png')

data = image.getdata()

shredwidth = 32

(imagewidth, imageheight) = image.size

listorg = []
for i in range(0,imagewidth,shredwidth) :
    listleft = []
    for j in range(imageheight) :
        (r,g,b,alpha) = data[j*imagewidth+i]
        listleft.append((r,g,b))
    listright = []
    for j in range(imageheight) :
        (r,g,b,alpha) = data[j*imagewidth+i+shredwidth-1]
        listright.append((r,g,b))
    listorg.append(listleft)
    listorg.append(listright)

listindex = [0,1]

while (len(listindex) < imagewidth/shredwidth*2) :
    diff = 255*3*imageheight
    rightindex = -1
    # find right
    for i in range(1,imagewidth/shredwidth*2,2):
        if i in listindex :
            continue
        totaldiff = 0
        for j in range(len(listorg[listindex[0]])) :
            (r2,g2,b2) = listorg[i][j]
            (r1,g1,b1) = listorg[listindex[0]][j]
            totaldiff += abs(r2-r1)+abs(g2-g1)+abs(b2-b1)
        if totaldiff < diff :
            diff = totaldiff
            rightindex = i

    diff = 255*3*imageheight
    leftindex = -1
    # find left
    for i in range(0,imagewidth/shredwidth*2,2):
        if i in listindex :
            continue
        totaldiff = 0
        for j in range(len(listorg[listindex[len(listindex)-1]])) :
            (r2,g2,b2) = listorg[i][j]
            (r1,g1,b1) = listorg[listindex[len(listindex)-1]][j]
            totaldiff += abs(r2-r1)+abs(g2-g1)+abs(b2-b1)
        if totaldiff < diff :
            diff = totaldiff
            leftindex = i
    listindex.insert(0,rightindex)
    listindex.insert(0,rightindex-1)
    listindex.append(leftindex)
    listindex.append(leftindex+1)

unshredded = Image.new("RGBA",image.size)
for i in range(0,len(listindex)-2,2) :
    start,end = listindex[i],listindex[i+1]
    source = image.crop((shredwidth*start/2,0,shredwidth*(end+1)/2,imageheight))
    dest = (i/2*shredwidth,0)
    unshredded.paste(source,dest)
unshredded.save("unshredded.jpg","JPEG")
```
