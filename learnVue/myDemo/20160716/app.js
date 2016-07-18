/*
* @Author: lanlan
* @Date:   2016-07-17 15:25:55
* @Last Modified by:   liang
* @Last Modified time: 2016-07-18 01:12:18
*/

// demo1
// new Vue({
//   el: '#name',
//   data: {
//     name: 'lanlan',
//     todos: [
//     	{ text:'learn javascript' },
//     	{ text:'learn Vue.js' },
//     	{ text:'Something else' }
//     ]
//   }
// })


// demo2
// new Vue({
//   el: '#app',
//   data: {
//     message: 'Hello Vue.js!'
//   },
//   methods: {
//     reverseMessage: function () {
//       this.message = this.message.split('').reverse().join('')
//     }
//   }
// })

// // demo3
// new Vue({
//   el: '#app',
//   data: {
//     newTodo: '',
//     todos: [
//       { text: 'Add some todos' }
//     ]
//   },
//   methods: {
//     addTodo: function () {
//       var text = this.newTodo.trim()
//       if (text) {
//         this.todos.push({ text: text })
//         this.newTodo = ''
//       }
//     },
//     removeTodo: function (index) {
//       this.todos.splice(index, 1)
//     }
//   }
// })

new Vue({
        el: '#book_list',
        data: {
        	sortparam:'',
            book: {
                id: 0,
                author: '',
                name: '',
                price: ''
            },
            books: [{
                id: 1,
                author: '曹雪芹',
                name: '红楼梦',
                price: 32.0
            }, {
                id: 2,
                author: '施耐庵',
                name: '水浒传',
                price: 30.0
            }, {
                id: '3',
                author: '罗贯中',
                name: '三国演义',
                price: 24.0
            }, {
                id: 4,
                author: '吴承恩',
                name: '西游记',
                price: 20.0
            }]
        },
	    computed: {
	           sum: function() {
	               var result = 0;
	               for (var i = 0; i < this.books.length; i++) {
	                   result = Number(this.books[i].price) + result;
	               };
	               return result;
	           }
	    },
        methods: {
	        addBook: function() {
	            //计算书的id
	            this.book.id = this.books.length + 1;
	            this.books.push(this.book);
	            //将input中的数据重置
	            this.book = '';
	        },
	        delBook:function(book){
      			this.books.$remove(book);
  			},
  			sortBy: function(sortparam){
  				this.sortpatam = sortparam;
  			}
    	}
 })