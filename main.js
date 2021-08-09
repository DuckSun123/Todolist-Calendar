//--------------------calendar----------------------
// 기본설정
today = new Date();
yy = today.getFullYear();
mm = today.getMonth();

YM = yy + "년 " + (mm + 1) + "월";
document.getElementById("ym").innerHTML = YM;

first_date = new Date(yy, mm, 1).getDate();
last_date = new Date(yy, mm + 1, 0).getDate();
first_day = new Date(yy, mm, 1).getDay();

let modal = document.querySelector(".madal");

// 달력 나타내기
function makecalendar() {
  calendar = document.getElementById("calendar");
  row = calendar.insertRow();

  for (let i = 0; i < first_day; i++) {
    cell = row.insertCell();
  }
  for (let i = 1; i <= last_date; i++) {
    if (first_day != 7) {
      cell = row.insertCell();
      cell.setAttribute("id", [i]);
      cell.innerHTML = [i];
      first_day += 1;
      // console.log(i);
    } else {
      row = calendar.insertRow();
      cell = row.insertCell();
      cell.setAttribute("id", [i]);
      cell.innerHTML = [i];
      first_day = first_day - 6;
    }
  }
}
makecalendar();

// 오늘 날짜에 색 나타내기
function serch_today() {
  today_date = today.getDate();
  this_mm = new Date().getMonth();
  this_yy = new Date().getFullYear();
  this_YM = this_yy + "년 " + (this_mm + 1) + "월";

  for (let i = 1; i <= last_date; i++) {
    set_id = document.getElementById([i]);
    if (today_date == set_id.getAttribute("id") && this_YM == YM) {
      set_id.bgColor = "red";
    }
  }
}
serch_today();

// 버튼 조작
function before_month() {
  while (calendar.rows.length > 2) {
    calendar.deleteRow(calendar.rows.length - 1);
  }

  mm = mm - 1;

  if (mm === -1) {
    yy = yy - 1;
    mm = mm + 12;
  }
  YM = yy + "년 " + (mm + 1) + "월";
  document.getElementById("ym").innerHTML = YM;
  first_date = new Date(yy, mm, 1).getDate();
  last_date = new Date(yy, mm + 1, 0).getDate();
  first_day = new Date(yy, mm, 1).getDay();
  makecalendar();
  serch_today();
}

function next_month() {
  while (calendar.rows.length > 2) {
    calendar.deleteRow(calendar.rows.length - 1);
  }
  mm = mm + 1;
  if (mm === 12) {
    yy = yy + 1;
    mm = mm - 12;
  }

  YM = yy + "년 " + (mm + 1) + "월";
  document.getElementById("ym").innerHTML = YM;
  first_date = new Date(yy, mm, 1).getDate();
  last_date = new Date(yy, mm + 1, 0).getDate();
  first_day = new Date(yy, mm, 1).getDay();
  makecalendar();
  serch_today();
}
//------------------------------------------------
