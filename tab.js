function tab(id){
		if (!id) return;
		this.wrap=document.getElementById(id)
		this.head=this.wrap.getElementsByTagName('input')
		this.content=this.wrap.getElementsByTagName('div')
		this.now=0;
		var _this=this
		for (var i = 0; i < this.head.length; i++) {
			(function(index){
				_this.head[i].onclick=function(){
					_this.now=index;
					_this.fnclick()
				}
			})(i)
		}
	}
	tab.prototype.fnclick=function(){
		for (var i = 0; i < this.head.length; i++) {
			this.head[i].className='';
			this.content[i].style.display='none';
		}
		this.head[this.now].className='active';
		this.content[this.now].style.display='block';
	}
	function tabauto(id){
		tab.call(this,id);
		this.timer=null;
		this.auto();
		var _this=this;
		this.wrap.onmouseover=function(){
			_this.fnover();
		};
		this.wrap.onmouseout=function(){
			_this.fnout();
		};
	}
	tabauto.prototype=new tab();
	tabauto.prototype.contructor=tabauto;
	tabauto.prototype.auto=function(){
		var _this=this;
		this.timer=setInterval(function(){
			_this.now++;
			if(_this.now==_this.head.length){
			_this.now=0;	
			}	
			_this.fnclick();
		},1000)
	}
	tabauto.prototype.fnover=function(){
		clearInterval(this.timer);
	}
	tabauto.prototype.fnout=function(){
		this.auto()
	}
window.onload=function(){
	var t1=new tab('div1','active');
	var t2=new tabauto('div2','active')
}