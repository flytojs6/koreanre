// selectBox Common
function toggleSelectBox(selectBox) {
    selectBox.classList.toggle("active");
}

// Function to handle selecting an option
function selectOption(optionElement) {
    const selectBox = optionElement.closest(".selWrap");
    const selectedElement = selectBox.querySelector(".selectedValue p");
    selectedElement.textContent = optionElement.textContent;
    selectedElement.classList.add('selected');

    // Remove the .optChk class from all options
    selectBox.querySelectorAll(".option").forEach(option => {
        option.classList.remove("optChk");
    });

    // Add .optChk class to the selected option
    optionElement.classList.add("optChk");

    // Update the selected value text
    selectedElement.textContent = optionElement.textContent;
    selectedElement.setAttribute('data-val', optionElement.getAttribute('data-val'));
}

// Event listener for each select box
document.querySelectorAll(".selWrap").forEach(selectBoxElement => {
    selectBoxElement.addEventListener("click", function (e) {
        const targetElement = e.target;
        const isOptionElement = targetElement.classList.contains("option");
        if (isOptionElement) {
            selectOption(targetElement);
        }
        toggleSelectBox(selectBoxElement);
    });
});

// Event listener to close all select boxes if clicking outside
document.addEventListener("click", function (e) {
    const targetElement = e.target;
    const isSelect = targetElement.classList.contains("selWrap") || targetElement.closest(".selWrap");
    if (isSelect) {
        return;
    }
    document.querySelectorAll(".selWrap.active").forEach(boxElement => {
        boxElement.classList.remove("active");
    });
});



// 로그인 2차 google otp 설정 팝업 열기
$(document).on('click', '.js-modal-trigger.otp_seting_modal_open', function() {
  $(this).closest('.container').siblings('.modal.otp_seting_modal').addClass('is-open');
  $('body').addClass('scrollLock');
});

// 로그인 2차 google otp 설정 팝업 닫기
$(document).on('click', '.modal.otp_seting_modal .modal__close', function() {
  $(this).closest('.modal').removeClass('is-open');
  $('body').removeClass('scrollLock');
});


// 로그인 2차 google otp 인증 팝업 열기
$(document).on('click', '.js-modal-trigger.otp_cert_modal_open', function() {
  $(this).closest('.container').siblings('.modal.otp_cert_modal').addClass('is-open');
  $('body').addClass('scrollLock');
});

// 로그인 2차 google otp 인증 팝업 닫기
$(document).on('click', '.modal.otp_cert_modal .modal__close', function() {
  $(this).closest('.modal').removeClass('is-open');
  $('body').removeClass('scrollLock');
});

























// gnb menu 열기
$(document).on('mouseenter', '.nav .menu > li', function() {
    $(this).not($(".mlink")).closest('.nav').addClass('on');
    $(this).not($(".mlink")).closest('.nav').siblings('.lnb_wrap').addClass('open');
    $(this).not($(".mlink")).closest('.nav').siblings('.search_wrap').removeClass('open');
    $(this).not($(".mlink")).addClass('active');
});


// showroom gnb 열기
$(document).on('mouseenter', '.nav.showroom .menu > li', function() {
    $(this).not($(".mlink")).closest('.nav').addClass('on');
    $(this).not($(".mlink")).closest('.nav').siblings('.lnb_wrap').addClass('open');
    $(this).not($(".mlink")).closest('.nav').siblings('.search_wrap').removeClass('open');
    $(this).not($(".mlink")).addClass('active');
    $(this).not($(".mlink")).closest('.header').siblings('.container').addClass('blur');
});



// showroom gnb 영역 밖으로 나가면 닫기
$(document).on('mouseleave', '.header', function() {
    $('.nav').removeClass('on');
    $('.nav').siblings('.lnb_wrap').removeClass('open');
    $('.nav .menu > li').removeClass('active');
    $('.container').removeClass('blur');
});


// gnb 영역 밖으로 나가면 닫기
$(document).on('mouseleave', '.header', function() {
    $('.nav').removeClass('on');
    $('.nav').siblings('.lnb_wrap').removeClass('open');
    // $('.nav').siblings('.search_wrap').removeClass('open');
    $('.nav .menu > li').removeClass('active');
});

