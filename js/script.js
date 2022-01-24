'use strict';
const title = document.getElementsByTagName('h1')[0];
const C = document.getElementsByClassName('handler_btn')[0];
const resetBtn = document.getElementsByClassName('handler_btn')[1];
const butonPlus = document.querySelector('.screen-btn');
const percentItems = document.querySelectorAll('.other-items.percent');
const numberItems = document.querySelectorAll('.other-items.number');
const inputRange = document.querySelector('.rollback input[type=range]');
const inputRangeValue = document.querySelector('.rollback').querySelector('.range-value');

const total = document.getElementsByClassName('total-input')[0];
const totalCountInput = document.getElementsByClassName('total-input')[1];
const totalCountOtherInput = document.getElementsByClassName('total-input')[2];
const totalFullCountInput = document.getElementsByClassName('total-input')[3];
const totalCountRollbackInput = document.getElementsByClassName('total-input')[4];
const cmsItem = document.querySelector('#cms-open');
const cmsSelect = document.querySelector('.hidden-cms-variants');
const cmsSelectItems = cmsSelect.querySelector('#cms-select');
const cmsInputItmes = cmsSelect.querySelector('.main-controls__input');

let screens = documen.querySelectorAll('.screen');

const appData = {
    title:'',
    screens: [],
    screenPrice:0,
    rollback: 0,
    servicePrincesPercent:0,
    servicePrincesNumber:0,
    fullPrice: 0,
    servicePercentPrice:0,
    servicesPercent:{},
    servicesNumber:{},
    isEmpty:false,
    cms:1,



}