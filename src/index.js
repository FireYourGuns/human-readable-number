module.exports = function toReadable (number) {
    var keywords = {
        "0":"zero","1":"one","2":"two","3":"three","4":"four","5":"five","6":"six","7":"seven","8":"eight","9":"nine","10":"ten",
        "11":"eleven","12":"twelve","13":"thirteen","14":"fourteen","15":"fifteen","16":"sixteen","17":"seventeen","18":"eighteen","19":"nineteen",
        "20":"twenty","30":"thirty","40":"forty","50":"fifty","60":"sixty","70":"seventy","80":"eighty"
        ,"90":"ninety"
          };
          var Mas = number.toString().split('');
          var str = "";
      
          if (Mas.length === 3) {
            if (number==0) {return str = keywords[number]}
              if (Mas[1]==0 && Mas[2]==0) {return str = keywords[Mas[0]] + " hundred"}
            if (+(Mas[1]+Mas[2]+"") < 20) {
                str = keywords[Mas[0]] + " hundred " + keywords[+(Mas[1]+Mas[2]+"")]
            } else if (Mas[2]==0) {
              str = keywords[Mas[0]] + " hundred " + keywords[(+Mas[1]*10)]
            } else {
            str = keywords[Mas[0]] + " hundred " + keywords[(+Mas[1]*10)] + " " + keywords[Mas[2]]
            }
        };

        if (Mas.length === 2) {
          if (number < 20 || Mas[1] == 0) {
              str = keywords[number]
          } else {
              str = keywords[(+Mas[0]*10)] + " " + keywords[Mas[1]]
          }
      }; 

        if (Mas.length === 1) {
            str = keywords[Mas[0]]
        };
      
      return str;

}


