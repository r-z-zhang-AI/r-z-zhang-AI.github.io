Welcome to the world of Linear Algebra!
# 矩阵的运算

## 加减、数乘、乘法、转置
### 加减
- 方法：对应位置直接相加
- 运算律：交换律、结合律

### 数乘
- 方法：乘所有
- 运算律：结合律、分配率、变行列式则n次方
- 区别：行列式数乘：乘一列 or 一行

### 乘法
- 要求：前列 = 后行
- 结果：（m * n) * (n * s) == (m * s)
- 方法：(i, j) 位置：前第 i 行与后第 j 列对应相乘相加
- 运算律：
	结合律、分配率
	Attention ！  <font color="#ff0000">没有交换律！分左乘和右乘！</font>
- 乘方：
	0次幂 = E
- 重要等式：A、B均为方阵，有| AB | == | A | * | B |
	意义：将矩阵的乘法与行列式（数字）的乘法关联

### 转置
- 运算律：
1. 转置
2. 加减：分配率
3. 乘法 ：交换分配率（ AB )^T == B^T * A^T 
4. 数乘：分配率
5. 行列式相等
6. 秩相等

- 几种特殊对角矩阵
	一般形式：
		乘法：前行后列（对角矩阵与矩阵A相乘，对角矩阵在前（后），则结果为A第 i 行（列）乘对角矩阵第 i 行（列）的那个元素；即每一行（列）前面的系数相等）
	数量矩阵：
		乘法：相当于数乘
	单位矩阵：主对角线全是1
## 求逆
- 定义：乘积 == E
- 等价：可逆 <=> 非零 <=> 满秩
- 运算：行列式分之一乘伴随阵 Attention <font color="#ff0000">别忘行列式分之一！！别忘行列式分之一！！</font>
	伴随阵注意：
		1. 代数余子式（-1的 n 次幂，n为子式的行标 + 列标）
		2. Aij 的排布：行列反着
- 线性方程的矩阵表示：cramer法则证明；求逆证明唯一
- 运算律
    求逆
    乘法：交换分配率
    数乘：分配率
    转置：可换顺序
    行列式：可换顺序


![[Pasted image 20241018142536.png]]
## 分块

### 可分块的条件
### 运算
直接将每个小矩阵看成元素算
- 和差
- 数乘
- 乘法
- 转置：注意 整体转置 + 每个转置
- 求逆：可现推，设Xij，乘法等于E
	注：A可逆且 AX = O => X = O ；没有可逆条件则不行

### 准对角矩阵
每块都是方阵，
与对角矩阵的性质完全一样
- 加减：对应
- 乘：对应
- 行列式：连乘
- 求逆：分别变逆

## 初等变换&乘法的关系

- 乘初等变换对应的初等矩阵 <=> 初等变换：“—> 变 =”
	行变换<=>对应初等阵左乘原矩阵；
	列变换<=>对应初等阵右乘原矩阵；
- 初等变换和其逆向变换互为逆
	换种说法：初等阵的逆矩阵为同种类型的初等阵
	第一类：st-st ; 第二类：c-1/c ; 第三类： c- -c
- 可逆的充要条件们
	

- 求逆矩阵：
	A|E ——> E|A^-1

## 秩与运算

- P、Q均为可逆方阵
	内容
		与可逆矩乘不改变矩阵的秩
		r(PA) = r(A) , r(AQ) = r(A) , r(PAQ) = r(A)
	原理
		乘可逆矩阵 == 行/列变换
- r(AB) <= min{r(A), r(B)}
- （A,B 不定是方阵），$C$ = $\begin{pmatrix} A&O\\O&B \end{pmatrix}$ or$\begin{pmatrix} O&A\\B&O \end{pmatrix}$，则$r(C) = r(A) + r(B)$
	证明：![[Pasted image 20241104080038.png]]
	证明思想：
- r(A + B) <= r(A) + r(B)
	证明：![[Pasted image 20241104081913.png]]
	<!--构造，增加行or列：秩增加or不变，乘可逆 == 初等变换：秩不变-->
- A、B、C为方阵
	r(AB) >= r(A) + r(B) - n 
	r(ABC) >= r(AB) + r(BC) - r(B)
- 补充![[Pasted image 20241104083451.png]]

# 线性空间
*线性表示核心逻辑：*
	![[Pasted image 20241104150848.png]]![[Pasted image 20241104152107.png]]
	Interpret
		向量空间
			一个列向量用一群列向量线性表示（乘系数），
			形式上，
			等价于<font color="#00b0f0">非齐次</font>线性方程组：
			系数：方程组解；列向量：方程组系数
			所以，
				可表示：有解
					唯一表示：唯一解；
					无数表示：无数解；
				不可表示：无解
			那么，
			可以关联矩阵的秩：
			初等行变换后，
				$r(A) = r(\overline{A})$ : 有解
					  $r(A) = r(\overline{A}) = 行数n$ : 唯一解；
					  $r(A) = r(\overline{A}) ≤ 行数n$ : 无数解；
				$r(A) != r(\overline{A})$ or $r(A) < r(\overline{A})$ or $r(A) + 1 = r(\overline{A})$ : 无解
			因而，
			上下两部分可以一一对应关联：
				唯一表示：$r(A) = r(\overline{A}) = 行数n$
				无数表示：$r(A) = r(\overline{A}) ≤ 行数n$
				不可表示：$r(A) != r(\overline{A})$ or $r(A) < r(\overline{A})$ or $r(A) + 1 = r(\overline{A})$
			做题，
			列向量合并写成线性方程组对应的矩阵，用秩看是否可表示
			至此，
			线性方程组，矩阵的秩，向量空间的线性表示 达到统一
		过渡
			如果不把LHS和RHS中的每一个元素（$\alpha$）理解成列向量，就一个单独的独特的元素，就是到了线性空间
*线性相关/无关核心逻辑：*
	![[Pasted image 20241104152648.png]]
	![[Pasted image 20241104152553.png]]
	Interpret
		向量空间
			在研究$\theta$的线性表示
			线性相关：一群矩阵的存在非全零系数的线性表示等于$\theta$ (0)；线性无关：只有全零系数的一种表示得$\theta$
			同上展开，
			等价于，齐次线性方程组
			所以：
			线性相关：无数解；
			线性无关：唯一0解
			那么，
			关联矩阵的秩：
			左P后：
			首先，由于齐次线性方程组，$r(A) = r(\overline{A})$
			$r(A) < 行数n$ : 无数解；
			$r(A) = 行数n$ : 唯一0解；
			因而，
			上下两部分一一对应关联：
				线性相关：$r(A) < 行数n$
				线性无关：$r(A) = 行数n$ 
		过渡
			如果不把LHS和RHS中的每一个元素（$\alpha$）理解成列向量，就一个单独的独特的元素，就是到了线性空间

**向量空间：本质上都是线性方程组解的问题 ——>柯西消元法 + 用矩阵的秩秩理解线性方程组的解**

线性相关性质
	![[Pasted image 20241104174405.png]]![[Pasted image 20241104174923.png]]![[Pasted image 20241104175117.png]]
	因为：原线性方程组的几个方程遗传到接长向量组中，原来的解出来0，则后来的方程组也得是0
	逆否：原无关，截短无关