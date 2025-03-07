ROS

## 资源

[YL](https://www.yuque.com/u26596123/re4lmd?)

- [Python基础语法](https://www.yuque.com/u26596123/re4lmd/glsgkqzrtygbmugy)

- [Python进阶语法-判断, 循环与函数](https://www.yuque.com/u26596123/re4lmd/zcvm1zlsdnagtbd2)

- [Python进阶语法-数据容器](https://www.yuque.com/u26596123/re4lmd/lqgrxxcmboh41glw)

- [Python高阶语法](https://www.yuque.com/u26596123/re4lmd/on3q87t95utuea4o)

[骆昊](https://github.com/jackfrued/)

- [Python-100-Days](https://github.com/jackfrued/Python-100-Days)

- [Python-Core-50-Courses](https://github.com/jackfrued/Python-Core-50-Courses/)

[官方文档](https://docs.python.org/zh-cn/3.13/)

[极客教程](https://geek-docs.com/)
- [python](https://geek-docs.com/python/python-top-tutorials/)

## 工具

### IPython

启动
```shell
python3 -m IPython
```
退出
```shell
exit  # or: exit()
```

查看帮助

```shell
help()
# follow the guidence: To get a list of available modules, keywords, symbols, or topics, type "modules", "keywords", "symbols", or "topics".  Each module also comes with a one-line summary of what it does; to list the modules whose name or summary contain a given string such as "spam", type "modules spam".

q  # to quit one spesific item
quit  # to quit the help file 
```

编程：按正常的一行一行输进去即可。



## 数据容器

### 数据容器总结
![[63178ff0bddb8b3d19ff53ae8417e90.jpg]]
![[767def4f0bdfa79420e48fb7b1c3371.jpg]]
#### .方法
	new_name = sorted(name, reverse)
		reverse: 不传默认False : 不倒序即正序
		reverse = True : 倒序
			对字典用sorted：对key进行排序，返回包含所有键的列表
			对字符串用sorted：返回一个包含所有拆开了字符的列表
	max_item = max(name)
	min_item = min(name)

#### 比大小
ASCII, UTF-8

逻辑：一个一个比，到不一样的那个开始出大小，跟长度没关系
### 序列sequence
#### 序列总结
![[e3aa546b6378288f581c530b96df6b4.jpg]]

##### 序列的切片
定义：取出一个子序列

语法：sequence_name\[start: stop: step]

- 语法：


	- start : 省略默认0

	- stop : 省略默认值为len(sequence_name)，前取后不取

	- step : 省略默认1；负数：正负决定取值顺序（输出和读取从前到后or从后到前）；跳过stop-1个去取

- 超限：不报错，到最后

- 逻辑：读到start，看step（正负&大小），按他在序列里面找到stop

- 应用：
	倒序输出：print(序列名\[ : : -1]) : 如果前面两个都没填，则默认第一个是-1，最后一个是0

#### 列表list
##### 定义
方法1. list_name = \["任意类型的数据", 123, 4 + 5j, \["甚至可以放列表", 5.3], None, True]

方法2. list_name = list( "里面什么都能装")
##### 访问
list_name\[index] : index从0开始
超过限制：报错

index是负数：反向index：最后一个-1，倒数第二个-2，依此类推

二维列表（列表·里面有列表）：list_name\[index1]\[index2]
##### 修改
list_name\[index] = new_item_which_can_be_any_type
##### 点操作
访问对象的属性和方法

每一种数据类型都是一个类，当用这种数据类型，就是引出一个对象，就可以用这个对象的属性和方法
因此，list后面跟.就可以访问他的方法（函数）

有这些：

	list_name.index(item) 
		返回item的从小到大第一个匹配到的index，默认是正下标
		如果没有这个item，报错
	list_name.count(item)
		返回item在这个list中出现的次数
	len()
		是内置函数，不是list的方法
		用于返回任意可迭代对象的长度
			len("Hi hi")
			len(my_list)  若其中有一个列表，他算一个元素
	list_name.insert(aiming_position, the_inserted_intem)
		要插入到哪里，第一个参数就写几
	list_name.append(the_inserted_intem)
		在末尾添加the_inserted_intem这个元素
	list_name.extend(the_extended_list_name)
		将一个he_extended_list_name并入另一个列表list_name，就是元素插在后面
		完全等价于：list_name += the_extended_list_name
		改变了list_name这个列表
	list_name.remove(item)
		作用是删除从前到后匹配到的第一个item
		如果想都删：遍历 for item in list_name: list_name.remove(item)
	list_name.pop(index)
		删除那个下标对应的元素
		完全等于：del list_name\[index]
			del是一个python内置函数
	list_name.clear()
		清除列表中所有元素
	list_name.sort()
		排序

##### 循环遍历
```python
index = 0
while(index < len(list_name)):
	# 代码块
	index += 1
```
```python
for item in list_name:
	# 代码块
```
```python
index = 0
for index in range(0, len(lit_name)):
	# 代码块
```
PS: range(start, stop, step)
- start : 省略默认0
- stop : 前取后不取
- step : 省略默认1

#### 元组tuple
##### 跟list：
定义：把\[]变成()即可

不同：不能修改！所以.方法没有添加删除那几个

相同：

	.index()
	.count()
	len()
##### 元组的解包
```python
tuple_name = (item1, item2, item3) #多个item，可以是任意数据类型
a, b, c = tuple_name
# 现在，a是item1， 依此类推
```
##### 作用
保护数据，不可修改
函数的多返回值是个元组

##### tips
```python
my_tuple = (124, 'hello', ["a", "b", 89])
my_tuple[2][0] = 'A'
print(my_tuple)
# 被修改了
```

#### 字符串string
##### 跟list相同点
	.index()
	.count()
	len()
##### 跟list不同
不可直接修改！

如果要修改，换新的字符串：见下，用.方法: new_str = ori_str.func(pra)
##### .方法（修改必须新字符串+调用函数）

原字符串永远不可能被修改

	new_str_name = ori_str_name.replace("ori_char", "new_char")
		把所有ori_char都换成new_char
		常用的方法：
			new_str_name = ori_str_name.replace("ori_char", "") ：删除所有ori_char
				例如：new_str_name = ori_str_name.replace(" ", "")：删除所有空格
	new_str_list = ori_str_name.split("flag_char")
		按照flag_char分割字符串，将分割后的碎片存入数组，同时结果中没有flag_char
		![[d60d854b590e526d3b54f08e2bdbaf7.jpg]]
		找到所有单词：new_str_list = ori_str_name.split(" ") or new_str_list = ori_str_name.split()
		不传参数默认是空格
		不能传空字符串
		传入string中没有的东西，返回一个列表，里面有一个元素是ori_str_name
		将每一个char都分开：强制类型转换
			new_str_list = list(ori_str_name)
	new_str_name = ori_str_name.strip("aiming_char")
		字符串的规整：把ori_str_name前后两端的aiming_char删掉
		不传参数：默认空格：想删除前后空格则new_str_name = ori_str_name.strip()
			场景：用AI聊天式办公：前后的空格都占用AI的算力，故删除

### 另外两个
#### 集合set
##### 特点：
不重复、无序、无索引index！
可以修改！
##### 定义：
方法一：set_name = {item1, item2, item3, ......}

方法二：set_name = set(item1, item2, item3, ......)
##### .方法
	len(set_name)也适用
	set_name.add(added_item)
		追加元素，当然，没有顺序随机放置，甚至每次打印那些个元素的顺序都不一样
		如果多次add()同一个元素，则只加一次
	set_name.remove(added_item)
		删除指定元素
	set_name.pop()
		随机删除一个元素
	set_name.clear()
		清空集合

##### 集合的运算(也是.方法)
并集
- 方法一：new_set = set1 | set2
- 方法二：new_set = set1.union(set2)

交集
- 方法一：new_set = set1 & set2
- 方法二：new_set = set1.intersection(set2)

差集
- 方法一：new_set = set1 - set2
- 方法二：new_set = set1.difference(set2)

##### 遍历
只能用for：for item in set_name:

while不行: 因为没有index

##### 应用
给列表去重

	引用：爬去豆瓣排名前100的导演，去分析他们的合作关系之类的东西
```python
my_list = [……]
my_list = list(set(my_list))
```

#### 字典dict
##### 定义
方法1：dict_name = {key1: value1, key2: value2, key3: value3 ……} ：元素为键值对

方法2：dict_name = dict()
##### 规范
数据类型：除键不能是字典外，对key和value其他随便啥数据类型都行

key要唯一：如果不唯一则后面覆盖前面（即按最后一个算）
##### 访问
查找：dict_name\[key_name]

新增：dict_name\[new_key_name] = new_value

修改：dict_name\[key_name] = new_value
	<!--可以通过这种方式修改高考分数：各省考试院对数据库重视程度不一样，有些存在漏洞，故可以修改-->
	<!--在ZJU，可以黑进教务网修改考试成绩，但是你的技术没达到那种超级tmd顶尖的水平，留痕是不可避免的，可溯源，抓到直接……-->
	<!--“我干过别的……嘿嘿嘿……”看看人家大学四年的技术水平，本科毕业直接工作，报价3000的爬虫小项目-->
	<!--by YL-->
没有下标索引
##### .方法
	dict_name.pop(key_name)
		删除指定元素
	dict_name.clear()
		清空字典
	len(dict_name)
		元素个数
	dict_name.keys()
		获取所有的key
		字典的遍历
			方法一：for key in dict_name.keys()
			方法二：for key in dict_name
				print(dict_name\[key]) : 打印出所有值，是个列表
	dict_name.values()
		获取所有value
		返回为dict_values(\[……])：是dict_value类型（用print(dict_name.values())即可），可以print(list(dict_name.values()))直接类型转换
			字典的遍历
				方法三：for value in dicyt_name.values()
	dict_name.items()
		获取所有键值对
		返回值将每个键值对存入一个元组
		所以：优雅的遍历获取键值对方法：
			for key, value in key_name.items()
			这里同时完成了元祖的解包，可以打印：print(f"key:{key}, value:{value}")

## 异常的捕获和处理

[Python高阶语法](https://www.yuque.com/u26596123/re4lmd/on3q87t95utuea4o)

### 定义语法
```python
# 方法一
try:
  # 可能出现异常的代码
except:
  # 出现异常的话要执行的代码
finally:
  # 无论出没出异常，做什么
# 后面要继续执行的代码

# 执行逻辑：执行try后面的很多行代码，如果出现报错，则执行except后面的代码；不管出没出现异常，都执行finally画面的
```
```python
# 方法二：最常用
try:
  # 可能出现异常的代码
except Exception as error: # 其中错误类型是python关键字，error是我指定的临时变量
  # 出现异常的话要执行的代码例如：
  print(f"出错了！错误类型是：{error}")
finally:
  # 无论出没出异常，做什么
# 后面要继续执行的代码
```
```python
# 方法三
try:
  # 可能出现异常的代码
except 错误类型 as e: # 其中错误类型是python关键字，e是我指定的临时变量
  # 出现异常的话要执行的代码例如：
  print(f"出错了！错误类型是：{e}")
finally:
  # 无论出没出异常，做什么
# 后面要继续执行的代码
```

其中错误类型：

- 如果有需求说特定错误需要干特定的事情：看这张指定错误表，按方法三
	![[ad2f337607ec191678ce5e5a1b21fdc.jpg]]
- 如果没有知道并打印具体错误类型的需求：按方法一
- 如果想打印错误类型，没有不同错误打印不同东西的需求：按方法二
也不一定是打印，就特定的需求吧

例子：
```python
def div(a, b):
    return a/b
def calculator(a, b, op):
    try:
        result = op(a, b)
    except Exception as e:
        return f"出错了，错误类型是：{e}"
    return result
a = int(input())
b = int(input())
print(calculator(a, b, div))
```
### 杂项
1. 异常捕获具有传递性
	随着*程序执行的过程*（函数的参数传递和调用过程……）进行传递
		看：YL 7.32 2:28:00
2. except后面得有一个return
	目的是*跳出函数*（结束这一段的执行），跳出之后可以继续执行下面的，如果没有，就跳不出，将会报错并在函数这里停下

## 类和对象

[Python高阶语法](https://www.yuque.com/u26596123/re4lmd/on3q87t95utuea4o)

### 类的定义方法（不够简便）
### 类的构造方法（最简便的）
```python
class Animal():
    def __init__(self, name, age, sound, species = "动物", love_status = False):
        self.name = name
        self.age = age
        self.sound = sound
        self.species = species
        self.__love_status = love_status
    def eat(self):
        print(f"{self.name} is eating")
    def make_sound(self):
        print(f"{self.name}'s sound is {self.sound}")
    def __str__(self):
        return f"我是一只{self.species}"
    def __repr__(self):
        return f"nme:{self.name}, age:{self.age}, sound:{self.sound}, species:{self.species}, love_status:{self.love_status}"
    def __add__(self, other):
        if(self.__love_status and other.__getlove_status):  # 类内的方法可以访问(利用）类内的私有属性__love_status
            return f"{self.name} and {other.name} both have a spouse"
        print(f"{self.name} fells in love with {other.name}")
        return f"their kid's name is {self.name[0] + other.name[0]}"
    def __sub__(self, other):
        return f"{self.name} and {other.name} are not friends"
    def __call__(self):
        self.make_sound()
        # return self.__str__() : 不建议
    def __len__(self):
        return self.age
    def __getitem__(self, index):
        return self.sound[index]
    def __setitem__(self, index, value):
        self.sound[index] = value
    def __getlove_status(self):
        return self.__love_status
# 别看这里的类的继承，AI写的好像有错
class Dog(Animal):
    def __init__(self, name, age, sound):
        super().__init__(name, age, sound, love_status="单身")
    def call(self):
        print(f"{self.name} is barking")
  
dog = Dog(name="公子", age=10, sound="wangwang")
tiger = Animal(name = "齐威王", age=10, sound="roar", species="老虎")
cat = Animal(name = "男爵", age=10, sound="miaomiao", love_status=True, species="猫")
  
animals = [dog, tiger, cat]
for animal in animals:
    animal.make_sound()
  
print(dog)
print(dog + tiger) # 类内的方法可以访问类内的私有属性__love_status
print(dog - cat)
print(tiger())
print(len(tiger))
print(tiger[0])
print(tiger.__love_status) # AttributeError: 'Animal' object has no attribute '__love_status'
print(tiger.__getlove_status()) # AttributeError: 'Animal' object has no attribute '__getlove_status'.
```

^f2109a

类，有成员，成员分为：属性（变量）、方法（函数）
当用类创建对象，该对象自动具有该类的成员，包括变量&函数
第一个关键词就是self规定
**借助self.什么什么在函数体内调用任意类内的成员（属性、方法），一定别忘了self.，否咋报错未定义**
想想其他数据类型
	list(), dict(), tuple(), str(), int(), double(), etc.
	都是啊：
		my_list = list() : 用list类定义对象my_list
		那么，可以：my_list.append(), my_list.remove(), etc.

### 魔术方法
魔术方法的调用通常是隐式的，即由Python解释器在特定操作发生时自动调用，而不是直接由用户代码显式调用
魔术方法的显式调用：可以但是不建议，会被辞退
	另一个方法（可以是自定义也可以是另一个魔术方法）的返回值写例如：return self.\_\_str__()  
 1. \_\_str\_\_()
	 将对象转化成指定字符串并易于打印，如果直接打印则输出该对象的地址
	 调用：print(object)  or  print(str(object))
<details>
<summary>click to view __str__ </summary>
在Python中，`__str__` 是一个魔术方法（也称为特殊方法或双下方法），它定义了当调用内置函数 `str()` 或者在打印对象时，对象应该如何被转换成字符串。简单来说，`__str__` 方法用于提供一个对象的“非正式”或“可读性”字符串表示。

当你定义一个类时，可以重写 `__str__` 方法来返回一个字符串，这个字符串将被用来表示对象。例如：

```python
class Person:
    def __init__(self, name, age):
        self.name = name
        self.age = age

    def __str__(self):
        return f"Person(name={self.name}, age={self.age})"

# 创建对象
p = Person("Alice", 30)

# 打印对象
print(p)  # 输出: Person(name=Alice, age=30)
```

在这个例子中，当我们打印 `p` 对象时，`__str__` 方法被调用，并返回一个格式化的字符串。

</details>
2. \_\_repr\_\_()
	类似于\_\_str\_\_
	调用：print(repr(object))
<details>
<summary> click to view__repr__</summary>
与 `__repr__` 的区别

`__str__` 通常用于提供一个用户友好的字符串表示，而 `__repr__` 方法则用于提供一个更正式的、开发者友好的字符串表示，通常用于调试。如果一个类没有定义 `__str__` 方法，Python 会尝试调用 `__repr__` 方法。如果两者都没有定义，Python 会使用一个默认的表示，通常包含对象的类型和内存地址。

```python
class Person:
    def __init__(self, name, age):
        self.name = name
        self.age = age

    def __str__(self):
        return f"Person(name={self.name}, age={self.age})"

    def __repr__(self):
        return f"Person(name='{self.name}', age={self.age})"

p = Person("Alice", 30)
print(str(p))  # 使用 str() 函数调用 __str__
print(repr(p))  # 使用 repr() 函数调用 __repr__
```

在这个例子中，`__str__` 提供了一个更易读的字符串，而 `__repr__` 提供了一个更详细的字符串，包括引号和类型信息。

使用场景

1. **用户友好性**：当你想让对象的字符串表示更易于理解时，可以重写 `__str__` 方法。
2. **调试**：`__repr__` 通常用于调试，因为它提供了一个更详细的字符串表示，但也可以通过 `__str__` 来提供一个更友好的调试信息。
3. **日志记录**：在日志记录中，使用 `__str__` 可以提供一个简洁的字符串表示，而 `__repr__` 可以提供更多的上下文信息。

注意事项

- 当你重写 `__str__` 方法时，确保返回的是一个字符串类型。
- 如果你的类需要同时支持 `__str__` 和 `__repr__`，通常建议两者都定义，以提供不同的表示形式。

通过重写 `__str__` 方法，你可以控制对象如何被转换成字符串，这在很多情况下都是非常有用的，特别是在需要将对象的信息以字符串形式展示给用户时。
</details>
3. \_\_add\_\_(self, other)
	调用：object1 + object2   eg : print(object1 + object2)
	定义
		参数：self, other
		内部：self.attribute_or_method, other.attribute_or_method
4. \_\_mul\_\_(self, other)
5. \_\_truediv\_\_(self, other)
6. \_\_eq\_\_(self, other)
	参数：self，other
	定义：当使用"\=="时候，自动调用该函数
7. \_\_lt\_\_(self, other)
8. \_\_gt\_\_(self, other)
9. \_\_call\_\_(self)
	使对象可以向函数一样被调用
	使用方法
		def \_\_call\_\_(self):
		# 代码块
		object()   # 调用
10. \_\_len__(self)
11. \_\_getitem__(self, index)
	自定义了用方括号访问下标的行为
12. \_\_setitem__(self, index, value)
	用方括号访问下标并赋值

### 私有成员
一般是通过公有成员进行访问来实现公有成员的功能，但是外部直接访问私有成员是不行的
定义：
	\_\_开头
	私有属性
		\_\_init__()括号中是参数（属性），既然是参数那就不要\_\_, 在self.\_\_private_attribute_name = attribute_or_pramameter_name 这里再定义私有属性，那么，self.\_\_private_attribute_name成为一个私有属性，其值为用类创建对象时给attribute_or_pramameter_name位置传的参数（值）
	私有方法
		直接定义就好

### 类的单继承
定义：class ChildrenClass(ParentClass):
特点：继承所有的公开成员（公开属性&公开方法）
初始化
	\_\_init__(self, its_prarameters_according_to_the_need_regardless_of_whether_it_occurs_in_the_ParentClass)
	super().\_\_init__(the_prameters_occurred_in_the_parentclass_except_self)
	self.the_prameters_didn't_occurred_in_the_parentclass = the_prameters_didn't_occurred_in_the_parentclass
	第二行其实就是一个函数调用，其实是省略了前面好多行self.的属性初始化
覆盖
	子类重写某个方法or属性，则会覆盖父类的相应方法

### 类的多继承
定义
	class ChildrenClass(MainParentClass, ViceParentClass):
初始化
	\_\_init__(self, its_prarameters_according_to_need_regardless_of_whether_it_occurs_in_the_ParentClasses)
	super().\_\_init__(the_prameters_occurred_in_the_MainParentClass_except_self)
	ViceParentClass.\_\_init(self, prameters_occurred_in_the_ViceParentClass)
	self.the_prameters_didn't_occurred_in_the_parentclass = the_prameters_didn't_occurred_in_the_parentclass
	其实super.()代表的就是MainParentClass
选择
	如果亲爹和继父有重复方法，则用亲爹的or亲爹从亲爷爷那里遗传的
	多个继父：谁在前谁关系亲
	不想用亲爹的而想用继父的：自己定义一个方法其返回值是继父的对应方法的返回值
		def call(self, number)
			return ViceParentClass.call(number)

## 模块与库
### 安装
[【pip 安装】国内 pip 镜像源换源方法以及 pip 基本操作_pip 源泉-CSDN博客](https://blog.csdn.net/weixin_57950978/article/details/142653359)
暂时换源：
```zsh
pip install <package_name> -i https://pypi.tuna.tsinghua.edu.cn/simple
```
换成清华源安装
永久还原：
```zsh
pip config set global.index-url https://pypi.tuna.tsinghua.edu.cn/simple
```
换完了

海龟编译器可以直接查看各种库……
pip安装最好！
### 语法
```python
	from libraay_name import item_name as given_name_by_me
```
eg:
```python
from random import randint
```
or
```python
from random import *
# 代表导入random库中的所有东西
```
or
```python
import library_name
library_name.item_name……
```
eg:
```python
import time
time.sleep(second_number)
time.strftime("%Y-%m-%d %H:%M:%S", time.localtime())
```
不知道库里面的东西是什么，or知道是个函数但不知道里面传的参数：鼠标悬浮在函数那里，有注释

import math
import os
import sys

### 模块module
模块：.py文件
在同一文件夹下
	直接import: 假设我现在有一个animal.py, 里面是[[Python#^f2109a|上面这个Animal类]]
```python
import animal
animal1 = animal.Animal(name = "男爵", age=10, sound="miaomiao", love_status=True, species="猫")
animal1.make_sound()
```
or
```python
from animal import Animal
animal1 = Animal(name = "男爵", age=10, sound="miaomiao", love_status=True, species="猫")
animal1.make_sound()
```
PS:
	第一个的 *.* 操作：当引入模块需要调用那个模块中的东西，可以将这个模块当作一个类，进而有 *.* 操作, 调用那个模块（文件）中的任何一个东西
	如果那个模块中还有一个变量 a = 8
	那么可以：print(animal.a)

### 库or包package
库（文件夹），里面有模块（文件）
#### 调用语法
##### 前提

python怎样知道这是一个包而不是一个普通文件夹：
假设现在有一个库（文件夹）叫做myPackage, 里面有三个模块（文件）叫做myModule1.py、myModule2.py、myModule3.py

那么，得在该文件夹下写一个__init__.py文件，里面什么都不用写就行，也可以写东西：
```python
__all__ = ['myModule1', 'myModule2']
```
代表：外部可以访问myModule1和myModule2，其他的模块如myModule3.py无法访问；如果没有__add__[...], 默认可以访问所有的模块

还有其他配置，你自己写库的时候可以自己查
##### 调用
假设现在有一个库（文件夹）叫做myPackage, 里面有一个模块（文件）叫做myModule.py, 里面有一个函数叫做my_func()
```python
from myPackage import myModule
myModule.my_func()
```
or
```python
import myPackage.myModule
myPackage.myModule.my_func()
```
or
```python
from myPackage.myModule import my_func
my_func()
```

python很好学的

## 杂项

- 假：
	0, "", None, \[], (), {}   空字符串、空数列、空的……
	函数return  <=> return None  <=> return 0  <=> ……


## 想了解的东西
服务器，端口,pip, anaconda， 换源

函数注释规范 7.30 1:21:40




![3bf760819dfd8fa8638635ab4b9f3539](image-2.png)
3bf760819dfd8fa8638635ab4b9f3539