// ==UserScript==
// @name        AmbTV MyList Checker
// @namespace        http://tampermonkey.net/
// @version        0.8
// @description        マイリストを利用した無料配信のチェックツール
// @author        AbemaTV User
// @match        https://abema.tv/*
// @icon        https://www.google.com/s2/favicons?sz=64&domain=abema.tv
// @grant        none
// @updateURL        https://github.com/personwritep/AmbTV_MyList_Checker/raw/main/AmbTV_MyList_Checker.user.js
// @downloadURL        https://github.com/personwritep/AmbTV_MyList_Checker/raw/main/AmbTV_MyList_Checker.user.js
// ==/UserScript==


let sected_disp=localStorage.getItem('ABEMA_Mylist_disp') ?? 0; //「sort」の表示選択

let read_json=localStorage.getItem('ABEMA_Mylist_size'); //「size」の表示選択
let sizes=JSON.parse(read_json);
if(sizes==null){
    sizes=[0, 0, 0]; }



let target0=document.querySelector('head > title');
let monitor0=new MutationObserver(area_check);
monitor0.observe(target0, { childList: true });

area_check();

function area_check(){
    let actions={
        '/mylist': ()=>{
            let retry0=0;
            let interval0=setInterval(wait_target0, 40);
            function wait_target0(){
                retry0++;
                if(retry0>100){ // リトライ制限 100回 4secまで
                    clearInterval(interval0); }
                let list_ul=document.querySelector(
                    '.com-pages-mylist-MylistContentItemList, .com-my-list-MyListEmpty');
                if(list_ul){
                    clearInterval(interval0);
                    base_style();
                    main(); }}},

        '/viewing-history': ()=>{
            let retry0=0;
            let interval0=setInterval(wait_target0, 40);
            function wait_target0(){
                retry0++;
                if(retry0>100){ // リトライ制限 100回 4secまで
                    clearInterval(interval0); }
                let list_ul=document.querySelector(
                    '.com-pages-viewing-history-ViewingHistoryList, '+
                    '.com-pages-viewing-history-ViewingHistoryNoItem');
                if(list_ul){
                    clearInterval(interval0);
                    base_style();
                    main_sub(); }}},

        '/purchased/payperview': ()=>{
            let retry0=0;
            let interval0=setInterval(wait_target0, 40);
            function wait_target0(){
                retry0++;
                if(retry0>100){ // リトライ制限 100回 4secまで
                    clearInterval(interval0); }
                let list_ul=document.querySelector(
                    '.com-pages-purchased-payperview-PurchasedPayperviewNoItem');
                if(list_ul){
                    clearInterval(interval0);
                    base_style();
                    main_sub(); }}}};


    let Path_current=window.location.pathname;
    if(actions[Path_current]){
        actions[Path_current](); }
    else{
        let Path_Pattern=/\/(video\/title|video\/episode|slots)/;
        if(Path_Pattern.test(window.location.pathname)){
            env_mylist_set();
            mylist_set(); }}


    window.addEventListener('keydown', function(event){
        if(event.keyCode=='114'){ //「F3」押下 マイリストを開く
            event.preventDefault();
            location.href="/mylist"; }}, true);

} // area_check()



