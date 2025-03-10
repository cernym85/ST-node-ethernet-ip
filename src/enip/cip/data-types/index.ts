const Types = {
  BOOL: 0xc1,
  SINT: 0xc2,
  INT: 0xc3,
  DINT: 0xc4,
  LINT: 0xc5,
  USINT: 0xc6,
  UINT: 0xc7,
  UDINT: 0xc8,
  ULINT: 0xc9,
  REAL: 0xca,
  LREAL: 0xcb,
  STIME: 0xcc,
  DATE: 0xcd,
  TIME_AND_DAY: 0xce,
  DATE_AND_STRING: 0xcf,
  STRING: 0xd0,
  WORD: 0xd1,
  DWORD: 0xd2,
  BIT_STRING: 0xd3,
  LWORD: 0xd4,
  STRING2: 0xd5,
  FTIME: 0xd6,
  LTIME: 0xd7,
  ITIME: 0xd8,
  STRINGN: 0xd9,
  SHORT_STRING: 0xda,
  TIME: 0xdb,
  EPATH: 0xdc,
  ENGUNIT: 0xdd,
  STRINGI: 0xde,
  STRUCT: 0x02a0,
};

const TypeSizes = {
  0xc1: 1,
  0xc2: 1,
  0xc3: 2,
  0xc4: 4,
  0xc5: 8,
  0xc6: 1,
  0xc7: 2,
  0xc8: 4,
  0xc9: 8,
  0xca: 4,
  0xcb: 8,
};

/**
 * Checks if an Inputted Integer is a Valid Type Code (Vol1 Appendix C)
 *
 * @param num - Integer to be Tested
 * @returns true or false
 */
const isValidTypeCode = (num: number): boolean => {
    if (!Number.isInteger(num)) return false;
    for (let type of Object.keys(Types)) {
        if (Types[type] === num) return true;
    }
    return false;
};

/**
 * Retrieves Human Readable Version of an Inputted Type Code
 *
 * @param num - Type Code to Request Human Readable version
 * @returns Type Code String Interpretation
 */
const getTypeCodeString = (num: number): string => {
    if (!Number.isInteger(num)) return null;
    for (let type of Object.keys(Types)) {
        if (Types[type] === num) return type;
    }
    return null;
};

export { Types, isValidTypeCode, getTypeCodeString, TypeSizes };
