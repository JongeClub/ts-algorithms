# 四则运算

输入 `"2 + 3 * 7 - 4 / 2"`，输出 `21`。

* 两个栈：操作数栈 A、操作符栈 B
* 操作数直接压入 A，操作符如果优先级高于 B 栈顶元素，压入 B，否则 A 中取出两个操作数和 B 中取出一个操作符做运算，结果压入 A
* 继续比较 B 栈顶元素和当前字符，直到结束