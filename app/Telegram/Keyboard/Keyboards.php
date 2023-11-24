<?php

namespace App\Telegram\Keyboard;

class  Keyboards
{
    const PURCHASE_SERVICE = "🛒 خرید سرویس";
    const SERVICES = '🛍 سرویس های من';
    const CHARGE = '💸 شارژ حساب';
    const PRICING = '🛒 تعرفه خدمات';
    const PROFILE = '👤 پروفایل';
    const SUPPORT = '📮 پشتیبانی آنلاین';
    const GUIDE = '🔗 راهنمای اتصال';
    const HOME = "🏠 خانه";
    const EXTENSION_SERVICE = "🔄 تمدید";

    public static $keyboards = [
        self::PURCHASE_SERVICE,
        self::SERVICES,
        self::CHARGE,
        self::PRICING,
        self::PROFILE,
        self::SUPPORT,
        self::GUIDE,
        self::EXTENSION_SERVICE
    ];

    // public static $main_keys = [
    //     self::PURCHASE_SERVICE => [

    //     ],

    // ];
}
