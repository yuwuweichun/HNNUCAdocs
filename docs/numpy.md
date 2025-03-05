# numpy基础教学

### 1.数组的创建

一维数组

```python
import numpy as np

a = np.array([1, 2, 3, 4, 5])
print(a)
```

二维数组

```python
import numpy as np

b = np.array([[1, 2, 3], [4, 5, 6]])
print(b)
```

随机数组

```python
import numpy as np

c = np.random.rand(3, 4)
print(c)
# 3行4列，0-1之间均匀分布的随机64位浮点数
```

```python
import numpy as np

d = np.random.randint(1, 10, size=(3, 4))
print(d)
# 3行4列，1-10之间均匀分布的随机整数
```

```python
import numpy as np

e = np.random.randn(3, 4)
print(e)
# 3行4列，标准正态分布的随机64位浮点数
```

```python
import numpy as np

f = np.random.normal(loc=0, scale=1, size=(3, 4))
print(f)
# 3行4列，符合正态分布的随机64位浮点数
# loc：均值
# scale：标准差
```

该方法随机数生成符合下列正态分布
$p(x) = \frac{1}{\sqrt{ 2 \pi \sigma^2 }} e^{ - \frac{ (x - \mu)^2 } {2 \sigma^2} }$

全0或全1的数组

```python
import numpy as np

g = np.zeros((3, 4))
print(g)
# 3行4列，全0数组

h = np.ones((3, 4))
print(h)
# 3行4列，全1数组
```

全空数组

```python
import numpy as np

i = np.empty((3, 4))
print(i)
# 3行4列，全空数组，其中数值无限接近于0而非真0
```

连续序列数组

```python
import numpy as np

j = np.arange(10, 30, 2)
print(j)
# 10-28，步长为2的数组（包含10，不包含30）
```

连续有间隔数组

```python
import numpy as np

k = np.linspace(10, 30, 6)
print(k)
# 10-30，只包含6个元素的数组，在10-30之间均分成6份的等差数列
```

### 2.数组的属性

基本属性

```python
import numpy as np

data= np.array([[1,2,3],[4,5,6]])

print(data.ndim)  #维度 2
print(data.shape) #形状 (2, 3)
print(data.dtype) #数据类型 int64(常用的还有float64，内置一共19种数据类型)
print(data.size)  #元素总个数 6
```

数据统计

```python
import numpy as np

data= np.array([[[1,2,3],[4,5,6]],
                [[7,8,9],[10,11,12]]])

print(np.mean(data))   #均值
print(np.median(data)) #中位数
print(np.std(data))    #标准差
print(np.var(data))    #方差
print(np.ptp(data))    #极差
print(np.max(data))    #最大值
print(np.min(data))    #最小值
print(np.sum(data))    #求和
print(np.prod(data))   #积
print(np.cumsum(data)) #累加(输出的是一个一维数组，表示累加的和)
print(np.cumprod(data))#累乘(输出的是一个一维数组，表示累乘的积)

```

::: tip
np还有其他更多处理数据的函数，这里只是举例了几个常用的函数。
更多的可以查询[官方文档](https://numpy.org/doc/stable/reference/routines.html)
:::

### 3.数组的基本操作

改变形状

```python
import numpy as np

a = np.array([[1, 2, 3], [4, 5, 6]])
print(a.shape)
# (2, 3)

b = a.reshape(3, 2)
print(b)
# [[1 2]
#  [3 4]
#  [5 6]]

c = a.reshape(6)
print(c)
# [1 2 3 4 5 6]
```

数组的拼接

```python
import numpy as np

a = np.array([[1, 2, 3], [4, 5, 6]])
b = np.array([[7, 8, 9], [10, 11, 12]])

c = np.vstack((a, b)) #垂直拼接
print(c)
# [[ 1  2  3]
#  [ 4  5  6]
#  [ 7  8  9]
#  [10 11 12]]

d = np.hstack((a, b)) #水平拼接
print(d)
# [[ 1  2  3  7  8  9]
#  [ 4  5  6 10 11 12]]
```

数组转置

```python
import numpy as np

a = np.array([[1, 2, 3], [4, 5, 6]])

b = a.T
print(b)
# [[1 4]
#  [2 5]
#  [3 6]]
```

数组切片

```python
import numpy as np

data= np.array([[[1,2,3,4,5],
                 [6,7,8,9,10],
                 [11,12,13,14,15]],
                [[16,17,18,19,20],
                 [21,22,23,24,25],
                 [26,27,28,29,30]]])
print(data)

print(data[0:1])
#取出第一维度的全部元素
# [[[ 1  2  3  4  5]
#   [ 6  7  8  9 10]
#   [11 12 13 14 15]]]

print(data[0:1,0:2])
#取出第一维度的前两行
# [[[ 1  2  3  4  5]
#   [ 6  7  8  9 10]]]

print(data[0:1,:,0:2])
#先取出第一个维度，第二个维度不变，第三个维度保留前两个元素
# [[[ 1  2]
#   [ 6  7]
#   [11 12]]]
```

### 4.数组的运算

数组的加减乘除

```python
import numpy as np

a = np.array([[1, 2, 3], [4, 5, 6]])
b = np.array([[7, 8, 9], [10, 11, 12]])

c = a + b
print(c)
# [[ 8  10  12]
#  [14 16 18]]

d = a - b
print(d)
# [[-6 -6 -6]
#  [-6 -6 -6]]

e = a * b #元素相乘，保留shape，注意与矩阵乘法区分
print(e)
# [[ 7 16 27]
#  [40 55 72]]

f = a / b
print(f)
# [[0.14285714 0.25       0.33333333]
#  [0.4        0.45454545 0.5       ]]

g = a @ b.T #矩阵乘法
print(g)
#[[ 50  68]
# [122 167]]
```

### 5.数组IO

单个数组的读写

```python
import numpy as np

# 写入文件
a = np.array([[1, 2, 3], [4, 5, 6]])
np.save('data.npy', a)

# 读取文件
b = np.load('data.npy')
print(b)
# [[1. 2. 3.]
#  [4. 5. 6.]]
```

多个数组的读写

```python
import numpy as np

# 写入文件
a = np.array([[1, 2, 3], [4, 5, 6]])
b = np.array([[7, 8, 9], [10, 11, 12]])
np.savez('data.npz', a=a, b=b)

# 读取文件
data = np.load('data.npz')
print(data['a'])
# [[1. 2. 3.]
#  [4. 5. 6.]]

print(data['b'])
# [[ 7.  8.  9.]
#  [10. 11. 12.]]
```

<CommentService />