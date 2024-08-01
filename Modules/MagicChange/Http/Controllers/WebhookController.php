<?php

namespace Modules\MagicChange\Http\Controllers;

use Illuminate\Contracts\Support\Renderable;
use Illuminate\Http\Request;
use Illuminate\Routing\Controller;
use Telegram\Bot\Laravel\Facades\Telegram;

class WebhookController extends Controller
{
    public function callback(Request $request)
    {
        $update = Telegram::bot("magic")->commandsHandler(true);
    }
}
