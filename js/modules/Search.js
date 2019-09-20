import $ from 'jquery';

class Search {
  constructor() {
    this.openButton = $(".js-search-trigger");
    this.closeButton = $(".search-overlay__close");
    this.searchOverlay = $(".search-overlay");
    this.events();
    this.isOverlayOpen = false; 
  }

  // events
  events() {
    this.openButton.on("click", this.openOverlay.bind(this));
    this.closeButton.on("click", this.closeOverlay.bind(this));
    $(document).on("keydown", this.KeyPressDispatcher.bind(this));
  }
  

  // method
  KeyPressDispatcher(e) {
    if(e.keyCode == 83 && !isOverlayOpen ){
      this. openOverlay();
    }
    if(e.keyCode == 27 && isOverlayOpen){
      this. closeOverlay();
    }
  }

  openOverlay() {
    this.searchOverlay.addClass("search-overlay--active");
    $("body").addClass("body-no-scroll");
    this.isOverlayOpen = true; 
  }

  closeOverlay() {
    this.searchOverlay.removeClass("search-overlay--active");
    $("body").removeClass("body-no-scroll");
    this.isOverlayOpen = false; 
  }
}

export default Search;