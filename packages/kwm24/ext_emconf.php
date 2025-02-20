<?php

/**
 * Extension Manager/Repository config file for ext "kwm24".
 */
$EM_CONF[$_EXTKEY] = [
    'title' => 'kwm24',
    'description' => '',
    'category' => 'templates',
    'constraints' => [
        'depends' => [
            'bootstrap_package' => '15.0.0-15.99.99',
        ],
        'conflicts' => [
        ],
    ],
    'autoload' => [
        'psr-4' => [
            'FhHagenberg\\Kwm24\\' => 'Classes',
        ],
    ],
    'state' => 'stable',
    'uploadfolder' => 0,
    'createDirs' => '',
    'clearCacheOnLoad' => 1,
    'author' => 'Fabio Umdasch',
    'author_email' => 's2310456026@fhooe.at',
    'author_company' => 'FH Hagenberg',
    'version' => '1.0.0',
];
