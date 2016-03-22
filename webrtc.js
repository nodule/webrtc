module.exports = {
  name: "webrtc",
  ns: "webrtc",
  description: "WebRTC",
  phrases: {
    active: "Launching WebRTC!"
  },
  ports: {
    input: {
      debug: {
        title: "Debug",
        type: "boolean",
        "default": false
      },
      localVideoEl: {
        title: "Local Video Element",
        type: "any",
        required: true
      },
      remoteVideosEl: {
        title: "Remote Videos Element",
        type: "any",
        required: true
      },
      autoRequestMedia: {
        title: "Auto Request Media",
        type: "boolean",
        "default": false
      },
      autoAdjustMic: {
        title: "Auto Adjust Microphone",
        type: "boolean",
        "default": false
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
      },
      detectSpeakingEvents: {
        title: "Detect Speaking Events",
        type: "boolean",
        "default": true
      },
      enableDataChannels: {
        title: "Enable Data Channels",
        type: "boolean",
        "default": true
      }
    },
    output: {
      webrtc: {
        title: "WebRTC",
        type: "WebRTC"
      },
      localStream: {
        title: "Local Stream",
        type: "HTMLElement"
      },
      localStreamStopped: {
        title: "Local Stream Stopped",
        type: "boolean"
      },
      audio: {
        title: "Audio ON/OFF",
        type: "boolean"
      },
      video: {
        title: "Video ON/OFF",
        type: "boolean"
      },
      speaking: {
        title: "Speaking YES/NO",
        type: "boolean"
      },
      message: {
        title: "Message",
        type: "any"
      },
      peerStreamAdded: {
        title: "Peer Stream Added",
        type: "Peer"
      },
      peerStreamRemoved: {
        title: "Peer Stream Removed",
        type: "Peer"
      }
    }
  },
  dependencies: {
    npm: {
      webrtc: require('webrtc')
    }
  },
  fn: function webrtc(input, $, output, state, done, cb, on, webrtc) {
    var r = function() {
      var wrtc = new webrtc(input);

      // our direct port.
      output({
        webrtc: $.create(wrtc)
      });

      // send local stream
      wrtc.on('localStream', function(stream) {
        output({
          localStream: $.create(stream)
        });
      });

      wrtc.on('localStreamStopped', function() {
        output({
          localStreamStopped: $.create(true)
        });
      });

      wrtc.on('audioOn', function() {
        output({
          audio: $.create(true)
        });
      });

      wrtc.on('audioOff', function() {
        output({
          audio: $.create(false)
        });
      });

      wrtc.on('videoOn', function() {
        output({
          video: $.create(true)
        });
      });

      wrtc.on('videoOff', function() {
        output({
          video: $.create(false)
        });
      });

      wrtc.on('speaking', function() {
        output({
          speaking: $.create(true)
        });
      });

      wrtc.on('stoppedSpeaking', function() {
        output({
          speaking: $.create(false)
        });
      });

      wrtc.on('message', function(message) {
        output({
          message: $.create(message)
        });
      });

      wrtc.on('peerStreamAdded', function(peer) {
        output({
          peerStreamAdded: $.create(peer)
        });
      });

      wrtc.on('peerStreamRemoved', function(peer) {
        output({
          peerStreamRemoved: $.create(peer)
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