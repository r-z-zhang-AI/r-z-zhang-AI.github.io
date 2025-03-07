三种主要模式及其功能

1. **普通模式（Normal Mode）**：

   - 这是 Vim 的默认模式。在普通模式下，你可以移动光标、复制、粘贴、删除文本、查找和替换等。大多数 Vim 的命令和快捷键都在这个模式下使用。
   - 进入方法：打开 Vim 后自动进入普通模式，或者从插入模式按 `Esc` 键返回。

2. **插入模式（Insert Mode）**：


   - 在插入模式下，你可以输入文本。这是编辑文本内容的地方。
   - 进入方法：
     - 在普通模式下，按 `i` 进入插入模式，在当前光标位置之前插入文本。**（常用）**
     - 按 `I`（大写的 i）进入插入模式，在当前行的第一个非空字符之前插入文本。
     - 按 `a`（append）进入插入模式，在当前光标位置之后插入文本。
     - 按 `A`（大写的 a）进入插入模式，在当前行的末尾插入文本。
     - 按 `o`（open）进入插入模式，在当前行下方新开一行并插入文本。
     - 按 `O`（大写的 o）进入插入模式，在当前行上方新开一行并插入文本。

3. **命令模式（Command Mode）**：

   - 命令模式用于执行 Vim 命令，如保存文件、退出 Vim、查找文本、跳转到行等。
   - 进入方法：在普通模式下，按 `:` 进入命令模式。

模式之间的转换方法：

- **从插入模式到普通模式**：按 `Esc` 键。
- **从普通模式到插入模式**：按 `i`、`I`、`a`、`A`、`o` 或 `O`
- **从普通模式到命令模式**：按 `:`
- **从命令模式到普通模式**：按 `Esc` 键

退出vim

1. **保存并退出**：

   - 首先，确保你已经保存了所有更改。在普通模式下，按 `Esc` 键退出插入模式（如果你在插入模式中），然后输入 `:wq` 并按 `Enter` 键来退出 Vim。

2. **不保存并退出**：

   - 如果你不想保存更改，可以在普通模式下输入 `:q!` 并按 `Enter` 键来强制退出而不保存更改。

3. **保存所有更改并退出**：

   - 如果你打开了多个文件并且想要保存所有更改并退出，可以使用 `:wqa` 或者 `:xa`（`xa` 是 `write and quit all` 的缩写）。


:set number 显示行数

