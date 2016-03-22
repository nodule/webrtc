module.exports = {
  name: "stopLocalMedia",
  ns: "webrtc",
  description: "Stop Local Media",
  phrases: {
    active: "Stopping local media"
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
  fn: function stopLocalMedia(input, $, output, state, done, cb, on) {
    var r = function() {
      $.webrtc.stopLocalMedia();
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