// gnb menu sub 팝업 이외 영역 클릭시 닫힘
$(document).on('click', 'body', function(e){
    if(!$(e.target).parents().hasClass("header")) {
        // console.log("영역 밖입니다");
        $('.nav').removeClass('on');
        $('.lnb_wrap').removeClass('open');
        // 헤더 util 검색창 팝업 이외 영역 클릭시 닫힘
        $('.search_wrap').removeClass('open');
    }
    else {
        // console.log("영역 안입니다");
    }
});

// 모바일 gnb menu 열기
$(document).on('click', '.hamburger', function() {
    $(this).closest('.nav').siblings('.mobile_gnb_wrap').addClass('open');
    $(this).closest('.nav').siblings('.mgnb_bg_dimmed').addClass('on');
    $(this).addClass('active');
    $('body').addClass('scrollLock');
});

// 모바일 gnb menu 닫기
$(document).on('click', '.mobile_gnb_wrap .mlnb_close', function() {
    $(this).closest('.mobile_gnb_wrap').removeClass('open');
    $(this).closest('.mobile_gnb_wrap').siblings('.mgnb_bg_dimmed').removeClass('on');
    $('body').removeClass('scrollLock');
});

// 모바일 gnb submenu 열기
$(document).on('click', '.mgnb_main_menu li .mo_main_menu_txt', function() {
    $(this).closest('.mgnb_main_menu').addClass('on');
});
$(document).on('click', '.mgnb_main_menu li:nth-child(1) .mo_main_menu_txt', function() {
    $(this).closest('.mgnb_main_menu').siblings('.mgnb_sub_menu.menu01').addClass('on');
});
$(document).on('click', '.mgnb_main_menu li:nth-child(2) .mo_main_menu_txt', function() {
    $(this).closest('.mgnb_main_menu').siblings('.mgnb_sub_menu.menu02').addClass('on');
});
$(document).on('click', '.mgnb_main_menu li:nth-child(3) .mo_main_menu_txt', function() {
    $(this).closest('.mgnb_main_menu').siblings('.mgnb_sub_menu.menu03').addClass('on');
});
$(document).on('click', '.mgnb_main_menu li:nth-child(4) .mo_main_menu_txt', function() {
    $(this).closest('.mgnb_main_menu').siblings('.mgnb_sub_menu.menu04').addClass('on');
});
$(document).on('click', '.mgnb_main_menu li:nth-child(5) .mo_main_menu_txt', function() {
    $(this).closest('.mgnb_main_menu').siblings('.mgnb_sub_menu.menu05').addClass('on');
});
$(document).on('click', '.mgnb_main_menu li:nth-child(6) .mo_main_menu_txt', function() {
    $(this).closest('.mgnb_main_menu').siblings('.mgnb_sub_menu.menu06').addClass('on');
});
$(document).on('click', '.mgnb_main_menu li:nth-child(7) .mo_main_menu_txt', function() {
    $(this).closest('.mgnb_main_menu').siblings('.mgnb_sub_menu.menu07').addClass('on');
});

// 모바일 gnb submenu 닫기
$(document).on('click', '.sub_menu_head', function() {
    $(this).closest('.mgnb_sub_menu').removeClass('on');
    $(this).closest('.mgnb_sub_menu').siblings('.mgnb_main_menu').removeClass('on');
})



// nav gnb showroom 이미지
$(document).on('mouseover', '.header.showroom .lnb_wrap .lnb_menu_area .sub_category li:nth-child(1)', function() {
    $(this).closest('.lnb_menu_area').siblings('.lnb_con_img_area').find('ul li').removeClass('on');
    $(this).closest('.lnb_menu_area').siblings('.lnb_con_img_area').find('ul li:nth-child(1)').addClass('on');
});
$(document).on('mouseover', '.header.showroom .lnb_wrap .lnb_menu_area .sub_category li:nth-child(2)', function() {
    $(this).closest('.lnb_menu_area').siblings('.lnb_con_img_area').find('ul li').removeClass('on');
    $(this).closest('.lnb_menu_area').siblings('.lnb_con_img_area').find('ul li:nth-child(2)').addClass('on');
});
$(document).on('mouseover', '.header.showroom .lnb_wrap .lnb_menu_area .sub_category li:nth-child(3)', function() {
    $(this).closest('.lnb_menu_area').siblings('.lnb_con_img_area').find('ul li').removeClass('on');
    $(this).closest('.lnb_menu_area').siblings('.lnb_con_img_area').find('ul li:nth-child(3)').addClass('on');
});
$(document).on('mouseover', '.header.showroom .lnb_wrap .lnb_menu_area .sub_category li:nth-child(4)', function() {
    $(this).closest('.lnb_menu_area').siblings('.lnb_con_img_area').find('ul li').removeClass('on');
    $(this).closest('.lnb_menu_area').siblings('.lnb_con_img_area').find('ul li:nth-child(4)').addClass('on');
});
$(document).on('mouseover', '.header.showroom .lnb_wrap .lnb_menu_area .sub_category li:nth-child(5)', function() {
    $(this).closest('.lnb_menu_area').siblings('.lnb_con_img_area').find('ul li').removeClass('on');
    $(this).closest('.lnb_menu_area').siblings('.lnb_con_img_area').find('ul li:nth-child(5)').addClass('on');
});