function main(){

    let sect_disp_style=[
        document.querySelector('.all_list'),
        document.querySelector('.serise'),
        document.querySelector('.episode') ];

    let sect_size_style=[
        document.querySelector('.normal'),
        document.querySelector('.compact'),
        document.querySelector('.mini') ];


    count_ajust();


    let input_disp=document.querySelectorAll('input[name="sect_disp"]');
    input_disp.forEach(radio=>{
        radio.addEventListener('change', (event)=>{
            sected_disp=event.target.value;
            disp_selected(sected_disp/1);
            localStorage.setItem('ABEMA_Mylist_disp', sected_disp);
        }); });

    let list_sort_button=document.querySelectorAll('.list_sort');
    list_sort_button.forEach(button=>{
        button.addEventListener('click', (event)=>{
            button.querySelector('input[name="sect_disp"]').click();
            close_all_size_set(); // .size_setを全て閉じる

            if(event.ctrlKey){
                toggle_size_set(button); }
        }); });

    function disp_selected(n){
        let list_sort=document.querySelectorAll('.list_sort');
        list_sort.forEach((el, k)=>{
            el.classList.toggle('disp', k==n);

            sect_disp_style.forEach((sect_disp_style, index)=>{
                sect_disp_style.disabled=(index !==n); });

            sect_size_style.forEach((sect_size_style, index)=>{
                sect_size_style.disabled=(index !==sizes[n]/1); });
        }); }

    function toggle_size_set(button){
        let size_set=button.querySelector('.size_set');
        if(size_set){
            size_set.classList.toggle('open'); }}

    let size_set_all=document.querySelectorAll('.size_set');
    size_set_all.forEach(self=>{
        self.addEventListener('click', (event)=>{
            event.stopImmediatePropagation(); }); });

    function close_all_size_set(){
        size_set_all.forEach(self=>{
            self.classList.remove('open'); }); }



    size_selected('A', sizes[0]/1); //「リスト全体を表示」のサイズ設定
    size_selected('S', sizes[1]/1); //「シリーズ登録のみ表示」のサイズ設定
    size_selected('E', sizes[2]/1); //「エビソード登録のみ表示」のサイズ設定

    set_size('A');
    set_size('S');
    set_size('E');

    function set_size(type){
        let radios=document.querySelectorAll('input[name="size'+ type +'"]');
        let t;
        switch(type){
            case 'A': t=0; break;
            case 'S': t=1; break;
            case 'E': t=2; break; }

        radios.forEach(radio=>{
            radio.addEventListener('change', (event)=>{
                sizes[t]=event.target.value;
                let write_json=JSON.stringify(sizes);
                localStorage.setItem('ABEMA_Mylist_size', write_json);

                sect_size_style.forEach((sect_size_style, index)=>{
                    sect_size_style.disabled=(index !==sizes[t]/1); });
            }); }); }

    function size_selected(type, n){
        let radio=document.querySelectorAll('input[name="size'+ type +'"]');
        if(radio.length==3){
            radio[n].checked=true; }}



    let nav_button=document.querySelector('.com-m-side-nav-toggle-button');
    if(nav_button){
        if(!document.querySelector('.com-application-SideNavigation--closed')){
            nav_button.click(); }} // デフォルトで左サイドメニューを閉じる



    let list_wrap=document.querySelector('.com-pages-mylist-MylistPage__contentListWrapper');
    if(list_wrap){
        let monitor2=new MutationObserver(count_ajust);
        monitor2.observe(list_wrap, { attributes: true }); }



    function count_ajust(){
        sected_disp=localStorage.getItem('ABEMA_Mylist_disp');
        let list_ul=document.querySelector('.com-pages-mylist-MylistContentItemList');
        if(list_ul){
            disp_selected(0); //「sort」形式を全件表示にする
            list_ul.classList.add('list_count');
            setTimeout(()=>{
                list_ul.classList.remove('list_count');
            }, 200);
            setTimeout(()=>{
                disp_selected(sected_disp/1);
            }, 300); }}



    let mylist_w=document.querySelector('.com-pages-mylist-MylistPage__contentListWrapper');
    if(mylist_w){
        let monitor1=new MutationObserver(disp_now_count);
        monitor1.observe(mylist_w, { childList: true, subtree: true }); }

    disp_now_count();

    function disp_now_count(){
        let help_url='https://ameblo.jp/personwritep/entry-12978398816.html';

        let help_svg=
            '<svg width="20" height="20" style="vertical-align: -5px;" '+
            'viewBox="0 0 200 200">'+
            '<path style="fill: #3ca5da" d="M92 14C54 19 23 44 15 82C4 135 49 '+
            '192 105 186C143 181 175 156 183 118C195 64 149 7 92 14z"></path>'+
            '<path style="fill: #000" d="M63 69C70 67 76 64 82 61C92 58 116 58 110 '+
            '76C103 96 81 101 81 125L112 125C112 111 123 105 132 96C141 85 1'+
            '46 69 140 55C131 34 102 33 83 37C78 38 69 39 65 43C60 47 63 63 63 '+
            '69M83 143L83 169L111 169L111 143L83 143z"></path></svg>';

        let disp_order=document.querySelector('.com-m-SelectMenuForDesktop');
        if(disp_order){
            let list_all=[];
            let episode=[];
            let slots=[];
            let list=document.querySelector('.com-pages-mylist-MylistContentItemList');
            if(list){
                list_all=list.querySelectorAll('.com-pages-mylist-MylistContentItemList>li');
                episode=list.querySelectorAll('a[href*="episode"]');
                slots=list.querySelectorAll('a[href*="slots"]'); }

            let count_disp=
                '<div class="count_d" style="color: #fff">'+
                '<a href="'+ help_url + '" rel="noopener noreferrer" target="_blank">'+ help_svg+
                '</a>　シリーズ登録：'+ (list_all.length - episode.length - slots.length) +
                '　エビソード登録：'+ (episode.length + slots.length) +
                '</div>';

            if(document.querySelector('.count_d')){
                document.querySelector('.count_d').remove(); }
            disp_order.insertAdjacentHTML('beforebegin', count_disp); }

    } // disp_now_count()

} // main()



