module.exports = {
  name: "resume",
  ns: "webrtc",
  description: "Resume",
  phrases: {
    active: "Resuming"
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
  fn: function resume(input, $, output, state, done, cb, on) {
    var r = function() {
      $.webrtc.resume();
      output = {
        webrtc: $.get('webrtc')
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