// 헤더 util 검색창 팝업 pc 모바일
$(document).on('click', '.utilArea .util .srch', function() {
    if($(window).width() < 1280) {
        $(this).closest('.nav').siblings('.mobile_search_wrap').addClass('open');
        $('body').addClass('scrollLock');
    } else {
        $(this).closest('.nav').siblings('.search_wrap').addClass('open');
        $(this).closest('.nav').siblings('.lnb_wrap').removeClass('open');
    }
});

// 모바일 헤더 util 검색창 팝업 닫기
$(document).on('click', '.mobile_search_wrap .mlnb_close', function() {
    $(this).closest('.mobile_search_wrap').removeClass('open');
    $('body').removeClass('scrollLock');
});

// 인풋 검색창 검색어 입력시 닫기 버튼 생성
$(".inpWrap.type_search input").keyup(function(e) {
    var content = $(this).val();
    if (content.length > 0) {
        $(this).siblings('.btn_input_delete').addClass('on');
    }else{
        $(this).siblings('.btn_input_delete').removeClass('on');
    }
});



// 인풋 비밀번호 암호화 보기 버튼
$(document).on('click', '.inpWrap .btn_password_view', function() {
    $(this).toggleClass('on');
});




// tab 
$(document).on('click', '.tab_area.type_black > ul > li.tab_btn_01', function() {
    $(this).siblings('li').removeClass('active');
    $(this).addClass('active');
    $('.tab_area > .tab_con_01').addClass('active');
    $('.tab_area > .tab_con_02').removeClass('active');
    $('.tab_area > .tab_con_03').removeClass('active');
    $('.tab_area > .tab_con_04').removeClass('active');
});
$(document).on('click', '.tab_area.type_black > ul > li.tab_btn_02', function() {
    $(this).siblings('li').removeClass('active');
    $(this).addClass('active');
    $('.tab_area > .tab_con_01').removeClass('active');
    $('.tab_area > .tab_con_02').addClass('active');
    $('.tab_area > .tab_con_03').removeClass('active');
    $('.tab_area > .tab_con_04').removeClass('active');
});
$(document).on('click', '.tab_area.type_black > ul > li.tab_btn_03', function() {
    $(this).siblings('li').removeClass('active');
    $(this).addClass('active');
    $('.tab_area > .tab_con_01').removeClass('active');
    $('.tab_area > .tab_con_02').removeClass('active');
    $('.tab_area > .tab_con_03').addClass('active');
    $('.tab_area > .tab_con_04').removeClass('active');
});
$(document).on('click', '.tab_area.type_black > ul > li.tab_btn_04', function() {
    $(this).siblings('li').removeClass('active');
    $(this).addClass('active');
    $('.tab_area > .tab_con_01').removeClass('active');
    $('.tab_area > .tab_con_02').removeClass('active');
    $('.tab_area > .tab_con_03').removeClass('active');
    $('.tab_area > .tab_con_04').addClass('active');
});



