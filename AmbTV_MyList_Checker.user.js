// ==UserScript==
// @name        AmbTV MyList Checker
// @namespace        http://tampermonkey.net/
// @version        0.2
// @description        マイリストを利用した無料配信のチェックツール
// @author        AbemaTV User
// @match        https://abema.tv/*
// @icon        https://www.google.com/s2/favicons?sz=64&domain=abema.tv
// @grant        none
// @updateURL        https://github.com/personwritep/AmbTV_MyList_Checker/raw/main/AmbTV_MyList_Checker.user.js
// @downloadURL        https://github.com/personwritep/AmbTV_MyList_Checker/raw/main/AmbTV_MyList_Checker.user.js
// ==/UserScript==


let target0=document.querySelector('head > title');
let monitor0=new MutationObserver(area_check);
monitor0.observe(target0, { childList: true });

area_check();

function area_check(){
    if(window.location.pathname=='/mylist'){
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
                main(); }}}

} // area_check()



function main(){

    let sected_disp=localStorage.getItem('ABEMA_Mylist_disp') ?? 0; //「sort」の表示選択

    let read_json=localStorage.getItem('ABEMA_Mylist_size'); //「size」の表示選択
    let sizes=JSON.parse(read_json);
    if(sizes==null){
        sizes=[0, 0, 0]; }


    let panel=
        '<div class="my_p">'+
        '<div class="list_sort com-shared-mypage-MypageSidebar__item">'+
        '<label><input name="sect_disp" type="radio" value="0">リスト全体を表示</label>'+
        '<div class="size_set">'+
        'size :'+
        '<label><input name="sizeA" type="radio" value="0">L</label>'+
        '<label><input name="sizeA" type="radio" value="1">M</label>'+
        '<label><input name="sizeA" type="radio" value="2">S</label></div></div>'+

        '<div class="list_sort com-shared-mypage-MypageSidebar__item">'+
        '<label><input name="sect_disp" type="radio" value="1">シリーズ登録のみ表示</label>'+
        '<div class="size_set">'+
        'size :'+
        '<label><input name="sizeS" type="radio" value="0">L</label>'+
        '<label><input name="sizeS" type="radio" value="1">M</label>'+
        '<label><input name="sizeS" type="radio" value="2">S</label></div></div>'+

        '<div class="list_sort com-shared-mypage-MypageSidebar__item">'+
        '<label><input name="sect_disp" type="radio" value="2">エピソード登録のみ表示</label>'+
        '<div class="size_set">'+
        'size :'+
        '<label><input name="sizeE" type="radio" value="0">L</label>'+
        '<label><input name="sizeE" type="radio" value="1">M</label>'+
        '<label><input name="sizeE" type="radio" value="2">S</label></div></div>'+

        '<style>'+
        '.list_sort { display: flex; flex-direction: column; align-items: start; '+
        'height: fit-content; padding: 8px 8px 4px 16px; line-height: 1.6; margin: 32px 0 -24px; } '+
        '.list_sort.disp { outline: 1px solid #777; } '+
        '.list_sort, .list_sort > label { cursor: pointer; } '+
        '.list_sort input[name="sect_disp"] { display: none; } '+
        '.list_sort input[type="radio"] { margin: 0 4px 0 8px; } '+
        '.size_set { align-self: flex-end; } '+
        'h1.com-a-PageTitle { display: none; } '+
        '.com-pages-mylist-MylistPage__header { white-space: nowrap; } '+
        '</style>'+
        '</div>';

    let sidebar=document.querySelector('.com-shared-mypage-MypageSidebar');

    if(sidebar && !document.querySelector('.my_p')){
        sidebar.insertAdjacentHTML('beforeend', panel); }



    let mlc_style=
        '<style class="basic">'+ // Basic
        '.com-pages-mylist-MylistContentItemList { background-color: #071521; border-radius: 0; } '+
        '.com-my-list-MyListBaseItem__thumbnail { margin: 0; } '+
        '.com-my-list-MyListBaseItem .com-shared-viewing_type-ViewingTypeLabel__text { '+
        'padding: 4px 6px 3px; font-size: 13px; } '+
        '.com-my-list-MyListBaseItem .com-shared-viewing_type-ViewingTypeLabel__text--free { '+
        'color: #000; background: #4fc3f7; } '+
        '.com-my-list-MyListBaseItem__delete-icon { color: red; } '+
        '.com-my-list-MyListBaseItem__delete-button:hover .com-my-list-MyListBaseItem__delete-icon, '+
        '.com-my-list-MyListBaseItem__delete-button:focus-within '+
        '.com-my-list-MyListBaseItem__delete-icon { opacity: 0.8; } '+
        '</style>'+

        '<style class="normal" disabled>'+ // Normal
        '</style>'+

        '<style class="compact" disabled>'+ // Compact
        '.com-my-list-MyListBaseItem { margin: 2px 0; height: 60px; overflow: hidden; } '+
        '.com-my-list-MyListBaseItem__thumbnail { width: 80px; margin: 0; } '+
        '.com-my-list-MyListBaseItem__details { position: relative; padding: 0; } '+
        '.com-my-list-EpisodeListItem__series-title { color: #fafafa; font-size: 13px; } '+
        '.com-my-list-EpisodeListItem__title { margin-top: 2px; } '+
        '.com-my-list-SeriesListItem__title, .com-my-list-LiveEventListItem__title { margin-top: 10px; } '+
        '.com-my-list-SlotGroupListItem__title { margin-top: 9px; } '+
        '.com-my-list-EpisodeListItem__expiration, .com-my-list-SlotListItem__expiration { '+
        'position: absolute; top: 12px; right: 0; font-size: 0; gap: 0; margin-top: 0; } '+
        '.com-my-list-MyListBaseItem__delete-button { width: 24px; height: 24px; margin-left: 12px; } '+
        '</style>'+

        '<style class="mini" disabled>'+ // Mini
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
        '.com-my-list-SlotListItem__start-at { display: none; } '+
        '.com-my-list-EpisodeListItem__expiration, .com-my-list-SlotListItem__expiration { '+
        'position: absolute; top: 1px; right: 0; font-size: 0; gap: 0; margin-top: 0; } '+
        '.com-my-list-MyListBaseItem__delete-button { width: 24px; height: 24px; margin-left: 12px; } '+
        '</style>'+

        '<style class="all_list" disabled>'+ // リスト全体を表示
        '</style>'+

        '<style class="serise" disabled>'+ // シリーズ登録を表示
        '.com-pages-mylist-MylistContentItemList li:has(a[href*="slots"]), '+
        '.com-pages-mylist-MylistContentItemList li:has(a[href*="episode"]) { display: none; } '+
        '</style>'+

        '<style class="episode" disabled>'+ // エピソード登録を表示
        '.com-pages-mylist-MylistContentItemList '+
        'li:not(:has(a[href*="slots"])):not(:has(a[href*="episode"])) { display: none; } '+
        '</style>';

    if(!document.querySelector('.basic')){
        document.body.insertAdjacentHTML('beforeend', mlc_style); }



    let sect_disp_style=[
        document.querySelector('.all_list'),
        document.querySelector('.serise'),
        document.querySelector('.episode') ];

    let sect_size_style=[
        document.querySelector('.normal'),
        document.querySelector('.compact'),
        document.querySelector('.mini') ];


    disp_selected(sected_disp/1); //「sort」形式を設定

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
            nav_button.click(); }}



    let my_list=document.querySelector('.com-pages-mylist-MylistContentItemList');
    if(my_list){
        let monitor1=new MutationObserver(disp_now_count);
        monitor1.observe(my_list, { childList: true }); }

    disp_now_count();

    function disp_now_count(){
        let help_url='';
        //   'https://ameblo.jp/personwritep/entry-12971904361.html';

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
        let list=document.querySelector('.com-pages-mylist-MylistContentItemList');
        if(disp_order && list){
            let list_all=list.querySelectorAll('.com-pages-mylist-MylistContentItemList>li');
            let episode=list.querySelectorAll('a[href*="episode"]');
            let slots=list.querySelectorAll('a[href*="slots"]');

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
