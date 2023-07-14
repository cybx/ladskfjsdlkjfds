var accumulated = "";
var obgFriendList = [];
for (var el of document.querySelectorAll(
  '[data-visualcompletion="ignore-dynamic"]'
)) {
  var newObjg;
  var nomeFB = el.getAttribute("aria-label");
  var nome = "";
  if (nomeFB != null && nomeFB != "null") {
    nome = nomeFB;
    accumulated = "Name:" + nomeFB + ", " + accumulated;
    console.log(accumulated);
    accumulated = "";
  } else {
    var a = el.getElementsByTagName("a")[0];
    var amigosEmComum = el.getElementsByClassName(
      "x193iq5w xeuugli x13faqbe x1vvkbs x1xmvt09 x1nxh6w3 x1sibtaa xo1l8bm xi81zsa"
    )[1];
    if (a) {
      var link = a.getAttribute("href");
      accumulated += "Profile URL: " + a.getAttribute("href");
      if (typeof amigosEmComum !== "undefined") {
        var txtAmigosEmcomum = amigosEmComum.textContent;
        var qtdeAmigosEmComum = txtAmigosEmcomum.replace(/\D/g, "");
        accumulated += " amigos: " + txtAmigosEmcomum;
        accumulated += " Qtde " + qtdeAmigosEmComum;
      }
      //console.log(a);
    }
  }
  if (nome !== "") {
    newObjg = {
      nome: nomeFB,
      url: link,
      amg: txtAmigosEmcomum,
      qtde: qtdeAmigosEmComum,
    };
    obgFriendList.push(newObjg);
  }
}
var dataStr =
  "data:text/json;charset=utf-8," +
  encodeURIComponent(JSON.stringify(obgFriendList));
var downloadAnchorNode = document.createElement("a");
downloadAnchorNode.setAttribute("href", dataStr);
downloadAnchorNode.setAttribute("download", "friendsList.json");
document.body.appendChild(downloadAnchorNode);
downloadAnchorNode.click();
downloadAnchorNode.remove();
