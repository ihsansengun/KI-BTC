import waypoints from '../../../../node_modules/waypoints/lib/noframework.waypoints';

class RevalOnScroll {
    constructor(els, offset) {
        this.lazyImages = $('lazyload');
        this.itemsToReveal = els;
        this.offsetPercentage = offset;

        this.hideInitially();
        this.createWaypoints();
        this.refreshWayPoints();
    }


    refreshWayPoints(){
        this.lazyImages.on('load', function () {
           Waypoint.refreshAll();
        });
    }


    hideInitially () {
        this.itemsToReveal.addClass('reveal-item');
    }


    createWaypoints() {
        var that = this;
        this.itemsToReveal.each(function () {
          var currentItem = this;
          new Waypoint({
              element: currentItem,
              handler: function () {
                $(currentItem).addClass('reveal-item--is-visible')
              },
              offset: that.offsetPercentage
          });

        });

    }

}

export default RevalOnScroll;