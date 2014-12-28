module.exports = {
  name: "createPeer",
  ns: "webrtc",
  description: "Create Peer",
  phrases: {
    active: "Creating Peer"
  },
  ports: {
    input: {
      webrtc: {
        title: "WebRTC",
        type: "WebRTC",
        required: true
      },
      id: {
        title: "ID",
        type: "string"
      },
      type: {
        title: "Type",
        type: "string",
        "enum": ["video",
          "audio",
          "screen"
        ],
        "default": "video"
      },
      oneway: {
        title: "One Way?",
        type: "boolean",
        "default": false
      },
      sharemyscreen: {
        title: "Share My Screen",
        type: "boolean",
        "default": false
      },
      stream: {
        title: "WebRTC Stream",
        type: "HTMLElement"
      }
    },
    output: {
      webrtc: {
        title: "WebRTC",
        type: "WebRTC"
      },
      peer: {
        title: "Peer",
        type: "Peer"
      }
    }
  },
  fn: function createPeer(input, output, state, done, cb, on) {
    var r = function() {
      webrtc = input.webrtc;
      delete input.webrtc;
      output = {
        peer: webrtc.createPeer(input),
        webrtc: webrtc
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