function base_style(){

    let size0_svg=
        '<svg class="size0" viewBox="0 0 24 24" width="20" height="20" '+
        'style="display: inline-block;"><rect width="24" height="24" x="0" y="0" '+
        'fill="#09586c" stroke-width="1" stroke="#fff"></rect></svg>';

    let size1_svg=
        '<svg class="size1" viewBox="0 0 24 24" width="20" height="20" '+
        'style="display: inline-block;"><rect width="24" height="14" x="0" y="5" '+
        'fill="#09586c" stroke-width="1" stroke="#fff"></rect></svg>';

    let size2_svg=
        '<svg class="size2" viewBox="0 0 24 24" width="20" height="20" '+
        'style="display: inline-block;"><rect width="24" height="8" x="0" y="8" '+
        'fill="#09586c" stroke-width="1" stroke="#fff"></rect></svg>';

    let panel=
        '<div class="my_p">'+
        '<div class="list_sort com-shared-mypage-MypageSidebar__item">'+
        '<label><input name="sect_disp" type="radio" value="0">リスト全体を表示</label>'+
        '<div class="size_set">'+
        'size:'+
        '<label><input name="sizeA" type="radio" value="0">'+ size0_svg +'</label>'+
        '<label><input name="sizeA" type="radio" value="1">'+ size1_svg +'</label>'+
        '<label><input name="sizeA" type="radio" value="2">'+ size2_svg +'</label></div></div>'+

        '<div class="list_sort com-shared-mypage-MypageSidebar__item">'+
        '<label><input name="sect_disp" type="radio" value="1">シリーズ登録のみ表示</label>'+
        '<div class="size_set">'+
        'size:'+
        '<label><input name="sizeS" type="radio" value="0">'+ size0_svg +'</label>'+
        '<label><input name="sizeS" type="radio" value="1">'+ size1_svg +'</label>'+
        '<label><input name="sizeS" type="radio" value="2">'+ size2_svg +'</label></div></div>'+

        '<div class="list_sort com-shared-mypage-MypageSidebar__item">'+
        '<label><input name="sect_disp" type="radio" value="2">エピソード登録のみ表示</label>'+
        '<div class="size_set">'+
        'size:'+
        '<label><input name="sizeE" type="radio" value="0">'+ size0_svg +'</label>'+
        '<label><input name="sizeE" type="radio" value="1">'+ size1_svg +'</label>'+
        '<label><input name="sizeE" type="radio" value="2">'+ size2_svg +'</label></div></div>'+

        '<style>'+
        'nav.com-shared-mypage-MypageSidebar a { font-size: 18px !important; } '+
        'nav a[href="/purchased/payperview"] { order: 1; } '+
        'nav a[href="/viewing-history"] { order: 2; } '+
        'nav a[href="/mylist"] { order: 3; } '+
        '.my_p { order: 4; margin: 10px 0 20px; } '+
        '.list_sort { display: flex; flex-direction: column; align-items: start; '+
        'height: fit-content; padding: 11px 8px 8px 10px; line-height: 1.6; margin: 0 0 8px; } '+
        '.list_sort.disp { outline: 1px solid #777; } '+
        '.list_sort, .list_sort > label { cursor: pointer; } '+
        '.list_sort input[name="sect_disp"] { visibility: hidden; } '+
        '.list_sort .size_set input[type="radio"] { margin: 0 4px; vertical-align: -3px; cursor: pointer; } '+
        '.size_set { font-size: 16px; margin: 4px 0 4px 6px; color: #0ad8d8; cursor: default; '+
        'display: none; } '+
        '.size_set label { margin-left: 14px; cursor: pointer; } '+
        '.size_set svg { vertical-align: -6px; } '+
        '.size_set.open { display: block; } '+

        '.com-a-ResponsiveMainContent { padding: 0 0 0 40px !important; height: calc(100vh - 68px); } '+
        '.com-a-ResponsiveMainContent__inner { margin: 0; } '+
        'h1.com-a-PageTitle { display: none; } '+
        '.com-shared-mypage-MypageLayout__content { gap: 10px; } '+
        '.com-shared-mypage-MypageLayout__main { margin: -48px 0 0; } '+
        '.com-pages-mylist-MylistPage__header { white-space: nowrap; } '+
        '.com-pages-mylist-MylistContentItemList, '+
        '.com-pages-viewing-history-ViewingHistoryList { '+
        'overflow-y: scroll; padding: 0 8px 0 2px; height: calc(100vh - 145px); } '+
        '.c-application-FooterContainer { display: none; } '+
        '</style>'+
        '</div>';

    let sidebar=document.querySelector('.com-shared-mypage-MypageSidebar a[href*="mylist"]');

    if(sidebar && !document.querySelector('.my_p')){
        sidebar.insertAdjacentHTML('afterend', panel); }



    let mlc_style=
        '<style class="basic">'+ // Basic
        '.com-pages-mylist-MylistContentItemList { background: #071521; border-radius: 0; } '+
        '.com-my-list-MyListBaseItem__wrapper { margin: 0; padding: 8px; } '+
        '.com-my-list-MyListBaseItem__thumbnail { margin: 0; } '+
        '.com-shared-viewing_type-ViewingTypeLabel__text { '+
        'padding: 4px 6px 3px; font-size: 13px; } '+
        '.com-shared-viewing_type-ViewingTypeLabel__text--free { '+
        'color: #000; background: #4fc3f7; } '+
        'a[href*="/slots"] .com-shared-viewing_type-ViewingTypeLabel__text--premium { '+
        'font-weight: normal; color: #fff; background: #007db6; } '+
        '.com-my-list-MyListBaseItem__delete-button { '+
        'width: 24px; height: 24px; margin-left: 12px; } '+
        '.com-my-list-MyListBaseItem__delete-icon { color: red; opacity: 0.7; } '+
        '.com-my-list-MyListBaseItem__delete-button:hover '+
        '.com-my-list-MyListBaseItem__delete-icon { opacity: 1; } '+
        '</style>'+

        '<style class="history">'+ // History
        'com-pages-viewing-history-ViewingHistoryList { background: #071521; border-radius: 0; } '+
        '.com-pages-viewing-history-ViewingHistoryListItem { margin: 4px 0; } '+
        '.com-pages-viewing-history-ViewingHistoryListItem__link { padding: 2px 8px; } '+
        '.com-pages-viewing-history-ViewingHistoryListItem__delete-icon { color: red; opacity: 0.7; } '+
        '.com-pages-viewing-history-ViewingHistoryListItem:hover '+
        '.com-pages-viewing-history-ViewingHistoryListItem__delete-button { opacity: 1; } '+
        '.com-pages-viewing-history-ViewingHistoryListItem__delete-button:hover '+
        '.com-pages-viewing-history-ViewingHistoryListItem__delete-icon { opacity: 1; } '+
        '.com-pages-viewing-history-ViewingHistoryListEpisodeItem__series-title { '+
        'font-size: 16px; font-weight: normal; margin-top: 6px; color: #e6e6e6; } '+
        '.com-pages-viewing-history-ViewingHistoryListEpisodeItem__title { '+
        'font-size: 18px; font-weight: bold; color: #ddd; } '+
        '</style>'+

        '<style class="normal">'+ // Normal
        '</style>'+

        '<style class="compact">'+ // Compact
        '.com-my-list-MyListBaseItem { margin: 2px 0; height: 60px; overflow: hidden; } '+
        '.com-my-list-MyListBaseItem__thumbnail { width: 80px; margin: 0; } '+
        '.com-my-list-MyListBaseItem__details { position: relative; padding: 0; } '+
        '.com-my-list-EpisodeListItem__series-title { color: #fafafa; font-size: 13px; } '+
        '.com-my-list-EpisodeListItem__title { margin-top: 2px; } '+
        '.com-my-list-SeriesListItem__title, .com-my-list-LiveEventListItem__title { margin-top: 10px; } '+
        '.com-my-list-SlotGroupListItem__title { margin-top: 9px; } '+
        '.com-my-list-EpisodeListItem__expiration, .com-my-list-SlotListItem__expiration { '+
        'position: absolute; top: 12px; right: 0; font-size: 0; gap: 0; margin-top: 0; } '+
        '</style>'+

        '<style class="mini">'+ // Mini
        '.com-my-list-MyListBaseItem { height: 38px; margin: 2px 0; overflow: hidden; } '+
        '.com-my-list-MyListBaseItem__thumbnail { display: none; } '+
        '.com-my-list-MyListBaseItem__details { position: relative; display: flex; padding: 0; } '+
        '.com-my-list-EpisodeListItem__series-title { font-size: 16px; font-weight: bold; '+
        'line-height: 1.4; width: 45%; flex-shrink: 0; margin-right: 15px; color: #eee } '+
        '.com-my-list-EpisodeListItem__title { font-size: 16px; margin-top: 0; line-height: 1.4; width: 40%; } '+
        '.com-my-list-SeriesListItem__title, .com-my-list-LiveEventListItem__title { '+
        'font-size: 16px; margin-top: 0; color: #eee; } '+
        '.com-my-list-SlotGroupListItem__title, .com-my-list-SlotListItem__title { '+
        'font-size: 16px; margin-top: 0; color: #eee; } '+
        '.com-my-list-MyListBaseItem .com-a-CollapsedText__container { line-height: 1.4 !important; } '+
        '.com-my-list-SlotListItem__start-at { color: #43ecff; margin: 6px 10px 0; } '+
        '.com-my-list-EpisodeListItem__expiration, .com-my-list-SlotListItem__expiration { '+
        'position: absolute; top: 1px; right: 0; font-size: 0; gap: 0; margin-top: 0; } '+
        '</style>'+

        '<style class="all_list">'+ // リスト全体を表示
        '</style>'+

        '<style class="serise">'+ // シリーズ登録を表示
        '.com-pages-mylist-MylistContentItemList li:has(a[href*="slots"]), '+
        '.com-pages-mylist-MylistContentItemList li:has(a[href*="episode"]) { display: none; } '+
        '</style>'+

        '<style class="episode">'+ // エピソード登録を表示
        '.com-pages-mylist-MylistContentItemList '+
        'li:not(:has(a[href*="slots"])):not(:has(a[href*="episode"])) { display: none; } '+
        '</style>'+

        '<style class="count_ajust">'+ // カウント実行のデザイン
        '.list_count li { height: 0; } '+
        '.list_count .com-my-list-MyListBaseItem__thumbnail, '+
        '.list_count .com-my-list-MyListBaseItem__details, '+
        '.list_count .com-my-list-MyListBaseItem__delete-button { display: none; } '+
        '</style>';

    let main=document.querySelector('.c-application-DesktopAppContainer__main');
    if(main){
        if(!main.querySelector('.basic')){
            main.insertAdjacentHTML('beforeend', mlc_style); }}

} // base_style()



