
# 算法-排序:

### 1. 冒泡排序-bubbleSort, Time: O(n^2), Space: O(1)

冒泡排序，比较所有相邻的两项，若前大后小则交换。元素向上移动， 类似气泡上浮。

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

### 2. 选择排序-selectionSort, Time: O(n^2), Space: O(1)

选择排序，原址比较。第i次寻找第i小的元素， 并放置第i位。

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

### 3. 插入排序-insertionSort, Time: O(n^2), Space: O(1)

每次排一个数组项。

```
for (var i = 0; i < arr.length; i++) {
    var tmp = arr[i];
    var j = i - 1;
    while (j >= 0 && arr[j] > tmp) {
        arr[j+1] = arr[j];
        j--;
    }
    arr[j+1] = tmp;
}
```

### 4. *希尔排序-shellSort, Time: O(n^2), Space: O(1)

插入排序的优化， 又称“缩小增量排序”。
把记录按下标的一定增量分组，对每组使用直接插入排序算法排序；随着增量逐渐减少，每组包含的关键词越来越多，当增量减至 1 时，整个文件恰被分成一组，算法便终止。

```
for (var gap = Math.floor(n / 2); gap > 0; gap = Math.floor(gap / 2)) {
    for (var i = gap; i < n; i++) {
        var temp = arr[i];
        let j = i;
        while (j >= gap && arr[j-gap] > temp) {
            arr[j] = arr[j-gap];
            j -= gap;
        }
        arr[j] = temp;
    }
}
```

### 5. 归并排序-mergeSort，Time: O(nlog(n)), Space: O(n)

分而治之， 切分成小数组（单元素）， 归并成大数组(双指针合并两个有序数组)。


// 拆分数组
```
if (arr.length == 1) {
    return arr;
}
var middle = Math.floor(arr.length / 2);
var leftArr = arr.slice(0, middle);
var rightArr = arr.slice(middle);

leftArr = mergeSort(leftArr);
rightArr = mergeSort(rightArr);

return mergeArr(leftArr, rightArr);
```

// 辅助函数
```
  while (i < leftArr.length && j < rightArr.length) {
    if (leftArr[i] > rightArr[j]) {
      res.push(rightArr[j]);
      j++;
    } else {
      res.push(leftArr[i]);
      i++;
    }
  }

  if (i == leftArr.length) {
    res.push(...rightArr.slice(j));
  }

  if (j == leftArr.length) {
    res.push(...leftArr.slice(i));
  }

  return res;
```


### 6. 快速排序-quicksort，Time: O(nlogn), Space: O(n)

分而治之， 拆分成小数组。

1. 选择主元
2. 左指针找到比主元大的值， 右指针找到比主元小的值， 交换
3. 左指针大于有指针时， 再次划分为更小数组， 重复2

```

```



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