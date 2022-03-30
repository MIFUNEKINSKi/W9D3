const FollowToggle = require('./follow_toggle.js');
// debugger
$(()=>{
  // debugger
  $(".follow-toggle").each((i, el) => {    
    new FollowToggle(el);
  });

});

