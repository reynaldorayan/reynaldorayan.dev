<!DOCTYPE html>
<html>

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>{{ $data['subject'] }}</title>
    <style>
        body {
            margin: 0;
            padding: 0;
            line-height: 1.6;
            font-family: 'Century Gothic', sans-serif;
            background: #eeeeee;
            padding: 15px;
        }

        .container {
            max-width: 500px;
            margin: 50px auto;
            padding: 3vh;
            background: white;
            border-radius: 5px;
        }

        .content {
            background: #f1f1f1;
            border-radius: 5px;
            padding: 15px;
        }

        .content span {
            color: #666666;
        }
    </style>
</head>

<body>
    <div class="container">
        <div class="content">
            <div>Name: <span>{{ $data['name'] }}</span></div>
            <div>Subject: <span>{{ $data['subject'] }}</span></div>
            <div>Message: <br /> <span>{{ $data['message'] }}</span></div>
        </div>

        <p>Thank you for your message. I will respond to your inquiry as soon as possible.</p>
        <p>Please let me know if you have any further questions.</p>

        <p>Sincerely, <br /> Rayan Reynaldo</p>
    </div>
</body>

</html>
