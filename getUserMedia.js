module.exports = {
  name: "getUserMedia",
  ns: "webrtc",
  description: "Get User Media (microphone, camera)",
  phrases: {
    active: "Getting User Media"
  },
  ports: {
    input: {},
    output: {
      error: {
        title: "Error",
        type: "object"
      },
      stream: {
        title: "Stream",
        type: "HTMLElement"
      }
    }
  },
  dependencies: {
    npm: {
      getusermedia: require('getusermedia')
    }
  },
  fn: function getUserMedia(input, output, state, done, cb, on, getusermedia) {
    var r = function() {
      var speachEvents = hark(input.stream);

      output({
        stream: input.stream
      });

      speechEvents.on('speaking', function() {
        output({
          speaking: true
        });
      });

      speechEvents.on('volume_change', function(volume, threshold) {
        output({
          volume: volume,
          treshold: treshold
        });
      });

      speechEvents.on('stopped_speaking', function() {
        output({
          speaking: false
        });
      });
    }.call(this);
    return {
      output: output,
      state: state,
      on: on,
      return: r
    };
  }
}