module.exports = {
  name: "pause",
  ns: "webrtc",
  description: "Pause",
  phrases: {
    active: "Pausing"
  },
  ports: {
    input: {
      webrtc: {
        title: "WebRTC",
        type: "WebRTC",
        required: true
      }
    },
    output: {
      webrtc: {
        title: "WebRTC",
        type: "WebRTC"
      }
    }
  },
  fn: function pause(input, output, state, done, cb, on) {
    var r = function() {
      input.webrtc.pause();
      output = {
        webrtc: input.webrtc
      };
    }.call(this);
    return {
      output: output,
      state: state,
      on: on,
      return: r
    };
  }
}