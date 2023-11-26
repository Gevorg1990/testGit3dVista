(function(){
var translateObjs = {};
function trans(c, d) {
    var e = arguments['length'] === 0x1 ? [arguments[0x0]] : Array['apply'](null, arguments);
    translateObjs[e[0x0]] = e;
    return '';
}
function regTextVar(f, g) {
    var h = ![];
    return i(g);
    function i(p, q) {
        switch (p['toLowerCase']()) {
        case 'title':
        case 'subtitle':
        case 'photo.title':
        case 'photo.description':
            var s = function () {
                switch (p['toLowerCase']()) {
                case 'title':
                case 'photo.title':
                    return 'media.label';
                case 'subtitle':
                    return 'media.data.subtitle';
                case 'photo.description':
                    return 'media.data.description';
                }
            }();
            if (s) {
                return function () {
                    var x, y;
                    var z = (q && q['viewerName'] ? this['getComponentByName'](q['viewerName']) : undefined) || this['getMainViewer']();
                    if (p['toLowerCase']()['startsWith']('photo'))
                        x = this['getByClassName']('PhotoAlbumPlayListItem')['filter'](function (B) {
                            var C = B['get']('player');
                            return C && C['get']('viewerArea') == z;
                        })['map'](function (D) {
                            return D['get']('media')['get']('playList');
                        });
                    else {
                        x = this['_getPlayListsWithViewer'](z);
                        y = o['bind'](this, z);
                    }
                    if (!h) {
                        for (var A = 0x0; A < x['length']; ++A) {
                            x[A]['bind']('changing', k, this);
                        }
                        h = !![];
                    }
                    return n['call'](this, x, s, y);
                };
            }
            break;
        case 'tour.name':
        case 'tour.description':
            return function () {
                return this['get']('data')['tour']['locManager']['trans'](p);
            };
        default:
            if (p['toLowerCase']()['startsWith']('viewer.')) {
                var t = p['split']('.');
                var u = t[0x1];
                if (u) {
                    var v = t['slice'](0x2)['join']('.');
                    return i(v, { 'viewerName': u });
                }
            } else if (p['toLowerCase']()['startsWith']('quiz.') && 'Quiz' in TDV) {
                var w = undefined;
                var s = function () {
                    switch (p['toLowerCase']()) {
                    case 'quiz.questions.answered':
                        return TDV['Quiz']['PROPERTY']['QUESTIONS_ANSWERED'];
                    case 'quiz.question.count':
                        return TDV['Quiz']['PROPERTY']['QUESTION_COUNT'];
                    case 'quiz.items.found':
                        return TDV['Quiz']['PROPERTY']['ITEMS_FOUND'];
                    case 'quiz.item.count':
                        return TDV['Quiz']['PROPERTY']['ITEM_COUNT'];
                    case 'quiz.score':
                        return TDV['Quiz']['PROPERTY']['SCORE'];
                    case 'quiz.score.total':
                        return TDV['Quiz']['PROPERTY']['TOTAL_SCORE'];
                    case 'quiz.time.remaining':
                        return TDV['Quiz']['PROPERTY']['REMAINING_TIME'];
                    case 'quiz.time.elapsed':
                        return TDV['Quiz']['PROPERTY']['ELAPSED_TIME'];
                    case 'quiz.time.limit':
                        return TDV['Quiz']['PROPERTY']['TIME_LIMIT'];
                    case 'quiz.media.items.found':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_ITEMS_FOUND'];
                    case 'quiz.media.item.count':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_ITEM_COUNT'];
                    case 'quiz.media.questions.answered':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_QUESTIONS_ANSWERED'];
                    case 'quiz.media.question.count':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_QUESTION_COUNT'];
                    case 'quiz.media.score':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_SCORE'];
                    case 'quiz.media.score.total':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_TOTAL_SCORE'];
                    case 'quiz.media.index':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_INDEX'];
                    case 'quiz.media.count':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_COUNT'];
                    case 'quiz.media.visited':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_VISITED_COUNT'];
                    default:
                        var E = /quiz\.([\w_]+)\.(.+)/['exec'](p);
                        if (E) {
                            w = E[0x1];
                            switch ('quiz.' + E[0x2]) {
                            case 'quiz.score':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['SCORE'];
                            case 'quiz.score.total':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['TOTAL_SCORE'];
                            case 'quiz.media.items.found':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_ITEMS_FOUND'];
                            case 'quiz.media.item.count':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_ITEM_COUNT'];
                            case 'quiz.media.questions.answered':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_QUESTIONS_ANSWERED'];
                            case 'quiz.media.question.count':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_QUESTION_COUNT'];
                            case 'quiz.questions.answered':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['QUESTIONS_ANSWERED'];
                            case 'quiz.question.count':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['QUESTION_COUNT'];
                            case 'quiz.items.found':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['ITEMS_FOUND'];
                            case 'quiz.item.count':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['ITEM_COUNT'];
                            case 'quiz.media.score':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_SCORE'];
                            case 'quiz.media.score.total':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_TOTAL_SCORE'];
                            }
                        }
                    }
                }();
                if (s) {
                    return function () {
                        var F = this['get']('data')['quiz'];
                        if (F) {
                            if (!h) {
                                if (w != undefined)
                                    if (w == 'global') {
                                        var H = this['get']('data')['quizConfig'];
                                        var J = H['objectives'];
                                        for (var L = 0x0, N = J['length']; L < N; ++L) {
                                            F['bind'](TDV['Quiz']['EVENT_OBJECTIVE_PROPERTIES_CHANGE'], m['call'](this, J[L]['id'], s), this);
                                        }
                                    } else {
                                        F['bind'](TDV['Quiz']['EVENT_OBJECTIVE_PROPERTIES_CHANGE'], m['call'](this, w, s), this);
                                    }
                                else
                                    F['bind'](TDV['Quiz']['EVENT_PROPERTIES_CHANGE'], l['call'](this, s), this);
                                h = !![];
                            }
                            try {
                                var O = 0x0;
                                if (w != undefined) {
                                    if (w == 'global') {
                                        var H = this['get']('data')['quizConfig'];
                                        var J = H['objectives'];
                                        for (var L = 0x0, N = J['length']; L < N; ++L) {
                                            O += F['getObjective'](J[L]['id'], s);
                                        }
                                    } else {
                                        O = F['getObjective'](w, s);
                                    }
                                } else {
                                    O = F['get'](s);
                                    if (s == TDV['Quiz']['PROPERTY']['PANORAMA_INDEX'])
                                        O += 0x1;
                                }
                                return O;
                            } catch (P) {
                                return undefined;
                            }
                        }
                    };
                }
            }
            break;
        }
        return function () {
            return '';
        };
    }
    function j() {
        var Q = this['get']('data');
        Q['updateText'](Q['translateObjs'][f]);
    }
    function k(R) {
        var S = R['data']['nextSelectedIndex'];
        if (S >= 0x0) {
            var T = R['source']['get']('items')[S];
            var U = function () {
                T['unbind']('begin', U, this);
                j['call'](this);
            };
            T['bind']('begin', U, this);
        }
    }
    function l(V) {
        return function (W) {
            if (V in W) {
                j['call'](this);
            }
        }['bind'](this);
    }
    function m(X, Y) {
        return function (Z, a0) {
            if (X == Z && Y in a0) {
                j['call'](this);
            }
        }['bind'](this);
    }
    function n(a1, a2, a3) {
        for (var a4 = 0x0; a4 < a1['length']; ++a4) {
            var a5 = a1[a4];
            var a6 = a5['get']('selectedIndex');
            if (a6 >= 0x0) {
                var a7 = a2['split']('.');
                var a8 = a5['get']('items')[a6];
                if (a3 !== undefined && !a3['call'](this, a8))
                    continue;
                for (var a9 = 0x0; a9 < a7['length']; ++a9) {
                    if (a8 == undefined)
                        return '';
                    a8 = 'get' in a8 ? a8['get'](a7[a9]) : a8[a7[a9]];
                }
                return a8;
            }
        }
        return '';
    }
    function o(aa, ab) {
        var ac = ab['get']('player');
        return ac !== undefined && ac['get']('viewerArea') == aa;
    }
}
var script = {"start":"this.init(); this.visibleComponentsIfPlayerFlagEnabled([this.IconButton_4DA2B0D1_6F64_CD55_41D6_BFC41C284069], 'gyroscopeAvailable'); if(!this.get('fullscreenAvailable')) { [this.IconButton_4DA160D1_6F64_CD55_4171_A9C3AF8B1588].forEach(function(component) { if(component.get('class') != 'ViewerArea') component.set('visible', false); }) }","data":{"textToSpeechConfig":{"stopBackgroundAudio":false,"pitch":1,"rate":1,"speechOnInfoWindow":false,"volume":1,"speechOnQuizQuestion":false,"speechOnTooltip":false},"history":{},"defaultLocale":"ru","locales":{"ru":"locale/ru.txt"},"name":"Player464"},"backgroundColorRatios":[0],"buttonToggleMute":"this.IconButton_4DA280D1_6F64_CD55_41D9_36226B9769C6","defaultMenu":["fullscreen","mute","rotation"],"buttonToggleFullscreen":"this.IconButton_4DA160D1_6F64_CD55_4171_A9C3AF8B1588","gap":10,"width":"100%","propagateClick":false,"height":"100%","children":["this.MainViewer_mobile","this.HTMLText_6BDD8039_64A6_31E4_41D7_D3C38C6C69F2_mobile","this.Container_4DA150D1_6F64_CD55_41DA_A32B6772B821"],"scrollBarMargin":2,"layout":"absolute","hash": "c830c0c1bbd34e8f54a38047cb7940f7cf37ed06cd0b436ff425a4c68a72f219", "definitions": [{"horizontalAlign":"center","backgroundOpacity":0,"data":{"name":"IconButton HS"},"click":"this.MainViewer_mobilePanoramaPlayer.set('hotspotsEnabled', !this.MainViewer_mobilePanoramaPlayer.get('hotspotsEnabled'))","mode":"toggle","width":40,"pressedIconURL":"skin/IconButton_4DA290D1_6F64_CD55_41CF_2A959365D970_pressed.png","height":40,"transparencyActive":true,"maxHeight":40,"maxWidth":40,"iconURL":"skin/IconButton_4DA290D1_6F64_CD55_41CF_2A959365D970.png","minHeight":1,"minWidth":1,"verticalAlign":"middle","id":"IconButton_4DA290D1_6F64_CD55_41CF_2A959365D970","class":"IconButton"},{"thumbnailUrl":"media/photo_C0515489_DEBA_4F1A_41E8_79E893FB309F_t.jpg","image":{"class":"ImageResource","levels":[{"class":"ImageResourceLevel","url":"media/photo_C0515489_DEBA_4F1A_41E8_79E893FB309F.jpg"}]},"label":trans('photo_C0515489_DEBA_4F1A_41E8_79E893FB309F.label'),"duration":5000,"data":{"label":"2023-11-09 21.57.20"},"width":1003,"height":1280,"id":"photo_C0515489_DEBA_4F1A_41E8_79E893FB309F","class":"Photo"},{"class":"PlayList","items":[{"player":"this.MainViewer_mobilePanoramaPlayer","media":"this.panorama_B6CCD64B_A9E8_007C_41DB_F14150D137B9","camera":"this.panorama_B6CCD64B_A9E8_007C_41DB_F14150D137B9_camera","class":"PanoramaPlayListItem","begin":"this.setEndToItemIndex(this.mainPlayList, 0, 1)"},{"player":"this.MainViewer_mobilePanoramaPlayer","media":"this.panorama_B5D40A25_A9E8_0034_41D2_7012D803F752","camera":"this.panorama_B5D40A25_A9E8_0034_41D2_7012D803F752_camera","class":"PanoramaPlayListItem","begin":"this.setEndToItemIndex(this.mainPlayList, 1, 2)"},{"player":"this.MainViewer_mobilePanoramaPlayer","media":"this.panorama_B5EA68A1_A9E8_002C_41D6_376713EFA716","camera":"this.panorama_B5EA68A1_A9E8_002C_41D6_376713EFA716_camera","class":"PanoramaPlayListItem","begin":"this.setEndToItemIndex(this.mainPlayList, 2, 3)"},{"player":"this.MainViewer_mobilePanoramaPlayer","media":"this.panorama_FC18B690_EDCA_3056_41EB_9F7201AAD6D7","camera":"this.panorama_FC18B690_EDCA_3056_41EB_9F7201AAD6D7_camera","class":"PanoramaPlayListItem","begin":"this.setEndToItemIndex(this.mainPlayList, 3, 4)"},{"class":"PhotoAlbumPlayListItem","player":"this.MainViewer_mobilePhotoAlbumPlayer","media":"this.album_C06BE430_DE47_CF0A_41EB_BBAF44D37BCB","begin":"this.setEndToItemIndex(this.mainPlayList, 4, 5)"},{"player":"this.MainViewer_mobilePhotoAlbumPlayer","media":"this.album_C1CFFB79_DEBB_D9FA_41DD_6C43968F05CB","end":"this.trigger('tourEnded')","class":"PhotoAlbumPlayListItem","begin":"this.setEndToItemIndex(this.mainPlayList, 5, 0)"}],"id":"mainPlayList"},{"horizontalAlign":"center","backgroundOpacity":0,"right":"0%","data":{"name":"button menu sup"},"gap":5,"children":["this.IconButton_4DA2C0D1_6F64_CD55_41CD_63BF6E72FB74"],"width":50,"height":50,"scrollBarWidth":5,"layout":"horizontal","scrollBarMargin":1,"minHeight":1,"minWidth":1,"verticalAlign":"middle","id":"Container_4DA2F0D0_6F64_CD53_41D1_0B2D04976FCA","class":"Container","scrollBarColor":"#000000","top":"0%"},{"backgroundOpacity":0,"data":{"name":"-STICKER"},"paddingLeft":5,"width":209,"height":89.5,"propagateClick":false,"scrollBarMargin":2,"minHeight":1,"html":trans('HTMLText_6BDD8039_64A6_31E4_41D7_D3C38C6C69F2_mobile.html',null,{'title':regTextVar('HTMLText_6BDD8039_64A6_31E4_41D7_D3C38C6C69F2_mobile.html', 'title')}),"minWidth":1,"id":"HTMLText_6BDD8039_64A6_31E4_41D7_D3C38C6C69F2_mobile","left":5,"class":"HTMLText","scrollBarColor":"#000000","top":9},{"thumbnailUrl":"media/album_C06BE430_DE47_CF0A_41EB_BBAF44D37BCB_3_t.jpg","image":{"class":"ImageResource","levels":[{"class":"ImageResourceLevel","url":"media/album_C06BE430_DE47_CF0A_41EB_BBAF44D37BCB_3.jpg"}]},"label":trans('album_C06BE430_DE47_CF0A_41EB_BBAF44D37BCB_3.label'),"duration":5000,"data":{"label":"2"},"width":2401,"height":1678,"id":"album_C06BE430_DE47_CF0A_41EB_BBAF44D37BCB_3","class":"Photo"},{"frames":[{"class":"CubicPanoramaFrame","cube":{"class":"ImageResource","levels":[{"tags":["ondemand","mobilevr2gen"],"url":"media/panorama_FC18B690_EDCA_3056_41EB_9F7201AAD6D7_0/{face}/0/{row}_{column}.jpg","class":"TiledImageResourceLevel","colCount":12,"height":1024,"rowCount":2,"width":6144},{"tags":["ondemand","preload"],"url":"media/panorama_FC18B690_EDCA_3056_41EB_9F7201AAD6D7_0/{face}/1/{row}_{column}.jpg","class":"TiledImageResourceLevel","colCount":6,"height":512,"rowCount":1,"width":3072}]},"thumbnailUrl":"media/panorama_FC18B690_EDCA_3056_41EB_9F7201AAD6D7_t.jpg"}],"thumbnailUrl":"media/panorama_FC18B690_EDCA_3056_41EB_9F7201AAD6D7_t.jpg","hfov":360,"label":trans('panorama_FC18B690_EDCA_3056_41EB_9F7201AAD6D7.label'),"data":{"label":"IMG_20231105_114039_00_005"},"hfovMax":130,"id":"panorama_FC18B690_EDCA_3056_41EB_9F7201AAD6D7","class":"Panorama","vfov":180},{"thumbnailUrl":"media/album_C06BE430_DE47_CF0A_41EB_BBAF44D37BCB_1_t.jpg","image":{"class":"ImageResource","levels":[{"class":"ImageResourceLevel","url":"media/album_C06BE430_DE47_CF0A_41EB_BBAF44D37BCB_1.jpg"}]},"label":trans('album_C06BE430_DE47_CF0A_41EB_BBAF44D37BCB_1.label'),"duration":5000,"data":{"label":"1"},"width":2410,"height":1719,"id":"album_C06BE430_DE47_CF0A_41EB_BBAF44D37BCB_1","class":"Photo"},{"autoplay":true,"class":"MediaAudio","data":{"label":"filatov-karas-feat-masha_-_lirika-feat-masha"},"id":"audio_9A943728_B961_915D_41E0_DE10261E50F7","audio":"this.audiores_9B284A09_B963_935F_41D1_4036CC09DA95"},{"horizontalAlign":"center","backgroundOpacity":0,"rollOverIconURL":"skin/IconButton_4DA140D1_6F64_CD55_41D8_248F0134361A_rollover.png","click":"this.openLink(this.translate('LinkBehaviour_B7D888A9_A9E8_003C_41B5_9506F66A0350.source'), '_blank')","data":{"name":"IconButton FB"},"width":40,"height":40,"transparencyActive":true,"maxHeight":40,"maxWidth":40,"iconURL":"skin/IconButton_4DA140D1_6F64_CD55_41D8_248F0134361A.png","minHeight":1,"minWidth":1,"verticalAlign":"middle","id":"IconButton_4DA140D1_6F64_CD55_41D8_248F0134361A","class":"IconButton"},{"frames":[{"class":"CubicPanoramaFrame","cube":{"class":"ImageResource","levels":[{"tags":"ondemand","url":"media/panorama_B5D40A25_A9E8_0034_41D2_7012D803F752_0/{face}/0/{row}_{column}.jpg","class":"TiledImageResourceLevel","colCount":48,"height":4096,"rowCount":8,"width":24576},{"tags":"ondemand","url":"media/panorama_B5D40A25_A9E8_0034_41D2_7012D803F752_0/{face}/1/{row}_{column}.jpg","class":"TiledImageResourceLevel","colCount":24,"height":2048,"rowCount":4,"width":12288},{"tags":"ondemand","url":"media/panorama_B5D40A25_A9E8_0034_41D2_7012D803F752_0/{face}/2/{row}_{column}.jpg","class":"TiledImageResourceLevel","colCount":12,"height":1024,"rowCount":2,"width":6144},{"tags":["ondemand","preload"],"url":"media/panorama_B5D40A25_A9E8_0034_41D2_7012D803F752_0/{face}/3/{row}_{column}.jpg","class":"TiledImageResourceLevel","colCount":6,"height":512,"rowCount":1,"width":3072},{"rowCount":1,"url":"media/panorama_B5D40A25_A9E8_0034_41D2_7012D803F752_0/{face}/vr/0.jpg","class":"TiledImageResourceLevel","colCount":6,"height":1536,"width":9216},{"tags":"mobilevr2gen","url":"media/panorama_B5D40A25_A9E8_0034_41D2_7012D803F752_0/{face}/vr2gen/0.jpg","class":"TiledImageResourceLevel","colCount":6,"height":2048,"rowCount":1,"width":12288}]},"thumbnailUrl":"media/panorama_B5D40A25_A9E8_0034_41D2_7012D803F752_t.jpg"}],"thumbnailUrl":"media/panorama_B5D40A25_A9E8_0034_41D2_7012D803F752_t.jpg","hfov":360,"label":trans('panorama_B5D40A25_A9E8_0034_41D2_7012D803F752.label'),"data":{"label":"IMG_20231105_113652_00_003"},"hfovMax":130,"id":"panorama_B5D40A25_A9E8_0034_41D2_7012D803F752","class":"Panorama","vfov":180},{"id":"panorama_FC18B690_EDCA_3056_41EB_9F7201AAD6D7_camera","class":"PanoramaCamera","enterPointingToHorizon":true,"initialSequence":"this.sequence_B5B6457D_A9E8_0014_41DA_1B25339D2E01","initialPosition":{"yaw":0,"class":"PanoramaCameraPosition","pitch":0}},{"horizontalAlign":"center","backgroundOpacity":0,"data":{"name":"IconButton FULLSCREEN"},"mode":"toggle","width":40,"pressedIconURL":"skin/IconButton_4DA160D1_6F64_CD55_4171_A9C3AF8B1588_pressed.png","height":40,"transparencyActive":true,"maxHeight":40,"maxWidth":40,"iconURL":"skin/IconButton_4DA160D1_6F64_CD55_4171_A9C3AF8B1588.png","minHeight":1,"minWidth":1,"verticalAlign":"middle","id":"IconButton_4DA160D1_6F64_CD55_4171_A9C3AF8B1588","class":"IconButton"},{"thumbnailUrl":"media/album_C1CFFB79_DEBB_D9FA_41DD_6C43968F05CB_t.png","label":trans('album_C1CFFB79_DEBB_D9FA_41DD_6C43968F05CB.label'),"data":{"label":"Photo Album 2023-11-09 21.57.12"},"playList":"this.album_C1CFFB79_DEBB_D9FA_41DD_6C43968F05CB_AlbumPlayList","id":"album_C1CFFB79_DEBB_D9FA_41DD_6C43968F05CB","class":"PhotoAlbum"},{"thumbnailUrl":"media/photo_C366D580_DEBA_490A_41E7_B02572FE2E8D_t.jpg","image":{"class":"ImageResource","levels":[{"class":"ImageResourceLevel","url":"media/photo_C366D580_DEBA_490A_41E7_B02572FE2E8D.jpg"}]},"label":trans('photo_C366D580_DEBA_490A_41E7_B02572FE2E8D.label'),"duration":5000,"data":{"label":"2023-11-09 21.57.32"},"width":722,"height":1200,"id":"photo_C366D580_DEBA_490A_41E7_B02572FE2E8D","class":"Photo"},{"toolTipBackgroundColor":"#F6F6F6","left":0,"playbackBarHeadWidth":6,"progressHeight":10,"data":{"name":"Main Viewer"},"playbackBarHeadShadowBlurRadius":1.5,"playbackBarHeadBorderSize":0,"subtitlesBackgroundColor":"#000000","subtitlesTextShadowOpacity":1,"playbackBarProgressBackgroundColorRatios":[0],"playbackBarBackgroundColorDirection":"vertical","firstTransitionDuration":0,"subtitlesFontColor":"#FFFFFF","width":"100%","playbackBarProgressBorderSize":0,"subtitlesTextShadowVerticalLength":1,"toolTipFontFamily":"Arial","progressBorderSize":0,"height":"100%","playbackBarBackgroundOpacity":1,"playbackBarBorderColor":"#FFFFFF","progressBarBorderRadius":0,"playbackBarRight":0,"subtitlesBottom":50,"playbackBarProgressBorderColor":"#000000","playbackBarBorderRadius":0,"toolTipFontSize":6,"minHeight":25,"progressBorderColor":"#000000","progressBottom":0,"minWidth":50,"progressBarBorderSize":0,"toolTipShadowBlurRadius":1,"toolTipBorderRadius":1,"playbackBarLeft":0,"playbackBarHeadBorderColor":"#000000","playbackBarProgressBorderRadius":0,"id":"MainViewer_mobile","playbackBarProgressBackgroundColor":["#3399FF"],"class":"ViewerArea","playbackBarHeadShadowColor":"#000000","progressBarBackgroundColor":["#3399FF"],"playbackBarHeadHeight":15,"top":0,"toolTipBorderColor":"#767676","playbackBarHeadBorderRadius":0,"playbackBarHeadBackgroundColor":["#111111","#666666"],"playbackBarHeadShadow":true,"toolTipTextShadowColor":"#000000","subtitlesTop":0,"playbackBarBorderSize":0,"surfaceReticleColor":"#FFFFFF","toolTipShadowColor":"#333333","playbackBarBottom":5,"subtitlesTextShadowColor":"#000000","playbackBarHeadBackgroundColorRatios":[0,1],"progressLeft":0,"toolTipPaddingLeft":3,"toolTipTextShadowBlurRadius":1,"subtitlesFontSize":"3vmin","surfaceReticleSelectionColor":"#FFFFFF","progressBorderRadius":0,"subtitlesBackgroundOpacity":0.2,"toolTipPaddingRight":3,"toolTipFontColor":"#606060","propagateClick":false,"playbackBarHeadShadowOpacity":0.7,"subtitlesBorderColor":"#FFFFFF","subtitlesTextShadowHorizontalLength":1,"progressBackgroundColorRatios":[0],"subtitlesFontFamily":"Arial","doubleClickAction":"none","vrPointerSelectionColor":"#FF6600","playbackBarBackgroundColor":["#FFFFFF"],"progressBarBorderColor":"#000000","vrPointerColor":"#FFFFFF","progressRight":0,"subtitlesGap":0,"progressBarBackgroundColorRatios":[0],"vrPointerSelectionTime":2000,"progressBackgroundColor":["#FFFFFF"],"playbackBarHeight":10},{"class":"PhotoAlbumPlayer","viewerArea":"this.MainViewer_mobile","id":"MainViewer_mobilePhotoAlbumPlayer"},{"thumbnailUrl":"media/photo_C00BCF03_DEBA_790E_41C2_6BF21D48B62D_t.jpg","image":{"class":"ImageResource","levels":[{"class":"ImageResourceLevel","url":"media/photo_C00BCF03_DEBA_790E_41C2_6BF21D48B62D.jpg"}]},"label":trans('photo_C00BCF03_DEBA_790E_41C2_6BF21D48B62D.label'),"duration":5000,"data":{"label":"2023-11-09 21.57.45"},"width":601,"height":1200,"id":"photo_C00BCF03_DEBA_790E_41C2_6BF21D48B62D","class":"Photo"},{"horizontalAlign":"center","backgroundOpacity":0,"data":{"name":"IconButton MUTE"},"mode":"toggle","width":40,"pressedIconURL":"skin/IconButton_4DA280D1_6F64_CD55_41D9_36226B9769C6_pressed.png","height":40,"transparencyActive":true,"maxHeight":40,"maxWidth":40,"iconURL":"skin/IconButton_4DA280D1_6F64_CD55_41D9_36226B9769C6.png","minHeight":1,"minWidth":1,"verticalAlign":"middle","id":"IconButton_4DA280D1_6F64_CD55_41D9_36226B9769C6","class":"IconButton"},{"frames":[{"class":"CubicPanoramaFrame","cube":{"class":"ImageResource","levels":[{"tags":"ondemand","url":"media/panorama_B6CCD64B_A9E8_007C_41DB_F14150D137B9_0/{face}/0/{row}_{column}.jpg","class":"TiledImageResourceLevel","colCount":48,"height":4096,"rowCount":8,"width":24576},{"tags":"ondemand","url":"media/panorama_B6CCD64B_A9E8_007C_41DB_F14150D137B9_0/{face}/1/{row}_{column}.jpg","class":"TiledImageResourceLevel","colCount":24,"height":2048,"rowCount":4,"width":12288},{"tags":"ondemand","url":"media/panorama_B6CCD64B_A9E8_007C_41DB_F14150D137B9_0/{face}/2/{row}_{column}.jpg","class":"TiledImageResourceLevel","colCount":12,"height":1024,"rowCount":2,"width":6144},{"tags":["ondemand","preload"],"url":"media/panorama_B6CCD64B_A9E8_007C_41DB_F14150D137B9_0/{face}/3/{row}_{column}.jpg","class":"TiledImageResourceLevel","colCount":6,"height":512,"rowCount":1,"width":3072},{"rowCount":1,"url":"media/panorama_B6CCD64B_A9E8_007C_41DB_F14150D137B9_0/{face}/vr/0.jpg","class":"TiledImageResourceLevel","colCount":6,"height":1536,"width":9216},{"tags":"mobilevr2gen","url":"media/panorama_B6CCD64B_A9E8_007C_41DB_F14150D137B9_0/{face}/vr2gen/0.jpg","class":"TiledImageResourceLevel","colCount":6,"height":2048,"rowCount":1,"width":12288}]},"thumbnailUrl":"media/panorama_B6CCD64B_A9E8_007C_41DB_F14150D137B9_t.jpg"}],"thumbnailUrl":"media/panorama_B6CCD64B_A9E8_007C_41DB_F14150D137B9_t.jpg","hfov":360,"label":trans('panorama_B6CCD64B_A9E8_007C_41DB_F14150D137B9.label'),"overlays":["this.overlay_9AF646BC_B921_F0B5_41E3_17C656939623"],"hfovMax":130,"id":"panorama_B6CCD64B_A9E8_007C_41DB_F14150D137B9","class":"Panorama","vfov":180,"data":{"label":"first pano"}},{"id":"panorama_B6CCD64B_A9E8_007C_41DB_F14150D137B9_camera","class":"PanoramaCamera","enterPointingToHorizon":true,"initialSequence":"this.sequence_B5CFD57D_A9E8_0014_41B1_ABD8B1467949","initialPosition":{"yaw":0,"class":"PanoramaCameraPosition","pitch":0}},{"backgroundOpacity":0,"horizontalAlign":"center","data":{"name":"-button set"},"overflow":"scroll","gap":1,"children":["this.IconButton_4DA2A0D1_6F64_CD55_41AD_586A762C9398","this.IconButton_4DA2B0D1_6F64_CD55_41D6_BFC41C284069","this.IconButton_4DA280D1_6F64_CD55_41D9_36226B9769C6","this.IconButton_4DA290D1_6F64_CD55_41CF_2A959365D970","this.IconButton_4DA160D1_6F64_CD55_4171_A9C3AF8B1588","this.IconButton_4DA140D1_6F64_CD55_41D8_248F0134361A"],"width":"100%","scrollBarWidth":5,"layout":"vertical","scrollBarMargin":1,"minHeight":1,"minWidth":1,"id":"Container_4DA2D0D1_6F64_CD55_41D0_783D7C6FC939","left":"0%","class":"Container","bottom":"0%","scrollBarColor":"#000000","top":47},{"autoplay":true,"class":"MediaAudio","data":{"label":"anet-say_-_slezy-ost-pacanki"},"id":"audio_9B257998_B961_F17D_41E6_AC3997DE1839","audio":"this.audiores_9B876FA7_B961_9153_41CC_85669C6727E2"},{"thumbnailUrl":"media/album_C06BE430_DE47_CF0A_41EB_BBAF44D37BCB_2_t.jpg","image":{"class":"ImageResource","levels":[{"class":"ImageResourceLevel","url":"media/album_C06BE430_DE47_CF0A_41EB_BBAF44D37BCB_2.jpg"}]},"label":trans('album_C06BE430_DE47_CF0A_41EB_BBAF44D37BCB_2.label'),"duration":5000,"data":{"label":"2 (1)"},"width":2401,"height":1678,"id":"album_C06BE430_DE47_CF0A_41EB_BBAF44D37BCB_2","class":"Photo"},{"horizontalAlign":"center","backgroundOpacity":0,"rollOverIconURL":"skin/IconButton_4DA2A0D1_6F64_CD55_41AD_586A762C9398_rollover.png","data":{"name":"IconButton VR"},"width":40,"height":40,"transparencyActive":true,"maxHeight":40,"maxWidth":40,"iconURL":"skin/IconButton_4DA2A0D1_6F64_CD55_41AD_586A762C9398.png","minHeight":1,"minWidth":1,"verticalAlign":"middle","id":"IconButton_4DA2A0D1_6F64_CD55_41AD_586A762C9398","class":"IconButton"},{"arrowKeysAction":"translate","displayPlaybackBar":true,"viewerArea":"this.MainViewer_mobile","buttonCardboardView":"this.IconButton_4DA2A0D1_6F64_CD55_41AD_586A762C9398","mouseControlMode":"drag_rotation","id":"MainViewer_mobilePanoramaPlayer","aaEnabled":true,"class":"PanoramaPlayer","buttonToggleGyroscope":"this.IconButton_4DA2B0D1_6F64_CD55_41D6_BFC41C284069","touchControlMode":"drag_rotation"},{"thumbnailUrl":"media/album_C06BE430_DE47_CF0A_41EB_BBAF44D37BCB_0_t.jpg","image":{"class":"ImageResource","levels":[{"class":"ImageResourceLevel","url":"media/album_C06BE430_DE47_CF0A_41EB_BBAF44D37BCB_0.jpg"}]},"label":trans('album_C06BE430_DE47_CF0A_41EB_BBAF44D37BCB_0.label'),"duration":5000,"data":{"label":"1 (1)"},"width":2410,"height":1719,"id":"album_C06BE430_DE47_CF0A_41EB_BBAF44D37BCB_0","class":"Photo"},{"thumbnailUrl":"media/album_C1CFFB79_DEBB_D9FA_41DD_6C43968F05CB_0_t.jpg","image":{"class":"ImageResource","levels":[{"class":"ImageResourceLevel","url":"media/album_C1CFFB79_DEBB_D9FA_41DD_6C43968F05CB_0.jpg"}]},"label":trans('album_C1CFFB79_DEBB_D9FA_41DD_6C43968F05CB_0.label'),"duration":5000,"data":{"label":"2023-11-09 21.57.12"},"width":648,"height":1022,"id":"album_C1CFFB79_DEBB_D9FA_41DD_6C43968F05CB_0","class":"Photo"},{"backgroundOpacity":0,"right":"0.01%","overflow":"scroll","data":{"name":"--SETTINGS"},"children":["this.Container_4DA2F0D0_6F64_CD53_41D1_0B2D04976FCA","this.Container_4DA2D0D1_6F64_CD55_41D0_783D7C6FC939"],"gap":5,"width":50,"height":"82.169%","scrollBarWidth":5,"layout":"absolute","scrollBarMargin":1,"minHeight":1,"minWidth":1,"id":"Container_4DA150D1_6F64_CD55_41DA_A32B6772B821","class":"Container","scrollBarColor":"#000000","top":"0%"},{"thumbnailUrl":"media/album_C06BE430_DE47_CF0A_41EB_BBAF44D37BCB_t.png","label":trans('album_C06BE430_DE47_CF0A_41EB_BBAF44D37BCB.label'),"data":{"label":"Photo Album 1 (1)"},"playList":"this.album_C06BE430_DE47_CF0A_41EB_BBAF44D37BCB_AlbumPlayList","id":"album_C06BE430_DE47_CF0A_41EB_BBAF44D37BCB","class":"PhotoAlbum"},{"horizontalAlign":"center","backgroundOpacity":0,"data":{"name":"image button menu"},"click":"var visibleFunc = function(component) { this.setComponentVisibility(component, true, 0, null, 'showEffect', false)}.bind(this); var invisibleFunc = function(component) { this.setComponentVisibility(component, false, 0, null, 'hideEffect', false)}.bind(this); if(!this.Container_4DA2D0D1_6F64_CD55_41D0_783D7C6FC939.get('visible')){ visibleFunc(this.Container_4DA2D0D1_6F64_CD55_41D0_783D7C6FC939) } else { invisibleFunc(this.Container_4DA2D0D1_6F64_CD55_41D0_783D7C6FC939) }","mode":"toggle","width":40,"pressedIconURL":"skin/IconButton_4DA2C0D1_6F64_CD55_41CD_63BF6E72FB74_pressed.png","height":40,"transparencyActive":true,"maxHeight":40,"maxWidth":40,"iconURL":"skin/IconButton_4DA2C0D1_6F64_CD55_41CD_63BF6E72FB74.png","minHeight":1,"minWidth":1,"verticalAlign":"middle","id":"IconButton_4DA2C0D1_6F64_CD55_41CD_63BF6E72FB74","class":"IconButton"},{"id":"panorama_B5EA68A1_A9E8_002C_41D6_376713EFA716_camera","class":"PanoramaCamera","enterPointingToHorizon":true,"initialSequence":"this.sequence_B5B6657D_A9E8_0014_41D1_B05B42DD27D8","initialPosition":{"yaw":0,"class":"PanoramaCameraPosition","pitch":0}},{"frames":[{"class":"CubicPanoramaFrame","cube":{"class":"ImageResource","levels":[{"tags":"ondemand","url":"media/panorama_B5EA68A1_A9E8_002C_41D6_376713EFA716_0/{face}/0/{row}_{column}.jpg","class":"TiledImageResourceLevel","colCount":48,"height":4096,"rowCount":8,"width":24576},{"tags":"ondemand","url":"media/panorama_B5EA68A1_A9E8_002C_41D6_376713EFA716_0/{face}/1/{row}_{column}.jpg","class":"TiledImageResourceLevel","colCount":24,"height":2048,"rowCount":4,"width":12288},{"tags":"ondemand","url":"media/panorama_B5EA68A1_A9E8_002C_41D6_376713EFA716_0/{face}/2/{row}_{column}.jpg","class":"TiledImageResourceLevel","colCount":12,"height":1024,"rowCount":2,"width":6144},{"tags":["ondemand","preload"],"url":"media/panorama_B5EA68A1_A9E8_002C_41D6_376713EFA716_0/{face}/3/{row}_{column}.jpg","class":"TiledImageResourceLevel","colCount":6,"height":512,"rowCount":1,"width":3072},{"rowCount":1,"url":"media/panorama_B5EA68A1_A9E8_002C_41D6_376713EFA716_0/{face}/vr/0.jpg","class":"TiledImageResourceLevel","colCount":6,"height":1536,"width":9216},{"tags":"mobilevr2gen","url":"media/panorama_B5EA68A1_A9E8_002C_41D6_376713EFA716_0/{face}/vr2gen/0.jpg","class":"TiledImageResourceLevel","colCount":6,"height":2048,"rowCount":1,"width":12288}]},"thumbnailUrl":"media/panorama_B5EA68A1_A9E8_002C_41D6_376713EFA716_t.jpg"}],"thumbnailUrl":"media/panorama_B5EA68A1_A9E8_002C_41D6_376713EFA716_t.jpg","hfov":360,"label":trans('panorama_B5EA68A1_A9E8_002C_41D6_376713EFA716.label'),"data":{"label":"IMG_20231105_113747_00_004"},"hfovMax":130,"id":"panorama_B5EA68A1_A9E8_002C_41D6_376713EFA716","class":"Panorama","vfov":180},{"id":"panorama_B5D40A25_A9E8_0034_41D2_7012D803F752_camera","class":"PanoramaCamera","enterPointingToHorizon":true,"initialSequence":"this.sequence_B5B7B57D_A9E8_0014_41E1_4BC3F9099FF7","initialPosition":{"yaw":0,"class":"PanoramaCameraPosition","pitch":0}},{"horizontalAlign":"center","backgroundOpacity":0,"data":{"name":"IconButton GYRO"},"mode":"toggle","width":40,"pressedIconURL":"skin/IconButton_4DA2B0D1_6F64_CD55_41D6_BFC41C284069_pressed.png","height":40,"transparencyActive":true,"maxHeight":40,"maxWidth":40,"iconURL":"skin/IconButton_4DA2B0D1_6F64_CD55_41D6_BFC41C284069.png","minHeight":1,"minWidth":1,"verticalAlign":"middle","id":"IconButton_4DA2B0D1_6F64_CD55_41D6_BFC41C284069","class":"IconButton"},{"class":"AudioResource","mp3Url":trans('audiores_9B284A09_B963_935F_41D1_4036CC09DA95.mp3Url'),"id":"audiores_9B284A09_B963_935F_41D1_4036CC09DA95"},{"movements":[{"class":"DistancePanoramaCameraMovement","easing":"cubic_in","yawDelta":18.5,"yawSpeed":7.96},{"class":"DistancePanoramaCameraMovement","yawDelta":323,"yawSpeed":7.96},{"class":"DistancePanoramaCameraMovement","easing":"cubic_out","yawDelta":18.5,"yawSpeed":7.96}],"id":"sequence_B5B6457D_A9E8_0014_41DA_1B25339D2E01","class":"PanoramaCameraSequence"},{"class":"PhotoPlayList","items":[{"class":"PhotoPlayListItem","media":"this.album_C1CFFB79_DEBB_D9FA_41DD_6C43968F05CB_0","camera":{"duration":5000,"targetPosition":{"class":"PhotoCameraPosition","x":0.67,"zoomFactor":1.1,"y":0.49},"scaleMode":"fit_outside","class":"MovementPhotoCamera","initialPosition":{"class":"PhotoCameraPosition"}}},{"class":"PhotoPlayListItem","media":"this.photo_C0515489_DEBA_4F1A_41E8_79E893FB309F","camera":{"duration":5000,"targetPosition":{"class":"PhotoCameraPosition","x":0.37,"zoomFactor":1.1,"y":0.51},"scaleMode":"fit_outside","class":"MovementPhotoCamera","initialPosition":{"class":"PhotoCameraPosition"}}},{"class":"PhotoPlayListItem","media":"this.photo_C366D580_DEBA_490A_41E7_B02572FE2E8D","camera":{"duration":5000,"targetPosition":{"class":"PhotoCameraPosition","x":0.45,"zoomFactor":1.1,"y":0.61},"scaleMode":"fit_outside","class":"MovementPhotoCamera","initialPosition":{"class":"PhotoCameraPosition"}}},{"class":"PhotoPlayListItem","media":"this.photo_C00BCF03_DEBA_790E_41C2_6BF21D48B62D","camera":{"duration":5000,"targetPosition":{"class":"PhotoCameraPosition","x":0.49,"zoomFactor":1.1,"y":0.68},"scaleMode":"fit_outside","class":"MovementPhotoCamera","initialPosition":{"class":"PhotoCameraPosition"}}}],"id":"album_C1CFFB79_DEBB_D9FA_41DD_6C43968F05CB_AlbumPlayList"},{"id":"overlay_9AF646BC_B921_F0B5_41E3_17C656939623","color":"#FFFFFF","class":"RainPanoramaOverlay"},{"movements":[{"class":"DistancePanoramaCameraMovement","easing":"cubic_in","yawDelta":18.5,"yawSpeed":7.96},{"class":"DistancePanoramaCameraMovement","yawDelta":323,"yawSpeed":7.96},{"class":"DistancePanoramaCameraMovement","easing":"cubic_out","yawDelta":18.5,"yawSpeed":7.96}],"id":"sequence_B5CFD57D_A9E8_0014_41B1_ABD8B1467949","class":"PanoramaCameraSequence"},{"class":"AudioResource","mp3Url":trans('audiores_9B876FA7_B961_9153_41CC_85669C6727E2.mp3Url'),"id":"audiores_9B876FA7_B961_9153_41CC_85669C6727E2"},{"class":"PhotoPlayList","items":[{"class":"PhotoPlayListItem","media":"this.album_C06BE430_DE47_CF0A_41EB_BBAF44D37BCB_0","camera":{"duration":5000,"targetPosition":{"class":"PhotoCameraPosition","x":0.69,"zoomFactor":1.1,"y":0.4},"scaleMode":"fit_outside","class":"MovementPhotoCamera","initialPosition":{"class":"PhotoCameraPosition"}}},{"class":"PhotoPlayListItem","media":"this.album_C06BE430_DE47_CF0A_41EB_BBAF44D37BCB_1","camera":{"duration":5000,"targetPosition":{"class":"PhotoCameraPosition","x":0.7,"zoomFactor":1.1,"y":0.47},"scaleMode":"fit_outside","class":"MovementPhotoCamera","initialPosition":{"class":"PhotoCameraPosition"}}},{"class":"PhotoPlayListItem","media":"this.album_C06BE430_DE47_CF0A_41EB_BBAF44D37BCB_2","camera":{"duration":5000,"targetPosition":{"class":"PhotoCameraPosition","x":0.29,"zoomFactor":1.1,"y":0.65},"scaleMode":"fit_outside","class":"MovementPhotoCamera","initialPosition":{"class":"PhotoCameraPosition"}}},{"class":"PhotoPlayListItem","media":"this.album_C06BE430_DE47_CF0A_41EB_BBAF44D37BCB_3","camera":{"duration":5000,"targetPosition":{"class":"PhotoCameraPosition","x":0.64,"zoomFactor":1.1,"y":0.73},"scaleMode":"fit_outside","class":"MovementPhotoCamera","initialPosition":{"class":"PhotoCameraPosition"}}}],"id":"album_C06BE430_DE47_CF0A_41EB_BBAF44D37BCB_AlbumPlayList"},{"movements":[{"class":"DistancePanoramaCameraMovement","easing":"cubic_in","yawDelta":18.5,"yawSpeed":7.96},{"class":"DistancePanoramaCameraMovement","yawDelta":323,"yawSpeed":7.96},{"class":"DistancePanoramaCameraMovement","easing":"cubic_out","yawDelta":18.5,"yawSpeed":7.96}],"id":"sequence_B5B6657D_A9E8_0014_41D1_B05B42DD27D8","class":"PanoramaCameraSequence"},{"movements":[{"class":"DistancePanoramaCameraMovement","easing":"cubic_in","yawDelta":18.5,"yawSpeed":7.96},{"class":"DistancePanoramaCameraMovement","yawDelta":323,"yawSpeed":7.96},{"class":"DistancePanoramaCameraMovement","easing":"cubic_out","yawDelta":18.5,"yawSpeed":7.96}],"id":"sequence_B5B7B57D_A9E8_0014_41E1_4BC3F9099FF7","class":"PanoramaCameraSequence"}],"minHeight":20,"vrPolyfillScale":0.5,"minWidth":20,"backgroundColor":["#FFFFFF"],"id":"rootPlayer","class":"Player","scripts":{"historyGoBack":TDV.Tour.Script.historyGoBack,"pauseGlobalAudio":TDV.Tour.Script.pauseGlobalAudio,"autotriggerAtStart":TDV.Tour.Script.autotriggerAtStart,"setSurfaceSelectionHotspotMode":TDV.Tour.Script.setSurfaceSelectionHotspotMode,"registerKey":TDV.Tour.Script.registerKey,"pauseGlobalAudios":TDV.Tour.Script.pauseGlobalAudios,"changeBackgroundWhilePlay":TDV.Tour.Script.changeBackgroundWhilePlay,"setMediaBehaviour":TDV.Tour.Script.setMediaBehaviour,"getPlayListsWithMedia":TDV.Tour.Script.getPlayListsWithMedia,"setModel3DCameraSpot":TDV.Tour.Script.setModel3DCameraSpot,"stopGlobalAudio":TDV.Tour.Script.stopGlobalAudio,"startModel3DWithCameraSpot":TDV.Tour.Script.startModel3DWithCameraSpot,"changeOpacityWhilePlay":TDV.Tour.Script.changeOpacityWhilePlay,"getAudioByTags":TDV.Tour.Script.getAudioByTags,"getComponentsByTags":TDV.Tour.Script.getComponentsByTags,"setModel3DCameraSequence":TDV.Tour.Script.setModel3DCameraSequence,"stopTextToSpeech":TDV.Tour.Script.stopTextToSpeech,"setMapLocation":TDV.Tour.Script.setMapLocation,"sendAnalyticsData":TDV.Tour.Script.sendAnalyticsData,"playGlobalAudio":TDV.Tour.Script.playGlobalAudio,"getPanoramaOverlaysByTags":TDV.Tour.Script.getPanoramaOverlaysByTags,"changePlayListWithSameSpot":TDV.Tour.Script.changePlayListWithSameSpot,"startPanoramaWithModel":TDV.Tour.Script.startPanoramaWithModel,"toggleTextToSpeechComponent":TDV.Tour.Script.toggleTextToSpeechComponent,"startPanoramaWithCamera":TDV.Tour.Script.startPanoramaWithCamera,"executeAudioActionByTags":TDV.Tour.Script.executeAudioActionByTags,"setStartTimeVideo":TDV.Tour.Script.setStartTimeVideo,"translate":TDV.Tour.Script.translate,"quizSetItemFound":TDV.Tour.Script.quizSetItemFound,"getActivePlayersWithViewer":TDV.Tour.Script.getActivePlayersWithViewer,"setCameraSameSpotAsMedia":TDV.Tour.Script.setCameraSameSpotAsMedia,"quizFinish":TDV.Tour.Script.quizFinish,"textToSpeechComponent":TDV.Tour.Script.textToSpeechComponent,"clone":TDV.Tour.Script.clone,"historyGoForward":TDV.Tour.Script.historyGoForward,"getComponentByName":TDV.Tour.Script.getComponentByName,"unregisterKey":TDV.Tour.Script.unregisterKey,"cloneBindings":TDV.Tour.Script.cloneBindings,"stopMeasurement":TDV.Tour.Script.stopMeasurement,"getMediaByName":TDV.Tour.Script.getMediaByName,"_initItemWithComps":TDV.Tour.Script._initItemWithComps,"getOverlays":TDV.Tour.Script.getOverlays,"_getPlayListsWithViewer":TDV.Tour.Script._getPlayListsWithViewer,"getPlayListWithItem":TDV.Tour.Script.getPlayListWithItem,"init":TDV.Tour.Script.init,"setComponentVisibility":TDV.Tour.Script.setComponentVisibility,"startMeasurement":TDV.Tour.Script.startMeasurement,"createTween":TDV.Tour.Script.createTween,"getPlayListItemIndexByMedia":TDV.Tour.Script.getPlayListItemIndexByMedia,"htmlToPlainText":TDV.Tour.Script.htmlToPlainText,"quizStart":TDV.Tour.Script.quizStart,"setComponentsVisibilityByTags":TDV.Tour.Script.setComponentsVisibilityByTags,"setObjectsVisibility":TDV.Tour.Script.setObjectsVisibility,"quizShowTimeout":TDV.Tour.Script.quizShowTimeout,"setStartTimeVideoSync":TDV.Tour.Script.setStartTimeVideoSync,"loadFromCurrentMediaPlayList":TDV.Tour.Script.loadFromCurrentMediaPlayList,"existsKey":TDV.Tour.Script.existsKey,"takeScreenshot":TDV.Tour.Script.takeScreenshot,"executeJS":TDV.Tour.Script.executeJS,"quizResumeTimer":TDV.Tour.Script.quizResumeTimer,"getMediaByTags":TDV.Tour.Script.getMediaByTags,"quizPauseTimer":TDV.Tour.Script.quizPauseTimer,"setDirectionalPanoramaAudio":TDV.Tour.Script.setDirectionalPanoramaAudio,"getPanoramaOverlayByName":TDV.Tour.Script.getPanoramaOverlayByName,"cleanAllMeasurements":TDV.Tour.Script.cleanAllMeasurements,"quizShowScore":TDV.Tour.Script.quizShowScore,"setLocale":TDV.Tour.Script.setLocale,"getQuizTotalObjectiveProperty":TDV.Tour.Script.getQuizTotalObjectiveProperty,"downloadFile":TDV.Tour.Script.downloadFile,"_initTTSTooltips":TDV.Tour.Script._initTTSTooltips,"setObjectsVisibilityByID":TDV.Tour.Script.setObjectsVisibilityByID,"skip3DTransitionOnce":TDV.Tour.Script.skip3DTransitionOnce,"updateDeepLink":TDV.Tour.Script.updateDeepLink,"setObjectsVisibilityByTags":TDV.Tour.Script.setObjectsVisibilityByTags,"initAnalytics":TDV.Tour.Script.initAnalytics,"getCurrentPlayerWithMedia":TDV.Tour.Script.getCurrentPlayerWithMedia,"triggerOverlay":TDV.Tour.Script.triggerOverlay,"textToSpeech":TDV.Tour.Script.textToSpeech,"toggleMeasurement":TDV.Tour.Script.toggleMeasurement,"executeAudioAction":TDV.Tour.Script.executeAudioAction,"clonePanoramaCamera":TDV.Tour.Script.clonePanoramaCamera,"setEndToItemIndex":TDV.Tour.Script.setEndToItemIndex,"setOverlayBehaviour":TDV.Tour.Script.setOverlayBehaviour,"shareSocial":TDV.Tour.Script.shareSocial,"showComponentsWhileMouseOver":TDV.Tour.Script.showComponentsWhileMouseOver,"getMediaHeight":TDV.Tour.Script.getMediaHeight,"getActiveMediaWithViewer":TDV.Tour.Script.getActiveMediaWithViewer,"fixTogglePlayPauseButton":TDV.Tour.Script.fixTogglePlayPauseButton,"assignObjRecursively":TDV.Tour.Script.assignObjRecursively,"copyObjRecursively":TDV.Tour.Script.copyObjRecursively,"getFirstPlayListWithMedia":TDV.Tour.Script.getFirstPlayListWithMedia,"cleanSelectedMeasurements":TDV.Tour.Script.cleanSelectedMeasurements,"copyToClipboard":TDV.Tour.Script.copyToClipboard,"getCurrentPlayers":TDV.Tour.Script.getCurrentPlayers,"getOverlaysByGroupname":TDV.Tour.Script.getOverlaysByGroupname,"updateVideoCues":TDV.Tour.Script.updateVideoCues,"resumePlayers":TDV.Tour.Script.resumePlayers,"initOverlayGroupRotationOnClick":TDV.Tour.Script.initOverlayGroupRotationOnClick,"_initSplitViewer":TDV.Tour.Script._initSplitViewer,"setOverlaysVisibility":TDV.Tour.Script.setOverlaysVisibility,"showPopupMedia":TDV.Tour.Script.showPopupMedia,"initQuiz":TDV.Tour.Script.initQuiz,"openEmbeddedPDF":TDV.Tour.Script.openEmbeddedPDF,"getMediaFromPlayer":TDV.Tour.Script.getMediaFromPlayer,"getOverlaysByTags":TDV.Tour.Script.getOverlaysByTags,"getMediaWidth":TDV.Tour.Script.getMediaWidth,"getKey":TDV.Tour.Script.getKey,"isCardboardViewMode":TDV.Tour.Script.isCardboardViewMode,"resumeGlobalAudios":TDV.Tour.Script.resumeGlobalAudios,"updateMediaLabelFromPlayList":TDV.Tour.Script.updateMediaLabelFromPlayList,"getPlayListItems":TDV.Tour.Script.getPlayListItems,"playAudioList":TDV.Tour.Script.playAudioList,"getRootOverlay":TDV.Tour.Script.getRootOverlay,"showPopupImage":TDV.Tour.Script.showPopupImage,"getPlayListItemByMedia":TDV.Tour.Script.getPlayListItemByMedia,"setMeasurementUnits":TDV.Tour.Script.setMeasurementUnits,"_initTwinsViewer":TDV.Tour.Script._initTwinsViewer,"toggleMeasurementsVisibility":TDV.Tour.Script.toggleMeasurementsVisibility,"setMeasurementsVisibility":TDV.Tour.Script.setMeasurementsVisibility,"setValue":TDV.Tour.Script.setValue,"getStateTextToSpeech":TDV.Tour.Script.getStateTextToSpeech,"showPopupPanoramaOverlay":TDV.Tour.Script.showPopupPanoramaOverlay,"getMainViewer":TDV.Tour.Script.getMainViewer,"visibleComponentsIfPlayerFlagEnabled":TDV.Tour.Script.visibleComponentsIfPlayerFlagEnabled,"stopAndGoCamera":TDV.Tour.Script.stopAndGoCamera,"setOverlaysVisibilityByTags":TDV.Tour.Script.setOverlaysVisibilityByTags,"quizShowQuestion":TDV.Tour.Script.quizShowQuestion,"pauseCurrentPlayers":TDV.Tour.Script.pauseCurrentPlayers,"showPopupPanoramaVideoOverlay":TDV.Tour.Script.showPopupPanoramaVideoOverlay,"syncPlaylists":TDV.Tour.Script.syncPlaylists,"restartTourWithoutInteraction":TDV.Tour.Script.restartTourWithoutInteraction,"_getObjectsByTags":TDV.Tour.Script._getObjectsByTags,"showWindow":TDV.Tour.Script.showWindow,"pauseGlobalAudiosWhilePlayItem":TDV.Tour.Script.pauseGlobalAudiosWhilePlayItem,"setMainMediaByIndex":TDV.Tour.Script.setMainMediaByIndex,"setPanoramaCameraWithCurrentSpot":TDV.Tour.Script.setPanoramaCameraWithCurrentSpot,"getActivePlayerWithViewer":TDV.Tour.Script.getActivePlayerWithViewer,"getModel3DInnerObject":TDV.Tour.Script.getModel3DInnerObject,"setMainMediaByName":TDV.Tour.Script.setMainMediaByName,"setPanoramaCameraWithSpot":TDV.Tour.Script.setPanoramaCameraWithSpot,"mixObject":TDV.Tour.Script.mixObject,"keepCompVisible":TDV.Tour.Script.keepCompVisible,"executeFunctionWhenChange":TDV.Tour.Script.executeFunctionWhenChange,"playGlobalAudioWhilePlay":TDV.Tour.Script.playGlobalAudioWhilePlay,"getGlobalAudio":TDV.Tour.Script.getGlobalAudio,"isPanorama":TDV.Tour.Script.isPanorama,"openLink":TDV.Tour.Script.openLink,"getPixels":TDV.Tour.Script.getPixels,"stopGlobalAudios":TDV.Tour.Script.stopGlobalAudios,"playGlobalAudioWhilePlayActiveMedia":TDV.Tour.Script.playGlobalAudioWhilePlayActiveMedia,"setPlayListSelectedIndex":TDV.Tour.Script.setPlayListSelectedIndex},"scrollBarColor":"#000000"};
if (script['data'] == undefined)
    script['data'] = {};
script['data']['translateObjs'] = translateObjs;
script['data']['createQuizConfig'] = function () {
    var ad = {};
    this['get']('data')['translateObjs'] = translateObjs;
    return ad;
};
TDV['PlayerAPI']['defineScript'](script);
//# sourceMappingURL=script_device_v2023.1.17.js.map
})();
//Generated with v2023.1.17, Sun Nov 26 2023