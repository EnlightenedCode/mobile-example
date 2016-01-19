/* globals $ */

(function () {
  'use strict';

  angular.module('commonServices')
    .service('ViewHelper', [function () {


      var currentlyLoading = false;
      var loading = {
        show: function () {
          currentlyLoading = true;
          document.getElementById('loading').style.display = 'block';
        },

        hide: function() {
          currentlyLoading = false;
          document.getElementById('loading').style.display = 'none';
        },

        isLoading: function(){
          return currentlyLoading;
        }
      };

      var mapInfo = {
        preview: function () {
          document.getElementById('location-info').style.bottom = '-425px';
        },

        show: function () {
          document.getElementById('location-info').style.bottom = '0px';
        },

        hide: function () {
          document.getElementById('location-info').style.bottom = '-500px';
        }
      };

      var filterInfo = {
        preview: function () {
          document.getElementById('filter-info').style.bottom = '-425px';
        },

        show: function () {
          document.getElementById('filter-info').style.bottom = '0px';
        },

        hide: function () {
          document.getElementById('filter-info').style.bottom = '-500px';
        }
      };

      var tooltips = {
        initialize: function () {
          $(document).ready(function(){
            $('.tooltipped').tooltip({delay: 50});
          });
        }
      };

      return {
        loading: loading,
        mapInfo: mapInfo,
        filterInfo: filterInfo,
        tooltips: tooltips
      };
    }]);

})();
