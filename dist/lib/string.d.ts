/** 全角:每个全角字符占用两字节空间*/
export declare const fullAngle: RegExp;
export declare const fullAngle_1: RegExp;
/** 半角:每个半角字符占用一字节空间(一字节有8位)，共256个编码空间*/
export declare const halfAngle: RegExp;
/** 空白行*/
export declare const blank: RegExp;
/** 首尾空白字符*/
export declare const blankSpace: RegExp;
/** 带有~的字符*/
export declare const wave: RegExp;
/** xml文件*/
export declare const xml: RegExp;
/** 由26个英文字母组成的字符串*/
export declare const english: RegExp;
/** 由数字和26个英文字母组成的字符串*/
export declare const englishNumber: RegExp;
/** 由数字、26个英文字母或者下划线组成的字符串*/
export declare const englishNumberSymbol: RegExp;
/** URL*/
export declare const url: RegExp;
/** URI*/
export declare const uri: RegExp;
/** 匹配双字节字符(包括汉字在内, 一个双字节字符长度计2，ASCII字符计1)*/
export declare const doubleCharacter: RegExp;
/** ASCII*/
export declare const ascii: RegExp;
/** GBK下的中文*/
export declare const gbkChina: RegExp;
/** 中文*/
export declare const china: RegExp;
/** Unicode编码中的汉字范围*/
export declare const chinaChar: RegExp;
/** 韩文*/
export declare const korean: RegExp;
/** 日文*/
export declare const japanese: RegExp;
