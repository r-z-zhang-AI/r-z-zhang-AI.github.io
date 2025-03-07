## base64 - Base64编解码模块

**Base64**是一种基于64个可打印字符来表示二进制数据的方法。由于$log _{2}64=6$，所以Base64以6个比特（二进制位，可以表示0或1）为一个单元，每个单元对应一个可打印字符。对于3字节（24比特）的二进制数据，我们可以将其处理成对应于4个Base64单元，即3个字节可由4个可打印字符来表示。Base64编码可用来作为电子邮件的传输编码，也可以用于其他需要将二进制数据转成文本字符的场景，这使得在XML、JSON、YAML这些文本数据格式中传输二进制内容成为可能。在Base64中的可打印字符包括`A-Z`、`a-z`、`0-9`，这里一共是62个字符，另外两个可打印符号通常是`+`和`/`，`=`用于在Base64编码最后进行补位。

关于Base64编码的细节，大家可以参考[《Base64笔记》](http://www.ruanyifeng.com/blog/2008/06/base64.html)一文，Python标准库中的`base64`模块提供了`b64encode`和`b64decode`两个函数，专门用于实现Base64的编码和解码，下面演示了在**Python的交互式环境**中执行这两个函数的效果。

```Python
>>> import base64
>>> 
>>> content = 'Man is distinguished, not only by his reason, but by this singular passion from other animals, which is a lust of the mind, that by a perseverance of delight in the continued and indefatigable generation of knowledge, exceeds the short vehemence of any carnal pleasure.'
>>> base64.b64encode(content.encode())
b'TWFuIGlzIGRpc3Rpbmd1aXNoZWQsIG5vdCBvbmx5IGJ5IGhpcyByZWFzb24sIGJ1dCBieSB0aGlzIHNpbmd1bGFyIHBhc3Npb24gZnJvbSBvdGhlciBhbmltYWxzLCB3aGljaCBpcyBhIGx1c3Qgb2YgdGhlIG1pbmQsIHRoYXQgYnkgYSBwZXJzZXZlcmFuY2Ugb2YgZGVsaWdodCBpbiB0aGUgY29udGludWVkIGFuZCBpbmRlZmF0aWdhYmxlIGdlbmVyYXRpb24gb2Yga25vd2xlZGdlLCBleGNlZWRzIHRoZSBzaG9ydCB2ZWhlbWVuY2Ugb2YgYW55IGNhcm5hbCBwbGVhc3VyZS4='
>>> content = b'TWFuIGlzIGRpc3Rpbmd1aXNoZWQsIG5vdCBvbmx5IGJ5IGhpcyByZWFzb24sIGJ1dCBieSB0aGlzIHNpbmd1bGFyIHBhc3Npb24gZnJvbSBvdGhlciBhbmltYWxzLCB3aGljaCBpcyBhIGx1c3Qgb2YgdGhlIG1pbmQsIHRoYXQgYnkgYSBwZXJzZXZlcmFuY2Ugb2YgZGVsaWdodCBpbiB0aGUgY29udGludWVkIGFuZCBpbmRlZmF0aWdhYmxlIGdlbmVyYXRpb24gb2Yga25vd2xlZGdlLCBleGNlZWRzIHRoZSBzaG9ydCB2ZWhlbWVuY2Ugb2YgYW55IGNhcm5hbCBwbGVhc3VyZS4='
>>> base64.b64decode(content).decode()
'Man is distinguished, not only by his reason, but by this singular passion from other animals, which is a lust of the mind, that by a perseverance of delight in the continued and indefatigable generation of knowledge, exceeds the short vehemence of any carnal pleasure.'
```

## collections - 容器数据类型模块

`collections`模块提供了诸多非常好用的数据结构，主要包括：

- `namedtuple`：命令元组，它是一个类工厂，接受类型的名称和属性列表来创建一个类。
- `deque`：双端队列，是列表的替代实现。Python中的列表底层是基于数组来实现的，而`deque`底层是双向链表，因此当你需要在头尾添加和删除元素是，`deque`会表现出更好的性能，渐近时间复杂度为$O(1)$。
- `Counter`：`dict`的子类，键是元素，值是元素的计数，它的`most_common()`方法可以帮助我们获取出现频率最高的元素。`Counter`和`dict`的继承关系我认为是值得商榷的，按照CARP原则，`Counter`跟`dict`的关系应该设计为关联关系更为合理。
- `OrderedDict`：`dict`的子类，它记录了键值对插入的顺序，看起来既有字典的行为，也有链表的行为。
- `defaultdict`：类似于字典类型，但是可以通过默认的工厂函数来获得键对应的默认值，相比字典中的`setdefault()`方法，这种做法更加高效。

下面是在**Python交互式环境中**使用`namedtuple`创建扑克牌类的例子。

```Python
>>> from collections import namedtuple
>>>
>>> Card = namedtuple('Card', ('suite', 'face'))
>>> card1 = Card('红桃', 5)
>>> card2 = Card('草花', 9)
>>> card1
Card(suite='红桃', face=5)
>>> card2
Card(suite='草花', face=9)
>>> print(f'{card1.suite}{card1.face}')
红桃5
>>> print(f'{card2.suite}{card2.face}')
草花9
```

下面是使用`Counter`类统计列表中出现次数最多的三个元素的例子。

```Python
from collections import Counter

words = [
    'look', 'into', 'my', 'eyes', 'look', 'into', 'my', 'eyes',
    'the', 'eyes', 'the', 'eyes', 'the', 'eyes', 'not', 'around',
    'the', 'eyes', "don't", 'look', 'around', 'the', 'eyes',
    'look', 'into', 'my', 'eyes', "you're", 'under'
]
counter = Counter(words)
# 打印words列表中出现频率最高的3个元素及其出现次数
for elem, count in counter.most_common(3):
    print(elem, count)
```

## hashlib - 哈希函数模块

哈希函数又称哈希算法或散列函数，是一种为已有的数据创建“数字指纹”（哈希摘要）的方法。哈希函数把数据压缩成摘要，对于相同的输入，哈希函数可以生成相同的摘要（数字指纹），需要注意的是这个过程并不可逆（不能通过摘要计算出输入的内容）。一个优质的哈希函数能够为不同的输入生成不同的摘要，出现哈希冲突（不同的输入产生相同的摘要）的概率极低，[MD5](https://zh.wikipedia.org/wiki/MD5)、[SHA家族]([https://zh.wikipedia.org/wiki/SHA%E5%AE%B6%E6%97%8F](https://zh.wikipedia.org/wiki/SHA家族))就是这类好的哈希函数。

> **说明**：在2011年的时候，RFC 6151中已经禁止将MD5用作密钥散列消息认证码，这个问题不在我们讨论的范围内。

Python标准库的`hashlib`模块提供了对哈希函数的封装，通过使用`md5`、`sha1`、`sha256`等类，我们可以轻松的生成“数字指纹”。举一个简单的例子，用户注册时我们希望在数据库中保存用户的密码，很显然我们不能将用户密码直接保存在数据库中，这样可能会导致用户隐私的泄露，所以在数据库中保存用户密码时，通常都会将密码的“指纹”保存起来，用户登录时通过哈希函数计算密码的“指纹”再进行匹配来判断用户登录是否成功。

```Python
import hashlib

# 计算字符串"123456"的MD5摘要
print(hashlib.md5('123456'.encode()).hexdigest())

# 计算文件"Python-3.7.1.tar.xz"的MD5摘要
hasher = hashlib.md5()
with open('Python-3.7.1.tar.xz', 'rb') as file:
    data = file.read(512)
    while data:
        hasher.update(data)
        data = file.read(512)
print(hasher.hexdigest())
```

> **说明**：很多网站在下载链接的旁边都提供了哈希摘要，完成文件下载后，我们可以计算该文件的哈希摘要并检查它与网站上提供的哈希摘要是否一致（指纹比对）。如果计算出的哈希摘要与网站提供的并不一致，很有可能是下载出错或该文件在传输过程中已经被篡改，这时候就不应该直接使用这个文件。

## heapq - 堆排序模块

`heapq`模块实现了堆排序算法，如果希望使用堆排序，尤其是要解决**TopK问题**（从序列中找到K个最大或最小元素），直接使用该模块即可，代码如下所示。

```Python
import heapq

list1 = [34, 25, 12, 99, 87, 63, 58, 78, 88, 92]
# 找出列表中最大的三个元素
print(heapq.nlargest(3, list1))
# 找出列表中最小的三个元素
print(heapq.nsmallest(3, list1))

list2 = [
    {'name': 'IBM', 'shares': 100, 'price': 91.1},
    {'name': 'AAPL', 'shares': 50, 'price': 543.22},
    {'name': 'FB', 'shares': 200, 'price': 21.09},
    {'name': 'HPQ', 'shares': 35, 'price': 31.75},
    {'name': 'YHOO', 'shares': 45, 'price': 16.35},
    {'name': 'ACME', 'shares': 75, 'price': 115.65}
]
# 找出价格最高的三只股票
print(heapq.nlargest(3, list2, key=lambda x: x['price']))
# 找出持有数量最高的三只股票
print(heapq.nlargest(3, list2, key=lambda x: x['shares']))
```

## itertools - 迭代工具模块

`itertools`可以帮助我们生成各种各样的迭代器，大家可以看看下面的例子。

```Python
import itertools

# 产生ABCD的全排列
for value in itertools.permutations('ABCD'):
    print(value)

# 产生ABCDE的五选三组合
for value in itertools.combinations('ABCDE', 3):
    print(value)

# 产生ABCD和123的笛卡尔积
for value in itertools.product('ABCD', '123'):
    print(value)

# 产生ABC的无限循环序列
it = itertools.cycle(('A', 'B', 'C'))
print(next(it))
print(next(it))
print(next(it))
print(next(it))
```

## random - 随机数和随机抽样模块

这个模块我们之前已经用过很多次了，生成随机数、实现随机乱序和随机抽样，下面是常用函数的列表。

- `getrandbits(k)`：返回具有`k`个随机比特位的整数。
- `randrange(start, stop[, step])`：从`range(start, stop, step)` 返回一个随机选择的元素，但实际上并没有构建一个`range`对象。
- `randint(a, b)`：返回随机整数`N`满足`a <= N <= b`，相当于`randrange(a, b+1)`。
- `choice(seq)`：从非空序列`seq`返回一个随机元素。 如果`seq`为空，则引发`IndexError`。
- `choices(population, weight=None, *, cum_weights=None, k=1)`：从`population`中选择替换，返回大小为`k`的元素列表。 如果`population`为空，则引发`IndexError`。
- `shuffle(x[, random])`：将序列`x`随机打乱位置。
- `sample(population, k)`：返回从总体序列或集合中选择`k`个不重复元素构造的列表，用于无重复的随机抽样。
- `random()`：返回`[0.0, 1.0)`范围内的下一个随机浮点数。
- `expovariate(lambd)`：指数分布。
- `gammavariate(alpha, beta)`：伽玛分布。
- `gauss(mu, sigma)` / `normalvariate(mu, sigma)`：正态分布。
- `paretovariate(alpha)`：帕累托分布。 
- `weibullvariate(alpha, beta)`：威布尔分布。

## os.path - 路径操作相关模块

`os.path`模块封装了操作路径的工具函数，如果程序中需要对文件路径做拼接、拆分、获取以及获取文件的存在性和其他属性，这个模块将会非常有帮助，下面为大家罗列一些常用的函数。

- `dirname(path)`：返回路径`path`的目录名称。
- `exists(path)`：如果`path`指向一个已存在的路径或已打开的文件描述符，返回 `True`。
- `getatime(path)` / `getmtime(path)` / `getctime(path)`：返回`path`的最后访问时间/最后修改时间/创建时间。
- `getsize(path)`：返回`path`的大小，以字节为单位。如果该文件不存在或不可访问，则抛出`OSError`异常。
- `isfile(path)`：如果`path`是普通文件，则返回 `True`。
- `isdir(path)`：如果`path`是目录（文件夹），则返回`True`。
- `join(path, *paths)`：合理地拼接一个或多个路径部分。返回值是`path`和`paths`所有值的连接，每个非空部分后面都紧跟一个目录分隔符 (`os.sep`)，除了最后一部分。这意味着如果最后一部分为空，则结果将以分隔符结尾。如果参数中某个部分是绝对路径，则绝对路径前的路径都将被丢弃，并从绝对路径部分开始连接。
- `splitext(path)`：将路径`path`拆分为一对，即`(root, ext)`，使得`root + ext == path`，其中`ext`为空或以英文句点开头，且最多包含一个句点。

## uuid - UUID生成模块

`uuid`模块可以帮助我们生成全局唯一标识符（Universal Unique IDentity）。该模块提供了四个用于生成UUID的函数，分别是：

- `uuid1()`：由MAC地址、当前时间戳、随机数生成，可以保证全球范围内的唯一性。
- `uuid3(namespace, name)`：通过计算命名空间和名字的MD5哈希摘要（“指纹”）值得到，保证了同一命名空间中不同名字的唯一性，和不同命名空间的唯一性，但同一命名空间的同一名字会生成相同的UUID。
- `uuid4()`：由伪随机数生成UUID，有一定的重复概率，该概率可以计算出来。
- `uuid5()`：算法与`uuid3`相同，只不过哈希函数用SHA-1取代了MD5。

由于`uuid4`存在概率型重复，那么在真正需要全局唯一标识符的地方最好不用使用它。在分布式环境下，`uuid1`是很好的选择，因为它能够保证生成ID的全局唯一性。下面是在**Python交互式环境中**使用`uuid1`函数生成全局唯一标识符的例子。

```Python
>>> import uuid
>>> uuid.uuid1().hex
'622a8334baab11eaaa9c60f81da8d840'
>>> uuid.uuid1().hex
'62b066debaab11eaaa9c60f81da8d840'
>>> uuid.uuid1().hex
'642c0db0baab11eaaa9c60f81da8d840'
```

## json


### 1. `json.dumps()`
`json.dumps()` 函数用于将 Python 对象转换为 JSON 格式的字符串。

**语法：**
```python
json.dumps(obj, *, skipkeys=False, ensure_ascii=True, check_circular=True, allow_nan=True, cls=None, indent=None, separators=None, default=None, sort_keys=False, **kw)
```

**参数说明：**
- `obj`: 要序列化的 Python 对象。
- `skipkeys`: 如果为 `True`，则字典的键不是基本类型（`str`, `int`, `float`, `bool`, `None`）时会被跳过，而不是引发 `TypeError`。
- `ensure_ascii`: 如果为 `True`（默认），则输出中的所有非 ASCII 字符都会被转义。如果为 `False`，则这些字符将原样输出。
- `check_circular`: 如果为 `True`（默认），则会检查循环引用。
- `allow_nan`: 如果为 `True`（默认），则允许序列化 `NaN`, `Infinity`, 和 `-Infinity`。
- `indent`: 用于美化输出的缩进空格数。如果为 `None`（默认），则输出紧凑的 JSON。
- `separators`: 用于指定分隔符的元组，通常为 `(',', ': ')`。
- `sort_keys`: 如果为 `True`，则字典的输出会按照键的字母顺序排序。

**示例：**
```python
import json

data = {
    "name": "Alice",
    "age": 30,
    "is_student": False,
    "courses": ["Math", "Science"]
}

json_string = json.dumps(data, indent=4)
print(json_string)
```

!!! info 

    `indent = 4`：格式化输出，一般就用 `4`

**输出：**
```json
{
    "name": "Alice",
    "age": 30,
    "is_student": false,
    "courses": [
        "Math",
        "Science"
    ]
}
```

### 2. `json.dump()`
`json.dump()` 函数用于将 Python 对象转换为 JSON 格式并写入文件。

**语法：**
```python
json.dump(obj, fp, *, skipkeys=False, ensure_ascii=True, check_circular=True, allow_nan=True, cls=None, indent=None, separators=None, default=None, sort_keys=False, **kw)
```

**参数说明：**
- `obj`: 要序列化的 Python 对象。
- `fp`: 文件对象，用于写入 JSON 数据。

**示例：**
```python
import json

data = {
    "name": "Alice",
    "age": 30,
    "is_student": False,
    "courses": ["Math", "Science"]
}

with open('data.json', 'w') as f:
    json.dump(data, f, indent=4)
```

**文件内容：**
```json
{
    "name": "Alice",
    "age": 30,
    "is_student": false,
    "courses": [
        "Math",
        "Science"
    ]
}
```

### 3. `json.loads()`
`json.loads()` 函数用于将 JSON 格式的字符串转换为 Python 对象。

**语法：**
```python
json.loads(s, *, cls=None, object_hook=None, parse_float=None, parse_int=None, parse_constant=None, object_pairs_hook=None, **kw)
```

**参数说明：**
- `s`: 要反序列化的 JSON 字符串。
- `object_hook`: 可选函数，用于将解码后的字典转换为其他类型的对象。
- `parse_float`: 可选函数，用于解析 JSON 中的浮点数。
- `parse_int`: 可选函数，用于解析 JSON 中的整数。
- `parse_constant`: 可选函数，用于解析 JSON 中的常量（如 `NaN`, `Infinity`, `-Infinity`）。

**示例：**
```python
import json

json_string = '{"name": "Alice", "age": 30, "is_student": false, "courses": ["Math", "Science"]}'
data = json.loads(json_string)

print(data)
```

**输出：**
```python
{'name': 'Alice', 'age': 30, 'is_student': False, 'courses': ['Math', 'Science']}
```

### 4. `json.load()`
`json.load()` 函数用于从文件中读取 JSON 数据并将其转换为 Python 对象。

**语法：**
```python
json.load(fp, *, cls=None, object_hook=None, parse_float=None, parse_int=None, parse_constant=None, object_pairs_hook=None, **kw)
```

**参数说明：**
- `fp`: 文件对象，用于读取 JSON 数据。

**示例：**
```python
import json

with open('data.json', 'r') as f:
    data = json.load(f)

print(data)
```

**输出：**
```python
{'name': 'Alice', 'age': 30, 'is_student': False, 'courses': ['Math', 'Science']}
```




## matplotlib

[Matplotlib 官方文档](https://matplotlib.org/stable/contents.html)。

### pylot

创建各种类型的图表，如折线图、散点图、柱状图、饼图等。

`matplotlib.pyplot` 通常以 `plt` 作为别名导入：

```python
import matplotlib.pyplot as plt
```

#### (1) **创建图表**
- **`plt.plot(x, y)`**：绘制折线图。
  - `x`：X 轴数据。
  - `y`：Y 轴数据。
- **`plt.scatter(x, y)`**：绘制散点图。
- **`plt.bar(x, height)`**：绘制柱状图。
- **`plt.pie(data)`**：绘制饼图。

#### (2) **设置图表属性**
- **`plt.title("Title")`**：设置图表标题。
- **`plt.xlabel("X Label")`**：设置 X 轴标签。
- **`plt.ylabel("Y Label")`**：设置 Y 轴标签。
- **`plt.legend()`**：显示图例。
- **`plt.grid(True)`**：显示网格。

#### (3) **显示和保存图表**
- **`plt.show()`**：显示图表。
- **`plt.savefig("filename.png")`**：保存图表为文件。

#### (4) **其他常用函数**
- **`plt.figure()`**：创建一个新的图表。
- **`plt.subplot()`**：创建子图。
- **`plt.xlim(min, max)`**：设置 X 轴范围。
- **`plt.ylim(min, max)`**：设置 Y 轴范围。

---

### 4. **示例代码**

#### (1) **折线图**
```python
import matplotlib.pyplot as plt

# 数据
x = [1, 2, 3, 4, 5]
y = [10, 20, 25, 30, 40]

# 创建折线图
plt.plot(x, y, label="Line 1", marker="o")

# 设置标题和标签
plt.title("Line Chart Example")
plt.xlabel("X-axis")
plt.ylabel("Y-axis")

# 显示图例和网格
plt.legend()
plt.grid(True)

# 显示图表
plt.show()
```

#### (2) **散点图**
```python
import matplotlib.pyplot as plt

# 数据
x = [1, 2, 3, 4, 5]
y = [10, 20, 25, 30, 40]

# 创建散点图
plt.scatter(x, y, label="Points", color="red")

# 设置标题和标签
plt.title("Scatter Plot Example")
plt.xlabel("X-axis")
plt.ylabel("Y-axis")

# 显示图例和网格
plt.legend()
plt.grid(True)

# 显示图表
plt.show()
```

#### (3) **柱状图**
```python
import matplotlib.pyplot as plt

# 数据
x = ["A", "B", "C", "D"]
y = [10, 20, 15, 25]

# 创建柱状图
plt.bar(x, y, label="Bars", color="blue")

# 设置标题和标签
plt.title("Bar Chart Example")
plt.xlabel("Categories")
plt.ylabel("Values")

# 显示图例和网格
plt.legend()
plt.grid(True)

# 显示图表
plt.show()
```

#### (4) **饼图**
```python
import matplotlib.pyplot as plt

# 数据
labels = ["A", "B", "C", "D"]
sizes = [15, 30, 45, 10]

# 创建饼图
plt.pie(sizes, labels=labels, autopct="%1.1f%%", startangle=90)

# 设置标题
plt.title("Pie Chart Example")

# 显示图表
plt.show()
```

#### (5) **子图**
```python
import matplotlib.pyplot as plt

# 数据
x = [1, 2, 3, 4, 5]
y1 = [10, 20, 25, 30, 40]
y2 = [40, 30, 25, 20, 10]

# 创建子图
plt.figure(figsize=(10, 5))  # 设置图表大小

# 第一个子图
plt.subplot(1, 2, 1)  # 1 行 2 列，第 1 个子图
plt.plot(x, y1, label="Line 1", color="blue")
plt.title("Line Chart 1")
plt.legend()

# 第二个子图
plt.subplot(1, 2, 2)  # 1 行 2 列，第 2 个子图
plt.plot(x, y2, label="Line 2", color="red")
plt.title("Line Chart 2")
plt.legend()

# 显示图表
plt.show()
```

---

### 5. **高级功能**
- **自定义样式**：可以通过 `plt.style.use()` 使用预定义的样式，例如：
  ```python
  plt.style.use("ggplot")
  ```
- **添加注释**：使用 `plt.text()` 或 `plt.annotate()` 在图表中添加文本或箭头注释。
- **颜色和标记**：可以通过 `color`、`marker`、`linestyle` 等参数自定义线条颜色、标记和样式。


