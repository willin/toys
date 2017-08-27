/* eslint-disable */

// visibility filters
var filters = {
  all: function (toys) {
    return toys
  },
  deleted: function (toys) {
    return toys.filter(function (toy) {
      return toy.deleted
    })
  },
  bought: function (toys) {
    return toys.filter(function (toy) {
      return toy.bought
    })
  },
  want: function (toys) {
    return toys.filter(function (toy) {
      return !toy.bought
    })
  },
  undeleted: function (toys) {
    return toys.filter(function (toy) {
      return !toy.deleted
    })
  }
}

// app Vue instance
var app = new Vue({
  // app initial state
  data: {
    list: toys,
    visibility: 'all'
  },

  // computed properties
  // http://vuejs.org/guide/computed.html
  computed: {
    // filteredTodos: function () {
    //   return filters[this.visibility](this.todos)
    // },
    remaining: function () {
      // return filters.active(this.todos).length
      return this.list.reduce((sum, cate) => cate.items.length + sum, 0)
    },
    // allDone: {
    //   get: function () {
    //     return this.remaining === 0
    //   },
    //   set: function (value) {
    //     this.todos.forEach(function (todo) {
    //       todo.completed = value
    //     })
    //   }
    // }
  },

  filters: {
    pluralize: function (n) {
      return n === 1 ? 'toy' : 'toys'
    }
  },

  // methods that implement data logic.
  // note there's no DOM manipulation here at all.
  methods: {

    // removeCompleted: function () {
    //   this.todos = filters.active(this.todos)
    // }
  }
})

// handle routing
function onHashChange () {
  var visibility = window.location.hash.replace(/#\/?/, '')
  if (filters[visibility]) {
    app.visibility = visibility
  } else {
    window.location.hash = ''
    app.visibility = 'all'
  }
}

window.addEventListener('hashchange', onHashChange)
onHashChange()

// mount
app.$mount('.todoapp')
