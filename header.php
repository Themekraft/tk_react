<?php
/**
 *
 * The template for displaying the header
 *
 */
?>

<!DOCTYPE html>
<html <?php language_attributes(); ?> dir="ltr">

    <head>
    	<meta charset="<?php bloginfo( 'charset' ); ?>">
    	<meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="theme-color" content="#ffffff">

        <!-- <link rel="manifest" href="./manifest.json"> -->

        <?php wp_head(); ?>
	</head>

    <body <?php body_class(); ?>>
