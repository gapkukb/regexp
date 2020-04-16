/** 纯数字*/
export const number = /^-?\d*\.?\d+$/

/** 整数*/
export const integer = /^-?\d+$/

/** 正整数*/
export const positiveInteger = /^\d+$/

/** 非正整数（负整数 + 0）*/
export const nonPositiveInteger = /^-[1-9]\d*|0$/

/** 负整数*/
export const negtiveInteger = /^-\d+$/

/** 正数*/
export const positive = /^\d*\.?\d+$/

/** 正数、负数、和小数*/
export const positiveNegative = /^(\-|\+)?\d+(\.\d+)?$/

/** 负数*/
export const negative = /^-\d*\.?\d+$/

/** 非负整数（正整数 + 0）*/
export const nonNegtiveInteger = /^[1-9]\d*|0$/

/** 非零的负整数*/
export const nonZeroNegativeInteger = /^\-[1-9][0-9]*$/

/** 非零的正整数*/
export const nonZeroPositiveInteger =/^\+?[1-9][0-9]*$/

/** 浮点数*/
export const floatPoint = /^-?([1-9]\d*\.\d*|0\.\d*[1-9]\d*|0?\.0+|0)$/

/** 正浮点数*/
export const positiveFloatingPoint = /^[1-9]\d*\.\d*|0\.\d*[1-9]\d*$/

/** 非正浮点数（负浮点数 + 0）*/
export const nonPositiveFloatingPoint = /^(-([1-9]\d*\.\d*|0\.\d*[1-9]\d*))|0?\.0+|0$/

/** 负浮点数*/
export const negativeFloatingPointNumber = /^-([1-9]\d*\.\d*|0\.\d*[1-9]\d*)$/

/** 非负浮点数（正浮点数 + 0）*/
export const nonNegativeFloatingPointNumber = /^[1-9]\d*\.\d*|0\.\d*[1-9]\d*|0?\.0+|0$/

/** 非零开头的最多带两位小数的数字*/
export const nonzornBeginMaxTwoDecimal = /^([1-9][0-9]*)+(.[0-9]{1,2})?$/

/** 有1-4位小数的正实数*/
export const positiveRealNumber = /^[0-9]+(.[0-9]{1,4})?$/