// tab privacy
$(document).on('click', '.tab_area.tab_privacy > ul > li.tab_btn', function() {
    $(this).siblings('li').removeClass('active');
    $(this).addClass('active');
});
$(document).on('click', '.tab_area.tab_privacy > ul > li.tab_btn_01', function() {
    $('.tab_area > .tab_con').removeClass('active');
    $('.tab_area > .tab_con.tab_con_01').addClass('active');
});
$(document).on('click', '.tab_area.tab_privacy > ul > li.tab_btn_02', function() {
    $('.tab_area > .tab_con').removeClass('active');
    $('.tab_area > .tab_con.tab_con_02').addClass('active');
});
$(document).on('click', '.tab_area.tab_privacy > ul > li.tab_btn_03', function() {
    $('.tab_area > .tab_con').removeClass('active');
    $('.tab_area > .tab_con.tab_con_03').addClass('active');
});
$(document).on('click', '.tab_area.tab_privacy > ul > li.tab_btn_04', function() {
    $('.tab_area > .tab_con').removeClass('active');
    $('.tab_area > .tab_con.tab_con_04').addClass('active');
});
$(document).on('click', '.tab_area.tab_privacy > ul > li.tab_btn_05', function() {
    $('.tab_area > .tab_con').removeClass('active');
    $('.tab_area > .tab_con.tab_con_05').addClass('active');
});
$(document).on('click', '.tab_area.tab_privacy > ul > li.tab_btn_06', function() {
    $('.tab_area > .tab_con').removeClass('active');
    $('.tab_area > .tab_con.tab_con_06').addClass('active');
});
$(document).on('click', '.tab_area.tab_privacy > ul > li.tab_btn_07', function() {
    $('.tab_area > .tab_con').removeClass('active');
    $('.tab_area > .tab_con.tab_con_07').addClass('active');
});
$(document).on('click', '.tab_area.tab_privacy > ul > li.tab_btn_08', function() {
    $('.tab_area > .tab_con').removeClass('active');
    $('.tab_area > .tab_con.tab_con_08').addClass('active');
});



// tab 2
$(document).on('click', '.tab_area.type_red > ul > li.tab_btn', function() {
    $(this).siblings('li').removeClass('active');
    $(this).addClass('active');
});


// 마이페이지 탭
$(document).on('click', '.tab_area.tab_mypage > ul > li.tab_btn', function() {
  // $(this).siblings('ul').css('','');
});
$(document).on('click', '.tab_area.tab_mypage > ul > li.tab_btn_01', function() {
  $(this).closest('ul').css('justify-content','left');
  $(this).closest('ul').addClass('left');
});
$(document).on('click', '.tab_area.tab_mypage > ul > li.tab_btn_02', function() {
  $(this).closest('ul').css('justify-content','center');
  $(this).closest('ul').addClass('center');
});
$(document).on('click', '.tab_area.tab_mypage > ul > li.tab_btn_03', function() {
  $(this).closest('ul').css('justify-content','center');
  $(this).closest('ul').addClass('center');
});
$(document).on('click', '.tab_area.tab_mypage > ul > li.tab_btn_04', function() {
  $(this).closest('ul').css('justify-content','right');
  $(this).closest('ul').addClass('right');
});






// faq accordion 토글
$('document').ready(function(){
    $('.accordion_list .content_area').slideUp(0);
});
$(document).on('click', '.accordion_wrap .btn_expand', function() {
    // $(this).closest('.accordion_list').toggleClass('on');
    if($(this).closest('.accordion_list').hasClass("on") === true) {
        // class가 존재함.
        $(this).closest('.accordion_list').removeClass('on');
        $(this).closest('.accordion_list').find('.content_area').slideUp();
    } else {
        // class가 존재하지 않음
        $(this).closest('.accordion_list').addClass('on');
        $(this).closest('.accordion_list').find('.content_area').slideDown();
    }
});


// inquiry 아코디언
$(document).on('click', '.accordion_wrap.inquiry_tbl .accordion_list .list_cont .list_cont_title_wrap .accordion_title', function() {
    if($('.accordion_list').hasClass("on") === true) {
        // class가 존재함.
        $(this).siblings('.accordion_content_area').slideUp();
        $(this).closest('.accordion_list').removeClass('on');
    } else {
        // class가 존재하지 않음
        $(this).siblings('.accordion_content_area').slideDown();
        $(this).closest('.accordion_list').addClass('on');
    }
});


// 페이징
$(document).on('click', '.paging_wrap > ul > li', function() {
    $(this).siblings().removeClass('active');
    $(this).addClass('active');
    if($('.paging_wrap > ul > li:first-child').hasClass("active") === true) {
        $(this).closest('ul').siblings('.prev').addClass('disabled');
    } else {
        $(this).closest('ul').siblings('.prev').removeClass('disabled');
    }
    if($('.paging_wrap > ul > li:last-child').hasClass("active") === true) {
        $(this).closest('ul').siblings('.next').addClass('disabled');
    } else {
        $(this).closest('ul').siblings('.next').removeClass('disabled');
    }
});


