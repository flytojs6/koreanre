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



// 상단 메인메뉴 오버 하위메뉴 열림
// $(document).ready(function(){
//   $('.nav .mainmenu > ul > li').mouseover(function(){
//     $(this).children('.mlink').addClass('active');
//     $(this).children('.smenu').stop().slideDown(350);
//   });
//   $('.nav .mainmenu > ul > li').mouseleave(function(){
//     $(this).children('.mlink').removeClass('active');
//     $(this).children('.smenu').stop().slideUp(0);
//   });
// });

// 메인메뉴 리스트 많아질때
$(document).ready(function(){
  var mainMenuNum = $('.mainlist > li').length;
  $('.nav').addClass('navnum' + mainMenuNum);
  if($(window).width() < 1440) {
    if (mainMenuNum > 9) {
      $('.nav').addClass('menuover');
      $('.gnbArea').find('.btn_nav_prev').show();
      $('.gnbArea').find('.btn_nav_next').show();
    }else{
      $('.nav').removeClass('menuover');
      $('.gnbArea').find('.btn_nav_prev').hide();
      $('.gnbArea').find('.btn_nav_next').hide();
    }
  } else {
    if (mainMenuNum > 11) {
      $('.nav').addClass('menuover');
      $('.gnbArea').find('.btn_nav_prev').show();
      $('.gnbArea').find('.btn_nav_next').show();
    }else{
      $('.nav').removeClass('menuover');
      $('.gnbArea').find('.btn_nav_prev').hide();
      $('.gnbArea').find('.btn_nav_next').hide();
    }
  }
});

// 상단 메인메뉴 클릭시 active
$(document).on('click', '.nav .mainlist > .mmenu_item .mlink', function() {
  $(this).closest('li').siblings('li').find('.mlink').removeClass('active');
  $(this).closest('.mmenu_item').siblings('.mmenu_item').removeClass('active');
  $(this).closest('.mmenu_item').addClass('active');
  $(this).addClass('active');
  $(this).closest('.nav').siblings('.lnb').find('.lnb_gr_list').removeClass('active');
});

// 메뉴 클릭시 서브메뉴 반복문
$(document).ready(function() {
  const aListItems = $('.mainlist li.mmenu_item');
  const bListItems = $('.lnb .lnb_wrap .lnb_gr_list li.lnb_gr_item');
  aListItems.each(function(index) {
    $(this).click(function() {
      bListItems.removeClass('active');
      bListItems.eq(index).addClass('active');
      console.log(this.index);
    });
  });
});

// 메인메뉴 스크롤 이동
$(document).on('click', '.gnbArea .btn_nav_prev', function() {
  var leftPos = $('.mainlist').scrollLeft();
  $(".mainlist").animate({scrollLeft: leftPos - 120}, 400);
});

$(document).on('click', '.gnbArea .btn_nav_next', function() {
  var leftPos = $('.mainlist').scrollLeft();
  $(".mainlist").animate({scrollLeft: leftPos + 120}, 400);
});

// 서브메뉴 리스트 많아질때
$(document).ready(function(){
  var subMenuNum = $('.lnb_gr_list > li.lnb_gr_item.active .lnb_list .lnb_item').length;
  $('.lnb').addClass('lnbnum' + subMenuNum);
  if($(window).width() < 1440) {
    if (subMenuNum > 12) {
      $('.lnb').addClass('lnbover');
      $('.lnb_wrap').find('.btn_lnb_prev').show();
      $('.lnb_wrap').find('.btn_lnb_next').show();
    }else{
      $('.lnb').removeClass('lnbover');
      $('.lnb_wrap').find('.btn_lnb_prev').hide();
      $('.lnb_wrap').find('.btn_lnb_next').hide();
    }
  } else if($(window).width() < 1900) {
    if (subMenuNum > 14) {
      $('.lnb').addClass('lnbover');
      $('.lnb_wrap').find('.btn_lnb_prev').show();
      $('.lnb_wrap').find('.btn_lnb_next').show();
    }else{
      $('.lnb').removeClass('lnbover');
      $('.lnb_wrap').find('.btn_lnb_prev').hide();
      $('.lnb_wrap').find('.btn_lnb_next').hide();
    }
  } else {
    if (subMenuNum > 20) {
      $('.lnb').addClass('lnbover');
      $('.lnb_wrap').find('.btn_lnb_prev').show();
      $('.lnb_wrap').find('.btn_lnb_next').show();
    }else{
      $('.lnb').removeClass('lnbover');
      $('.lnb_wrap').find('.btn_lnb_prev').hide();
      $('.lnb_wrap').find('.btn_lnb_next').hide();
    }
  }
});

// 서브메뉴 스크롤 이동
$(document).on('click', '.lnb_wrap .btn_lnb_prev', function() {
  var lnbleftPos = $('.lnb_gr_list').scrollLeft();
  $(".lnb_gr_list").animate({scrollLeft: lnbleftPos - 100}, 400);
});

$(document).on('click', '.lnb_wrap .btn_lnb_next', function() {
  var lnbleftPos = $('.lnb_gr_list').scrollLeft();
  $(".lnb_gr_list").animate({scrollLeft: lnbleftPos + 100}, 400);
});



// 헤더 탭 박스 클릭시
$(document).on('click', '.tab_wrap .tablist > li > a', function() {
  $(this).closest('.tab_item').siblings('.tab_item').removeClass('active');
  $(this).closest('.tab_item').addClass('active');
});

