output = function (cb) {

  var speechEvents = hark($.stream);

  cb({
    stream: $.stream
  });

  speechEvents.on('speaking', function () {
    cb({
      speaking: $.stream
    });
  });

  speechEvents.on('volume_change', function (volume, threshold) {
    cb({
      volume: volume,
      threshold: threshold
    });
  });

  speechEvents.on('stopped_speaking', function () {
    cb({
      silence: $.stream
    });
  });

};
