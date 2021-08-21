/**
 * 文字吸入组件
 * @param {数据} data = [data] 
 * @param {容器id,class} eleRoot = [eleRoot] 
 * @param {频率-动画速度-单位 ms } speed = [speed ms] 
 */
function textBreath(data, eleRoot, speed) {
	let ele = document.querySelector(eleRoot);
	if (!eleRoot || !ele) return false;
	if (!data || data.length == 0) return false;
	let html = '<div class="text_breath" name=“组件”>'
	let childHtml = '';
	data.forEach(item => {
		childHtml += `<div>${item.text}</div>`;
	})
	html += childHtml + '</div>'
	let text_breath = document.querySelector('.text_breath');
	//判断组件是否存在
	if (text_breath) {
		text_breath.innerHTML = childHtml;
		html = null;
	} else {
		ele.innerHTML = html;
	}
	//获取元素个数
	let divs = document.querySelectorAll('.text_breath>div');
	let divsLen = divs.length;
	let count = 0;
	this.init = () => {
		if (count == divsLen) {
			count = 0;
			clearInterval(this.time);
			divs.forEach(li => {
				li.removeAttribute('style');
			})
		} else {
			divs.forEach(li => {
				li.removeAttribute('style');
			})
			divs[count].setAttribute('style', 'animation: text_breath_fly ' + speed + 'ms ease-in infinite');
			count++;
		}
	}
	this.init();
	this.time = setInterval(() => {
		this.init();
	}, speed);
}

/**
 * 文字吸入组件,方法执行
 */
textBreath(data, '.textBreathBox', 1000);
