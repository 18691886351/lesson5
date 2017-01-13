/*begin===============获取成绩等级======================*/
function taks1Clac(number) {
    /*alert(number);*/
    var _res;
    var _reg = new RegExp('[0-9]');
    /* alert(_reg.test(number));*/

    if (_reg.test(number)) {
        if (number < 0 || number > 100) {
            _res = "请输入0-100的正确分数";
        } else if (number >= 0 && number < 10) {
            _res = "10等生";
        } else if (number >= 10 && number < 20) {
            _res = "9等生";
        } else if (number >= 20 && number < 30) {
            _res = "8等生";
        } else if (number >= 30 && number < 40) {
            _res = "7等生"
        } else if (number >= 40 && number < 50) {
            _res = "6等生"
        } else if (number >= 50 && number < 60) {
            _res = "5等生"
        } else if (number >= 60 && number < 70) {
            _res = "4等生"
        } else if (number >= 70 && number < 80) {
            _res = "3等生"
        } else if (number >= 80 && number < 90) {
            _res = "2等生"
        } else if (number >= 90 && number <= 100) {
            _res = "1等生"
        }
    } else {
        _res = "请输入0-100的正确分数";
    }
    return _res;
}

document.getElementById("task1btn").onclick = function() {
    var _number = document.getElementById("task1-number").value;
    var _res = taks1Clac(_number);
    document.getElementById("task1-result").value = _res;
};
/*===============获取成绩等级=========================end*/

/*begin===============计算器======================*/
var btns = document.getElementsByClassName("task2-calc-btn");
var str = "";
var tmp = ""
var r1 = new RegExp("^\\d+(\\.\\d+)?$");
var r2 = new RegExp("^\\d+(\\.)?$");
var exp = "";
var exp_reg = new RegExp("^\\d+(\\.\\d+)?[*\\-+/]$");
var res = "";
/*alert(btns.length);*/
for (btn in btns) {
    btns[btn].onclick = function() {
        if (this.innerHTML == "C") {
            clearShow();
            clearResult();
            return;
        }
        if (this.innerHTML == "=") {
            if (exp.length != 0) {
                /*alert(exp+str);*/
                res = eval(exp + str);
                res = parseFloat(Number(res).toFixed(8));
                document.getElementById("task2-res").value = res;
                exp="";
                clearShow();
            }
        }
        if (this.innerHTML == "*" || this.innerHTML == "-" || this.innerHTML == "+" || this.innerHTML == "/") {
            if (str.length != 0) {
                exp = Number(str) + this.innerHTML;
                if (exp_reg.test(exp)) {
                    document.getElementById("task2-res").value = exp;
                }
                clearShow();
            } else {
                if (res.length != 0) {
                    exp = Number(res) + this.innerHTML;
                    if (exp_reg.test(exp)) {
                        document.getElementById("task2-res").value = exp;
                    }
                }
                clearShow();
            }

        }
        tmp = str + this.innerHTML;
        if (r1.test(tmp) || r2.test(tmp)) {
            str = str + this.innerHTML;
            //str = Number(str);
            document.getElementById("task2-show").value = str;
        }
    }
}

function clearShow() {
    document.getElementById("task2-show").value = "";
    str = "";
}

function clearResult() {
    document.getElementById("task2-res").value = "";
    exp = "";
}
/*===============计算器======================end*/


/*begin===============分析数组======================*/

var myArray = new Array("x", "x", "b", "d", "m", "a", "k", "m", "p", "j", "a");
var obj = {};


/*获取元素出现的次数*/
function getElementCt(array, element) {
    var ct = 0;
    for (index in array) {
        if (array[index] == element) {
            ct = ct + 1;
        }
    }
    return ct;
}

/*获取元素出现的下标位置*/
function getLocation(array, element) {
    var str = "";
    for (index in array) {
        if (array[index] == element) {
            str = str + index + ","
        }
    }
    return str;
}

/*获取出现次数最多的元素*/
function getMaxElement(array) {
    var _array = new Array();
    for (var i = 0; i < array.length; i++) {
        var cnt = 0;
        for (var j = i; j < array.length; j++) {
            if (array[i] == array[j]) {
                cnt++;
            }
        }
        _array[i] = cnt;
    }

    var max = _array[0];
    for (var i = 0; i < _array.length; i++) {
        if (max < _array[i]) max = _array[i];
    }

    var _resArray = new Array();

    for (var i = 0; i < _array.length; i++) {
        if (max == _array[i]) {
            _resArray.push(array[i]);
        }
    }

    return _resArray;
}




document.getElementById("task3btn").onclick = function() {
    var _str = "";
    var _resArray = getMaxElement(myArray);
    for (idx in _resArray) {
        var ct = getElementCt(myArray, _resArray[idx]);
        var location = getLocation(myArray, _resArray[idx]);
        _str = _str + "字母" + _resArray[idx] + "出现" + ct + "次，位置：" + location.substring(0, location.length - 1) + ";";
    }
    document.getElementById("task3-result").value = _str;
};

/*===============分析数组======================end*/
