
const concatenateStrings = (str1, str2) => {
    return (str1.trim() + str2.trim()).replace(/ /g, '');
};

console.log(concatenateStrings('aa', 'bb'));

console.log(concatenateStrings('aa',' '));

console.log(concatenateStrings('',  'bb'));




const getStringLength = (str) => {
    return str.length;
};

console.log(getStringLength('Hello'));

console.log(getStringLength('JavaScript'));

console.log(getStringLength(''));




const getStringFromTemplate = (firstName, lastName) => {
    return `Hello, ${firstName} ${lastName}!`;
};

console.log(getStringFromTemplate('John','Doe'));

console.log(getStringFromTemplate('Chuck','Norris'));

console.log(getStringFromTemplate('Alice','Smith'));




const getChar = (str, num) => {
    return str[num - 1];
};

console.log(getChar('John Doe', 1));

console.log(getChar('cat', 3));

console.log(getChar('JavaScript', 4));





const removeFirstOccurrences = (str, value) => {
    const index = str.indexOf(value);
    if (index === -1) return str;
    
    return str.substring(0, index) + str.substring(index + value.length);
};

console.log(removeFirstOccurrences('To be or not to be', 'not'));

console.log(removeFirstOccurrences('I like legends', 'end'));

console.log(removeFirstOccurrences('ABABAB','BA'));




const getRectangleString = (width, height) => {
    if (width <= 2) {
        return '*\n'.repeat(height).trim();
    }
    
    let result = '';
    
    result += '*'.repeat(width) + '\n';
    
    for (let i = 2; i < height; i++) {
        result += '*' + ' '.repeat(width - 2) + '*\n';
    }
    
    if (height > 1) {
        result += '*'.repeat(width);
    }
    
    return result;
};

console.log(getRectangleString(5, 4));

console.log(getRectangleString(3, 3));

console.log(getRectangleString(1, 5));
