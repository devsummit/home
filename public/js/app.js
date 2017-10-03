function isMobile() {
  return (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent));
}

window.addEventListener('scroll', function (e) {
  if (!isMobile()) {
    const body = document.querySelector('body');
    const nav = document.querySelector('#nav-main');
    if (body.scrollTop > 100) {
      nav.classList.add('fixed-top');
      body.paddingTop = '80px';
    } else {
      nav.classList.remove('fixed-top');
      body.paddingTop = 0;
    }
  }
});

new Vue({
  el: '#app',

  data: function () {
    return {
      communities: []
    }
  },

  mounted: function () {
    const self = this;
    axios.get('http://api.devsummit.io:5000/api/v1/partners')
      .then(function (response) {
        self.communities = response.data.data;
      })
      .catch(function (err) {
        console.error(err)
      })
  }
});
