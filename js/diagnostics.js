var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function () {
  if (this.readyState == 4 && this.status == 200) {
    var siteData = JSON.parse(this.responseText).info;
    document.getElementById("hitcount").innerHTML = getNumStr(siteData.hits);
    document.getElementById("viewcount").innerHTML = getNumStr(siteData.views);
    document.getElementById("createdate").innerHTML = siteData.created_at;
    document.getElementById("lastupdated").innerHTML = siteData.last_updated;
  }
};
xhttp.open(
  "GET",
  "https://weirdscifi.ratiosemper.com/neocities.php?sitename=espimyte",
  true
);
xhttp.send();

function getNumStr(num) {
    var numArr = num.toString().split("");
    var numStr = "";
    for (i = 0; i < numArr.length; i++) {
        numStr += numArr[i];
        if ( (numArr.length-1 - i) % 3 == 0 && (numArr.length-1 - i) != 0 ) {
            numStr += ",";
        }
    }
    return numStr;
}