# esm 导出值的引用、cjs 导出值的拷贝

- cjs 导出的是 module.exports，其导入就是变量赋值。当module.exports的值是字符串、数字等原始类型时，赋值是值拷贝才会产生导出值改变不会导致导入值改变的现象。
  （即导出基础数据类型时，导出值改变不影响导入值，因为值在初次导入时就已确定）
  （导出引用类型数据时，因为导出的是一个引用，当该引用不变时，导入值不变）

- esm 中的导入值更像一个指针，导入导出值都指向同一个同一个内存地址，所以导入值会随导出值变化而变化。
