
/** 数字英文格式 如：100,000 可以有两位小数*/
export const onlyOneDecimal = /^\d{1,3}(,\d{3})*(\.\d{1,2})?$/
/** 不是0开头的数字*/
export const nonzeroBegin = /^[1-9]\d*$/
/** 0或者非零开头的数字（可以有负号）*/
export const zeroOrNonzeroBegin = /^(0|-?[1-9]\d*)$/
/**纯数字 可以有任意位的小数*/
export const allNumber = /^\d+(\.\d+)?$/
/** 小数点后面至少应该有1位数，所以"10."是不通过的，但是 "10" 和 "10.2" 是通过的*/
/** 必须两位小数*/
export const mustTwoDecimal = /^\d+(.\d{2})?$/

/** 最多两位小数(正数)*/
export const umaxTwoDecimal = /^\d+(\.\d{1,2})?$/
/** 最多两位小数*/
export const maxTwoDecimal = /^[+-]*(\d)*(\.\d{0,2})*$/
/** 100,000 或者 10000 可以有最多两位小数*/
export const commaSeparation = /^(\d+|\d{1,3}(,\d{3})*)(\.\d{1,2})?$/
