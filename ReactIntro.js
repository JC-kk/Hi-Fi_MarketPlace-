// 筛选数组中的大于5的数据并放入一个新的数组
const ary = [2, 5, 3, 7, 21, 10, 3, 1]

const rst = []

for(let i in ary) {
    if(ary[i] > 5) {
        rst.push(ary[i])
    }_
}

// 命令式编码，命令机器怎么去做（how），命令式编码的主要关注计算机执行步骤
console.log(rst)


// react声明式编码
const array = [2, 5, 3, 7, 21, 10, 3, 1]
const result = array.filter(item => item > 5)

console.log(result)


// filter直接