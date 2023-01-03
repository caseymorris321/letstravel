var platform = new H.service.Platform({
    'apikey': '2wHNoQQz9YwOOiRC4HWHBPK_FeGHhelfjXZJErlBD0o'
  });

  // Obtain the default map types from the platform object:
var defaultLayers = platform.createDefaultLayers();
var service = platform.getSearchService();

let lendmark = document.querySelector('.main-heading').textContent;
service.geocode({
    q: lendmark
  }, (result) => {
    var map = new H.Map(
        document.querySelector('.map'),
        defaultLayers.vector.normal.map,
        {
          zoom: 15,
          center: result.items[0].position
        });
    map.addObject(new H.map.Marker(result.items[0].position));
    var ui = H.ui.UI.createDefault(map, defaultLayers);

  }, alert);
