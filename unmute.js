module.exports = {
  name: "unmute",
  ns: "webrtc",
  description: "Unmute",
  phrases: {
    active: "Unmuting media"
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
  fn: function unmute(input, output, state, done, cb, on) {
    var r = function() {
      input.webrtc.unmute();
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