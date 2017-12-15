function myFunction(){
    document.getElementById("myDropdown").classList.toggle("show");
}

window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}


var userFeed = new Instafeed({
    get: 'user',
    userId: '33313538',
    accessToken: '33313538.1677ed0.04ef15157f1c4b36ba88a725e4ee9b25',
    limit: 1,
    resolution: 'low_resolution',
    template: '<div class="instagram-img"><a href="{{link}}" target="_blank"><img src="{{image}}"></a></div><div class="instagram-text"><a href="{{link}}"><p>{{caption}}</p></a></div>'
});

userFeed.run();