function main_sub(){
    let list_sort_button=document.querySelectorAll('.list_sort');
    list_sort_button.forEach((button, index)=>{
        button.addEventListener('click', (event)=>{
            localStorage.setItem('ABEMA_Mylist_disp', index);

            setTimeout(()=>{
                let nav=document.querySelector('.com-shared-mypage-MypageSidebar__item');
                if(nav){
                    nav.click(); }
            }, 600);
        }); });

} // main_sub()




function env_mylist_set(){
    let style=
        '<style class="M_Anywhere">'+
        '.com-m-NotificationManager.ma { width: auto; } '+
        '.ma .com-application-NotificationToast { background-color: #00f0fe; height: 40px; } '+
        '.com-application-NotificationToast__button-wrapper, '+
        '.com-application-NotificationToast__close-button { display: none; } '+
        '</style>';

    if(!document.querySelector('.M_Anywhere')){
        document.body.insertAdjacentHTML('beforeend', style); }


    let target1=document.querySelector('#main > div');
    let monitor1=new MutationObserver(get_note);
    monitor1.observe(target1, { childList: true });

    function get_note(){
        let note=document.querySelector('.com-m-NotificationManager');
        if(note){
            note.classList.add('ma'); }}

} // env_mylist_set()



function mylist_set(){
    window.addEventListener('keydown', function(event){
        if(event.keyCode=='112'){ //「F1」押下 シリーズ登録
            event.preventDefault();
            mylist_shift(); }
        if(event.keyCode=='113'){ //「F2」押下 シリーズ削除
            event.preventDefault();
            mylist_off(); }}, true);

} // mylist_set()



