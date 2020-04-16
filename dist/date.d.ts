/**出生年月日*/
export declare const birth: RegExp;
/** 日期格式，已考虑平闰年：yyyy-mm-dd*/
export declare const yyyymmdd: RegExp;
/** 日期格式，已考虑平闰年：yyyyMMdd*/
export declare const yyyyMMdd: RegExp;
/** 日期正则，简单判定，未做月份及日期的判定*/
export declare const simpleDate: RegExp;
/** 日期正则，复杂判定*/
export declare const complexDate: RegExp;
/** 月份，格式："01"-"09"和"1"-"12"*/
export declare const month: RegExp;
/** 一个月的31天，格式：01、09和1、31*/
export declare const day: RegExp;
/** 12小时制，hh:mm:ss*/
export declare const hours12: RegExp;
/** 24小时制，hh:mm:ss*/
export declare const hours24: RegExp;
