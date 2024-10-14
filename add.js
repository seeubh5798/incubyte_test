 export function add(numbers) {
    if (!numbers) return 0;
    numbers = numbers.replace(/\\n/g, '\n').trim();
    let delimiter = /,|\n/;
    if (numbers.startsWith("//")) {
        const parts = numbers.split("\n", 2);
        console.log(parts);
        delimiter = new RegExp(parts[0].slice(2)); 
        console.log(delimiter);
        numbers = parts[1];
    }

    const nums = numbers.split(delimiter).map((num) => {
        const trimmedNum = num.trim(); 
        const cleanNum = trimmedNum.replace(/[^\d-]/g, '');
        const parsedNum = parseInt(cleanNum, 10); 
        return isNaN(parsedNum) ? 0 : parsedNum;
    });
    const negatives = nums.filter((num) => num < 0);
    if (negatives.length) {
        throw new Error(`negative numbers not allowed ${negatives.join(",")}`);
    }

    return nums.reduce((sum, num) => sum +  num, 0);
}
// module.exports = add;
