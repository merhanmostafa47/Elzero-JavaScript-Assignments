/**
 * قم بإنشاء Function تقوم بإنشاء Select Box في صفحة ال HTML
ال Function تقبل منك إثنين Parameters الأول هو عام البداية والثاني هو عام النهاية
قم بإنشاء ال Select Box يحتوي على Options كل واحد فيهم فيه العام حتى النهاية
شاهد المثال لترى المطلوب
 */

function createSelectBox(startYear, endYear) {
  // Your Code Here
  document.write(`<select>`);
  for (let i = startYear; i <= endYear; i++) {
    document.write(`<option value="${i}">${i}</option>`);
  }
  document.write(`</select>`);
}

createSelectBox(2000, 2022);
