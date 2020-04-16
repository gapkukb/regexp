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
