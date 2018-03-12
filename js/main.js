var ontsvg = 'ontmap.svg',
    opts = { padding: 30 };

kartograph.map('#map').loadMap(ontsvg, mapLoaded, opts);

function mapLoaded(map) {
    map.addLayer('layer0', {
        styles: {
            stroke: '#aaa',
            fill: '#f6f4f2'
        },
        mouseenter: function(d, path) {
            path.attr('fill', Math.random() < 0.5 ? '#c04' : '#04c');
        },
        mouseleave: function(d, path) {
            path.animate({ fill: '#f6f4f2' }, 1000);
        }
    });

    // var points_of_interest = [
    //     { name: 'Juneau, AK', lat: 58.3, lon: -134.416667 },
    //     { name: 'Honolulu, HI', lat: 21.3, lon: -157.816667 },
    //     { name: 'San Francisco, CA', lat: 37.783333, lon: -122.416667 }
    // ];

   //  map.addSymbols({
   //      type: $K.LabeledBubble,
   //      data: points_of_interest,
   //      location: function(d) { return [d.lon, d.lat] },
   //      title: function(d) { return d.name; },
   //      radius: 3,
   //      center: false,
   //      attrs: { fill: 'black' },
   //      labelattrs: { 'font-size': 11 },
   //      buffer: true
   // });
}
// var map = kartograph.map('#canadamap', 600, 600);
//
// map.loadMap('censussubdivision.svg', () => {
//   // map.addLayer('censussubdivision');
//   console.log('done loading');
// });
