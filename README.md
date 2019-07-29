### leecode

类别(算法,数据库,shell)
难度(a简单, b中等, c困难)


|#|题目|语言|难度|完成|注释|
|:-|:-:|:-:|:-:|:-:|:-:|
|69|x的平方根|py2|a|true|牛顿迭代法|
|1137（147周赛）|[第 N 个泰波那契数](https://leetcode-cn.com/problems/n-th-tribonacci-number/)|py2|a|true|循环|
|119|杨辉三角|py2|a|true|嵌套循环|
|401|二进制手表|py2|a|--|--|
|179|最大数|py2|b|true|冒泡排序|
|977|有序数组的平方|py2|a|true|双指针|
|88|合并两个有序数组|py2|a|true|双指针|
|177| 第N高的薪水|sql|b|true|DESC LIMIT|
|561| [数组拆分I](<https://leetcode-cn.com/problems/array-partition-i/>) |py2|a|true|冒泡排序会超时，推荐sort\sorted|
|4| 寻找两个有序数组的中位数 |py2|c|true|sort|
|665| [非递减数列](https://leetcode-cn.com/problems/non-decreasing-array/) |py2|a|true|移除间断点|
|33| 搜索旋转排序数组 |py2|b|true|二分法搜索|
|81（147周赛精选）| 搜索旋转排序数组ii |py2|b|true|二分法搜索|
|448| 找到所有数组中消失的数字 |py2|a|true|超时，元素转索引|
|442| 数组中重复的数据 |py2|b|true|元素转索引|
|1094（142周赛）| 拼车 |py2|b|true|乘车问题|
|--| ---------------链表----------- |--|--|--|--|
|237| 删除链表中的节点 |py2|a|true|链表删除|
|--| --------------二叉树--------- |--|--|--|--|
|965| 单值二叉树 |py2|a|true|创建二叉树|
|101| 对称二叉树 |py2|a|true|遍历二叉树|
|102| 二叉树的层序遍历 |py2|b|true|层序遍历|
|107|  |||||
|637| [二叉树的层平均值](https://leetcode-cn.com/problems/average-of-levels-in-binary-tree/) |py2|a|true|层序遍历|
|226| 翻转二叉树 |py2|a|true|遍历二叉树|
|617| 合并二叉树 |py2|a|true|遍历二叉树|

### 统计

- 平均值
- 中位数
- 众数

## 数组

- 二分法搜索(长度大于1)

```
function bs(nums, target, start_index, end_index) {
  while(start_index <= end_index) {
    mid_index = (start_index+end_index) / 2
    cur_num = nums[mid_index]
    if (target == cur_num) {
      return mid_index
    } else if (target < cur_num) {
      end_index = mid_index - 1
    } else {
      start_index = mid_index + 1
    }
  }
  return -1
}

=======================递归写法==============================
function bs(nums, target, start_index, end_index) {
  if(start_index > end_index) {
    return -1
  }
  mid_index = (start_index+end_index) / 2
  cur_num = nums[mid_index]
  if (target == cur_num) {
    return mid_index
  } else if (target < cur_num) {
    return bs(nums, target, start_index, mid_index - 1)
  } else {
    return bs(nums, target, mid_index + 1, end_index)
  }
}

```

## 链表

链表, 线性数据结构。相比数组, 元素不存储在相邻位置， 通指针链接。

优势：

1. 元素个数无上限。
2. 插入/删除元素， 无需创建空间， 无需移动插入位置以后的元素。

```py
====================单链表======================
# Definition for singly-linked list.
class listNode(object):
  def __init__(self, x):
    self.val = x
    self.next = None
    
def creatLinkedList(data, index):
  pNode = None
  if index < len(data):
    if not data[index]:
      return
    pNode = listNode(data[index])
    pNode.next = creatLinkedList(data, index + 1)
  return pNode

def linkedList2list(head):
  pNode = head
  res = []
  while pNode:
    res.append(pNode.val)
    pNode = pNode.next
  return res


```


## 二叉树

Traversals遍历二叉树(先序遍历, 中序遍历, 后序遍历, 深度优先DFS, 广度优先BFS)

- PreOrder 先序遍历: 根节点 -> 左子树 -> 右子树
- InOrder 中序遍历：左子树 -> 根节点 -> 右子树
- PostOrder 后序遍历：左子树 -> 右子树 -> 根节点 
- LevelOrder 层序遍历

[geeksforgeeks-tree](https://www.geeksforgeeks.org/binary-tree-data-structure/)

[lectures/Trees](https://www.cs.cmu.edu/~adamchik/15-121/lectures/Trees/trees.html)



二叉搜索树：一种基于节点的二叉树数据结构。具有如下特点:

- 节点的左子树只包含键值小于节点键值的节点。
- 节点的右子树只包含键值大于节点键值的节点。
- 左右子树也必须是二叉搜索树。



完全二叉树：

一般输入的是水平顺序遍历的二叉树，null/None表示空节点

测试用例中先转成二叉树

```py
class TreeNode(object):
    def __init__(self, x):
        self.val = x
        self.left = None
        self.right = None

def creatTree(data, index):
  pNode = None
  if index < len(data):
    # if data[index] == None:
    if not data[index]:
      return
    pNode = TreeNode(data[index])
    pNode.left = creatTree(data, 2 * index + 1)
    pNode.right = creatTree(data, 2 * index + 2)
  # print pNode
  return pNode

def levelOrder(root):
  nodeList = []
  if not root:
    return
  nodeList.append(root)
  while(len(nodeList) > 0):
    pNode = nodeList.pop(0)
    pList.append(pNode.val)
    if pNode.left is not None:
      nodeList.append(pNode.left)
    if pNode.right is not None:
      nodeList.append(pNode.right)
    # print pList
  return pList

if __name__ == "__main__":
  creatTree([1,2,3,4,5,6,7], 0)
```

