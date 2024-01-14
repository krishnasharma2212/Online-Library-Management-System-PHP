
<?php 
include("include/db.php");
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Admin - Library Management</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <link rel="stylesheet" href="css/style.css">
    
</head>
<body>
    
    <?php
    include("include/nav.php");
    if(isset($_SESSION['email']) and $_SESSION['email'] == 'root'){
      echo '<script>window.location = "/root/"</script>';
    }
    ?>
<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Retrieve form data
    $name = isset($_POST['name']) ? $_POST['name'] : '';
    $password = isset($_POST['password']) ? $_POST['password'] : '';

    if($name == 'admin' and $password == 'root'){
        $_SESSION['email'] = 'root';
        echo'<script>window.location = "/root"</script>';
    }else{
        echo 'failed';
    }



}
?>
<div class="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
  <div class="sm:mx-auto sm:w-full sm:max-w-sm">
    <img class="mx-auto h-20 w-auto" src="img/logo.png" alt="Your Company">
    <h2 class="mt-10 text-center text-2xl font-bold leading-9 tracking-tight to-blue-500">Admin login</h2>
  </div>

  <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
    <form class="space-y-6" action="/admin.php" method="POST">
      <div>
        <label for="email" class="block text-sm font-medium leading-6 text-balance">Username</label>
        <div class="mt-2">
          <input id="name" name="name" type="name" style="padding-left: 10px;color:black;" autocomplete="username" required class="block w-full rounded-md border-0 bg-white/5 py-1.5 text-cyan-600 shadow-sm ring-1 ring-inset ring-red-500 focus:ring-2 focus:ring-inset focus:ring-balck sm:text-sm sm:leading-6">
        </div>
      </div>

      <div>
        <div class="flex items-center justify-between">
          <label for="password" class="block text-sm font-medium leading-6 text-black">Password</label>

        </div>
        <div class="mt-2">
          <input id="password" name="password" type="password" style="padding-left: 10px; color:black;" autocomplete="current-password" required class="block w-full rounded-md border-0 bg-white/5 py-1.5 text-white shadow-sm ring-1 ring-inset ring-red-500 focus:ring-2 focus:ring-inset focus:ring-black sm:text-sm sm:leading-6">
        </div>
      </div>

      <div>
        <button type="submit" class="flex w-full justify-center rounded-md bg-red-500 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-red-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-500">Admin Login</button>
      </div>
    </form>

  </div>
</body>
</html>