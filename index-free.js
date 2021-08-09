<script type='text/javascript'>
//<![CDATA[
var _0x2179=["\x73\x75\x62\x73\x74\x72\x69\x6E\x67","\x73\x65\x61\x72\x63\x68","\x6C\x6F\x63\x61\x74\x69\x6F\x6E","\x26","\x73\x70\x6C\x69\x74","\x6C\x65\x6E\x67\x74\x68","\x3D","\x61\x74\x70\x61\x67\x65","\x23\x61\x69\x74\x69\x5F\x6E\x65\x78\x74","\x23\x61\x69\x74\x69\x5F\x70\x72\x65\x76","\u23E9","\x69\x6E\x6E\x65\x72\x48\x54\x4D\x4C","\x70\x72\x6F\x70","\x2E\x61\x69\x74\x69\x2D\x62\x6F\x64\x79","\x72\x65\x6D\x6F\x76\x65","\x23\x61\x69\x74\x69\x2D\x6F\x75\x74","\x23\x61\x69\x74\x69\x2D\x70\x61\x67\x65\x2D\x6E\x75\x6D\x62\x65\x72","\x68\x72\x65\x66","\x3F\x61\x74\x70\x61\x67\x65\x3D\x32","\x61\x74\x74\x72","\x61","\x66\x69\x6E\x64","\x68\x74\x6D\x6C","\x31","\x20\x6F\x66\x20","\x3F\x61\x74\x70\x61\x67\x65\x3D"];var ll=function ll(_0x5a7cx2){var _0x5a7cx3=decodeURIComponent(window[_0x2179[2]][_0x2179[1]][_0x2179[0]](1)),_0x5a7cx4=_0x5a7cx3[_0x2179[4]](_0x2179[3]),_0x5a7cx5,_0x5a7cx6;for(_0x5a7cx6= 0;_0x5a7cx6< _0x5a7cx4[_0x2179[5]];_0x5a7cx6++){_0x5a7cx5= _0x5a7cx4[_0x5a7cx6][_0x2179[4]](_0x2179[6]);if(_0x5a7cx5[0]=== _0x5a7cx2){return _0x5a7cx5[1]=== undefined?true:_0x5a7cx5[1]}}};var lI=ll(_0x2179[7]);var l1l=$(_0x2179[8]);var l11=$(_0x2179[9]);var l1I=$(_0x2179[13])[_0x2179[12]](_0x2179[11])[_0x2179[4]](_0x2179[10]);$(_0x2179[13])[_0x2179[14]]();var lIl=$(_0x2179[15]);var lI1=$(_0x2179[16]);var total=l1I[_0x2179[5]];if(lI=== undefined|| lI== 1){l11[_0x2179[14]]();l1l[_0x2179[21]](_0x2179[20])[_0x2179[19]](_0x2179[17],_0x2179[18]);lIl[_0x2179[22]](l1I[0]);lI1[_0x2179[22]](_0x2179[23]+ _0x2179[24]+ total)}else {lI= parseInt(lI);if(l1I[_0x2179[5]]<= lI){l1l[_0x2179[14]]()};var lII=lI+ 1;var l1ll=lI- 1;l1l[_0x2179[21]](_0x2179[20])[_0x2179[19]](_0x2179[17],_0x2179[25]+ lII);l11[_0x2179[21]](_0x2179[20])[_0x2179[19]](_0x2179[17],_0x2179[25]+ l1ll);lIl[_0x2179[22]](l1I[l1ll]);lI1[_0x2179[22]](lI+ _0x2179[24]+ total)}

var idBlog= "2194849968937073727"; // معرف المدونة التي وضعت عليها لوحة التفعيل
var idPage= "6402536817877898444"; // معرف الصفحة التي وضعت عليها لوحة التفعيل
$.ajax({
    dataType: "json",
    url: "https://www.blogger.com/feeds/"+idBlog+"/pages/default/"+idPage+"?alt=json-in-script",
    method: "GET",
    dataType: "jsonp",
    success: function(e) {
        var o, t = $(e.entry.content.$t),
            n = t.find("li"),
            a = t.find("script"),
            l = [];
            $allow = !0, $("body").append(a);
        for (o = 0; o < n.length; o += 1) l.push($(n[o]).text());
        o = window.location.hostname.toLowerCase(), n = window.location.href.toLowerCase();
        var s;
        l.length;
        for (s = 0; s < l.length; s += 1) {
            if (-1 != o.indexOf(l[s])) {
                break
            }
  s == l.length - 1 && $('body *').remove() && $('body').addClass('RE').append("<style>body.RE {background: url(//2.bp.blogspot.com/-do3kTvbcSfk/WrwXWhWRh3I/AAAAAAAAANA/YxjG53tSZTQo3vSCt9KxZ-SPDj5z5jzPQCK4BGAYYCw/s1600/%25D8%25B3%25D9%258A%25D9%2588%25D8%25A8%25D9%2584%25D8%25B3.png) no-repeat center #eee;background-position: center center;height: 98vh;}</style>")
        }
    }
});

//]]>
</script>