// 푸터 모바일 accordion 토글
$(document).on('click', '.footerArea .dlList dl.fdmenu > dt', function() {
    $(this).closest('dl').toggleClass('on');
    if($('dl.fdmenu').hasClass("on") === true) {
    // class가 존재함.
    } else {
    // class가 존재하지 않음	
    }
});


// 슬라이더 비디오 팝업 열기
$(document).on('click', '.js-modal-trigger.kv_video_modal_open', function() {
    $(this).closest('.container').siblings('.modal.kv_video_modal').addClass('is-open');
    $('body').addClass('scrollLock');
});

// 슬라이더 비디오 팝업 닫기
$(document).on('click', '.modal.kv_video_modal .modal__close', function() {
    $(this).closest('.modal').removeClass('is-open');
    $('body').removeClass('scrollLock');
    var video = $('.modal__content').find('video');
    video.get(0).pause();
});



// nav 슬라이더 클릭시 현재 슬라이더 on
$(document).on('click', '.nav-slider .swiper-slide', function() {
    $(this).siblings('.swiper-slide').removeClass('swiper-slide-active');
    $(this).addClass('swiper-slide-active');
    if($('.nav-slider .swiper-slide').length > 3 ) {
        if($('.nav-slider .swiper-slide:nth-child(1)').hasClass("swiper-slide-active") === true) {
            $('.nav-slider .swiper-wrapper').css('transform', 'translate3d(0px, 0px, 0px)');
        }
        if($('.nav-slider .swiper-slide:nth-child(2)').hasClass("swiper-slide-active") === true) {
            if($(window).width() < 1280) {
                $('.nav-slider .swiper-wrapper').css('transform', 'translate3d(0px, -50px, 0px)');
            } else {
                $('.nav-slider .swiper-wrapper').css('transform', 'translate3d(0px, -90px, 0px)');
            }
        }
        if($('.nav-slider .swiper-slide:nth-child(3)').hasClass("swiper-slide-active") === true) {
            if($(window).width() < 1280) {
                $('.nav-slider .swiper-wrapper').css('transform', 'translate3d(0px, -90px, 0px)');
            } else {
                $('.nav-slider .swiper-wrapper').css('transform', 'translate3d(0px, -180px, 0px)');
            }
        }
        if($('.nav-slider .swiper-slide:nth-child(4)').hasClass("swiper-slide-active") === true) {
            if($(window).width() < 1280) {
                $('.nav-slider .swiper-wrapper').css('transform', 'translate3d(0px, -140px, 0px)');
            } else {
                $('.nav-slider .swiper-wrapper').css('transform', 'translate3d(0px, -270px, 0px)');
            }
        }
        if($('.nav-slider .swiper-slide:nth-child(5)').hasClass("swiper-slide-active") === true) {
            if($(window).width() < 1280) {
                $('.nav-slider .swiper-wrapper').css('transform', 'translate3d(0px, -180px, 0px)');
            } else {
                $('.nav-slider .swiper-wrapper').css('transform', 'translate3d(0px, -360px, 0px)');
            }
        }
    }
});

