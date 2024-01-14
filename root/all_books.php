<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Home - Library Management</title>
    <script src="https://cdn.tailwindcss.com"></script>

</head>

<body>

    <?php

    include("../include/nav.php");
    include("../include/db.php");
    if($_SESSION['email'] != 'root'){
        echo'<script>window.location = "/"</script>';
        exit;
    }
    if (isset($_GET['del'])) {
        $isbn = $_GET['del'];
        // Delete record from the 'books' table based on ISBN
        $sql = "DELETE FROM books WHERE isbn = ?";
        $stmt = $conn->prepare($sql);
        $stmt->bind_param("s", $isbn);
        $stmt->execute();

        if ($stmt->affected_rows > 0) {
            echo "<script>alert('Record deleted successfully')</script>";
        } else {
            echo "<script>alert('Error deleting record: " . $conn->error . "')</script>";
        }
    }
    ?>
    <div class="min-h-screen bg-gray-300">
        <div class="container mx-auto p-10 max-w-screen-lg">
            <div class="bg-white rounded shadow p-8">
                <!-- Order Summary  -->
                <div>
                    <h3 class="text-xl mt-4 font-bold">All Books</h3>
                    <!--     BOX     -->

                    <?php
                // Fetch all books from the 'books' table
                $sql = "SELECT * FROM books";
                $result = $conn->query($sql);

                if ($result->num_rows > 0) {
                    // Output data of each row
                    while ($row = $result->fetch_assoc()) {
                        $loc = "'/root/all_books.php?del=".$row['isbn']."'";
                        echo '
                        <div class="border w-full rounded mt-5 flex p-4 justify-between items-center flex-wrap">
                        <img src="../img/book.png" class="w-12">
                        <div class="w-2/3">
                            <h3 class="text-lg font-medium">'.$row['title'].'</h3>
                            <p class="text-gray-600 text-xs">Author is <b>'.$row['author'].'</b></p>
                            <h3 class="text-red-700 text-xs font-bold mt-1">Only '.$row['copies'].' left in stock</h3>
                            <h3 class="text-green-700 text-xs font-bold mt-1">ISBN: '.$row['isbn'].'</h3>
                        </div>
                        <div>
                            <h4 class="text-3xl font-medium"><sup class="text-lg text-purple-800">₹</sup> '.$row['cost'].'</h4>
                            <br>
                            <button class="rounded-lg px-4 py-2 bg-red-600 text-red-100 hover:bg-red-700 duration-300" onclick="window.location='.$loc.'">Delete</button>
                        </div>

                    </div>
                        ';
                        // Display other book details as needed
                    }
                } else {
                    echo "No books found";
                }

                // Close connection
                $conn->close();
                    ?>
                    <!-- <div class="border w-full rounded mt-5 flex p-4 justify-between items-center flex-wrap">
                        <img src="../img/book.png" class="w-12">
                        <div class="w-2/3">
                            <h3 class="text-lg font-medium">Title</h3>
                            <p class="text-gray-600 text-xs">Author is <b>author_name</b></p>
                            <h3 class="text-red-700 text-xs font-bold mt-1">Only 2 left in stock</h3>
                            <h3 class="text-green-700 text-xs font-bold mt-1">ISBN: 070837</h3>
                            <br>
                            <button class="rounded-lg px-4 py-2 bg-red-600 text-red-100 hover:bg-red-700 duration-300" onclick="window.location='/root/all_books.php?del=3'">Delete</button>
                         </div>
                        <div>
                            <h4 class="text-3xl font-medium"><sup class="text-lg text-purple-800">₹</sup> Cost</h4>
                            <h5 class="text-sm font-bold text-purple-800">ISBN: 23432</h5>
                        </div>

                    </div> -->

                </div>
            </div>

        </div>
    </div>

</body>

</html>