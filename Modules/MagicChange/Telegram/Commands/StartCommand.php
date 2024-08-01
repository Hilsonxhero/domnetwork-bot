<?php

namespace Modules\MagicChange\Telegram\Commands;

use Illuminate\Support\Str;
use Modules\User\Entities\User;
use Telegram\Bot\Commands\Command;
use Illuminate\Support\Facades\Hash;
use Telegram\Bot\Keyboard\Keyboard;
use Telegram\Bot\Laravel\Facades\Telegram;

class StartCommand extends Command
{
    protected string $name = 'start';
    protected string $description = 'Start Command to get you started';

    public function handle()
    {

        $sender = $this->getUpdate()->getMessage()->from;
        $fallbackUsername = $this->getUpdate()->getMessage()->from->username;
        $username = $this->argument(
            'username',
            $fallbackUsername
        );

        $user = User::where('uid', $sender->id)->first();


        if (!$user) {
            $user =    User::query()->create([
                'username' => $sender->username ?? "-",
                'first_name' =>  $sender->first_name ?? "-",
                'uid' => $sender->id,
                'password' => Hash::make(Str::random(8)),
                'is_magic_bot_user' => true,
                'is_dom_bot_user' => false
            ]);
        }
        $purchase_service = ['text' => '🛒 خرید '];
        $services = ['text' => '🛍  خرید های من'];
        $charge = ['text' => '💸 شارژ حساب'];
        $profile = ['text' => '👤 پروفایل'];
        $support = ['text' => '📮 پشتیبانی آنلاین'];
        $keyboard = [
            [$services, $purchase_service],
            [$charge, $support, $profile],
        ];

        $replyMarkup = json_encode([
            'keyboard' => $keyboard,
            'resize_keyboard' => true,
            'one_time_keyboard' => true,
        ]);
        $this->replyWithMessage([
            'text' => "سلام {$username} عزیز، به ربات Magic Change خوش آمدید. 🚀\nیکی از دکمه های زیر را انتخاب کنید !",
            'reply_markup' => $replyMarkup,
        ]);
        $user->update([
            'section' => null,
            'step' => null
        ]);
    }
}
