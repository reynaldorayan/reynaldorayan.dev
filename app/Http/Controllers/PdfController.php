<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Storage;

class PdfController extends Controller
{
    public function download()
    {
        if (Storage::exists('Resume - Rayan Reynaldo.pdf')) {
            return Storage::download('Resume - Rayan Reynaldo.pdf');
        } else {
            return response()->json(['error' => 'File not found'], 404);
        }
    }
}
