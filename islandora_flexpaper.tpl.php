<?php
/**
 * @file
 * This file is the template to show a flexpaper swf player
 *
 * Template file to make a FlexPaper viewer.
 *
 * @param string flexpaper_path
 * @param string swf_url
 */

?>
<div id="flexpaper">
<div id="viewer"></div>
<script type="text/javascript">
var fp = new FlexPaperViewer(
"<?php echo $flexpaper_path; ?>/FlexPaperViewer",
"viewer", //ID selector for the div above
{
config : <?php echo drupal_to_js($flexpaper_config);?>
}
);
</script>
</div>
