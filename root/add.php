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




    ?>
    <!-- component -->
    <div class="min-h-screen p-6 bg-gray-100 flex items-center justify-center">
        <div class="container max-w-screen-lg mx-auto">
            <div>
                <div class="bg-white rounded shadow-lg p-4 px-4 md:p-8 mb-6">
                    <div class="grid gap-4 gap-y-2 text-sm grid-cols-1 lg:grid-cols-3">
                        <div class="text-gray-600">
                            <p class="font-medium text-lg">Add Book</p>
                            <p>Please fill out all the fields.</p>
                            <p>
                                <?php
                                if ($_SERVER["REQUEST_METHOD"] == "POST") {
                                    // Retrieve form data
                                    $title = isset($_POST['title']) ? $_POST['title'] : '';
                                    $author = isset($_POST['author']) ? $_POST['author'] : '';
                                    $isbn = isset($_POST['author']) ? $_POST['isbn'] : '';
                                    $copies = isset($_POST['author']) ? $_POST['copies'] : '';
                                    $cost = isset($_POST['author']) ? $_POST['cost'] : '';

                                    // echo $title, $author, $isbn, $copies, $cost;
                                    // Prepare and execute SQL INSERT statement
                                    $sql = "INSERT INTO books (title, author, isbn, copies, cost) VALUES (?, ?, ?, ?, ?)";
                                    $stmt = $conn->prepare($sql);
                                    $stmt->bind_param("sssid", $title, $author, $isbn, $copies, $cost); // "sssid" represents two strings, an integer, and a double
                                    $stmt->execute();

                                    if ($stmt->affected_rows > 0) {
                                        echo "<span style='color: green;'>New record added successfully</span>";
                                    } else {
                                        echo "<span style='color: green;'>Error: " . $sql . "<br>" . $conn->error . "</span>";
                                    }

                                    // Close statement and connection
                                    $stmt->close();
                                    $conn->close();



                                }
                                ?>
                            </p>
                        </div>

                        <div class="lg:col-span-2">
                            <form action="add.php" method="POST">
                                <div class="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-5">
                                    <div class="md:col-span-5">
                                        <label for="full_name">Title</label>
                                        <input type="text" name="title" id="title"
                                            class="h-10 border mt-1 rounded px-4 w-full bg-gray-50" value=""
                                            placeholder="Title" />
                                    </div>

                                    <div class="md:col-span-5">
                                        <label for="author">Author</label>
                                        <input type="text" name="author" id="author"
                                            class="h-10 border mt-1 rounded px-4 w-full bg-gray-50" value=""
                                            placeholder="Author" />
                                    </div>

                                    <div class="md:col-span-3">
                                        <label for="isbn">ISBN</label>
                                        <input type="text" name="isbn" id="isbn"
                                            class="h-10 border mt-1 rounded px-4 w-full bg-gray-50" value=""
                                            placeholder="ISBN" />
                                    </div>

                                    <div class="md:col-span-2">
                                        <label for="city">Copies</label>
                                        <input type="text" name="copies" id="copies"
                                            class="h-10 border mt-1 rounded px-4 w-full bg-gray-50" value=""
                                            placeholder="Copies" />
                                    </div>
                                    <div class="md:col-span-1">
                                        <label for="zipcode">Cost</label>
                                        <input type="text" name="cost" id="cost"
                                            class="transition-all flex items-center h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                                            placeholder="₹" value="" />
                                    </div>






                                    <div class="md:col-span-5 text-right">
                                        <div class="inline-flex items-end">
                                            <button
                                                class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                                                type='submit'>Register
                                                Book</button>
                                        </div>
                                    </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>

</body>

</html>