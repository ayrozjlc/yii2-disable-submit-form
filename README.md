Yii2 Disable Buttons
=========================

Yii2 asset to automatically disable submit buttons on Yii2 [ActiveForm](http://www.yiiframework.com/doc-2.0/yii-widgets-activeform.html).

## Installation

The preferred way to install this extension is through [composer](http://getcomposer.org/download/).

Either run

```bash
composer require --prefer-dist "ayrozjlc/yii2-disable-submit-form:*"
```

or add

```
"ayrozjlc/yii2-disable-submit-form": "*"
```

to the `require` section of your `composer.json` file.

## Register Asset

Register the `ayrozjlc\disablesubmit\DisableSubmitFormAsset`, preferably on your `AppAsset` dependencies

```php
class AppAsset extends yii\web\AssetBundle
{
    public $depends = [
        'ayrozjlc\disablesubmit\DisableSubmitFormAsset',
        // other dependencies
    ];
}
```

or add in view

```php
// ...
use ayrozjlc\disablesubmit\DisableSubmitFormAsset;
// ...
DisableSubmitFormAsset::register($this);
```

## Usage

add in view
```php
$customScript = "
$('#id-form').disableForm({
    disabled_text : 'message'
});";
$this->registerJs($customScript, \yii\web\View::POS_READY);
```