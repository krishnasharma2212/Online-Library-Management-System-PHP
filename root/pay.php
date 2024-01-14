<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Payment Check - Library Management</title>
    <script src="https://cdn.tailwindcss.com"></script>

</head>

<body>

    <?php

    include("../include/nav.php");
    include("../include/db.php");
    if (isset($_GET['isbn'])) {
        $isbn = $_GET['isbn'];
        $email_12 = $_GET['email'];
    
        // Fetch the current no_books list for the user
        $sqlSelect = "SELECT no_books FROM users WHERE email = ?";
        $stmtSelect = $conn->prepare($sqlSelect);
        $stmtSelect->bind_param("s", $email_12);
        $stmtSelect->execute();
        $stmtSelect->bind_result($currentBooks);
        $stmtSelect->fetch();
        $stmtSelect->close();
    
        // Decode the JSON string to an array
        if ($currentBooks == '' or $currentBooks == null) {
            $currentBooks = "[]";
        }
        
        $currentBooksArray = json_decode($currentBooks, true);
    
        // Add the new book to the array
        $currentBooksArray[] = $isbn;
    
        // Convert the updated array back to JSON
        $newBooksJSON = json_encode($currentBooksArray);
    
        // Update the database with the new no_books list
        $sqlUpdate = "UPDATE users SET no_books = ? WHERE email = ?";
        $stmtUpdate = $conn->prepare($sqlUpdate);
        $stmtUpdate->bind_param("ss", $newBooksJSON, $email_12);
        $stmtUpdate->execute();
        $stmtUpdate->close();


        // Read JSON data from a file
        $jsonData = file_get_contents('data.json');

        // Convert JSON data to PHP array
        $data = json_decode($jsonData, true); // Pass true for associative array, false for object

        unset($data[$email_12]);

        $jsonData = json_encode($data);

        // Write JSON data to a file
        file_put_contents('data.json', $jsonData);
        echo '<script>window.location="/root/pay.php"</script>';
    }
    

    if ($_SESSION['email'] != 'root') {
        echo '<script>window.location = "/"</script>';
        exit;
    }
    ?>

    <div class="min-h-screen bg-gray-300">
        <div class="container mx-auto p-10 max-w-screen-lg">
            <div class="bg-white rounded shadow p-8">

                <!-- Order Summary  -->
                <div>
                    <h3 class="text-xl mt-4 font-bold">Pending Payment</h3>
                    <!--     BOX     -->
                    <?php
                    // Read JSON data from a file
                    $jsonData = file_get_contents('data.json');

                    // Convert JSON data to PHP array
                    $data = json_decode($jsonData, true);
                    $email_1 = '';
                    $time = '';
                    $isbn = '';
                    if($jsonData == '{}'){
                        echo "<h2>Nothing to Show</h2>";
                    }
                    foreach ($data as $item) {
                        $email_1 = $item['email'];
                        $time = $item['time'];
                        $isbn = $item['isbn'];
                    
                    // Prepare a SQL query to get the book record by ISBN
                    $stmt = $conn->prepare("SELECT * FROM books WHERE isbn = ?");

                    $stmt->bind_param("s", $isbn); // Bind the ISBN parameter
                    
                    // Execute the query
                    $stmt->execute();

                    // Get the result
                    $result = $stmt->get_result();

                    $loc = "'/root/pay.php?isbn=" . $isbn . "&email=" . $email_1 . "'";

                    // Check if there are any rows returned
                    if ($result->num_rows > 0) {
                        // Output data of each row
                        while ($row = $result->fetch_assoc()) {
                            echo '
<div class="border w-full rounded mt-5 flex p-4 justify-between items-center flex-wrap">
                        <img src="../img/pending.png" class="w-12">
                        <div class="w-2/3">
                            <h3 class="text-lg font-medium">' . $row['title'] . '</h3>
                            <p class="text-gray-600 text-xs">Author is <b>' . $row['author'] . '</b></p>
                            <h3 class="text-red-700 text-xs font-bold mt-1">User Email - ' . $email_1 . '</h3>
                            <h3 class="text-green-700 text-xs font-bold mt-1">ISBN: ' . $row['isbn'] . '</h3>
                            <br>
                            <button class="rounded-lg px-4 py-2 bg-green-600 text-green-100 hover:bg-green-700 duration-300" onclick="window.location=' . $loc . '">Approve</button>
                        </div>
                        <div>
                            <h4 class="text-3xl font-medium"><sup class="text-lg text-purple-800">₹</sup> ' . $row['cost'] . '</h4>
                        </div>

                    </div>';
                        }
                    }
                }
                    ?>


                </div>
            </div>

        </div>
    </div>
</body>

</html>