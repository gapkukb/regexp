define("date", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    /**出生年月日*/
    exports.birth = /^(19|20)\d{2}\-((0?[1-9])|(1[0-2]))\-((0?[1-9])|([1-2]\d)|3[01])$/;
    /** 日期格式，已考虑平闰年：yyyy-mm-dd*/
    exports.yyyymmdd = /^[1-2][0-9][0-9][0-9]-[0-1]{0,1}[0-9]-[0-3]{0,1}[0-9]$/;
    /** 日期格式，已考虑平闰年：yyyyMMdd*/
    exports.yyyyMMdd = /^(?:(?!0000)[0-9]{4}(?:(?:0[1-9]|1[0-2])(?:0[1-9]|1[0-9]|2[0-8])|(?:0[13-9]|1[0-2])(?:29|30)|(?:0[13578]|1[02])31)|(?:[0-9]{2}(?:0[48]|[2468][048]|[13579][26])|(?:0[48]|[2468][048]|[13579][26])00)0229)$/;
    /** 日期正则，简单判定，未做月份及日期的判定*/
    exports.simpleDate = /^\d{4}(\-)\d{1,2}\1\d{1,2}$/;
    /** 日期正则，复杂判定*/
    exports.complexDate = /^(?:(?!0000)[0-9]{4}-(?:(?:0[1-9]|1[0-2])-(?:0[1-9]|1[0-9]|2[0-8])|(?:0[13-9]|1[0-2])-(?:29|30)|(?:0[13578]|1[02])-31)|(?:[0-9]{2}(?:0[48]|[2468][048]|[13579][26])|(?:0[48]|[2468][048]|[13579][26])00)-02-29)$/;
    /** 月份，格式："01"-"09"和"1"-"12"*/
    exports.month = /^(0?[1-9]|1[0-2])$/;
    /** 一个月的31天，格式：01、09和1、31*/
    exports.day = /^((0?[1-9])|((1|2)[0-9])|30|31)$/;
    /** 12小时制，hh:mm:ss*/
    exports.hours12 = /^(?:1[0-2]|0?[1-9]):[0-5]\d:[0-5]\d$/;
    /** 24小时制，hh:mm:ss*/
    exports.hours24 = /^(?:[01]\d|2[0-3]):[0-5]\d:[0-5]\d$/;
});
define("network", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    /** ipv4*/
    exports.ipv4 = /^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;
    /** ipv6*/
    exports.ipv6 = /^((([0-9A-Fa-f]{1,4}:){7}[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){6}:[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){5}:([0-9A-Fa-f]{1,4}:)?[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){4}:([0-9A-Fa-f]{1,4}:){0,2}[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){3}:([0-9A-Fa-f]{1,4}:){0,3}[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){2}:([0-9A-Fa-f]{1,4}:){0,4}[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){6}((\b((25[0-5])|(1\d{2})|(2[0-4]\d)|(\d{1,2}))\b)\.){3}(\b((25[0-5])|(1\d{2})|(2[0-4]\d)|(\d{1,2}))\b))|(([0-9A-Fa-f]{1,4}:){0,5}:((\b((25[0-5])|(1\d{2})|(2[0-4]\d)|(\d{1,2}))\b)\.){3}(\b((25[0-5])|(1\d{2})|(2[0-4]\d)|(\d{1,2}))\b))|(::([0-9A-Fa-f]{1,4}:){0,5}((\b((25[0-5])|(1\d{2})|(2[0-4]\d)|(\d{1,2}))\b)\.){3}(\b((25[0-5])|(1\d{2})|(2[0-4]\d)|(\d{1,2}))\b))|([0-9A-Fa-f]{1,4}::([0-9A-Fa-f]{1,4}:){0,5}[0-9A-Fa-f]{1,4})|(::([0-9A-Fa-f]{1,4}:){0,6}[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){1,7}:))$/i;
    /** 网址*/
    exports.website = /^(?=^.{3,255}$)(http(s)?:\/\/)?(www\.)?[a-zA-Z0-9][-a-zA-Z0-9]{0,62}(\.[a-zA-Z0-9][-a-zA-Z0-9]{0,62})+(:\d+)*(\/\w+\.\w+)*([\?&]\w+=\w*)*$/;
    /** 域名*/
    exports.domain = /^(?=^.{3,255}$)[a-zA-Z0-9][-a-zA-Z0-9]{0,62}(\.[a-zA-Z0-9][-a-zA-Z0-9]{0,62})+$/;
    /** 端口号*/
    exports.port = /^[1-9]$|(^[1-9][0-9]$)|(^[1-9][0-9][0-9]$)|(^[1-9][0-9][0-9][0-9]$)|(^[1-6][0-5][0-5][0-3][0-5]$)/;
    /** 子网掩码*/
    exports.subnetMask = /^(254|252|248|240|224|192|128|0)\.0\.0\.0|255\.(254|252|248|240|224|192|128|0)\.0\.0|255\.255\.(254|252|248|240|224|192|128|0)\.0|255\.255\.255\.(254|252|248|240|224|192|128|0)$/;
});
define("number", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    /** 纯数字*/
    exports.number = /^-?\d*\.?\d+$/;
    /** 整数*/
    exports.integer = /^-?\d+$/;
    /** 正整数*/
    exports.positiveInteger = /^\d+$/;
    /** 非正整数（负整数 + 0）*/
    exports.nonPositiveInteger = /^-[1-9]\d*|0$/;
    /** 负整数*/
    exports.negtiveInteger = /^-\d+$/;
    /** 正数*/
    exports.positive = /^\d*\.?\d+$/;
    /** 正数、负数、和小数*/
    exports.positiveNegative = /^(\-|\+)?\d+(\.\d+)?$/;
    /** 负数*/
    exports.negative = /^-\d*\.?\d+$/;
    /** 非负整数（正整数 + 0）*/
    exports.nonNegtiveInteger = /^[1-9]\d*|0$/;
    /** 非零的负整数*/
    exports.nonZeroNegativeInteger = /^\-[1-9][0-9]*$/;
    /** 非零的正整数*/
    exports.nonZeroPositiveInteger = /^\+?[1-9][0-9]*$/;
    /** 浮点数*/
    exports.floatPoint = /^-?([1-9]\d*\.\d*|0\.\d*[1-9]\d*|0?\.0+|0)$/;
    /** 正浮点数*/
    exports.positiveFloatingPoint = /^[1-9]\d*\.\d*|0\.\d*[1-9]\d*$/;
    /** 非正浮点数（负浮点数 + 0）*/
    exports.nonPositiveFloatingPoint = /^(-([1-9]\d*\.\d*|0\.\d*[1-9]\d*))|0?\.0+|0$/;
    /** 负浮点数*/
    exports.negativeFloatingPointNumber = /^-([1-9]\d*\.\d*|0\.\d*[1-9]\d*)$/;
    /** 非负浮点数（正浮点数 + 0）*/
    exports.nonNegativeFloatingPointNumber = /^[1-9]\d*\.\d*|0\.\d*[1-9]\d*|0?\.0+|0$/;
    /** 非零开头的最多带两位小数的数字*/
    exports.nonzornBeginMaxTwoDecimal = /^([1-9][0-9]*)+(.[0-9]{1,2})?$/;
    /** 有1-4位小数的正实数*/
    exports.positiveRealNumber = /^[0-9]+(.[0-9]{1,4})?$/;
});
define("other", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    /** 5-11位的腾讯QQ号，腾讯QQ号从10000开始*/
    exports.qq = /^[1-9][0-9]{4,11}$/;
    /** 邮箱*/
    exports.email = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    /** 银行卡*/
    exports.bankCard = /^([1-9]{1})(\d{15}|\d{18})$/;
    /** IE版本*/
    exports.ieVervison = /^.*MSIE [5-8](?:\.[0-9]+)?(?!.*Trident\/[5-9]\.0).*$/;
    /** 微信号：6至20位，以字母开头，字母，数字，减号，下划线*/
    exports.weChat = /^[a-zA-Z]([-_a-zA-Z0-9]{5,19})+$/;
    /** 根据工信部2019年最新公布的手机号段*/
    exports.phoneAll = /^(?:(?:\+|00)86)?1(?:(?:3[\d])|(?:4[5-7|9])|(?:5[0-3|5-9])|(?:6[5-7])|(?:7[0-8])|(?:8[\d])|(?:9[1|8|9]))\d{8}$/;
    /** 中国移动*/
    exports.phoneYidong = /^1(34[0-8]|3[5-9\d]|440|4[78]\d|5[0-27-9]\d|70[356]|78\d|8[2-478]\d|98\d)\d{7}$/;
    /** 中国联通*/
    exports.phoneLiantong = /^1(3[0-2]\d|4[56]\d|5[56]\d|66\d|70[4789]|71|7[56]\d|8[56]\d)\d{7}$/;
    /** 中国电信*/
    exports.phoneDianxin = /^1(3[3]\d|349|410|49\d|53\d|70[0-2]|7[37]\d|740|8[019]\d|99\d)\d{7}$/;
    /** 16进制颜色*/
    exports.hexColor = /#?([a-fA-F0-9]{6}|[a-fA-F0-9]{3})/;
    /** 10进制值*/
    exports.decimal = /^d+.d+$/;
    /** JSON*/
    exports.json = /^\w+\(({[^()]+})\)$/;
    /** 中文名2到10位（字母，数字，下划线，减号）*/
    exports.chinaName = /^[\u4E00-\u9FA5]{2,10}(·[\u4E00-\u9FA5]{2,10}){0,2}$/;
    /** 中英验证码*/
    exports.verificationCode = /^([a-zA-Z0-9]{4}|[a-zA-Z0-9]{6})$/;
    /** html标签*/
    exports.htmlTag = /<(.*)>.*<\/\1>|<(.*) \/>/;
    /** html注释*/
    exports.htmlNotes = /^!--[\s\S]*?-->$/;
    /** html片段*/
    exports.htmlFragment = /^<([a-z]+)([^<]+)*(?:>(.*)<\/\1>|\s+\/>)$/;
    /** CSS属性*/
    exports.css = /^\s*[a-zA-Z\-]+\s*[:]{1}\s[a-zA-Z0-9\s.#]+[;]{1}/;
    /** 提取页面的url*/
    exports.htmlUrl = /(a\s*(?!.*\brel=)[^>]*)(href="https?:\/\/)((?!(?:(?:www\.)?'.implode('|(?:www\.)?', $follow_list).'))[^" rel="external nofollow" ]+)"((?!.*\brel=)[^>]*)(?:[^>]*)>/;
    /** 普通电话、传真号码：可以"+"开头，除数字外，可含有"-"*/
    exports.fax = /^[+]{0,1}(d){1,3}[ ]?([-]?((d)|[ ]){1,12})+$/;
    /** 座机号，固定电话*/
    exports.telephone = /\d{3}-\d{8}|\d{4}-\d{7}/;
    /** 电话号码，正确格式：XXXX-XXXXXXX，XXXX-XXXXXXXX，XXX-XXXXXXX，XXX-XXXXXXXX，XXXXXXX，XXXXXXXX*/
    exports.tel = /^(\(\d{3,4}\)|\d{3,4}-)?\d{7,8}$/;
    /** 用户名正则，4到16位（字母，数字，下划线，减号）*/
    exports.userName = /^[a-zA-Z0-9_-]{4,16}$/;
    /** 密码强度正则，最少6位，包括至少1个大写字母，1个小写字母，1个数字，1个特殊字符*/
    exports.upperLowSpecialNum = /^.*(?=.{6,})(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$%^&*? ]).*$/;
    /** 6-16位字符，区分大小写（不能是9位以下的纯数字，不含空格），必须包含大写字母*/
    exports.upperLowNum = /^(?!\d{6,8}$)(?! )(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])[a-zA-Z0-9_]{6,16}$/;
    /** 6-16个字符，区分大小写（不能是9位以下的纯数字，不含空格）*/
    exports.mustNotPureNumber = /^(?!\d{6,8}$)(?! )(?=.*[a-z])(?=.*[0-9])[a-zA-Z0-9_]{6,16}$/;
    /** 6-20个字符，同时包含大、小写字母及数字，不可包含特殊字符*/
    exports.upperLowNum2 = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{6,20}$/;
    /** 中国邮政编码（六位数）*/
    exports.postalCode = /^(0[1-7]|1[0-356]|2[0-7]|3[0-6]|4[0-7]|5[1-7]|6[1-7]|7[0-5]|8[013-6])\d{4}$/;
    /** 18位身份证*/
    exports.idCard = /(^[1-9]\d{5}(18|19|([23]\d))\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$)|(^[1-9]\d{5}\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{2}$)/;
    /** 18位的新版身份证*/
    exports.newIdCard = /^[1-9]\d{5}(18|19|([23]\d))\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$/;
    /** 全角标点符(可以有中文)*/
    exports.mark = /[\uFF00-\uFFFF]/;
    /** 中文、英文、数字包括下划线*/
    exports.zhEnNumber = /^[\u4E00-\u9FA5A-Za-z0-9_]+$/;
    /** 以字母开头，长度在6-18之间，只能包含字符、数字和下划线*/
    exports.beginLetter = /^[a-zA-Z]\w{5,17}$/;
    /** 是否含有 ^%&',;=?$\" 等字符*/
    exports.specialChar = /[^%&',;=?$\x22]+/;
    /** base64*/
    exports.base64 = /^\s*data:(?:[a-z]+\/[a-z0-9-+.]+(?:;[a-z-]+=[a-z0-9-]+)?)?(?:;base64)?,([a-z0-9!$&',()*+;=\-._~:@\/?%\s]*?)\s*$/i;
    /** 64位md5*/
    exports.md5 = /^[a-f0-9]{64}$/;
    /** window下"文件夹"路径*/
    exports.windowFolder = /^[a-zA-Z]:\\(?:\w+\\?)*$/;
    /** window下"文件"路径*/
    exports.windowFile = /^[a-zA-Z]:\\(?:\w+\\)*\w+\.\w+$/;
    /** 视频链接地址*/
    exports.videoUrl = /^https?:\/\/.*?(?:swf|avi|flv|mpg|rm|mov|wav|asf|3gp|mkv|rmvb|mp4)$/i;
    /** 图片链接地址*/
    exports.imgUrl = /^https?:\/\/.*?(?:gif|png|jpg|jpeg|webp|svg|psd|bmp|tif)$/i;
    /** 统一社会信用代码*/
    exports.creditCode = /^[0-9A-HJ-NPQRTUWXY]{2}\d{6}[0-9A-HJ-NPQRTUWXY]{10}$/;
    /** 车牌号(新能源+非新能源)*/
    exports.licensePlate = /^[京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领 A-Z]{1}[A-HJ-NP-Z]{1}[A-Z0-9]{4}[A-Z0-9挂学警港澳]{1}$/;
    /** 新能源车牌号*/
    exports.newEnergy = /[京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领 A-Z]{1}[A-HJ-NP-Z]{1}(([0-9]{5}[DF])|([DF][A-HJ-NP-Z0-9][0-9]{4}))$/;
    /** 非新能源车牌号*/
    exports.nonNewEnergy = /^[京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领A-Z]{1}[A-Z]{1}[A-Z0-9]{4}[A-Z0-9挂学警港澳]{1}$/;
    /** 护照（包含香港、澳门）*/
    exports.passportId = /(^[EeKkGgDdSsPpHh]\d{8}$)|(^(([Ee][a-fA-F])|([DdSsPp][Ee])|([Kk][Jj])|([Mm][Aa])|(1[45]))\d{7}$)/;
});
define("string", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    /** 全角:每个全角字符占用两字节空间*/
    exports.fullAngle = /[^\uFF00-\uFFFF]/g;
    exports.fullAngle_1 = /[^\x00-\xff]/g;
    /** 半角:每个半角字符占用一字节空间(一字节有8位)，共256个编码空间*/
    exports.halfAngle = /[\x00-\xff]/g;
    /** 空白行*/
    exports.blank = /\n\s*\r/;
    /** 首尾空白字符*/
    exports.blankSpace = /^\s*|\s*$/;
    /** 带有~的字符*/
    exports.wave = /[^~\x22]+/i;
    /** xml文件*/
    exports.xml = /^([a-zA-Z]+-?)+[a-zA-Z0-9]+\.[x|X][m|M][l|L]$/;
    /** 由26个英文字母组成的字符串*/
    exports.english = /^[A-Za-z]+$/;
    /** 由数字和26个英文字母组成的字符串*/
    exports.englishNumber = /^[A-Za-z0-9]+$/;
    /** 由数字、26个英文字母或者下划线组成的字符串*/
    exports.englishNumberSymbol = /^\w+$/;
    /** URL*/
    exports.url = /^https?:\/\/(([a-zA-Z0-9_-])+(\.)?)*(:\d+)?(\/((\.)?(\?)?=?&?[a-zA-Z0-9_-](\?)?)*)*$/i;
    /** URI*/
    exports.uri = /[a-zA-z]+:\/\/[^\s]*/;
    /** 匹配双字节字符(包括汉字在内, 一个双字节字符长度计2，ASCII字符计1)*/
    exports.doubleCharacter = /[^\x00-\xff]/;
    /** ASCII*/
    exports.ascii = /\x20-\x7f/;
    /** GBK下的中文*/
    exports.gbkChina = /\xa1-\xff/;
    /** 中文*/
    exports.china = /[\u4E00-\u9FA5]/;
    /** Unicode编码中的汉字范围*/
    exports.chinaChar = /^[\u2E80-\u9FFF]+$/;
    /** 韩文*/
    exports.korean = /^\x3130-\x318F$/;
    /** 日文*/
    exports.japanese = /^\u0800-\u4e00$/;
});
define("money", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    // 数字英文格式 如：100,000 可以有两位小数
    exports.onlyOneDecimal = /^\d{1,3}(,\d{3})*(\.\d{1,2})?$/;
    // 不是0开头的数字
    exports.nonzeroBegin = /^[1-9]\d*$/;
    // 0或者非零开头的数字（可以有负号）
    exports.zeroOrNonzeroBegin = /^(0|-?[1-9]\d*)$/;
    //纯数字 可以有任意位的小数
    exports.allNumber = /^\d+(\.\d+)?$/;
    // 小数点后面至少应该有1位数，所以"10."是不通过的，但是 "10" 和 "10.2" 是通过的
    // 必须两位小数
    exports.mustTwoDecimal = /^\d+(.\d{2})?$/;
    // 最多两位小数(正数)
    exports.umaxTwoDecimal = /^\d+(\.\d{1,2})?$/;
    // 最多两位小数
    exports.maxTwoDecimal = /^[+-]*(\d)*(\.\d{0,2})*$/;
    // 100,000 或者 10000 可以有最多两位小数
    exports.commaSeparation = /^(\d+|\d{1,3}(,\d{3})*)(\.\d{1,2})?$/;
});
define("index", ["require", "exports", "date", "network", "number", "other", "string", "money"], function (require, exports, date_1, network_1, number_1, other_1, string_1, money_1) {
    "use strict";
    function __export(m) {
        for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
    }
    Object.defineProperty(exports, "__esModule", { value: true });
    __export(date_1);
    __export(network_1);
    __export(number_1);
    __export(other_1);
    __export(string_1);
    __export(money_1);
});
