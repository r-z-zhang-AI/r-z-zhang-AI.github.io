
# Content & Details

- ***Array***
——The definition and call of array
	definition : 
		in function 'main'
			1. int t ; int arr\[t] ; —> correct
			2. int arr ; —> error
			3. int arr\[ ] ;  —> error
			4. int arr\[t] ;  —> error
		in self-defined function
			You should make sure that the array is passed as a parameter. Only in this way the array you input or define in main function can be passed into the defined function. 
			As parameter : 
			1. int arr\[ ] ; —> correct
			2. int t ; int arr\[t] ; —> correct
			3. int arr ; —> error
			4. int arr\[t] ; —> error
	call : 
		A number in it
			arr\[i] ****
		As paremeter :
			int arr\[7] = {1,6,3,87,5,99,65};sort(arr); —> correct
			int arr\[7] = {1,6,3,87,5,99,65};sort(arr\[7]); —> error




## 理论

- 循环 if 条件内部将 == 写成 = ：
	变量被重新赋值，返回新的值给括号内判断真假：0则假， 非0则真；<font color="#00b0f0">其实就是看括号内表达式的真假</font>
	真则执行它，假则执行后面的
	
	int x = 2, y
	if(x = 5) y = 5;
	else y = 6;
	printf("%d %d", x,y);
	
	int x, y;
	if(x = 0) y = 6;
	else y = 5;
	printf("%d %d", x,y);
	
	int x = 0, y;
	if(x++) y = 5;
	else y = 6;
	printf("%d %d", x,y);
	
	int x = 0, y;
	if(++x) y = 5;
	else y = 6;
	printf("%d %d", x,y);
	
	以上程序段执行后，x和y分别是多少呢？


- 循环内外用相同的循环变量：
	1      # include<stdio.h>
	2       int main()
	3       {
	4               int i;
	5               for(i = 1; i < 20; i++)
	6               {
	7                       for(i = 1; i<= 10; i++)
	8                       {
	9                               printf("hi");
	10                      }
	11              }
	12      }
	![[Pasted image 20241017190130.png]]

- 循环的执行过程
	上面那个程序到gdb里面run一下
	执行完 for(i = 1; i < 20; i++) 这一句，i 就+1
- int 和 double
	![[53c17156f6ffa4372ddae69fe4265e1.jpg]]

辉煌战绩
![[0d6318858e5e93ef8c29f1c3ff5ae35.jpg]]
![[eeb3b32f033b0892c00862fd15bd38a.jpg]]
![[9c21c8092334d0994dfee716c8cc17d.jpg]]

4-4问一下

## 实验

- 循环与分支
	循环：while和for，两种
	分支：if和switch
	if 不是循环！
	while不是判断！
	***if 和 while 别混***
	

- 学会用flag

- 函数别忘了返回！别忘了 return ！

- scanf函数
	![[Pasted image 20241018154647.png]]
	你好像突然不会scanf了！
	逐个输入字符串的每一个字符
	scanf 别给我忘了&
- 循环
	while比for更加灵活好像！后面再想想
	while（1）为无限循环

- 单双引号！！！

    字符都是单引号啊，按下shift你将永远查不出来。





# Thought & Summary

## 存在的问题：
version1.0
程序填空题想不到
基础理论知识完全空白

version1.5
理论杂项仍有缺漏
细节
对知识的理解
<font color="#ff0000">没有一步一步仔细读程序，没有耐心去静下来读程序，而是据自己的感觉推理：上一步是啥下一步就照着他来</font>
# Methods

## Exams：

//计科机考：
//上来先看编程题
//有思路则立马写注释，
//没思路就过，中间想想


第一题5min拿下
一定相信自己做的出来！
先想好再写！先想好再写！先想好再写！
用草稿纸！用草稿纸！用草稿纸！
先把所有思路想到想完整，
别一上来就写，

在草稿纸上：
	写出来所有要用的函数，
	写一下函数怎样实现