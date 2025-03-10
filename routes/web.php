<?php

use Illuminate\Support\Str;
use Modules\User\Entities\User;
use Modules\Order\Entities\Order;
use Modules\Server\Entities\Server;
use Illuminate\Support\Facades\Http;
use Modules\Order\Entities\PreOrder;
use Modules\Server\Entities\Package;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Storage;
use Telegram\Bot\Laravel\Facades\Telegram;
use App\Http\Controllers\WebhookController;
use SimpleSoftwareIO\QrCode\Facades\QrCode;
use Modules\Setting\Transformers\SettingResource;
use Spatie\MediaLibrary\Conversions\ImageGenerators\Webp;
use Vandar\Cashier\Models\Payment;
use DOMXPath;
use DOMDocument;
/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

Route::get("test", function () {
    // try {

    //     $payment = Payment::create(['amount' => 10000]);
    //     dd($payment);

    //     dd($payment->url);
    // } catch (\Throwable $th) {
    //     dd($th->getMessage());
    // }

    try {
        /*

This is a sample script, that demonstrates sending
PerfectMoney e-Voucher purchase request and parsing
output data to array.

*/

        // trying to open URL to process PerfectMoney e-Voucher creation
        $f = fopen('https://perfectmoney.com/acct/ev_create.asp?AccountID=63150797&PassPhrase=amir3090@A&Payer_Account=U45963880&Amount=1', 'rb');

        if ($f === false) {
            dd('error openning url');
        }

        // getting data
        $out = "";
        while (!feof($f)) $out .= fgets($f);
        // dd($out);

        fclose($f);

        $html = $out;
        $dom = new DOMDocument();
        libxml_use_internal_errors(true);
        $dom->loadHTML($html);
        libxml_clear_errors();
        $xpath = new DOMXPath($dom);
        $error_node = $xpath->query('//input[@name="ERROR"]')->item(0);
        $voucher_num_node = $xpath->query('//input[@name="VOUCHER_NUM"]')->item(0);
        $voucher_code_node = $xpath->query('//input[@name="VOUCHER_CODE"]')->item(0);

        if (!is_null($voucher_num_node)) {
            $voucher_num_value = $voucher_num_node->getAttribute('value');
            dd($voucher_num_value);
            $voucher_code_value = $voucher_code_node->getAttribute('value');
        }

        // if (!preg_match_all("/<input name='(.*)' type='hidden' value='(.*)'>/", $out, $result, PREG_SET_ORDER)) {
        //     dd('Ivalid output');
        //     exit;
        // }

        // $ar = "";
        // foreach ($result as $item) {
        //     $key = $item[1];
        //     $ar[$key] = $item[2];
        // }

        // echo '<pre>';
        // dd($ar);
        // echo '</pre>';
    } catch (\Throwable $th) {
        dd($th);
    }
});

Route::fallback(function () {

    // $qrCode = QrCode::format('png')->generate('Hello, World!');
    // $path = 'public/images/qrcodes/' . uniqid() . '.png';
    // Storage::put($path, $qrCode);
    // $url = Storage::url($path);
    // dd($url);

    // return response()->json(['qr_code_url' => $url]);

    return view('welcome');
})->name('welcome');
