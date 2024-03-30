        //初始化地图
        $(document).ready(function () {
            // const randomIndex = Math.floor(Math.random() * PHOTOS.length);   //随机刷新首图
            // const randomPhotoUrl = PHOTOS[randomIndex];  
            // console.log(randomPhotoUrl)
            // const response = await fetch(randomPhotoUrl);
            // console.log(response)  
            // const photoJson = await response.json();          
            // // 提取随机照片的坐标和缩放级别  
            // const center = [photoJson.lat, photoJson.lng];  
            // const zoom = photoJson.zoom;  

            const randomIndex = Math.floor(Math.random() * data.length);   //从data.js里面随机刷新首图  
            const randomData = data[randomIndex];               
            // 提取随机数据的坐标和缩放级别    
            const center = [randomData.lat, randomData.lng];    
            const zoom = randomData.zoom;
          
            var map = L.map("map", {
                tap: false, // ref https://github.com/Leaflet/Leaflet/issues/7255  解决Safari定位弹窗
                fullscreenControl: true,
                fullscreenControlOptions: {
                    position: 'topright',
                    title: "全屏",
                    titleCancel: '退出全屏',
                },
                attributionControl: false,  
                // center: [39.91636535542483, 116.39088304110385],  
                // zoom: 12, 
                center: center,  
                zoom: zoom,    
                minZoom: 2,  
                zoomControl: false,
                measureControl: true,

            });

            // // 弹窗诗词
            // jinrishici.load(function (result) {
            // var popupContent = result.data.content;
            // var popup = L.popup().setContent(popupContent);
            // L.popup().setLatLng(center).setContent(popupContent).openOn(map);
            // });


            //天地图相关数据
            var normalm = L.tileLayer.chinaProvider('TianDiTu.Normal.Map', {detectRetina:true}),
                normala = L.tileLayer.chinaProvider('TianDiTu.Normal.Annotion'),
                imgm = L.tileLayer.chinaProvider('TianDiTu.Satellite.Map', {detectRetina:true}),
                imga = L.tileLayer.chinaProvider('TianDiTu.Satellite.Annotion'),
                dixingm = L.tileLayer.chinaProvider('TianDiTu.Terrain.Map', {detectRetina:true}),
                dixinga = L.tileLayer.chinaProvider('TianDiTu.Terrain.Annotion');
            var normaltiandi = L.layerGroup([normalm, normala]),
                image = L.layerGroup([imgm, imga]),
                dixing = L.layerGroup([dixingm, dixinga]);

            //Geoq相关数据
            var normalm1 = L.tileLayer.chinaProvider('Geoq.Normal.Map', {
                maxZoom: 18,
                minZoom: 5
            });
            var normalm2 = L.tileLayer.chinaProvider('Geoq.Normal.PurplishBlue', {
                maxZoom: 18,
                minZoom: 5
            });
            var normalm3 = L.tileLayer.chinaProvider('Geoq.Normal.Gray', {
                maxZoom: 18,
                minZoom: 5
            });
            var normalm4 = L.tileLayer.chinaProvider('Geoq.Normal.Warm', {
                maxZoom: 18,
                minZoom: 5
            });
            var normalm5 = L.tileLayer.chinaProvider('Geoq.Theme.Hydro', {
                maxZoom: 18,
                minZoom: 5
            });
            var normal = L.layerGroup([normalm1, normalm2, normalm3, normalm4, normalm5]);

            var time2014 = L.tileLayer.chinaProvider('Timeline.time2014.Map', {maxZoom: 20, detectRetina:true});
            var time2015 = L.tileLayer.chinaProvider('Timeline.time2015.Map', {maxZoom: 20, detectRetina:true});
            var time2016 = L.tileLayer.chinaProvider('Timeline.time2016.Map', {maxZoom: 20, detectRetina:true});
            var time2017 = L.tileLayer.chinaProvider('Timeline.time2017.Map', {maxZoom: 20, detectRetina:true});
            var time2018 = L.tileLayer.chinaProvider('Timeline.time2018.Map', {maxZoom: 20, detectRetina:true});
            var time2019 = L.tileLayer.chinaProvider('Timeline.time2019.Map', {maxZoom: 20, detectRetina:true});
            var time2020 = L.tileLayer.chinaProvider('Timeline.time2020.Map', {maxZoom: 20, detectRetina:true});
            var time2021 = L.tileLayer.chinaProvider('Timeline.time2021.Map', {maxZoom: 20, detectRetina:true});
            var time2022 = L.tileLayer.chinaProvider('Timeline.time2022.Map', {maxZoom: 20, detectRetina:true});
            var time2023 = L.tileLayer.chinaProvider('Timeline.time2023.Map', {maxZoom: 20, detectRetina:true});
            var time2024 = L.tileLayer.chinaProvider('Timeline.time2024.Map', {maxZoom: 20, detectRetina:true});

            var JLSatellite = L.tileLayer.chinaProvider('jilin.Satellite.Map', {detectRetina:true});
            var JLAnnotion = L.tileLayer.chinaProvider('jilin.Satellite.Annotion',);
            var JLS = L.layerGroup([JLSatellite, JLAnnotion]);

            var GDMap = L.tileLayer.chinaProvider('GaoDe.Normal.Map', {maxZoom: 18});
            var GDSatellite = L.tileLayer.chinaProvider('GaoDe.Satellite.Map', {maxZoom: 18, detectRetina:true});
            var GDAnnotion =  L.tileLayer.chinaProvider('GaoDe.Satellite.Annotion', {maxZoom: 18,});
            var GDSA = L.layerGroup([GDSatellite, GDAnnotion]);

            var TXMap = L.tileLayer.chinaProvider('Tencent.Normal.Map', {maxZoom: 18, minZoom: 5});
            var TXSatellite = L.tileLayer.chinaProvider('Tencent.Satellite.Map', {maxZoom: 18, minZoom: 5, detectRetina:true});
            var TXTerrain = L.tileLayer.chinaProvider('Tencent.Terrain.Map', {maxZoom: 15, minZoom: 5, detectRetina:true});
            var GDAnnotion =  L.tileLayer.chinaProvider('GaoDe.Satellite.Annotion', {maxZoom: 18,});
            var TXSA = L.layerGroup([TXSatellite, GDAnnotion]);

            var ArcGISMap = L.tileLayer.chinaProvider('ArcGIS.Satellite.Map', {maxZoom: 21, minZoom: 1, detectRetina:true});
            var ArcGISAnnotion =  L.tileLayer.chinaProvider('ArcGIS.Satellite.Annotion', {maxZoom: 18,});
            var ArcGISSA = L.layerGroup([ArcGISMap, ArcGISAnnotion]);

            var osmb = new OSMBuildings(map).load('https://api.allorigins.win/raw?url=https://{s}.data.osmbuildings.org/0.2/anonymous/tile/{z}/{x}/{y}.json');
            // var osmb = new OSMBuildings(map).date(new Date(2024, 3, 23, 8, 0)).load('https://api.fungit.org/warp-proxy/https://{s}.data.osmbuildings.org/0.2/anonymous/tile/{z}/{x}/{y}.json');             

            //控制地图底图
            var baseLayers = {
                '太空夜景(需缩小)': L.tileLayer('https://map1.vis.earthdata.nasa.gov/wmts-webmerc/VIIRS_CityLights_2012/default/{time}/{tilematrixset}{maxZoom}/{z}/{y}/{x}.{format}', {
                    bounds: [[-85.0511287776, -179.999999975], [85.0511287776, 179.999999975]],
                    minZoom: 1,
                    maxZoom: 8,
                    format: 'jpg',
                    time: '',
                    tilematrixset: 'GoogleMapsCompatible_Level'
                }),
                吉林一号: JLS,
                Google地图: L.tileLayer.chinaProvider('Google.Normal.Map', {maxZoom: 20}),
                Google影像: L.tileLayer.chinaProvider('Google.Satellite.Map', {maxZoom: 20, detectRetina:true}).addTo(map),
                'Google影像+标注': L.tileLayer.chinaProvider('Google.Satellite.Annotion', {maxZoom: 20, detectRetina:true}),

                "ArcGIS影像+标注": ArcGISSA,

                高德地图: GDMap,
                高德影像: GDSatellite,
                '高德影像+标注': GDSA,                

                腾讯地图: TXMap,
                腾讯影像: TXSatellite,
                '腾讯影像+标注': TXSA,
                腾讯地形: TXTerrain,


                天地图: normaltiandi,
                天地图影像: imgm,
                '天地图影像+标注': image,
                天地图地形: dixing,

                "GeoQ 地图": normalm1,
                // "GeoQ 午夜蓝": normalm2,
                // "GeoQ 灰色": normalm3,
                // "GeoQ 暖色": normalm4,
                "GeoQ 水系": normalm5,

                // "时光机-2014年影像": time2014,
                // "时光机-2015年影像": time2015,
                // "时光机-2016年影像": time2016,
                // "时光机-2017年影像": time2017,
                // "时光机-2018年影像": time2018,
                // "时光机-2019年影像": time2019,
                // "时光机-2020年影像": time2020,
                // "时光机-2021年影像": time2021,
                // "时光机-2022年影像": time2022,
                // "时光机-2023年影像": time2023,
                // "时光机-2024年影像": time2024,

                // OSM地图: L.tileLayer(
                //     "//{s}.tile.osm.org/{z}/{x}/{y}.png",
                //     { subdomains: ['a', 'b', 'c'] }
                // ),
            };

            //添加文本块
            L.control.attribution({
                position:'topleft',
                prefix:'<a href="https://map.quickso.cn" target="_blank">快点地图</a>',    
            }).addTo(map);   

            //添加左上角坐标（可自定义输入坐标）
            L.control.coordinates({position: 'bottomleft'}).addTo(map);   

            //添加转动小地球
            var miniMap = new L.Control.GlobeMiniMap({      
              // uncomment to assign colors
              land: "#94cf6a",
              water: "#0066cc",
              // marker: "#e44131",
              topojsonSrc : 'https://jsd.onmicrosoft.cn/gh/muzihuaner/test00/leaflet/world.json',
            }).addTo(map);

            // // 添加geoman  
            // map.pm.addControls({  
            //     position: 'topright',  
            //     drawCircleMarker: false,
            //     // rotateMode: false,
            // });
            // map.pm.setLang('zh');

            if (window.matchMedia("(min-width: 768px)").matches) { // 假设768px及以上宽度为PC端
                map.pm.addControls({
                    position: 'topright',
                    drawCircleMarker: false,
                    // rotateMode: false, // 如果不需要旋转模式
                });
                map.pm.setLang('zh');
            }


            var overlayLayers1 = {
                "3D模式(城市)": osmb,
            }

            L.control.layers(baseLayers, overlayLayers1, { position: "topleft" }, { collapsed: false }).addTo(map);
            map.removeLayer(overlayLayers1["3D模式(城市)"]);


            // 添加搜索框
            map.addControl( new L.Control.Search({    
                url: 'https://search.huawei.com.tw/search?format=json&q={s}',
                jsonpParam: 'json_callback',
                propertyName: 'display_name',
                propertyLoc: ['lat','lon'],
                // marker: L.circleMarker([0,0],{radius:30}),
                marker: {icon: true, animate: false},
                autoCollapse: true,
                autoType: false,
                minLength: 2
            }) );


            //自动定位插件
            // L.geolet({
            //     position: 'topleft' ,
            //     geoOptions: { enableHighAccuracy: true, maximumAge: 30000, timeout: 27000 },
            //     title: '自动定位',
            //     autoPan: true,
            // }).addTo(map);
            L.control.locate({
                locateOptions: {      
                    enableHighAccuracy: true
                },
                strings: {
                    title: "自动定位",
                    metersUnit: "米",
                    feetUnit: "英尺",
                    popup: "定位误差{distance}{unit}",
                    outsideMapBoundsMsg: "您似乎位于地图边界之外",
                    showCompass: true,
                    drawMarker: true,
                    metric: true,
                },
            }).addTo(map);

            //添加比例尺
            var scale = L.control.scale({ imperial: false, metric: true, position: 'bottomleft',});   
            map.addControl(scale);

            // 创建空间站实时坐标插件
            L.Control.ISSLocator = L.Control.extend({
                options: {
                    position: 'topleft',  // 设置插件在左上角
                    title: '空间站实时坐标',
                },
                onAdd: function (map) {
                    // 创建按钮
                    // var container = L.DomUtil.create('div', 'leaflet-bar leaflet-control leaflet-control-custom iss-locator-button'); // 使用div代替button元素
                    var container = L.DomUtil.create('div', 'leaflet-bar iss-locator-button'); // 使用div代替button元素
                    this.link = L.DomUtil.create('a', container);
                    this.link.title = this.options.title;

                    // 创建图标元素
                    var icon = L.DomUtil.create('img', 'icon-image');
                    icon.src = 'https://jsd.onmicrosoft.cn/gh/muzihuaner/test00/leaflet/images/iss.png'; // 替换为你本地 PNG 图片的路径
                    icon.alt = '空间站坐标';
                    icon.title = '空间站实时坐标'

                    // 按钮点击事件
                    container.onclick = function () {
                        // 获取ISS位置
                        fetchISSLocation();
                    };

                    // 将图标添加到按钮中
                    container.appendChild(icon);

                    return container;
                },
            });

            L.control.issLocator = function (opts) {
                return new L.Control.ISSLocator(opts);
            }

            L.control.issLocator().addTo(map);

            var issMarker; // 先声明issMarker变量

            // 获取ISS位置并在地图上显示  
            function fetchISSLocation() {  
                // 使用API获取ISS位置数据  
                fetch('https://wheretheiss.huawei.com.tw/v1/satellites/25544')  
                    .then(response => response.json())  
                    .then(data => {  
                        // 获取经纬度  
                        var lat = data.latitude;  
                        var lon = data.longitude;  
              
                        // 跳转到ISS位置  
                        map.setView([lat, lon], 3);  
              
                        // 在地图上添加ISS图标  
                        var issIcon = L.icon({  
                            iconUrl: 'https://jsd.onmicrosoft.cn/gh/muzihuaner/test00/leaflet/images/iss2.png',  
                            iconSize: [48, 48],  
                            iconAnchor: [24, 24],  
                        });  
              
                        // 检查是否已经有之前的标记  
                        if (issMarker) {  
                            map.removeLayer(issMarker); // 如果有，先移除之前的标记  
                        }  
              
                        // 创建弹出窗口的HTML内容，包括视频播放的iframe<div style="text-align: center; font-size: 14px;">空间站实时坐标：纬度 ${lat.toFixed(2)}, 经度 ${lon.toFixed(2)}</div>  
                        var popupContent = `  
                            <iframe style="width: 300px;height: 172px;" src="https://www.bilibili.com/blackboard/live/live-activity-player.html?cid=9196015&quality=0" frameborder="no"    framespacing="0" scrolling="no" allow="autoplay; encrypted-media" allowfullscreen="true"></iframe>  
                        `;  
              
                        // 添加新的ISS标记，并绑定弹出窗口  
                        issMarker = L.marker([lat, lon], { icon: issIcon })  
                            .bindPopup(popupContent, { maxWidth: 1700 }) // 设置弹出窗口的最大宽度  
                            .addTo(map)  
                            .openPopup();  
                    })  
                    .catch(error => console.error('获取 ISS 位置时发生错误:', error));  
            }


            //设置多边形和矩形编辑按钮并添加截图功能
            Url = L.TileLayer.ChinaProvider.providers.Google.Satellite.Map;
            L.drawLocal.draw.toolbar.buttons.polygon = '多边形截图';
            L.drawLocal.draw.toolbar.buttons.rectangle = '矩形截图';
            L.drawLocal.draw.toolbar.actions.text = '取消';
            L.drawLocal.draw.toolbar.finish.text = '结束';
            L.drawLocal.draw.toolbar.undo.text = '删除上一个点';
            L.drawLocal.draw.handlers.polygon.tooltip.start = '点击开始截图';
            L.drawLocal.draw.handlers.polygon.tooltip.cont = '点击继续截图';
            L.drawLocal.draw.handlers.polygon.tooltip.end = '点击第一个点以闭合截图';
            L.drawLocal.draw.handlers.rectangle.tooltip.start = '点击并拖动';
            L.drawLocal.draw.handlers.simpleshape.tooltip.end = '松开鼠标完成截图';
            var drawControl = new L.Control.Draw({
                position: 'topright',
                draw: {
                    marker: false,
                    polyline: false,
                    circle: false,
                    circlemarker: false,
                    polygon: {
                        allowIntersection: false,
                        drawError: {
                            color: '#b00b00',
                            timeout: 1000
                        },
                        shapeOptions: {
                            color: '#bada55'
                        }
                    }
                },
                edit: false
            });
            map.addControl(drawControl);
            map.on('draw:created', function (e) {
                L.TileLayer.boundaryCanvas(Url, {
                    crossOrigin: true,
                    boundary: e.layer.toGeoJSON(),
                }).addTo(map);
                var node1 = document.querySelector("#map > div.leaflet-pane.leaflet-map-pane > div.leaflet-pane.leaflet-tile-pane > div:nth-child(1)");
                node1.style.display = "none";
                var node = document.querySelector("#map > div.leaflet-pane.leaflet-map-pane > div.leaflet-pane.leaflet-tile-pane"); // 更改为地图渲染的实际容器
                console.log(node)
                // 使用dom-to-image将DOM元素转换为PNG图片
                // 设置延时一秒后执行 domtoimage.toBlob 操作
                setTimeout(function() {
                    domtoimage.toBlob(node)
                        .then(function(blob) {
                            // 使用FileSaver保存生成的图片文件
                            window.saveAs(blob, '_img.png');
                        })
                        .catch(function(error) {
                            console.error('Error occurred:', error);
                        });
                }, 500); // 1000 毫秒 = 1 秒
            });

          


         

            // 创建实时地球照片插件
            var realearth = L.control({position: 'topleft'}); // 设置位置  
            realearth.onAdd = function () {    
                var div = L.DomUtil.create('div', 'leaflet-bar leaflet-control leaflet-control-custom shiguangji');    
                var img = L.DomUtil.create('img', 'shiguangji', div);  // 创建图标元素  
                img.src = 'https://jsd.onmicrosoft.cn/gh/muzihuaner/test00/leaflet/images/earth.svg'; // 替换为您的图标URL  
                img.alt = '实时卫星地球'; // 可选的，为屏幕阅读器提供信息
                img.title = '实时卫星地球';  
                img.onclick = function () {
                    window.open('https://earth.quickso.cn', '_blank');
                };  // 设置点击事件处理程序  
                return div;    
            };
            realearth.addTo(map); // 将控件添加到地图上

            // 创建截屏控件  
            var camera = L.control({position: 'topleft'}); // 设置位置为左上角  
            camera.onAdd = function () {    
                var div = L.DomUtil.create('div', 'leaflet-bar leaflet-control leaflet-control-custom shiguangji');    
                var img = L.DomUtil.create('img', 'shiguangji', div);  // 创建图标元素  
                img.src = 'https://jsd.onmicrosoft.cn/gh/muzihuaner/test00/leaflet/images/camera.svg'; // 替换为您的图标URL  
                img.alt = '屏幕截图'; // 可选的，为屏幕阅读器提供信息
                img.title = '屏幕截图';  
                img.onclick = function () {
                    // 获取要转换为图片的DOM元素
                    var node = document.querySelector('#map .leaflet-map-pane'); // 更改为地图渲染的实际容器

                    // 使用dom-to-image将DOM元素转换为PNG图片
                    domtoimage.toBlob(node)
                        .then(function(blob) {
                            // 使用FileSaver保存生成的图片文件
                            window.saveAs(blob, 'img.png');
                        })
                        .catch(function(error) {
                            console.error('Error occurred:', error);
                        });
                };  // 设置点击事件处理程序  
                return div;    
            };
            camera.addTo(map); // 将控件添加到地图上

            // 创建跳转百度地图菜单栏控件  
            var menuBar = L.control({position: 'topleft'}); // 设置位置为左下角  
            menuBar.onAdd = function () {    
                var div = L.DomUtil.create('div', 'leaflet-bar leaflet-control leaflet-control-custom menuBar');    
                var img = L.DomUtil.create('img', 'menuIcon', div);  // 创建图标元素  
                img.src = 'https://jsd.onmicrosoft.cn/gh/muzihuaner/test00/leaflet/images/baidu.png'; // 替换为您的图标URL  
                img.alt = '百度地图'; // 可选的，为屏幕阅读器提供信息
                img.title = '切换百度地图';  
                img.onclick = function () { showBaiduMap(); };  // 设置点击事件处理程序  
                return div;    
            }; 
            menuBar.addTo(map); // 将控件添加到地图上

            // // 创建商店控件  
            // var shop = L.control({position: 'topright'}); // 设置位置为左上角  
            // shop.onAdd = function () {    
            //     var div = L.DomUtil.create('div', 'leaflet-bar leaflet-control leaflet-control-custom shiguangji');    
            //     var img = L.DomUtil.create('img', 'shiguangji', div);  // 创建图标元素  
            //     img.src = 'https://jsd.onmicrosoft.cn/gh/muzihuaner/test00/leaflet/images/shop.svg'; // 替换为您的图标URL  
            //     img.alt = '母婴用品'; // 可选的，为屏幕阅读器提供信息
            //     img.title = '生命起源';  
            //     img.onclick = function () {
            //         window.open('https://mobile.yangkeduo.com/goods.html?goods_id=281797010145&refer_page_app=mms&refer_page_name=mms_goods_list_new&refer_page_id=10357_1708423689372_2107831992', '_blank');
            //     };  // 设置点击事件处理程序  
            //     return div;    
            // };
            // shop.addTo(map); // 将控件添加到地图上

            // // 创建logo控件  
            // var logoControl = L.control({position: 'bottomright'});  
            // logoControl.onAdd = function (map) {  
            //     // 创建一个div元素用于包含logo图片  
            //     var container = L.DomUtil.create('div', 'leaflet-control-logo'); 
            //     container.style.marginRight = '-40px';
            //     container.style.marginBottom = '-50px';  
            //     var img = L.DomUtil.create('img', container);  
            //     img.src = 'https://jsd.onmicrosoft.cn/gh/muzihuaner/test00/leaflet/images/mars.svg';
            //     img.alt = '卫星遥感, 卫星地图';
            //     img.title = '华纬遥感'; 
            //     img.style.width = '150px';
            //     img.style.height = '150px';
            //     img.onclick = function () {
            //         window.open('https://huawei.com.tw', '_blank');
            //     };  
            //     container.appendChild(img);  
            //     return container;  
            // };  
            // logoControl.addTo(map);


            // //获取点击事件
            // map.on('click', function(e) {
            //     var latlng = e.latlng;
            //     var geocoder = new google.maps.Geocoder();
            //     geocoder.geocode({'location': {lat: latlng.lat, lng: latlng.lng}}, function(results, status) {
            //         if (status === 'OK') {
            //             if (results[0]) {
            //                 var placeId = results[0].place_id;
            //                 var service = new google.maps.places.PlacesService(document.createElement('div'));
            //                 service.getDetails({placeId: placeId}, function(place, status) {
            //                     if (status === google.maps.places.PlacesServiceStatus.OK) {
            //                         var data = place;
            //                         // console.log(data);
            //                         var photos = place.photos;
            //                         // var comments = place.reviews;
            //                         if (photos && photos.length > 0) {
            //                             var photoUrl = photos[0].getUrl({maxWidth: 400, maxHeight: 400});

            //                             url = photoUrl.replace('maps.lvtanlian.com', 'redirect.huawei.com.tw');

            //                             var realPhotoUrl;

            //                             var content = '<div class="popup-content"><strong>' + results[0].formatted_address + '</strong><br><img class="popup-image" src="' + url + '"></div>';

            //                             var popup = L.popup()
            //                                 .setLatLng(latlng)
            //                                 .setContent(content)
            //                                 .openOn(map);

            //                             // Handle click on image
            //                             var popupImage = popup.getElement().querySelector('.popup-image');
            //                             popupImage.addEventListener('click', function() {
            //                                 var largePopup = L.popup({maxWidth: 600, minWidth: 400, autoPan: false})
            //                                     .setLatLng(latlng)
            //                                     .setContent('<img src="' + url + '" style="max-width: 100%; height: auto;">')
            //                                     .openOn(map);
            //                             });
            //                         } else {
            //                             L.popup()
            //                                 .setLatLng(latlng)
            //                                 .setContent(results[0].formatted_address)
            //                                 .openOn(map);
            //                         }
            //                     } else {
            //                         window.alert('No results found');
            //                     }
            //                 });
            //             } else {
            //                 window.alert('No results found');
            //             }
            //         } else {
            //             window.alert('Geocoder failed due to: ' + status);
            //         }
            //     });
            // });


            //获取点击事件
            map.on('click', function(e) {
                var latlng = e.latlng;
                var lon = latlng.lng;
                // 对经度进行校正，使其保持在-180至180范围内
                if (latlng.lng > 180) {
                   lon = ((latlng.lng + 180) % 360) - 180;
                } else {
                   lon = ((latlng.lng - 180) % 360) + 180;
                }
                // console.log(latlng.lat, lon)
                var url = `https://map1.navnav.top/reverse?lat=${latlng.lat}&lon=${lon}&format=json&zoom=18&addressdetails=1&Accept-Language=zh-CN`;

                fetch(url)
                    .then(response => response.json())
                    .then(data => {
                        if (data.address) {
                            var address = data.display_name;
                            var content = `<div class="popup-content"><strong>${address}</strong></div>`;

                            var popup = L.popup()
                                .setLatLng(latlng)
                                .setContent(content)
                                .openOn(map);
                        } else {
                            L.popup()
                                .setLatLng(latlng)
                                .setContent('恭喜，发现新大陆')
                                .openOn(map);
                        }
                    })
                    .catch(error => {
                        window.alert('主人，我宕机了: ' + error);
                    });
            });




        });




        //添加百度地图
        //添加百度地图
        var bdmap = L.map('bdmap', {
            fullscreenControl: true,
            fullscreenControlOptions: {
                position: 'topright',
                title: "全屏",
                titleCancel: '退出全屏',
            },
            crs: L.CRS.Baidu,
            attributionControl: false,
            center: [39.91636535542483, 116.39088304110385],   //北京
            // center: [23.563987, 121.025391],   //台湾省
            // center: [24.837929449862603, 55.40449261665345],   //爱湖
            zoom: 17,
            minZoom: 5,
            // maxZoom: 19,
            zoomControl:false,
            measureControl: true,
            // layers:[]
        });

        L.control.attribution({
            position:'topleft',
            prefix:'快点地图'
        }).addTo(bdmap);   //添加文本块

        L.control.coordinates({position: 'bottomleft'}).addTo(bdmap);   //添加左上角坐标（可自定义输入坐标）
        document.getElementById('bdmap').style.display = 'none'; // 隐藏百度地图元素



        var normalMap = L.tileLayer.chinaProvider('Baidu.Normal.Map', {
                // maxZoom: 19,
                // minZoom: 5
            }),
            satelliteMap = L.tileLayer.chinaProvider('Baidu.Satellite.Map', {
                // maxZoom: 19,
                // minZoom: 5
            }),
            annotionMap = L.tileLayer.chinaProvider('Baidu.Satellite.Annotion', {
                // maxZoom: 19,
                // minZoom: 5
            });
            realtimelukuang = L.tileLayer.chinaProvider('Baidu.lukuang.Map', {
                // maxZoom: 19,
                // minZoom: 5
            });

        var baseLayers = {
            "百度地图": normalMap,
            "百度影像": satelliteMap
        }

        var overlayLayers2 = {
            "百度标注": annotionMap,
            "实时路况": realtimelukuang
        }


        // var baiduMap = L.tileLayer.chinaProvider('Baidu.Satellite.Map').addTo(bdmap);
        var baiduMap = satelliteMap.addTo(bdmap);
        L.control.layers(baseLayers, overlayLayers2, { position: "topleft" }).addTo(bdmap);

        // 添加搜索框
        bdmap.addControl( new L.Control.Search({    
            url: 'https://map.navnav.top/search?format=json&q={s}',
            jsonpParam: 'json_callback',
            propertyName: 'display_name',
            propertyLoc: ['lat','lon'],
            // marker: L.circleMarker([0,0],{radius:30}),
            marker: {icon: true, animate: false},
            autoCollapse: true,
            autoType: false,
            minLength: 2
        }) );

        //自动定位插件
        // L.geolet({
        //     position: 'topleft' ,
        //     geoOptions: { enableHighAccuracy: true, maximumAge: 30000, timeout: 27000 },
        //     title: '自动定位',
        //     autoPan: true,
        // }).addTo(bdmap);
        L.control.locate({
            locateOptions: {      
                enableHighAccuracy: true
            },
            strings: {
                title: "自动定位",
                metersUnit: "米",
                feetUnit: "英尺",
                popup: "定位误差{distance}{unit}",
                outsideMapBoundsMsg: "您似乎位于地图边界之外",
                showCompass: true,
                drawMarker: true,
                metric: true,
            },
        }).addTo(bdmap);

        //添加比例尺
        var scale = L.control.scale({ imperial: false, metric: true, position: 'bottomleft' });   
        bdmap.addControl(scale);
        // 请确保：metric: true（默认）
        // scale._mScale.innerText = `${scale._mScale.innerText.slice(0, -2)} ${scale._mScale.innerText.slice(-2) ==='km'? '公里': '米'}`
        // 请确保：imperial: true（默认）
        // scale.getContainer().childNodes[1].innerText = `${scale.getContainer().childNodes[1].innerText.slice(0, -2)} ${scale.getContainer().childNodes[1].innerText.slice(-2) ==='mi'? '英里': '英尺'}`

        // 显示百度地图或谷歌地图的函数
        function showBaiduMap() {
            // 检查当前地图是否为谷歌地图
            if (document.getElementById('map').style.display !== 'none') {
                // 如果是谷歌地图，则显示百度地图
                clear(); // 隐藏其他地图元素
                setTimeout(function() {
                    baiduMap.setOpacity(1); // 设置百度地图透明度为1，显示百度地图
                    document.getElementById('bdmap').style.display = 'block'; // 显示百度地图元素
            }, 1); // 延迟1毫秒显示百度地图
            } else {
                // 如果是百度地图，则显示谷歌地图
                clear(); // 隐藏其他地图元素
                setTimeout(function() {
                      document.getElementById('map').style.display = 'block'; // 显示谷歌地图元素
                    }, 1); // 延迟1毫秒显示谷歌地图
                }
        }

        // 隐藏地图的函数
        function clear() {
            baiduMap.setOpacity(0); // 设置百度地图透明度为0，隐藏百度地图
            document.getElementById('bdmap').style.display = 'none'; // 隐藏百度地图元素
            document.getElementById('map').style.display = 'none'; // 隐藏谷歌地图元素
        }

       
        


        // 创建截屏控件  
        var camera = L.control({position: 'topleft'}); // 设置位置为左上角  
        camera.onAdd = function () {    
            var div = L.DomUtil.create('div', 'leaflet-bar leaflet-control leaflet-control-custom shiguangji');    
            var img = L.DomUtil.create('img', 'shiguangji', div);  // 创建图标元素  
            img.src = 'https://jsd.onmicrosoft.cn/gh/muzihuaner/test00/leaflet/images/camera.svg'; // 替换为您的图标URL  
            img.alt = '屏幕截图'; // 可选的，为屏幕阅读器提供信息
            img.title = '屏幕截图';  
            img.onclick = function () {
                // 获取要转换为图片的DOM元素
                var node = document.querySelector('#bdmap .leaflet-map-pane'); // 更改为地图渲染的实际容器

                // 使用dom-to-image将DOM元素转换为PNG图片
                domtoimage.toBlob(node)
                    .then(function(blob) {
                        // 使用FileSaver保存生成的图片文件
                        window.saveAs(blob, 'img.png');
                    })
                    .catch(function(error) {
                        console.error('Error occurred:', error);
                    });
            };  // 设置点击事件处理程序  
            return div;    
        };
        camera.addTo(bdmap); // 将控件添加到地图上

        // 创建跳转谷歌地图菜单栏控件  
        var menuBar = L.control({position: 'topleft'}); // 设置位置为左下角  
        menuBar.onAdd = function () {    
            var div = L.DomUtil.create('div', 'leaflet-bar leaflet-control leaflet-control-custom menuBar');    
            var img = L.DomUtil.create('img', 'menuIcon', div);  // 创建图标元素  
            img.src = 'https://jsd.onmicrosoft.cn/gh/muzihuaner/test00/leaflet/images/google.png'; // 替换为您的图标URL  
            img.alt = '谷歌地图'; // 可选的，为屏幕阅读器提供信息
            img.title = '切换谷歌地图';  
            img.onclick = function () { showBaiduMap(); };  // 设置点击事件处理程序  
            return div;    
        };
        menuBar.addTo(bdmap); // 将控件添加到地图上