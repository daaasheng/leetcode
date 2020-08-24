
# 算法-排序:

### 冒泡排序-bubbleSort, Time: O(n^2), Space: O(1)

```
arr
for (let i=0; i < arr.length; i++) {
    for (let j=0; j < arr.length - i - 1; j++) {
        if (arr[j] > arr[j+1]) {
            [arr[j], arr[j+1]] = [arr[j+1], arr[j]];
        }
    }
}
```
降序
```
arr
for (let i=0; i < arr.length; i++) {
    for (let j=0; j < arr.length - i - 1; j++) {
        if (arr[j] < arr[j+1]) {
            [arr[j], arr[j+1]] = [arr[j+1], arr[j]];
        }
    }
}
```

### 选择排序-selection, Time: O(n^2), Space: O(1)

```
for (var i = 0; i < arr.length - 1; i++) {
    indexMin = i;
    for (var j = i; j < arr.length; j++) {
        if (arr[indexMin] > arr[j]) {
            indexMin = j;
        }
    }
    if (i != indexMin) {
        swap(arr, i, indexMin);
    }
}
```

### 快速排序，O(nlogn)

特征：
 大量重复元素（三路排序）
 近乎有序（插入排序）
 取值范围有限（计数排序）
 稳定排序（归并排序）
 链表存储（归并排序）
 大数据量，内存小（外排序）

优化:

- 空间和事件交换（哈希表）
- 预处理（如排序）

online judege:

- leetcode
- hackerrank

todo

玩转算法

算法面试
- 1-1