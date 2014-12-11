var speechEvents = hark(input.stream);

output = function (cb) {

  cb({
    stream: input.stream
  });

  speechEvents.on('speaking', function () {
    cb({
      speaking: input.stream
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
      silence: input.stream
    });
  });

};
