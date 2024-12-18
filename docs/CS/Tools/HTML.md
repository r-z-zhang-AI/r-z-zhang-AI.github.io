# 学习资料
[HTML 简介 - 学习 Web 开发 | MDN](https://developer.mozilla.org/zh-CN/docs/Learn/HTML/Introduction_to_HTML)

[开始学习 HTML - 学习 Web 开发 | MDN](https://developer.mozilla.org/zh-CN/docs/Learn/HTML/Introduction_to_HTML/Getting_started)

[CSS 入门概述 - 学习 Web 开发 | MDN](https://developer.mozilla.org/zh-CN/docs/Learn/CSS/First_steps)

[JavaScript - MDN Web 文档术语表：Web 相关术语的定义 | MDN](https://developer.mozilla.org/zh-CN/docs/Glossary/JavaScript)

# 杂项

<details>
<summary>空格&换行</summary>
### 换行

1. **`<br>`标签**：`<br>` 是一个空的HTML标签，用于在文本中插入一个换行。例如：
   ```html
   <p>第一行<br>第二行</p>
   ```
   这将在浏览器中显示为两行文本。

2. **`<p>`标签**：`<p>` 标签定义了一个段落，段落之间自动换行。例如：
   ```html
   <p>第一段</p>
   <p>第二段</p>
   ```
   这将在浏览器中显示为两个段落，每个段落自动换行。

### 空格

1. **直接敲击空格键**：在HTML中，直接敲击空格键输入的空格通常在网页上显示为一个空格。

2. **`&nbsp;`（非换行空格）**：`&nbsp;` 是 HTML 实体字符，代表一个不可断行的空格。

3. **`&ensp;`（半角空格）**：`&ensp;` 是 HTML 实体字符，代表半个标准空格的宽度。

4. **`&emsp;`（全角空格）**：`&emsp;` 是 HTML 实体字符，代表一个标准空格的宽度。

5. **`&thinsp;`（窄空格）**：`&thinsp;` 是 HTML 实体字符，代表一个窄空格，比半角空格稍微窄一点。

### 组合使用换行和空格

你可以在HTML中组合使用换行和空格来控制文本的显示。例如：

```html
<p>第一行&nbsp;&nbsp;&nbsp;第二行<br>第三行</p>
```

这将在浏览器中显示为：

```
第一行   第二行
第三行
```

在这个例子中，`&nbsp;` 用于在第一行和第二行之间添加空格，`<br>` 用于在第二行和第三行之间添加换行。

通过这些方法，你可以灵活地在HTML中控制文本的换行和空格。
</details>