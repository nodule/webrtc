module.exports = {
  name: "startLocalMedia",
  ns: "webrtc",
  description: "Start Local Media",
  phrases: {
    active: "Starting local media"
  },
  ports: {
    input: {
      webrtc: {
        title: "WebRTC",
        type: "WebRTC",
        required: true
      },
      media: {
        type: "object",
        properties: {
          audio: {
            title: "Audio?",
            type: "boolean",
            "default": true
          },
          video: {
            title: "Video?",
            type: "boolean",
            "default": true
          }
        }
      }
    },
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
  fn: function startLocalMedia(input, $, output, state, done, cb, on) {
    var r = function() {
      $.webrtc.startLocalMedia($.media, function startLocalMediaCallback(error, stream) {
        cb({
          error: error,
          stream: stream
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