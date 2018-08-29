# 栈实现浏览器前进后退

用两个栈 X 和 Y 来实现。

```js

// 在 a 打开 b，b 中打开 c
X: a, b, c
Y: 
// 后退两步
X: a
Y: c, b
// 前进一步
X: a, b
Y: c
// 点击某个连接打开 d
X: a, b, d
Y: 
// 后退一步
X: a, b
Y: b

```