output = function (cb) {
  var speechEvents = hark($.stream);
  cb({stream: $.get('stream')});

  speechEvents.on('speaking', function () {
    cb({speaking: $.get('stream')});
  });

  speechEvents.on('volume_change', function (volume, threshold) {
    cb({volume: $.create(volume), threshold: $.create(threshold)});
  });

  speechEvents.on('stopped_speaking', function () {
    cb({silence: $.get('stream')});
  });
};
