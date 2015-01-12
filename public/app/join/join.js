angular.module('myapp').config(function($stateProvider,$urlRouterProvider, $locationProvider){
    
    $stateProvider.state('join', {
        url: '/join',
        templateUrl: '/app/join/join.html',
        controller: function($scope,$http){
            console.log('in the join controller');
            
                 //***********************************WORKER FUNCTION
          function worker(){
              console.log('in worker')
          }
          
          
         var messagesplit = ''.split('|')
         
         var stats = {
              title:messagesplit[1],
              bdate:messagesplit[2],
              id:messagesplit[3],
              image:messagesplit[4],
              views:messagesplit[5],
              subs:messagesplit[6]
         }
         
         var message = messagesplit[0];
         /*var title = messagesplit[1];
         var bdate = messagesplit[2];
         var id = messagesplit[3];
         var image = messagesplit[4];
         var views = messagesplit[5];
         var subs = messagesplit[6];*/
         //console.log(stats)
         if('' != ''){
              //df
         }
         
         var styles = {"padding-top":"200px",color:"white","font-size":"1.5em"}
         
         var width = $(window).width()
         if(width < 560 && ''){
              $('#ending').show();
              var styles = {"padding-top":"200px",color:"white","font-size":".5em"}
              var headerstyle = {"font-size":".5em"}
              
              
              if(message == 'Get ya weight up'){ 
                  console.log('do something')
                  $('#status').empty().html('<h2>Thanks for your submission</h2><hr><p style="font-size:1.5em">Unfortunately, we are unable to Partner your channel at this time.  You may resubmit your channel at a later date.</p>').css(headerstyle)
                  $('#philosophy').empty()
         }
             else if(message == 'Youre good'){
                  $('#status').empty().html('<center><h1><em>Thanks for your submission<em></h1><center><hr><p style="font-size:1.5em">We will contact you shortly with further details</p><br><label>How can we reach you?</label><br><input style="color:black" type="email" placeholder="Your Email"><button style="padding:3px" class="btn btn-primary" onclick="worker(\''+stats.id+','+stats.title+','+stats.bdate+','+stats.image+','+stats.views+','+stats.subs+'\')">Submit')
                  $('#philosophy').empty()
             }
             
             
             
         }
         else{
             if(message == 'Get ya weight up'){ 
             
                  console.log('do something')
                  $('#status').empty().html('<center><h1>Thanks for your submission</h1><center><hr><p style="font-size:1.5em">Unfortunately, we are unable to Partner your channel at this time.  You may resubmit your channel at a later date.  However, in order to be considered for inclusion your channel must meet the following basic criteria.</p>')
                  $('#philosophy').empty().html('<ul><li>Channel has 300 views per day over last 30 days</li><li>Channel has over 100 subscribers</li><li>Channel at least 3 months old</li></ul>').css(styles);
             }
             else if(message == 'Youre good'){
                  $('#status').empty().html('<center><h1><em>Thanks for your submission<em></h1><center><hr><p style="font-size:1.5em">We will contact you shortly with further details</p><br><label>How can we reach you?</label><br><input style="color:black" type="email" placeholder="Your Email"><button style="padding:3px" class="btn btn-primary" onclick="worker(\''+stats.id+','+stats.title+','+stats.bdate+','+stats.image+','+stats.views+','+stats.subs+'\')">Submit')
                  /*$('#philosophy').empty().html('<ul><li>Channel has 300 views per day over last 30 days</li><li>Channel has over 100 subscribers</li><li>Channel at least 3 months old</li></ul>')*/
             }
         }
         $('.whep').addClass("visible").viewportChecker({
              classToAdd: 'visible animated fadeInRight',
              offset: 10
         });
          $('.whep2').addClass("visible").viewportChecker({
              classToAdd: 'visible animated fadeIn',
              offset: 10
          });
          
          
          
         $window = $(window);
         
         $('section[data-type="background"]').each(function(){
           // declare the variable to affect the defined data-type
           var $scroll = $(this);
           
            $(window).scroll(function() {
              // HTML5 proves useful for helping with creating JS functions!
              // also, negative value because we're scrolling upwards                             
              var yPos = -($window.scrollTop() / $scroll.data('speed')); 
              
              // background position
              var coords = '50% '+ yPos + 'px';
              
              // move the background
              $scroll.css({ backgroundPosition: coords });    
            }); // end window scroll
         });  // end section function
         
         //$('')
            
        }
    });
    
});