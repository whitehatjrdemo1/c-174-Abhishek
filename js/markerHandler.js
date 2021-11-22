AFRAME.registerComponent("markerhandler", {
  init: function () {
    this.el.addEventListener("markerFound", () => {
    
          this.handleMarkerFound();
  
      });
      //markerLost Event
      this.el.addEventListener("markerLost", () => {
        this.handleMarkerLost();
      });
    },
  
  handleMarkerFound: function () {
    console.log("found");
  },
  handleMarkerLost: function () {
    console.log("lost");
  },
});
