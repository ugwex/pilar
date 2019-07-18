export function convertToBoolProperty(val: any): boolean {
  if (typeof val === 'string') {
    val = val.toLowerCase().trim();

    return (val === 'true' || val === '');
  }

  return !!val;
}

export function convertArrayToString(val: any): string {
  if (typeof val === 'object') {
    let arrayStr = JSON.stringify(val);
    arrayStr = arrayStr.replace(/\\/g, '');
    arrayStr = arrayStr.substr(0, 1) === '"' ? arrayStr.substring(1, arrayStr.length - 1 ) : arrayStr;

    return arrayStr;
  }

  return val;
}

export function convertStringToSlug(val: string): string {
  if (typeof val === 'string') {
    return val.toLowerCase().replace(' ', '');
  }

  return val;
}

export function getValueOfIndexArrayString(val: string, delimiter: string, index: number) {
  if (typeof val === 'string') {
    const strings: Array<any> = val.split(delimiter);
    if (strings.length > index) {
      return strings[index];
    }
  }

  return val;
}
