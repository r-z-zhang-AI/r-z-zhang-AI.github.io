Welcome to the world of Linear Algebra!
对矩阵分块方法的感觉，矩阵分块能力
对矩阵的秩的理解领悟
决定了线性代数的高度

# 行列式的求解方法

![[dcd5db14c1225985cdc4f31a109f58a.png]]

## 1. 定义

core：消出0！！！

提示：
    行标列标顺序，另一个的逆序数：行列等价
    注意-1的逆序数次方
    三阶：捺-撇

![[999df108a2109e502049152fe17c18a.png]]
### 1.1化为上三角
	右上or左下：主对乘积
	右下or左上：

![[badb82279067619376d9e946aa9d657.png]]
——>简化消0过程，找平衡

## 2. Laplace 定理
 用处：
    0成片出现 or 0很多
核心方法：
    以0多的列（行）为基准，先把它划上，再选合适数量个行（列），形成子式and余子式
易错点：
    有且仅有余子式需要* pow（-1，划去的所有行标和+所有列标和）：变代数余子式
    子式不要，余子式别忘

## 3.  爪形

![[c1de019db9217b04d1f0a6f7edd057a.png]]

## 4. 镶边法

![[3661588baa2b4ebfb064849e3aa85b6.png]]

![[65d8bb9f169e1e2d54cce795bafd465.png]]

![[5dd9ef3d07df4e57a7d46152675c1fe.png]]

![[a8a0d15102e5094340c88cfd917ffc1.png]]

![[d8c92279ac8a9f23c27273394f21026.png]]


# 矩阵与行列式

矩阵是表，行列式是值
矩阵的初等变换：行变换，列变换，包括互换、倍乘、倍加，秩不变，矩阵不讨论值

行列式的变换：
	1. 转置，值不变
	2. 互换（行or列），值相反
		推论：两行相等or成倍：值为0
	3. 倍乘：c乘某一行or列：值变c倍
	4. 分拆：对某一行进行分拆，值为分拆后的俩的和
		分拆很常用！！！
	5. 倍加：值不变


# 矩阵的运算
## 计算
核心思想：
    通过同乘、用逆（先证明行列式非零才有逆）等手段，凑公式，靠到已知量上去（将所求表示成只含已知量和E的式子）
有n：
    找规律，数学归纳
    注意多找几个别就一个
    


给A＊ ——>
    必用ⅠA＊Ⅰ = ⅠAⅠ^(n-1) 
        一般用来求ⅠAⅠ —>
            证可逆
            运算过程中有ⅠAⅠ，要用其值
    必用A × A＊=ⅠAⅠ × E
        可以两边同乘创造出来它



## 矩阵的分块

条件：
	1. 原来A列数 == B的行数：分块之前可以乘
	2. 前面列分块方式和后面行分块方式一样（若抽象阵，乘进去看每块乘积有意义即可）
分块方法
	1. 左的列分块方式 == 右的行分块方式 
	2. 目标：想办法分出来特殊矩阵：零矩阵、单位阵、数量阵、三角形
分块的步骤
	1. 前列 + 后行 ——>方法1(原则) + 方法2（开始朝着目标凑）
	2. 前行、后列 ——>方法2（接着朝着目标凑）

$AXB = C$ 求$X$
1. $A^{-1}(A$  $C)$  = $(E$  $A^{-1}C)$
2. $\begin{pmatrix} B\\A^{-1}C\\ \end{pmatrix}$ $B^{-1}$ = $\begin{pmatrix} E\\A^{-1}CB^{-1}\\ \end{pmatrix}$

# 矩阵的秩
与秩or箭头有关的证明题：
	先用等价标准型证明对，再证一般情况（等价标准型的左P右Q）：利用其他矩阵知识（行列初等变换秩不变/乘可逆秩不变，）
	例题
		![[Pasted image 20241104083225.png]]


















<script src="https://giscus.app/client.js"
        data-repo="r-z-zhang-AI/r-z-zhang-AI.github.io"
        data-repo-id="R_kgDONN6JTg"
        data-category="General"
        data-category-id="DIC_kwDONN6JTs4CkfL9"
        data-mapping="pathname"
        data-strict="0"
        data-reactions-enabled="1"
        data-emit-metadata="1"
        data-input-position="bottom"
        data-theme="preferred_color_scheme"
        data-lang="zh-CN"
        crossorigin="anonymous"
        async>
</script>