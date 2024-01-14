<?php
session_start();

if ($_SESSION['email'] == 'root') {
    echo '<script>window.location = "/root"</script>';
    exit;
}
if ($_SESSION['email'] != null) {

    if (isset($_GET['prize'])) {
        $prize = $_GET['prize'];
        $isbn = $_GET['isbn'];

        // Read JSON data from a file
        $jsonData = file_get_contents('../root/data.json');

        // Convert JSON data to PHP array
        $data = json_decode($jsonData, true); // Pass true for associative array, false for object
        $currentDateTime = date("Y-m-d H:i:s");
        $raw = array(
            'cost' => $prize,
            'isbn' => $isbn,
            'time' => $currentDateTime,
            'email' => $_SESSION['email']
        );
        $row;
        $data[$_SESSION['email']] = $raw;
        $jsonData = json_encode($data);

        // Write JSON data to a file
        file_put_contents('../root/data.json', $jsonData);
        echo "You Requested is noted. Our agent will verify it in 24hour. <a href='/'>Click Here</a>";
    }
}
?>