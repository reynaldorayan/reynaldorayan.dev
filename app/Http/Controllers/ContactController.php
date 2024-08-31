<?php

namespace App\Http\Controllers;

use App\Mail\ContactMail;
use App\Mail\ToAdminMail;
use App\Mail\ToUserMail;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;

class ContactController extends Controller
{
    public function send(Request $request)
    {
        $data = $request->all();

        Mail::to('connect@reynaldorayan.dev')->send(new ToAdminMail($data));

        Mail::to($data['email'])->send(new ToUserMail($data));
    }
}
