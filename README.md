# muxi_mobile_site(木犀移动端官网)

## 开发日志

- 修复滑动不顺畅问题，修改了 scorll 组件的 dragThreshold: 0.1,
- 修复成员页->加入页的滑动翻页问题，document.body.scrollTop,document.body.clientHeight,document.body.scrollHeight.但是代码有冗余，还需深究
- 修复三条横线的宽度问题，原因 x5 内核对 vh,vh 支持有局限，之后尽量用 SVG 写 icon
