<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>About US</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <link rel="stylesheet" href="css/style.css">
</head>
<body>
    <?php
    include("include/nav.php")
    ?>
    <div class="2xl:container 2xl:mx-auto lg:py-16 lg:px-20 md:py-12 md:px-6 py-9 px-4">
    <div class="flex flex-col lg:flex-row justify-between gap-8">
        <div class="w-full lg:w-5/12 flex flex-col justify-center">
            <h1 class="text-3xl lg:text-4xl font-bold leading-9 text-gray-800 dark:text-white pb-4">About Us</h1>
            <p class="font-normal text-base leading-6 text-gray-600 dark:text-white">Welcome to NaradAI.co!

                We are a dynamic startup founded by Krishna Sharma, a passionate coder dedicated to making the world of programming more accessible and efficient. Our mission is to empower coders of all levels with a range of useful tools that simplify the development process.
                
                At NaradAI.co, we understand that coding can be both challenging and rewarding. That's why we've carefully curated a collection of tools designed to streamline your coding journey. Whether you're a seasoned developer or just starting out, our platform offers resources that will help you code smarter, faster, and with greater ease.
                
                Krishna Sharma, the driving force behind NaradAI.co, believes in the power of technology to drive positive change. He envisions a world where coding is not just a skill but a creative outlet accessible to everyone. With this vision in mind, he has created a platform where you can explore innovative tools and solutions to enhance your coding experience.</p>
        </div>
        <div class="w-full lg:w-8/12">
            <img class="w-full h-full" src="/static/img/web_developing.gif" alt="A group of People">
        </div>
    </div>

    <div class="flex lg:flex-row flex-col justify-between gap-8 pt-12">
        <div class="w-full lg:w-5/12 flex flex-col justify-center">
            <h1 class="text-3xl lg:text-4xl font-bold leading-9 text-gray-800 dark:text-white pb-4">Our Story</h1>
            <p class="font-normal text-base leading-6 text-gray-600 dark:text-white">Hi, I'm Krishna Sharma, and I want to share our journey with you. Yes, you might be thinking that I'm just a student in the 9th grade, but age has never been a barrier when it comes to following one's passion. I discovered my love for coding at a young age, and it sparked a fire within me that led to the birth of our small company, Narad AI.

                My fascination with technology and programming started as a hobby. I was drawn to the world of coding like a magnet, finding solace and excitement in lines of code that others might see as cryptic. With every project and every challenge, my skills grew, and so did my enthusiasm.
                
                As I delved deeper into the world of coding, I realized the immense potential it held. Coding wasn't just a skill; it was a gateway to endless possibilities. It had the power to transform ideas into reality, to solve problems, and to make life easier for people around the world.</p>
        </div>
        <div class="w-full lg:w-8/12 lg:pt-8">
            <div class="grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 lg:gap-4 shadow-lg rounded-md">
                <div class="p-4 pb-6 flex justify-center flex-col items-center">
                    <img class="md:block hidden" src="/static/img/krishna_ceo.jpg" alt="Krishna Sharma featured Image">
                    <img class="md:hidden block" src="/static/img/krishna_ceo.jpg" alt="Krishna Sharma featured Image">
                    <p class="font-medium text-xl leading-5 text-gray-800 dark:text-white mt-4">Krishna Sharma</p>
                </div>
                <div class="p-4 pb-6 flex justify-center flex-col items-center">
                    <img class="md:block hidden" src="/static/img/mukul sharma.jpg" style="width: 5cm;" alt="Mukul Sharma featured Image">
                    <img class="md:hidden block" src="/static/img/mukul sharma.jpg" alt="Mukul Sharma featured Image">
                    <p class="font-medium text-xl leading-5 text-gray-800 dark:text-white mt-4">Mukul Sharma</p>
                </div>
            </div>
        </div>
    </div>
</div>

</body>
</html>