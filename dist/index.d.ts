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
/** 数字英文格式 如：100,000 可以有两位小数*/
export declare const onlyOneDecimal: RegExp;
/** 不是0开头的数字*/
export declare const nonzeroBegin: RegExp;
/** 0或者非零开头的数字（可以有负号）*/
export declare const zeroOrNonzeroBegin: RegExp;
/**纯数字 可以有任意位的小数*/
export declare const allNumber: RegExp;
/** 小数点后面至少应该有1位数，所以"10."是不通过的，但是 "10" 和 "10.2" 是通过的*/
/** 必须两位小数*/
export declare const mustTwoDecimal: RegExp;
/** 最多两位小数(正数)*/
export declare const umaxTwoDecimal: RegExp;
/** 最多两位小数*/
export declare const maxTwoDecimal: RegExp;
/** 100,000 或者 10000 可以有最多两位小数*/
export declare const commaSeparation: RegExp;
/** ipv4*/
export declare const ipv4: RegExp;
/** ipv6*/
export declare const ipv6: RegExp;
/** 网址*/
export declare const website: RegExp;
/** 域名*/
export declare const domain: RegExp;
/** 端口号*/
export declare const port: RegExp;
/** 子网掩码*/
export declare const subnetMask: RegExp;
/** 纯数字*/
export declare const number: RegExp;
/** 整数*/
export declare const integer: RegExp;
/** 正整数*/
export declare const positiveInteger: RegExp;
/** 非正整数（负整数 + 0）*/
export declare const nonPositiveInteger: RegExp;
/** 负整数*/
export declare const negtiveInteger: RegExp;
/** 正数*/
export declare const positive: RegExp;
/** 正数、负数、和小数*/
export declare const positiveNegative: RegExp;
/** 负数*/
export declare const negative: RegExp;
/** 非负整数（正整数 + 0）*/
export declare const nonNegtiveInteger: RegExp;
/** 非零的负整数*/
export declare const nonZeroNegativeInteger: RegExp;
/** 非零的正整数*/
export declare const nonZeroPositiveInteger: RegExp;
/** 浮点数*/
export declare const floatPoint: RegExp;
/** 正浮点数*/
export declare const positiveFloatingPoint: RegExp;
/** 非正浮点数（负浮点数 + 0）*/
export declare const nonPositiveFloatingPoint: RegExp;
/** 负浮点数*/
export declare const negativeFloatingPointNumber: RegExp;
/** 非负浮点数（正浮点数 + 0）*/
export declare const nonNegativeFloatingPointNumber: RegExp;
/** 非零开头的最多带两位小数的数字*/
export declare const nonzornBeginMaxTwoDecimal: RegExp;
/** 有1-4位小数的正实数*/
export declare const positiveRealNumber: RegExp;
/** 5-11位的腾讯QQ号，腾讯QQ号从10000开始*/
export declare const qq: RegExp;
/** 邮箱*/
export declare const email: RegExp;
/** 银行卡*/
export declare const bankCard: RegExp;
/** IE版本*/
export declare const ieVervison: RegExp;
/** 微信号：6至20位，以字母开头，字母，数字，减号，下划线*/
export declare const weChat: RegExp;
/** 根据工信部2019年最新公布的手机号段*/
export declare const phoneAll: RegExp;
/** 中国移动*/
export declare const phoneYidong: RegExp;
/** 中国联通*/
export declare const phoneLiantong: RegExp;
/** 中国电信*/
export declare const phoneDianxin: RegExp;
/** 16进制颜色*/
export declare const hexColor: RegExp;
/** 10进制值*/
export declare const decimal: RegExp;
/** JSON*/
export declare const json: RegExp;
/** 中文名2到10位（字母，数字，下划线，减号）*/
export declare const chinaName: RegExp;
/** 中英验证码*/
export declare const verificationCode: RegExp;
/** html标签*/
export declare const htmlTag: RegExp;
/** html注释*/
export declare const htmlNotes: RegExp;
/** html片段*/
export declare const htmlFragment: RegExp;
/** CSS属性*/
export declare const css: RegExp;
/** 提取页面的url*/
export declare const htmlUrl: RegExp;
/** 普通电话、传真号码：可以"+"开头，除数字外，可含有"-"*/
export declare const fax: RegExp;
/** 座机号，固定电话*/
export declare const telephone: RegExp;
/** 电话号码，正确格式：XXXX-XXXXXXX，XXXX-XXXXXXXX，XXX-XXXXXXX，XXX-XXXXXXXX，XXXXXXX，XXXXXXXX*/
export declare const tel: RegExp;
/** 用户名正则，4到16位（字母，数字，下划线，减号）*/
export declare const userName: RegExp;
/** 密码强度正则，最少6位，包括至少1个大写字母，1个小写字母，1个数字，1个特殊字符*/
export declare const upperLowSpecialNum: RegExp;
/** 6-16位字符，区分大小写（不能是9位以下的纯数字，不含空格），必须包含大写字母*/
export declare const upperLowNum: RegExp;
/** 6-16个字符，区分大小写（不能是9位以下的纯数字，不含空格）*/
export declare const mustNotPureNumber: RegExp;
/** 6-20个字符，同时包含大、小写字母及数字，不可包含特殊字符*/
export declare const upperLowNum2: RegExp;
/** 中国邮政编码（六位数）*/
export declare const postalCode: RegExp;
/** 18位身份证*/
export declare const idCard: RegExp;
/** 18位的新版身份证*/
export declare const newIdCard: RegExp;
/** 全角标点符(可以有中文)*/
export declare const mark: RegExp;
/** 中文、英文、数字包括下划线*/
export declare const zhEnNumber: RegExp;
/** 以字母开头，长度在6-18之间，只能包含字符、数字和下划线*/
export declare const beginLetter: RegExp;
/** 是否含有 ^%&',;=?$\" 等字符*/
export declare const specialChar: RegExp;
/** base64*/
export declare const base64: RegExp;
/** 64位md5*/
export declare const md5: RegExp;
/** window下"文件夹"路径*/
export declare const windowFolder: RegExp;
/** window下"文件"路径*/
export declare const windowFile: RegExp;
/** 视频链接地址*/
export declare const videoUrl: RegExp;
/** 图片链接地址*/
export declare const imgUrl: RegExp;
/** 统一社会信用代码*/
export declare const creditCode: RegExp;
/** 车牌号(新能源+非新能源)*/
export declare const licensePlate: RegExp;
/** 新能源车牌号*/
export declare const newEnergy: RegExp;
/** 非新能源车牌号*/
export declare const nonNewEnergy: RegExp;
/** 护照（包含香港、澳门）*/
export declare const passportId: RegExp;
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
