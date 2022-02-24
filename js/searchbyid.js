﻿ var search = function (site, env) {
            var searchId = env === 'pc' ? 'search-pc' : 'search-mobile';
            var baseURL = {
                google: 'https://www.google.com/search?q=',
                bing: 'https://cn.bing.com/search?ensearch=1&q=',
                baidu: 'https://www.baidu.com/s?wd=',
                zhihu: 'https://www.zhihu.com/search?q=',
                info: 'http://www.info.com/serp?q=',
                googletl: 'https://translate.google.com/?sl=auto&text=',
                bingtl: 'https://www.bing.com/dict/search?q=',
                oulu: 'https://dict.eudic.net/dicts/en/',
                wikipedia: 'https://en.wikipedia.org/w/index.php?search=',
                knowpedia: 'https://www.knowpia.com/index/search/index?key=',
                encyclopedia: 'https://www.wikizero.com/search.php?lang=en&s=', 
                term: 'https://www.termonline.cn/search?k=',
                wolframalpha: 'https://www.wolframalpha.com/input/?i=',
                wolframalpha_mob: 'https://m.wolframalpha.com/input/?i=',
                stackexchange: 'https://math.stackexchange.com/search?q=',
                mathoverflow: 'https://mathoverflow.net/search?q=',
                weixin: 'https://weixin.sogou.com/weixin?type=2&query=',
                wordref: 'https://www.wordreference.com/fren/',
                conju: 'https://leconjugueur.lefigaro.fr/conjugaison/verbe/',
                fazhu: 'https://www.frdic.com/dicts/fr/',
                dezhu: 'http://www.godic.net/dicts/de/',
                herokuapp: 'http://en-wiki.herokuapp.com/wiki/',
                dujiang: 'http://dict.hjenglish.com/fr/',
                USTCwiki: 'http://202.38.70.7:23334/wikipedia_en_mathematics_maxi_2019-08/A/',
                dict: 'https://www.dict.cc/?s=',
            };
            openwin(baseURL[site] + encodeURIComponent(document.getElementById(searchId).value));
        };
        function openwin(url) {
            var a = document.createElement("a");
            a.setAttribute("href", url);
            a.setAttribute("target", "_blank");
            a.setAttribute("id", "openwin");
            document.body.appendChild(a);
            a.click();
        }
        document.getElementById("search-form-pc").onsubmit = function (e) {
            e.preventDefault();
            search('google', 'pc');
        };
        document.getElementById("search-form-mobile").onsubmit = function (e) {
            e.preventDefault();
            search('info', 'mobile');
        };