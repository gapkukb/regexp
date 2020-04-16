
/** 全角:每个全角字符占用两字节空间*/
export const fullAngle = /[^\uFF00-\uFFFF]/g
export const fullAngle_1 = /[^\x00-\xff]/g

/** 半角:每个半角字符占用一字节空间(一字节有8位)，共256个编码空间*/
export const halfAngle = /[\x00-\xff]/g

/** 空白行*/
export const blank = /\n\s*\r/

/** 首尾空白字符*/
export const blankSpace = /^\s*|\s*$/

/** 带有~的字符*/
export const wave = /[^~\x22]+/i

/** xml文件*/
export const xml = /^([a-zA-Z]+-?)+[a-zA-Z0-9]+\.[x|X][m|M][l|L]$/

/** 由26个英文字母组成的字符串*/
export const english = /^[A-Za-z]+$/

/** 由数字和26个英文字母组成的字符串*/
export const englishNumber = /^[A-Za-z0-9]+$/

/** 由数字、26个英文字母或者下划线组成的字符串*/
export const englishNumberSymbol = /^\w+$/

/** URL*/
export const url = /^https?:\/\/(([a-zA-Z0-9_-])+(\.)?)*(:\d+)?(\/((\.)?(\?)?=?&?[a-zA-Z0-9_-](\?)?)*)*$/i

/** URI*/
export const uri = /[a-zA-z]+:\/\/[^\s]*/

/** 匹配双字节字符(包括汉字在内, 一个双字节字符长度计2，ASCII字符计1)*/
export const doubleCharacter = /[^\x00-\xff]/

/** ASCII*/
export const ascii = /\x20-\x7f/

/** GBK下的中文*/
export const gbkChina = /\xa1-\xff/

/** 中文*/
export const china = /[\u4E00-\u9FA5]/

/** Unicode编码中的汉字范围*/
export const chinaChar = /^[\u2E80-\u9FFF]+$/

/** 韩文*/
export const korean = /^\x3130-\x318F$/

/** 日文*/
export const japanese = /^\u0800-\u4e00$/
