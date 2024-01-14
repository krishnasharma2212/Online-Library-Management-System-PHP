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
    if($_SESSION['email'] != 'root'){
        echo'<script>window.location = "/"</script>';
        exit;
    }
    ?>
    <div class="min-h-screen bg-gray-300">
        <div class="container mx-auto p-10 max-w-screen-lg">
            <div class="bg-white rounded shadow p-8">
                <!-- Order Summary  -->
                <div>
                    <h3 class="text-xl mt-4 font-bold">Admin Panel</h3>
                    <div class="border w-full rounded mt-5 flex p-4 justify-between items-center flex-wrap">
                        <img src="../img/add.png" class="w-12">
                        <div class="w-2/3">
                            <h3 class="text-lg font-medium">Add Book</h3>
                        </div>
                        <div>
                            <button onclick="window.location='/root/add.php'"
                                class="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">Add
                                Now</button>
                        </div>
                    </div>
                    <div class="border w-full rounded mt-5 flex p-4 justify-between items-center flex-wrap">
                        <img src="../img/pending.png" class="w-12">
                        <div class="w-2/3">
                            <h3 class="text-lg font-medium">Pending Payment</h3>
                        </div>
                        <div>
                            <button
                                class="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow" onclick="window.location = '/root/pay.php'">Check</button>
                        </div>
                    </div>
                    <div class="border w-full rounded mt-5 flex p-4 justify-between items-center flex-wrap">
                        <img src="../img/show.png" class="w-12">
                        <div class="w-2/3">
                            <h3 class="text-lg font-medium">Manage Books</h3>
                        </div>
                        <div>
                            <button onclick="window.location='/root/all_books.php'"
                                class="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">Manage</button>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    </div>

</body>

</html>