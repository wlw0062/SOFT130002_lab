<?php

    function outputOrderRow($file, $title, $quantity, $price) {
        $imgURL = "images/books/tinysquare/".$file;
        $totalPrice = $quantity * $price;
        echo "<tr>";
        //TODO
        echo "<td><img src=\"$imgURL\"></td>";
        echo "<td>$title</td>";
        echo "<td>$quantity</td>";
        echo "<td>$price</td>";
        echo "<td>$totalPrice</td>";
        echo "</tr>";
    }
?>