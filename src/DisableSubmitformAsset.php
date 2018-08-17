<?php
namespace ayrozjlc\disablesubmit;

use yii\web\AssetBundle;

class DisableSubmitFormAsset extends AssetBundle
{
    /**
     * @inheritdoc
     */
    public $depends = [
        'yii\web\JqueryAsset',
        'ayrozjlc\blockui\BlockUiAsset'
    ];

    /**
     * @inheritdoc
     */
    public function init()
    {
        $this->setSourcePath(__DIR__ . '/assets');
        $this->setupAssets('js', [YII_ENV_DEV ? 'disable-submit-form.js' : 'disable-submit-form.min.js']);
        parent::init();
    }
}