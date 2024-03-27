<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <p>Welcome to my homepage</p>
    <?php 
        $today=date("F j, Y");
        echo '<p>Today is:'.$today.'</p>';
    ?>
</body>
</html>