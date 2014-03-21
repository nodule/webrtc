var speachEvents = hark(input.stream);

output = function (cb) {

  cb({
    stream: input.stream
  });

  speechEvents.on('speaking', function () {
    cb({
      speaking: true
    });
  });

  speechEvents.on('volume_change', function (volume, threshold) {
    cb({
      volume: volume,
      treshold: treshold
    });
  });

  speechEvents.on('stopped_speaking', function () {
    cb({
      speaking: false
    });
  });

};