// main 슬라이더 모바일 페이지네이션 클릭시 슬라이더 on
$(document).on('click', '.main-slider .swiper-pagination .swiper-pagination-bullet:nth-child(1)', function() {
    $(this).closest('.main-slider').find('.swiper-slide').removeClass('swiper-slide-active');
    $(this).closest('.main-slider').find('.swiper-slide:nth-child(1)').addClass('swiper-slide-active');
    $(this).siblings('.swiper-pagination-bullet').removeClass('swiper-pagination-bullet-active');
    $(this).addClass('swiper-pagination-bullet-active');
});
$(document).on('click', '.main-slider .swiper-pagination .swiper-pagination-bullet:nth-child(2)', function() {
    $(this).closest('.main-slider').find('.swiper-slide').removeClass('swiper-slide-active');
    $(this).closest('.main-slider').find('.swiper-slide:nth-child(2)').addClass('swiper-slide-active');
    $(this).siblings('.swiper-pagination-bullet').removeClass('swiper-pagination-bullet-active');
    $(this).addClass('swiper-pagination-bullet-active');
});
$(document).on('click', '.main-slider .swiper-pagination .swiper-pagination-bullet:nth-child(3)', function() {
    $(this).closest('.main-slider').find('.swiper-slide').removeClass('swiper-slide-active');
    $(this).closest('.main-slider').find('.swiper-slide:nth-child(3)').addClass('swiper-slide-active');
    $(this).siblings('.swiper-pagination-bullet').removeClass('swiper-pagination-bullet-active');
    $(this).addClass('swiper-pagination-bullet-active');
});
$(document).on('click', '.main-slider .swiper-pagination .swiper-pagination-bullet:nth-child(4)', function() {
    $(this).closest('.main-slider').find('.swiper-slide').removeClass('swiper-slide-active');
    $(this).closest('.main-slider').find('.swiper-slide:nth-child(4)').addClass('swiper-slide-active');
    $(this).siblings('.swiper-pagination-bullet').removeClass('swiper-pagination-bullet-active');
    $(this).addClass('swiper-pagination-bullet-active');
});
$(document).on('click', '.main-slider .swiper-pagination .swiper-pagination-bullet:nth-child(5)', function() {
    $(this).closest('.main-slider').find('.swiper-slide').removeClass('swiper-slide-active');
    $(this).closest('.main-slider').find('.swiper-slide:nth-child(5)').addClass('swiper-slide-active');
    $(this).siblings('.swiper-pagination-bullet').removeClass('swiper-pagination-bullet-active');
    $(this).addClass('swiper-pagination-bullet-active');
});








// btn like 토글
$(document).on('click', '.btn_like', function() {
    $(this).toggleClass('on');
});



// btn bookmark 토글
$(document).on('click', '.btn_bookmark', function() {
    $(this).toggleClass('on');
});

$(document).on('click', '.icon_bookmark', function() {
    $(this).toggleClass('on');
});





// assets download 아코디언
$(document).on('click', '.btn_assets', function() {
    $(this).toggleClass('on');
    if($(this).closest('.asset_accordion_wrap').hasClass("on") === true) {
        // class가 존재함.
        $(this).closest('.asset_accordion_wrap').find('.accordion_body').slideUp();
        $(this).closest('.asset_accordion_wrap').removeClass('on');
    } else {
        // class가 존재하지 않음
        $(this).closest('.asset_accordion_wrap').find('.accordion_body').slideDown();
        $(this).closest('.asset_accordion_wrap').addClass('on');
    }
});

// 아코디언 닫기
$(document).on('click', '.btn_accordion_close', function() {
    $(this).closest('.asset_accordion_wrap').removeClass('on');
    $(this).closest('.asset_accordion_wrap').find('.btn_assets').removeClass('on');
    $(this).closest('.accordion_body').slideUp();
});



// 비디오 재생
$(document).on('click', '.btn_showroom_video_play', function() {
    var video = $('.showroom_video_wrap').find('video');
    video.get(0).play();
    $('.nav').addClass('type_transparent');
    $(this).addClass('hidden');
});


// 퀵메뉴
$('document').ready(function(){
    $('.quick_official').stop(true,false).slideUp(0);
    $('.quick_official').find('.pop_txt').stop(true,false).slideUp(0);
    $('.quick_busi_news').slideUp(0);
    $('.quick_busi_news').find('.pop_txt').stop(true,false).slideUp(0);
});
$(document).on('click', '.btn_quick', function() {
    if($('.btn_quick').hasClass("on") === true) {
        // class가 존재함.
        $(this).closest('.quick_menu_wrap').delay(800).stop(true,false).removeClass('on');
        $(this).siblings('.quick_official').stop(true,false).slideUp();
        $(this).siblings('.quick_official').find('.pop_txt').stop(true,false).slideUp();
        $(this).siblings('.quick_busi_news').stop(true,false).delay(300).slideUp();
        $(this).siblings('.quick_busi_news').find('.pop_txt').stop(true,false).delay(300).slideUp();
        $(this).removeClass('on');
    } else {
        // class가 존재하지 않음
        $(this).closest('.quick_menu_wrap').addClass('on');
        $(this).siblings('.quick_official').stop(true,false).slideDown();
        $(this).siblings('.quick_official').find('.pop_txt').stop(true,false).slideDown();
        $(this).siblings('.quick_busi_news').delay(300).stop(true,false).slideDown();
        $(this).siblings('.quick_busi_news').find('.pop_txt').delay(300).stop(true,false).slideDown();
        $(this).addClass('on');
    }
});



