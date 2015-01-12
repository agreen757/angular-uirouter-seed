if($('#top-nav')){
    $('#top-nav').onePageNav({
             currentClass: 'active',
             changeHash: true,
             scrollSpeed: 600
      });
}


$.ajax({
        type: "PUT",
        url: '/getLoginStat',
        data: {gimme:'somethin'},
        success: function(data){
            if(data.status){
                    $('#logout').show();
                }
                else if(data.status == undefined){
                    console.log(data.status)
                    $('#login').show();
                }
        }
        })