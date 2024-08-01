<?php

namespace Modules\MagicChange\Telegram\Keyboard;

use Telegram\Bot\Laravel\Facades\Telegram;

class  KeyboardHandler
{
    public static function home()
    {
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
        return $replyMarkup;
    }
    public static function service()
    {
        $extension_service = ['text' => Keyboards::EXTENSION_SERVICE];
        $home = ['text' => Keyboards::HOME];
        $keyboard = [
            [$extension_service],
            [$home],
        ];
        $replyMarkup = json_encode([
            'keyboard' => $keyboard,
            'resize_keyboard' => true,
            'one_time_keyboard' => false,
        ]);
        return $replyMarkup;
    }
}