// 마이페이지 썸네일 북마크 버튼 클릭시 펼침
$('document').ready(function(){
    $('.bookmark_quick_wrap').removeClass('on');
    $('.bookmark_quick_btn_group').slideUp(0);
    $('.btn_bookmark_quick_open').removeClass('on');
});
$(document).on('click', '.btn_bookmark_quick_open', function() {
    if($(this).closest('.bookmark_quick_wrap').hasClass("on") === true) {
        // class가 존재함.
        $(this).closest('.bookmark_quick_wrap').delay(0).removeClass('on');
        $(this).siblings('.bookmark_quick_btn_group').slideUp();
        $(this).removeClass('on');
    } else {
        // class가 존재하지 않음
        $(this).closest('.bookmark_quick_wrap').addClass('on');
        $(this).siblings('.bookmark_quick_btn_group').slideDown();
        $(this).addClass('on');
    }
});



// kv 팝업 비디오 재생
$(document).on('click', '.slide_video_play.kv_video_modal_open', function() {
    var videopop1 = $('.kv_video_modal').find('.video1');
    videopop1.get(0).play();
});



// 퀵메뉴 스크롤시
$(window).scroll(function(){ 
    var height = $(document).scrollTop(); //실시간으로 스크롤의 높이를 측정
    if(height > 0){ 
        $('.business_quick_wrap').addClass('scroll'); 
    }else if(height == 0){ 
        $('.business_quick_wrap').removeClass('scroll'); 
    } 
});

// 최상단으로 가기
$('.btn_page_top').click(function(){
    $('html, body').animate({ scrollTop : 0},400);
    return false;
});



// 푸터 언어선택
$(document).on('click', '.lang_change', function() {
    // $('.lang_change .txt').addClass('on');
    if($(this).hasClass("eng") === true) {
        // class가 존재함.
        $(this).removeClass('eng');
    } else {
        // class가 존재하지 않음
        $(this).addClass('eng');
    }
});



// 새비밀번호 팝업 열기
$(document).on('click', '.js-modal-trigger.change_password_modal_open', function() {
    $(this).closest('.container').siblings('.modal.change_password_modal').addClass('is-open');
    $('body').addClass('scrollLock');
});

// 새비밀번호 팝업 닫기
$(document).on('click', '.modal.change_password_modal .modal__close', function() {
    $(this).closest('.modal').removeClass('is-open');
    $('body').removeClass('scrollLock');
});




// 마케팅 활용동의 팝업 열기
$(document).on('click', '.js-modal-trigger.marketing_use_modal_open', function() {
    $(this).closest('.container').siblings('.modal.marketing_use_modal').addClass('is-open');
    $('body').addClass('scrollLock');
});

// 마케팅 활용동의 팝업 닫기
$(document).on('click', '.modal.marketing_use_modal .modal__close', function() {
    $(this).closest('.modal').removeClass('is-open');
    $('body').removeClass('scrollLock');
});



// 마케팅 정보 수신동의 팝업 열기
$(document).on('click', '.js-modal-trigger.marketing_info_modal_open', function() {
    $(this).closest('.container').siblings('.modal.marketing_info_modal').addClass('is-open');
    $('body').addClass('scrollLock');
});

// 마케팅 정보 수신동의 팝업 닫기
$(document).on('click', '.modal.marketing_info_modal .modal__close', function() {
    $(this).closest('.modal').removeClass('is-open');
    $('body').removeClass('scrollLock');
});



// 회원탈퇴 팝업 열기
$(document).on('click', '.js-modal-trigger.delete_account_modal_open', function() {
    $(this).closest('.container').siblings('.modal.delete_account_modal').addClass('is-open');
    $('body').addClass('scrollLock');
});

// 회원탈퇴 팝업 닫기
$(document).on('click', '.modal.delete_account_modal .modal__close', function() {
    $(this).closest('.modal').removeClass('is-open');
    $('body').removeClass('scrollLock');
});




// learn more 버튼 열고 닫기
$(document).on('click', '.btn_learn_more', function() {
    if($(this).hasClass("on") === true) {
        // class가 존재함.
        $(this).removeClass('on');
        $(this).closest('.learn_more_wrap').removeClass('on');
        
    } else {
        // class가 존재하지 않음
        $(this).addClass('on');
        $(this).closest('.learn_more_wrap').addClass('on');
    }
});

