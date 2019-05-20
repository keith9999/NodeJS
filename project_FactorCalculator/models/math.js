//24 mvc项目的演示开
//modles/math.js
//math.js
//接收一个number， 返回一个resultsArr【】
exports.calc = function(number){
 //在这里计算
 var resultsArr = [];
 for(var i = 1; i <=number; i++){
     if(number % i == 0){
         resultsArr.push(i);
     }
 }
 return resultsArr;
}