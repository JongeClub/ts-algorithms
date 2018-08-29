# 选择排序

> 非稳定算法，因为有交换操作。

与插入排序类似，将待排序数据分为已排序和未排序两部分，选择排序每次从未排序区间中找到最小元素，放到已排序部分的末尾。

----
时间复杂度|空间复杂度|是否稳定|最好时间复杂度|最坏情况时间复杂度
--|--|--|--|--
`O(n^2)`|`O(1)`|N|`O(n^2)`|`O(n^2)`

----


非稳定示例说明：

`4 9 4 1 8` --> `1 9 4 4 8`，第一个 `4` 被放在了第二个 `4` 之后，相等元素的顺序被修改。