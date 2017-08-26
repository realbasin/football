var ws;
function Head(hid) {
	this.id = hid;
	var ele = document.getElementById(hid);
	ele.innerHTML = '<ul id="tabs"><li class="tab"><img id="tab1" src="images/tab1.png"/><span>首页</span></li><li class="tab"><img id="tab2" src="images/tab2.png"/><span>酒吧</span></li><li class="tab"><img id="tab3" src="images/tab3.png"/><span>市场</span></li><li class="tab"><img id="tab4" src="images/tab4.png"/><span>我的</span></li></ul>';
	var list_btn = document.getElementsByClassName('tab');
	for(var i = 0; i < list_btn.length; i++) {
		list_btn[i].index = i;
		list_btn[i].onclick = function() {
			
			switch(this.index) {
				case 0:
					window.open('index.html', '_self');
					break;
				case 1:
					window.open('bar.html', '_self');
					break;
				case 2:
					window.open('card_market.html', '_self');
					break;
				case 3:
					window.open('mycenter.html', '_self');
					break;
				default:break;
			}
		}
	}
}