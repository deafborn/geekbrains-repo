let str = "Купи эти вкуснейшие 'наггетсы' в Мак'Дональдсе!"

let newStr = str.replace(/^'|(\s)'|'(\s)|'$/g, '$1"$2');

console.log(newStr);