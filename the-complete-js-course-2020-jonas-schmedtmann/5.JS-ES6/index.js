var box5 = {
  color: 'green',
  position: 1,
  clickMe: function() {
  // the following console.log refers to the object itself
   console.log(this); 
   //clickMe: function clickMe()
   //color: "green"
   //position: 1
    
    var self = this;  
    //this do work
    
    //console.log(self); // Object { color: "green", position: 1, clickMe: clickMe() }

    document.querySelector('.green').addEventListener('click', function() {
      //var str = 'This is box number ' + this.position + ' and it is ' + this.color;
      // Now it works!
      var str = 'This is box number ' + self.position + ' and it is ' + self.color;
      alert(str); 
      // This is box number undefined and it is undefined
      // this in a normal function(in this case the callback, beacuse clcik me is amethod, there this works) do not work, is in amethod, thats why, here this is pointing to wiondow object
    });
  }
}
box5.clickMe();