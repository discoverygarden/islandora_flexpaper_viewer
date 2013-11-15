Drupal.behaviors.ConfigFlexpaper = {
    attach: function (context, settings) {
        console.log(Drupal.settings);
        var fp = new FlexPaperViewer(
            Drupal.settings.islandora_flexpaper_viewer.flexpaper_path + "/FlexPaperViewer",
            "viewer", //ID selector for the div above
            {
                config : Drupal.settings.islandora_flexpaper_viewer.config
            }
        );
    }
}
