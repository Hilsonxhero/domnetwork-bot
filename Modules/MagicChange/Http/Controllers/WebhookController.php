<?php

namespace Modules\MagicChange\Http\Controllers;

use Illuminate\Http\Request;
use Modules\User\Entities\User;
use Illuminate\Routing\Controller;
use Telegram\Bot\Laravel\Facades\Telegram;
use Illuminate\Contracts\Support\Renderable;
use Modules\MagicChange\Telegram\Keyboard\Keyboards;
use Modules\MagicChange\Telegram\Keyboard\KeyboardHandler;

class WebhookController extends Controller
{
    public function callback(Request $request)
    {
        $update = Telegram::bot("magic")->commandsHandler(true);


        $sender = $update->getMessage()->from;
        $user = User::query()->where('uid', $sender->id)->first();

        if ($update->getMessage()->text !== "/start") {
            if ($update->getMessage()->text == Keyboards::HOME) {
                Telegram::sendMessage([
                    'text' => "سلام {$user->username} عزیز، به ربات Magic Change خوش آمدید. 🚀\nیکی از دکمه های زیر را انتخاب کنید !",
                    'chat_id' => $sender->id,
                    'reply_markup' => KeyboardHandler::home(),
                ]);
                return true;
            }

            if ($update->getMessage()->text == Keyboards::PROFILE) {
                $user->update([
                    'section' => Keyboards::PROFILE,
                    'step' => 1
                ]);
                $services = $user->subscriptions()->get()->count();
                $avaible_services = $user->subscriptions()->where('status', 'active')->whereDate('expire_at', '>=', now())->get()->count();
                $register_date = formatGregorian($user->created_at);
                $message = "👤 *شناسه کاربری:* `$user->uid`\n\n" .
                    "⏰ *تاریخ عضویت:* `$register_date`\n\n" .
                    "💰 *موجودی:* `$user->wallet` " . "تومان\n\n" .
                    "🗳 *تعداد کل سرویس ها:* `$services`\n\n" .
                    "✅ *سرویس های فعال:* `$avaible_services`\n\n";
                Telegram::sendMessage([
                    'text' => $message,
                    "chat_id" => $sender->id,
                    'parse_mode' => 'MarkdownV2',
                    'reply_markup' => KeyboardHandler::home(),
                ]);
            }
        }
    }
}
