var wms_layers = [];


        var lyr_StamenTerrain_0 = new ol.layer.Tile({
            'title': 'Stamen Terrain',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="http://maps.stamen.com/">Map tiles by Stamen Design, under CC BY 3.0. Data by OpenStreetMap, under ODbL</a>',
                url: 'http://a.tile.stamen.com/terrain/{z}/{x}/{y}.png'
            })
        });
var format_redeconfinamiento_1 = new ol.format.GeoJSON();
var features_redeconfinamiento_1 = format_redeconfinamiento_1.readFeatures(json_redeconfinamiento_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_redeconfinamiento_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_redeconfinamiento_1.addFeatures(features_redeconfinamiento_1);
var lyr_redeconfinamiento_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_redeconfinamiento_1, 
                style: style_redeconfinamiento_1,
                interactive: true,
                title: '<img src="styles/legend/redeconfinamiento_1.png" /> Áre de confinamiento'
            });
var format_1_2 = new ol.format.GeoJSON();
var features_1_2 = format_1_2.readFeatures(json_1_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_1_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_1_2.addFeatures(features_1_2);
var lyr_1_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_1_2, 
                style: style_1_2,
                interactive: true,
                title: '<img src="styles/legend/1_2.png" /> 1'
            });
var format_2_3 = new ol.format.GeoJSON();
var features_2_3 = format_2_3.readFeatures(json_2_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_2_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_2_3.addFeatures(features_2_3);
var lyr_2_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_2_3, 
                style: style_2_3,
                interactive: true,
                title: '<img src="styles/legend/2_3.png" /> 2'
            });
var format_new_4 = new ol.format.GeoJSON();
var features_new_4 = format_new_4.readFeatures(json_new_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_new_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_new_4.addFeatures(features_new_4);
var lyr_new_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_new_4, 
                style: style_new_4,
                interactive: true,
                title: '<img src="styles/legend/new_4.png" /> new'
            });
var format_new_5 = new ol.format.GeoJSON();
var features_new_5 = format_new_5.readFeatures(json_new_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_new_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_new_5.addFeatures(features_new_5);
var lyr_new_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_new_5, 
                style: style_new_5,
                interactive: true,
                title: '<img src="styles/legend/new_5.png" /> new'
            });
var format_3_6 = new ol.format.GeoJSON();
var features_3_6 = format_3_6.readFeatures(json_3_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_3_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_3_6.addFeatures(features_3_6);
var lyr_3_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_3_6, 
                style: style_3_6,
                interactive: true,
                title: '<img src="styles/legend/3_6.png" /> 3'
            });

lyr_StamenTerrain_0.setVisible(true);lyr_redeconfinamiento_1.setVisible(true);lyr_1_2.setVisible(true);lyr_2_3.setVisible(true);lyr_new_4.setVisible(true);lyr_new_5.setVisible(true);lyr_3_6.setVisible(true);
var layersList = [lyr_StamenTerrain_0,lyr_redeconfinamiento_1,lyr_1_2,lyr_2_3,lyr_new_4,lyr_new_5,lyr_3_6];
lyr_redeconfinamiento_1.set('fieldAliases', {'id': 'id', });
lyr_1_2.set('fieldAliases', {'id': 'id', });
lyr_2_3.set('fieldAliases', {'id': 'id', });
lyr_new_4.set('fieldAliases', {'id': 'id', });
lyr_new_5.set('fieldAliases', {'id': 'id', });
lyr_3_6.set('fieldAliases', {'id': 'id', });
lyr_redeconfinamiento_1.set('fieldImages', {'id': 'TextEdit', });
lyr_1_2.set('fieldImages', {'id': 'TextEdit', });
lyr_2_3.set('fieldImages', {'id': 'TextEdit', });
lyr_new_4.set('fieldImages', {'id': '', });
lyr_new_5.set('fieldImages', {'id': '', });
lyr_3_6.set('fieldImages', {'id': 'TextEdit', });
lyr_redeconfinamiento_1.set('fieldLabels', {'id': 'no label', });
lyr_1_2.set('fieldLabels', {'id': 'no label', });
lyr_2_3.set('fieldLabels', {'id': 'no label', });
lyr_new_4.set('fieldLabels', {'id': 'no label', });
lyr_new_5.set('fieldLabels', {'id': 'no label', });
lyr_3_6.set('fieldLabels', {'id': 'no label', });
lyr_3_6.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});