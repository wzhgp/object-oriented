function Tab(json){
	this.settings={
		navs:['新闻','体育','社会','技术'],
		contents:['北京近期有大暴雨','可以划船','解放军战士划船救人了','10年专业开船经验'],
		box:document.querySelector('#box'),
		css:'style.css'
	};
	for(var attr in json){
		this.settings[attr] = json[attr];
	}
	this.btns = this.divs = null
	this.init()
}
Tab.prototype.init=function(){
	this.createCss();
	this.createBtns();
	this.createDivs();
	this.Event();
}
Tab.prototype.createBtns=function(){
	var _this = this;
	this.settings.navs.forEach(function(el,i){
		var btn = document.createElement('button');
		if(i==0)btn.className = 'active'
		btn.innerHTML = el;
		_this.settings.box.appendChild(btn);
	})
}
Tab.prototype.createDivs=function(){
	var _this = this;
	this.settings.contents.forEach(function(el,i){
		var div = document.createElement('div');
		if(i==0)div.className = 'show'
		div.innerHTML = el;
		_this.settings.box.appendChild(div);
	})
}
Tab.prototype.Event = function(){
	var _this = this;
	this.btns = this.settings.box.getElementsByTagName('button');
	this.divs = this.settings.box.getElementsByTagName('div');
	for(var i =0;i<this.btns.length;i++){
		this.btns[i].index = i;
		this.btns[i].onclick = function(){
			_this.change(this);
		}
	}
	
}
Tab.prototype.change = function(that){
	for(var i =0;i<this.btns.length;i++){
		this.btns[i].className = this.divs[i].className='';
	}
	that.className = 'active';
	this.divs[that.index].className = 'show';
}
Tab.prototype.createCss=function(){
	var head = document.getElementsByTagName('head')[0];
	var _link = document.createElement('link');
	_link.rel = 'stylesheet';
	_link.type="text/css";
	_link.href = this.settings.css;
	head.appendChild(_link);
}
