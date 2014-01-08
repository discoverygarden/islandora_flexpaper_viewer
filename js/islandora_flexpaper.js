(function($){
    Drupal.behaviors.ConfigFlexpaper = {
        attach: function (context, settings) {
	    $('#documentViewer').FlexPaperViewer(
	        {
		    config : Drupal.settings.islandora_flexpaper_viewer.config
	        }
	    );
        }
    }
})(jQuery)