// 헤더 탭 리스트 많아질때
$(document).ready(function(){
  var tabItemNum = $('.tab_wrap .tablist > li.tab_item').length;
  $('.tab_wrap').addClass('tabnum' + tabItemNum);
  if($(window).width() < 1440) {
    if (tabItemNum > 12) {
      $('.tab_wrap').addClass('tabover');
      $('.tab_wrap').find('.btn_tab_prev').show();
      $('.tab_wrap').find('.btn_tab_next').show();
    }else{
      $('.tab_wrap').removeClass('tabover');
      $('.tab_wrap').find('.btn_tab_prev').hide();
      $('.tab_wrap').find('.btn_tab_next').hide();
    }
  } else if($(window).width() < 1900) {
    if (tabItemNum > 14) {
      $('.tab_wrap').addClass('tabover');
      $('.tab_wrap').find('.btn_tab_prev').show();
      $('.tab_wrap').find('.btn_tab_next').show();
    }else{
      $('.tab_wrap').removeClass('tabover');
      $('.tab_wrap').find('.btn_tab_prev').hide();
      $('.tab_wrap').find('.btn_tab_next').hide();
    }
  } else {
    if (tabItemNum > 20) {
      $('.tab_wrap').addClass('tabover');
      $('.tab_wrap').find('.btn_tab_prev').show();
      $('.tab_wrap').find('.btn_tab_next').show();
    }else{
      $('.tab_wrap').removeClass('tabover');
      $('.tab_wrap').find('.btn_tab_prev').hide();
      $('.tab_wrap').find('.btn_tab_next').hide();
    }
  }
});

// 헤더 탭 메뉴 스크롤 이동
$(document).on('click', '.tab_wrap .btn_tab_prev', function() {
  var tableftPos = $('.tablist').scrollLeft();
  $(".tablist").animate({scrollLeft: tableftPos - 100}, 400);
});

$(document).on('click', '.tab_wrap .btn_tab_next', function() {
  var tableftPos = $('.tablist').scrollLeft();
  $(".tablist").animate({scrollLeft: tableftPos + 100}, 400);
});

// 헤더 탭 버튼 클릭시 아이프레임 콘텐츠 변경
$(document).ready(function() {
  const htabListItems = $('.tab_wrap .tablist > li');
  const iframeListItems = $('.container .page_frame');
  htabListItems.each(function(index) {
    $(this).click(function() {
      iframeListItems.removeClass('active');
      iframeListItems.eq(index).addClass('active');
    });
  });
});

// 헤더 탭 아이템 닫기버튼 클릭시
$(document).on('click', '.tab_box .tab_wrap .tablist > li .btn_tab_item_close', function() {
  $(this).closest('.tab_item').removeClass('active');
  $(this).closest('.tab_item').removeClass('visible');
});

// 전체닫기 클릭시 메뉴닫힘
$(document).on('click', '.tab_box .tab_wrap .btn_area .btn_menu_close', function() {
  $(this).closest('.tab_box').removeClass('active');
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



// 얼러트 아이디 팝업 열기
$(document).on('click', '.js-modal-trigger.alert_modal_open', function() {
  $(this).closest('.container').siblings('.modal.alert_modal').addClass('is-open');
});

// 얼러트 아이디 팝업 닫기
$(document).on('click', '.modal .modal__close', function() {
  $(this).closest('.modal').removeClass('is-open');
  $('body').removeClass('scrollLock');
});



// 얼러트 비밀번호 팝업 열기
$(document).on('click', '.js-modal-trigger.alert_pw_modal_open', function() {
  $(this).closest('.container').siblings('.modal.alert_pw_modal').addClass('is-open');
});

// 얼러트 비밀번호 팝업 닫기
$(document).on('click', '.modal .modal__close', function() {
  $(this).closest('.modal').removeClass('is-open');
  $('body').removeClass('scrollLock');
});



// 거래사 조회 팝업 열기
$(document).on('click', '.js-modal-trigger.company_search_modal_open', function() {
  $(this).closest('.container').siblings('.modal.company_search_modal').addClass('is-open');
  $('body').addClass('scrollLock');
});

// 거래사 조회 팝업 닫기
$(document).on('click', '.modal.company_search_modal .modal__close', function() {
  $(this).closest('.modal').removeClass('is-open');
  $('body').removeClass('scrollLock');
});



// 담당자 조회 팝업 열기
$(document).on('click', '.js-modal-trigger.manager_search_modal_open', function() {
  $(this).closest('.container').siblings('.modal.manager_search_modal').addClass('is-open');
  $('body').addClass('scrollLock');
});

// 담당자 조회 팝업 닫기
$(document).on('click', '.modal.manager_search_modal .modal__close', function() {
  $(this).closest('.modal').removeClass('is-open');
  $('body').removeClass('scrollLock');
});



// 파일첨부 팝업 열기
$(document).on('click', '.js-modal-trigger.file_add_modal_open', function() {
  $(this).closest('.container').siblings('.modal.file_add_modal').addClass('is-open');
  $('body').addClass('scrollLock');
});

// 파일첨부 팝업 닫기
$(document).on('click', '.modal.file_add_modal .modal__close', function() {
  $(this).closest('.modal').removeClass('is-open');
  $('body').removeClass('scrollLock');
});



// 파일전송 완료 레이어 팝업 열기
$(document).on('click', '.js-modal-trigger.file_forwarding_modal_open', function() {
  $(this).closest('.container').find('.modal.file_forwarding_modal').addClass('is-open');
});

// 파일전송 완료 레이어 팝업 닫기
$(document).on('click', '.modal.file_forwarding_modal .modal__close', function() {
  $(this).closest('.modal').removeClass('is-open');
});