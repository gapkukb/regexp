declare module "date" {
    /**出生年月日*/
    export const birth: RegExp;
    /** 日期格式，已考虑平闰年：yyyy-mm-dd*/
    export const yyyymmdd: RegExp;
    /** 日期格式，已考虑平闰年：yyyyMMdd*/
    export const yyyyMMdd: RegExp;
    /** 日期正则，简单判定，未做月份及日期的判定*/
    export const simpleDate: RegExp;
    /** 日期正则，复杂判定*/
    export const complexDate: RegExp;
    /** 月份，格式："01"-"09"和"1"-"12"*/
    export const month: RegExp;
    /** 一个月的31天，格式：01、09和1、31*/
    export const day: RegExp;
    /** 12小时制，hh:mm:ss*/
    export const hours12: RegExp;
    /** 24小时制，hh:mm:ss*/
    export const hours24: RegExp;
}
declare module "network" {
    /** ipv4*/
    export const ipv4: RegExp;
    /** ipv6*/
    export const ipv6: RegExp;
    /** 网址*/
    export const website: RegExp;
    /** 域名*/
    export const domain: RegExp;
    /** 端口号*/
    export const port: RegExp;
    /** 子网掩码*/
    export const subnetMask: RegExp;
}
declare module "number" {
    /** 纯数字*/
    export const number: RegExp;
    /** 整数*/
    export const integer: RegExp;
    /** 正整数*/
    export const positiveInteger: RegExp;
    /** 非正整数（负整数 + 0）*/
    export const nonPositiveInteger: RegExp;
    /** 负整数*/
    export const negtiveInteger: RegExp;
    /** 正数*/
    export const positive: RegExp;
    /** 正数、负数、和小数*/
    export const positiveNegative: RegExp;
    /** 负数*/
    export const negative: RegExp;
    /** 非负整数（正整数 + 0）*/
    export const nonNegtiveInteger: RegExp;
    /** 非零的负整数*/
    export const nonZeroNegativeInteger: RegExp;
    /** 非零的正整数*/
    export const nonZeroPositiveInteger: RegExp;
    /** 浮点数*/
    export const floatPoint: RegExp;
    /** 正浮点数*/
    export const positiveFloatingPoint: RegExp;
    /** 非正浮点数（负浮点数 + 0）*/
    export const nonPositiveFloatingPoint: RegExp;
    /** 负浮点数*/
    export const negativeFloatingPointNumber: RegExp;
    /** 非负浮点数（正浮点数 + 0）*/
    export const nonNegativeFloatingPointNumber: RegExp;
    /** 非零开头的最多带两位小数的数字*/
    export const nonzornBeginMaxTwoDecimal: RegExp;
    /** 有1-4位小数的正实数*/
    export const positiveRealNumber: RegExp;
}
declare module "other" {
    /** 5-11位的腾讯QQ号，腾讯QQ号从10000开始*/
    export const qq: RegExp;
    /** 邮箱*/
    export const email: RegExp;
    /** 银行卡*/
    export const bankCard: RegExp;
    /** IE版本*/
    export const ieVervison: RegExp;
    /** 微信号：6至20位，以字母开头，字母，数字，减号，下划线*/
    export const weChat: RegExp;
    /** 根据工信部2019年最新公布的手机号段*/
    export const phoneAll: RegExp;
    /** 中国移动*/
    export const phoneYidong: RegExp;
    /** 中国联通*/
    export const phoneLiantong: RegExp;
    /** 中国电信*/
    export const phoneDianxin: RegExp;
    /** 16进制颜色*/
    export const hexColor: RegExp;
    /** 10进制值*/
    export const decimal: RegExp;
    /** JSON*/
    export const json: RegExp;
    /** 中文名2到10位（字母，数字，下划线，减号）*/
    export const chinaName: RegExp;
    /** 中英验证码*/
    export const verificationCode: RegExp;
    /** html标签*/
    export const htmlTag: RegExp;
    /** html注释*/
    export const htmlNotes: RegExp;
    /** html片段*/
    export const htmlFragment: RegExp;
    /** CSS属性*/
    export const css: RegExp;
    /** 提取页面的url*/
    export const htmlUrl: RegExp;
    /** 普通电话、传真号码：可以"+"开头，除数字外，可含有"-"*/
    export const fax: RegExp;
    /** 座机号，固定电话*/
    export const telephone: RegExp;
    /** 电话号码，正确格式：XXXX-XXXXXXX，XXXX-XXXXXXXX，XXX-XXXXXXX，XXX-XXXXXXXX，XXXXXXX，XXXXXXXX*/
    export const tel: RegExp;
    /** 用户名正则，4到16位（字母，数字，下划线，减号）*/
    export const userName: RegExp;
    /** 密码强度正则，最少6位，包括至少1个大写字母，1个小写字母，1个数字，1个特殊字符*/
    export const upperLowSpecialNum: RegExp;
    /** 6-16位字符，区分大小写（不能是9位以下的纯数字，不含空格），必须包含大写字母*/
    export const upperLowNum: RegExp;
    /** 6-16个字符，区分大小写（不能是9位以下的纯数字，不含空格）*/
    export const mustNotPureNumber: RegExp;
    /** 6-20个字符，同时包含大、小写字母及数字，不可包含特殊字符*/
    export const upperLowNum2: RegExp;
    /** 中国邮政编码（六位数）*/
    export const postalCode: RegExp;
    /** 18位身份证*/
    export const idCard: RegExp;
    /** 18位的新版身份证*/
    export const newIdCard: RegExp;
    /** 全角标点符(可以有中文)*/
    export const mark: RegExp;
    /** 中文、英文、数字包括下划线*/
    export const zhEnNumber: RegExp;
    /** 以字母开头，长度在6-18之间，只能包含字符、数字和下划线*/
    export const beginLetter: RegExp;
    /** 是否含有 ^%&',;=?$\" 等字符*/
    export const specialChar: RegExp;
    /** base64*/
    export const base64: RegExp;
    /** 64位md5*/
    export const md5: RegExp;
    /** window下"文件夹"路径*/
    export const windowFolder: RegExp;
    /** window下"文件"路径*/
    export const windowFile: RegExp;
    /** 视频链接地址*/
    export const videoUrl: RegExp;
    /** 图片链接地址*/
    export const imgUrl: RegExp;
    /** 统一社会信用代码*/
    export const creditCode: RegExp;
    /** 车牌号(新能源+非新能源)*/
    export const licensePlate: RegExp;
    /** 新能源车牌号*/
    export const newEnergy: RegExp;
    /** 非新能源车牌号*/
    export const nonNewEnergy: RegExp;
    /** 护照（包含香港、澳门）*/
    export const passportId: RegExp;
}
declare module "string" {
    /** 全角:每个全角字符占用两字节空间*/
    export const fullAngle: RegExp;
    export const fullAngle_1: RegExp;
    /** 半角:每个半角字符占用一字节空间(一字节有8位)，共256个编码空间*/
    export const halfAngle: RegExp;
    /** 空白行*/
    export const blank: RegExp;
    /** 首尾空白字符*/
    export const blankSpace: RegExp;
    /** 带有~的字符*/
    export const wave: RegExp;
    /** xml文件*/
    export const xml: RegExp;
    /** 由26个英文字母组成的字符串*/
    export const english: RegExp;
    /** 由数字和26个英文字母组成的字符串*/
    export const englishNumber: RegExp;
    /** 由数字、26个英文字母或者下划线组成的字符串*/
    export const englishNumberSymbol: RegExp;
    /** URL*/
    export const url: RegExp;
    /** URI*/
    export const uri: RegExp;
    /** 匹配双字节字符(包括汉字在内, 一个双字节字符长度计2，ASCII字符计1)*/
    export const doubleCharacter: RegExp;
    /** ASCII*/
    export const ascii: RegExp;
    /** GBK下的中文*/
    export const gbkChina: RegExp;
    /** 中文*/
    export const china: RegExp;
    /** Unicode编码中的汉字范围*/
    export const chinaChar: RegExp;
    /** 韩文*/
    export const korean: RegExp;
    /** 日文*/
    export const japanese: RegExp;
}
declare module "money" {
    export const onlyOneDecimal: RegExp;
    export const nonzeroBegin: RegExp;
    export const zeroOrNonzeroBegin: RegExp;
    export const allNumber: RegExp;
    export const mustTwoDecimal: RegExp;
    export const umaxTwoDecimal: RegExp;
    export const maxTwoDecimal: RegExp;
    export const commaSeparation: RegExp;
}
declare module "index" {
    export * from "date";
    export * from "network";
    export * from "number";
    export * from "other";
    export * from "string";
    export * from "money";
}
