<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Checkout - Library Management</title>
    <script src="https://cdn.tailwindcss.com"></script>
</head>

<body>
    <?php
    include("../include/nav.php");
    if($_SESSION['email'] == 'root'){
        echo'<script>window.location = "/root"</script>';
        exit;
    }
    if($_SESSION['email'] == null){
        echo'<script>window.location = "/"</script>';
        exit;
    }
    ?>


    <div class="bg-gray-100 h-screen py-8">
        <div class="container mx-auto px-4">
            <h1 class="text-2xl font-semibold mb-4">Book Cart</h1>
            <div class="flex flex-col md:flex-row gap-4">
                <div class="md:w-3/4">
                    <div class="bg-white rounded-lg shadow-md p-6 mb-4">
                        <table class="w-full">
                            <?php
                            if (isset($_GET['title'])) {
                                $title = $_GET['title'];
                                $prize = $_GET['prize'];
                                $isbn = $_GET['isbn'];

                                echo ' <thead>
                                    <tr>
                                        <th class="text-left font-semibold">Product</th>
                                        <th class="text-left font-semibold">Price</th>
                                        <th class="text-left font-semibold">ISBN</th>
                                        <th class="text-left font-semibold">Total</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td class="py-4">
                                            <div class="flex items-center">
                                                <img class="h-16 w-16 mr-4" src="../img/book.png"
                                                    alt="Product image">
                                                <span class="font-semibold">' . $title . '</span>
                                            </div>
                                        </td>
                                        <td class="py-4">₹' . $prize . '</td>
                                        <td class="py-4">
                                            ' . $isbn . '
                                        </td>
                                        <td class="py-4">₹' . $prize . '</td>
                                    </tr>
                                    <!-- More product rows -->
                                </tbody>';
                            }

                            ?>
                        </table>
                    </div>
                </div>
                <div class="md:w-1/4">
                    <div class="bg-white rounded-lg shadow-md p-6">
                        <?php
                        if (isset($_GET['title'])) {
                            $prize = $_GET['prize'];
                            echo '
                        <h2 class="text-lg font-semibold mb-4">Summary</h2>
                        <div class="flex justify-between mb-2">
                            <span>Subtotal</span>
                            <span>₹' . $prize . '</span>
                        </div>
                        <hr class="my-2">
                        <div class="flex justify-between mb-2">
                            <span class="font-semibold">Total</span>
                            <span class="font-semibold">₹' . $prize . '</span>
                        </div>';
                        }
                        ?>
                        <br>
                        <button type="button" onclick=<?php
                        if (isset($_GET['title'])) {
                            $prize = $_GET['prize'];
                            echo "pay('" . $prize . "','google')";
                        } ?>
                            class="text-gray-900 bg-white hover:bg-gray-100 border border-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-800 dark:bg-white dark:border-gray-700 dark:text-gray-900 dark:hover:bg-gray-200 me-2 mb-2 w-full">
                            <img src="../img/google.png" alt="" style="height: 20px;">&ThickSpace;&ThickSpace;
                            Pay with Google
                        </button>
                        <button type="button" onclick=<?php
                        if (isset($_GET['title'])) {
                            $prize = $_GET['prize'];
                            echo "pay('" . $prize . "','paytm')";
                        } ?>
                            class="text-gray-900 bg-white hover:bg-gray-100 border border-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-800 dark:bg-white dark:border-gray-700 dark:text-gray-900 dark:hover:bg-gray-200 me-2 mb-2 w-full">
                            <img src="../img/paytm.png" alt="" style="height: 20px;">&ThickSpace;&ThickSpace;
                            Pay with Paytm
                        </button>
                        <!-- <button class="bg-blue-500 text-white py-2 px-4 rounded-lg mt-4 w-full">Checkout</button> -->
                    </div>
                </div>
            </div>
        </div>
    </div>
    <script>
        function pay(prize, method) {
            var signupURL = `/user/purchase.php?prize=${prize}&method=${method}`;
            var popupWidth = 500;
            var popupHeight = 600;

            // Calculate the center position of the screen for the popup
            var leftPosition = (screen.width - popupWidth) / 2;
            var topPosition = (screen.height - popupHeight) / 2;

            // Open a popup window with the specified URL, size, and position
            var popupWindow = window.open(signupURL, 'Signup', 'width=' + popupWidth + ', height=' + popupHeight + ', top=' + topPosition + ', left=' + leftPosition);

        }

        // Listen for messages from the popup window
        window.addEventListener('message', function (event) {
            // Update content with the received message from popup
            if (event.data == 'close') {
                window.location = `check.php?isbn=<?php if (isset($_GET['isbn'])) {$isbn = $_GET['isbn'];echo $isbn;}?>&prize=<?php if (isset($_GET['prize'])) {$prize = $_GET['prize'];echo $prize;} ?>`
            }
        });
    </script>
</body>

</html>