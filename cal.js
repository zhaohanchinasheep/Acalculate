function init(){
	var num = document.getElementById("num");
	num.value = 0;
	var btn_num1,fh
	var oButton = document.getElementsByTagName("input");
	for(var i = 1;i<oButton.length;i++){
		oButton[i].onclick = function(){
			if(!isNaN(this.value)){
				num.value = (num.value + this.value)*1 //num.value存储的是本次输入的数字时的内容
			}else{
				var btn_num = this.value;
				switch(btn_num){ // switch语句：switc(表达式){case(n): 代码块；break;case(m):代码块；break;}
					case("+"):
						btn_num1 = Number(num.value);
						num.value = 0;
						fh = "+";
						break;
					case("-"):
						btn_num1 = Number(num.value);
						num.value = 0;
						fh = "-";
						break;
					case("*"):
						btn_num1 = Number(num.value);
						num.value = 0;
						fh = "*";
						break;
					case("/"):
						btn_num1 = Number(num.value);
						num.value = 0;
						fh = "/";
						break;
					case("."):
						num.value = dec_number(num.value)
						break;
					case("<-"):
						num.value = back(num.value)
						break;	
					case("AC"):
						num.value = "0"
						break;	
					case("+/-"):
						num.value = Number(num.value)*-1
						break;	
					case("="):
						switch(fh){
							case("+"):
								num.value = btn_num1 + Number(num.value);
								break;
							case("-"):
								num.value = btn_num1 - Number(num.value);
								break;
							case("*"):
								num.value = btn_num1 * Number(num.value);
								break;
							case("/"):
								if(num.value === "0"){
									num.value = 0;
									alert("0不能做除数");
								}else{
									num.value = btn_num1 / Number(num.value);
								}
								break;
						}
					break;
				};
			};
		};
	};
}

// 验证文本框是否为空
function isNull(n){
	if(n === "0"||n.length === 0){
		return true
	}else{
		return false
	};
}

// 判断小数点输入了几次，不能超过一次
function dec_number(n){
	if(!n.indexOf('.')){
		n = n + "."
	}
	return n
}

function back(n){
	n = n.substring(0,n.length-1)
	if(isNull(n)){
		n = "0"
	}
	return n
}
