function getStyle(obj, attr){
	if(obj.currentStyle){
		return obj.currentStyle[attr];
	} else {
		return getComputedStyle(obj, null)[attr];
	}
}
var text = document.getElementById('text');
	function start(){
		var time = setInterval(function(){
		var now = parseInt(getStyle(text,'left'));
		var speed = -2;
		if(now == -350){
			text.style.left = 850 + 'px';
			}
		else{
			text.style.left = now + speed +'px';
			}
		},30);
	}
	window.onload = function(){
		start();
	var box = document.getElementById('box');
	var oNavlist = document.getElementById('nav').children;
	var slider = document.getElementById('slider');
	var left = document.getElementById('left');
	var right = document.getElementById('right');
	var index = 1;
	var isMoving = false;
	//轮播下一张的函数
	function next(){
		if(isMoving){
			return;
		}
		isMoving = true;
		index++; 
		navChange();
		animate(slider,{left:-1200*index},function(){
			if(index === 6){
					slider.style.left = "-1200px";
					index = 1;
				}
				isMoving = false; 
		});	
	}
	function prev(){
		if(isMoving){
			return;
		}
		isMoving = true;
		index--; 
		navChange();
		animate(slider,{left:-1200*index},function(){
			if(index === 0){
				slider.style.left = "-6000px";
				index = 5;
			}
			isMoving = false;
		});
	}
	var timer = setInterval(next,3000);
	//鼠标划入清定时器
	box.onmouseover = function(){
		animate(left,{opacity:50});
		animate(right,{opacity:50});
		clearInterval(timer);
	}
	//鼠标划出开定时器
	box.onmouseout = function(){
		animate(left,{opacity:0});
		animate(right,{opacity:0});
		timer = setInterval(next,3000);
	}	
	right.onclick = next;
	left.onclick = prev;
	//小按钮点击事件
	for(var i=0;i<oNavlist.length;i++){
		oNavlist[i].idx = i;
		oNavlist[i].onclick = function(){
			index = this.idx + 1;
			navChange();
			animate(slider,{left:-1200*index});

		}
	}
	//小按钮背景切换
	function navChange(){
		for(var i=0;i<oNavlist.length;i++){
			oNavlist[i].id = '';
		}
		if(index === 6){
			oNavlist[0].id = 'active';
		}else if(index === 0) {
			oNavlist[4].id = 'active';
		}else{
			oNavlist[index-1].id = 'active';
		}
	}
}