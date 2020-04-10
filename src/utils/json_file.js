export default function get(file, callback) {
  var rawFile = new XMLHttpRequest();
  rawFile.overrideMimeType('application/json');
  rawFile.open('GET', file, true);
  rawFile.onreadystatechange = function() {
    if (rawFile.readyState === 4 && rawFile.status == '200') {
      callback(JSON.parse(rawFile.responseText));
    }
  };
  rawFile.send(null);
}
