/*
* @Author: ad
* @Date:   2016-07-25 17:35:10
* @Last Modified by:   ad
* @Last Modified time: 2016-07-25 20:33:33
*/

var vm = new Vue({
	el: '#app',
	data: {
		data: data
	},
	computed:{
		price: function () {
			 var price = 0;
			 for(var i = 0;i<this.data.length;i++){
			 	var self = this.data[i];
			 	price += self.price * self.count;
			 } 
		return price;
		}
	},
	methods: {
		reduce: function(index){
			var item = this.data[index];
			if (item.count == 1) {
				return false;
			}
			item.count--;
		},
		add: function(index){
			var item = this.data[index];
			if (item.count == 9) {
				return false;
			}
			item.count++;
		},
		remove: function(index){
			this.data.splice(index,1);//操作数据，尽量操作数据
		}
	}
})