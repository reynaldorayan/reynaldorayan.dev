<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <link rel="icon" href="{{ asset('storage/logo.png') }}" type="image/png">

    <title>Rayan</title>

    @vite('resources/ts/app.tsx')
    @inertiaHead
</head>

<body class="antialiased">
    @inertia
</body>

</html>