function mylist_shift(){ // 動画シリーズのマイリスト再登録
    let button=document.querySelector('.com-shared-my-list-MyListBaseCircleButton__button');
    if(button){
        button.click();

        setTimeout(()=>{
            let BSL=document.querySelectorAll('[class$="ButtonSelectListItem__container"]');
            if(BSL[0]){ //「シリーズを追加」「毎回追加」のボタンがある場合
                if(!is_added(BSL[0])){ // BSL[0]未登録
                    BSL[0].click();

                    setTimeout(()=>{
                        if(b_active(button)){ // BSL[0]登録完了
                            button.click();
                            return; }
                        else{
                            error_talk(); }
                    }, 400); }

                else{ // BSL[0]登録済み
                    BSL[0].click();

                    setTimeout(()=>{
                        BSL[0].click(); // BSL[0]再登録
                    }, 400);
                    setTimeout(()=>{
                        if(b_active(button)){ // BSL[0]登録完了
                            button.click();
                            return; }
                        else{
                            error_talk(); }
                    }, 800); }
            } //「シリーズを追加」「毎回追加」のボタンがある場合

            else { //「シリーズを追加」「毎回追加」のボタンがない場合
                if(b_default(button)){ // 未登録に戻っていた場合
                    button.click();

                    setTimeout(()=>{
                        if(b_active(button)){ // 再登録完了
                            return; }
                        else{
                            error_talk(); }
                    }, 400); }
                else{ // 登録になっていた場合
                    return; } // 登録完了
            } //「シリーズを追加」「毎回追加」のボタンがない場合

        }, 400);

    } // if(button)

} // mylist_shift()



