// แกะข้อความจาก QR ป้ายบ่อ/แปลง/อุปกรณ์ ให้เป็นลิงก์ที่เปิดต่อได้
// รับเฉพาะลิงก์ของ Apps Script web app ที่มีพารามิเตอร์ spot= หรือ equip= (กันพาไปเว็บอื่น)
(function (root) {
  var EXEC_RE = /^https:\/\/script\.google\.com\/macros\/(?:a\/[A-Za-z0-9._-]+\/)?s\/[A-Za-z0-9_-]+\/exec\?/;

  function scanTargetUrl(text) {
    var t = String(text || '').trim();
    if (!EXEC_RE.test(t)) return null;
    if (!/[?&](spot|equip)=[^&#]+/.test(t)) return null;
    return t;
  }

  var api = { scanTargetUrl: scanTargetUrl };
  if (typeof module !== 'undefined' && module.exports) module.exports = api;
  else root.LiffScan = api;
})(typeof window !== 'undefined' ? window : this);
