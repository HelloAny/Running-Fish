var Time = {
  getTodayUnix: function() {
    var date = new Date();
    date.setHours(0);
    date.setMinutes(0);
    date.setSeconds(0);
    date.setMilliseconds(0);
    return date.getTime();
  },

  getFormatdate: function(birthday) {
    var today = this.getTodayUnix();

    var date = (today - birthday) / 1000;
    var tip = '';
    if (date > 0) {
      tip = '你已经出生了' + Math.floor(date / 86400) + '天';
    } else {
      tip = '请重新输入日期';
    }
    return tip;
  },
};

Vue.directive('birthday', {
  update: function(el, binding) {
    el.innerHTML = Time.getFormatdate(binding.value);
  },
});
