<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Krishna Sharma UPI Payment</title>
    <script type="text/javascript" src="https://unpkg.com/qr-code-styling/lib/qr-code-styling.js"></script>
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #f4f4f4;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            margin: 0;
        }

        .payment-container {
            background-color: #ffffff;
            padding: 30px;
            border-radius: 5px;
            box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
            width: 100%;
            max-width: 500px;
        }

        .payment-header {
            text-align: center;
            margin-bottom: 30px;
        }

        .payment-header h2 {
            margin: 0;
            color: #333;
        }

        .payment-details {
            text-align: center;
            font-size: 16px;
            color: #666;
        }

        .upi-id {
            font-weight: bold;
            color: #007bff;
        }

        .amount {
            font-weight: bold;
            color: #333;
        }

        .scan-to-pay {
            margin-top: 30px;
            text-align: center;
        }

        .scan-to-pay img {
            width: 200px;
            height: auto;
        }

        <style>.qrcode {
            position: relative;
            top: 0;
            left: 0;
            width: 200px;
            height: 200px;
        }

        .shell {
            position: absolute;
            top: 80px;
            left: 80px;
            width: 40px;
            height: 40px;
        }
    </style>
</head>

<body>
    <?php
    session_start();
    if ($_SESSION['email'] == 'root') {
        echo '<script>window.location = "/root"</script>';
        exit;
    }
    if ($_SESSION['email'] == null) {
        echo '<script>window.location = "/"</script>';
        exit;
    }
    ?>
    <div class="payment-container">
        <div class="payment-header">
            <h2>Library Managment UPI Payment</h2>
        </div>
        <div class="payment-details">
            <p>UPI ID: <span class="upi-id">Library@okicici</span></p>
            <p>Amount: <span class="amount" id="amount">₹20.00</span></p>
        </div>
        <img src="../img/paytm_l.png" style="height:45px;margin-left:34%;display:none;" id="paytm">
        <div class="scan-to-pay">
            <div style="position: relative; left: 0; top: 0;">
                <img is="qr-code-image" id="payment" src="https://via.placeholder.com/300"
                    data="upi://pay?pa=mukulsharmakana-3@oksbi&pn=Mukul%20sharma&am=10.00&cu=INR&aid=uGICAgIC10NXhWg"
                    size="500" colorlight="#FFFFFF" colordark="#000000" coversize="200" errorcorrectionlevel="H"
                    cover="../img/gpay.png" />
            </div>
        </div>
        <br>
        <br>
        <button
            style="width: 10.5cm;margin-left:0.7cm;height: 1cm;background-color: blue;border: solid black 1px;border-radius: 11px;color:white;"
            id="submit">Submit</button>
    </div>
    <script src='../js/code.js'></script>
    <script id="rendered-js">
        const qrCodeImage = document.querySelector('img');
        const fields = document.querySelectorAll('[name]');
        Array.from(fields).forEach(field => {
            field.addEventListener('input', event => {
                const {
                    name,
                    value } =
                    event.target;

                switch (name) {
                    case 'colorlight':
                    case 'colordark':
                        qrCodeImage.setAttribute(name, value + 'ff');
                        break;
                    case 'cover':
                        const file = event.target.files[0];
                        const fileReader = new FileReader();
                        fileReader.onload = () => {
                            qrCodeImage.setAttribute(name, fileReader.result);
                        };
                        fileReader.readAsDataURL(file);
                        break;
                    default:
                        qrCodeImage.setAttribute(name, value);
                }

            }, false);
        });
        // Get the URLSearchParams object containing the query parameters
        var queryParams = new URLSearchParams(window.location.search);

        // Get a specific parameter value by its name
        var prize = queryParams.get('prize');
        var method = queryParams.get('method');
        document.getElementById('submit').setAttribute('onclick', `window.opener.postMessage('close', '*');window.close();`)
        py = document.getElementById('payment')
        py.setAttribute('data', `upi://pay?pa=krishnasharma.active@okicici&pn=Krishna%20Sharma&am=${prize}&cu=INR&aid=uGICAgMDS27XROw`)
        if (method == 'google') {
            py.setAttribute('cover', `../img/gpay.png`)

        }
        document.getElementById('amount').innerText = prize
        if (method == 'paytm') {
            py.setAttribute('cover', 'kj')
            document.getElementById('paytm').style.display = 'block'

        }

        document.getElementById('qrcode').style.display = 'block'

    </script>


</body>

</html>