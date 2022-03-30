class FollowToggle{

  constructor(el){
    this.el = $(el);
    this.userId = this.el.data("user-id");
    this.followState = this.el.data("initial-follow-state-id");
    // this.elWrapped = $("follow-toggle").wrap(el);
   debugger
    let a = Render.bind(this);
    a();
   
  }


  
}
const setEventListeners = () => {
  $('.FollowToggle').on('submit', e => {
     e.preventDefault();
     handleClick();
    if (this.followState === "unfollowed") {
     this.followState = "followed";
    }
    if (this.followState === "followed") {
      this.followState = "unfollowed";
    }
     Render();
  });
};

  function handleClick(){
    if (this.followState === "unfollowed") {
      const url = "/users/:user_id/follow";
      const method = "DELETE";
    }
    if (this.followState === "followed") {
      const url = "/users/:id/follow";
      const method = "POST";
    }
    return $.ajax({
      method: method,
      url: url,
      data: {
        
      },
      dataType: 'JSON'
    });


  }

function Render() {
  debugger
  if (this.followState === "unfollowed") {
    this.elWrapped.innerText = "Follow!";
  }
  if (this.followState === "followed") {
    this.elWrapped.innerText = "UnFollow!";
  }

  setEventListeners()
} 

module.exports = FollowToggle;

