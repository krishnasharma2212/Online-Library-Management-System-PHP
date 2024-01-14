<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Home - Library Management</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <link rel="stylesheet" href="css/style.css">
    
</head>
<body>
    
    <?php
    include("include/nav.php");
    if($_SESSION['email'] == 'root'){
        echo'<script>window.location = "/root"</script>';
        exit;
    }
    if($_SESSION['email'] != null){
        echo'<script>window.location = "/user/"</script>';
        exit;
    }
    ?>
      <section class="text-gray-700 body-font">
        <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
            <div
                class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Library Management System
                </h1>
                <p class="mb-8 leading-relaxed">Welcome to our Library Management System, where the world of books meets
                    seamless organization! Our system boasts a rich array of features designed to streamline the
                    management of your library's treasures. </p>
                <div class="flex justify-center">
                    <button
                        class="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
                        onclick="window.location = 'login.php'">Login</button>
                    <button
                        class="ml-4 inline-flex text-gray-700 bg-gray-200 border-0 py-2 px-6 focus:outline-none hover:bg-gray-300 rounded text-lg"
                        onclick="window.location = 'signin.php'">Sign In</button>
                </div>
            </div>
            <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                <img class="object-cover object-center rounded" alt="hero"
                    src="/img/library-management-system-500x500.webp">
            </div>
        </div>
    </section>  


    <footer class="text-gray-700 body-font">


        <div class="bg-gray-200">
            <div class="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
                <p class="text-gray-500 text-sm text-center sm:text-left">© 2024 Library Managment System —
                    <a href="https://github.com/krishnasharma2212/Online-Library-Management-System-PHP" class="text-gray-600 ml-1" target="_blank"
                        rel="noopener noreferrer">@Krishna Sharma</a>
                </p>
                <span
                    class="sm:ml-auto sm:mt-0 mt-2 sm:w-auto w-full sm:text-left text-center text-gray-500 text-sm">All
                    Right Reserved</span>
            </div>
        </div>
    </footer>
    <a href="https://github.com/krishnasharma2212/Online-Library-Management-System-PHP"
        class="rounded-full w-12 h-12 bg-gray-100 fixed bottom-0 right-0 flex items-center justify-center text-gray-800 mr-8 mb-8 shadow-sm border-gray-300 border"
        target="_blank"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
            stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path
                d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22">
            </path>
        </svg></a>


<!-- from node_modules -->

</body>
</html>