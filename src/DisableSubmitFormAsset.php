<?php
namespace ayrozjlc\disablesubmit;

use yii\web\AssetBundle;

class DisableSubmitFormAsset extends AssetBundle
{
    public $sourcePath = '@vendor/ayrozjlc/yii2-disable-submit-form/src/assets';

    public $js = [
        YII_ENV_DEV ? 'disable-submit-form.js' : 'disable-submit-form.min.js'
    ];
    /**
     * @inheritdoc
     */
    public $depends = [
        'yii\web\JqueryAsset',
        'ayrozjlc\blockui\BlockUiAsset'
    ];
}