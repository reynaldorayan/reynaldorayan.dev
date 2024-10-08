<?php

use App\Http\Controllers\ContactController;
use App\Http\Controllers\PdfController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('home');
});

Route::get('/download-resume', [PdfController::class, 'download']);

Route::post('/send-mail', [ContactController::class, 'send']);