function mylist_off(){ // 動画シリーズのマイリスト登録の削除
    let button=document.querySelector('.com-shared-my-list-MyListBaseCircleButton__button');
    if(button){
        if(b_default(button)){ // 未登録の場合
            return; }
        else{ // 登録済の場合
            button.click();

            setTimeout(()=>{
                let BSL=document.querySelectorAll('[class$="ButtonSelectListItem__container"]');
                if(BSL[0]){ //「シリーズを追加」「毎回追加」のボタンがある場合
                    if(!is_added(BSL[0])){ // BSL[0]未登録
                        button.click();
                        return; }
                    else{ // BSL[0]登録済
                        BSL[0].click();

                        setTimeout(()=>{
                            if(!is_added(BSL[0])){ // BSL[0]登録の削除完了
                                button.click();
                                return; }
                            else{
                                error_talk(); }
                        }, 400); }} //「シリーズを追加」「毎回追加」のボタンがある場合

                else{ //「シリーズを追加」「毎回追加」のボタンがない場合
                    if(b_default(button)){ // 未登録に変わった場合
                        return; } // 削除完了
                    else{
                        error_talk(); }} //「シリーズを追加」「毎回追加」のボタンがない場合

            }, 400); } // 登録済の場合

    } // if(button)

} // mylist_off()



function b_default(button){
    if(button.querySelector('[class$="CircleButton__button-outline--default"]')){
        return true; }} // マイリストボタン未登録


function b_active(button){
    if(button.querySelector('[class$="CircleButton__button-outline--active"]')){
        return true; }} // マイリストボタン登録完了


function is_added(p_button){
    if(p_button.querySelector('[class$="Item__left-container--is-added"]')){
        return true; }} // シリーズの登録完了


function error_talk(){
    alert("マイリスト登録を確認してください"); }
