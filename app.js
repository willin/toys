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
    remaining: function () {
      // return filters.active(this.todos).length
      return this.list.reduce((sum, cate) => cate.items.length + sum, 0)
    }
  },

  filters: {
    pluralize: function (n) {
      return n === 1 ? 'toy' : 'toys'
    }
  },

  // methods that implement data logic.
  // note there's no DOM manipulation here at all.
  methods: {
    filter(toys) {
      return filters[this.visibility](toys)
    }
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