$(document).on('click', '.btn_learn_more_close', function() {
    $(this).closest('.learn_more_wrap').removeClass('on');
    $(this).parent('.learn_more_body').siblings('btn_learn_more').removeClass('on');
});



// 비지니스 비주얼 슬라이드 영상있는 슬라이드 활성화 될때
// $('document').ready(function(){
//     if($('.swiper-slide.swiper-slide-active').hasClass("has_video") === true) {
//         var slidevideo = $('.swiper-slide.has_video.swiper-slide-active').find('video');
//         slidevideo.get(0).play();
//         // $('.nav').addClass('type_transparent');
//     } else {
//         var hasvideo = $('.swiper-slide.has_video').find('video');
//         hasvideo.get(0).pause();
//         $(body).find('.nav').removeClass('type_transparent');
//     }
// });

// $(document).on('click', '.swiper-pagination .swiper-pagination-bullet', function() {
//     if($('.swiper-slide.swiper-slide-active').hasClass("has_video") === true) {
//         var slidevideo = $('.swiper-slide.has_video.swiper-slide-active').find('video');
//         slidevideo.get(0).play();
//         // $('.nav').addClass('type_transparent');
//     } else {
//         var hasvideo = $('.swiper-slide.has_video').find('video');
//         hasvideo.get(0).pause();
//         $('.nav').removeClass('type_transparent');
//         $(body).find('.nav').removeClass('type_transparent');
//     }
// });

// $(document).on('click', '.swiper-button-next', function() {
//     if($('.swiper-slide.swiper-slide-active').hasClass("has_video") === true) {
//         var slidevideo = $('.swiper-slide.has_video.swiper-slide-active').find('video');
//         slidevideo.get(0).play();
//         // $('.nav').addClass('type_transparent');
//     } else {
//         var hasvideo = $('.swiper-slide.has_video').find('video');
//         hasvideo.get(0).pause();
//         $('.nav').removeClass('type_transparent');
//         $(body).find('.nav').removeClass('type_transparent');
//     }
// });

// $(document).on('click', '.swiper-button-prev', function() {
//     if($('.swiper-slide.swiper-slide-active').hasClass("has_video") === true) {
//         var slidevideo = $('.swiper-slide.has_video.swiper-slide-active').find('video');
//         slidevideo.get(0).play();
//         // $('.nav').addClass('type_transparent');
//     } else {
//         var hasvideo = $('.swiper-slide.has_video').find('video');
//         hasvideo.get(0).pause();
//         $('.nav').removeClass('type_transparent');
//         $(body).find('.nav').removeClass('type_transparent');
//     }
// });




// showroom gnb_mobile
$(document).ready(function () {
    $('.hamburger').click(function () {
        $('.container').addClass('blur');
        $('.gnb_mobile').addClass('active animate__animated animate__zoomIn');
        setTimeout(() => {
            $('.gnb_mobile').removeClass("animate__animated animate__zoomIn");
        }, 300);
    });
    $('.gnb_header .btn_cl_gnb ,.gnb_dim').click(function () {
        $('.container').removeClass('blur');
        $('.gnb_mobile').addClass('animate__animated animate__zoomOut');
        setTimeout(() => {
            $('.gnb_mobile').removeClass("active animate__animated animate__zoomOut");
        }, 300);
    });

    $('.call_depth2').click(function () {
        $('.wrap_depth1').removeClass('active');
        $('.wrap_depth1').addClass(' animate__animated animate__fadeOut');
        setTimeout(() => {
            $('.wrap_depth1').removeClass("animate__animated animate__fadeOut");
        }, 300);
        $('.wrap_depth2').addClass('active animate__animated animate__zoomIn');
        setTimeout(() => {
            $('.wrap_depth2').removeClass("animate__animated animate__zoomIn");
        }, 300);
    });
    $('.btn_cl_depth2').click(function () {
        $('.wrap_depth1').addClass('active');
        $('.wrap_depth2').addClass(' animate__animated animate__fadeOut');
        setTimeout(() => {
            $('.wrap_depth2').removeClass("active animate__animated animate__fadeOut");
        }, 300);

        
    });
   
});