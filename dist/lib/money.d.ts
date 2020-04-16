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
