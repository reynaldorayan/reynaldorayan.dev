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
        <div>
            <div>From: <span>{{ $data['name'] }}</span></div>
            <div>Email: <span>{{ $data['email'] }}</span></div>
            <div><br /> <span>{{ $data['message'] }}</span></div>
        </div>
    </div>
</body>

</html>
