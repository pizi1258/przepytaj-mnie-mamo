const startButton = document.getElementById('startButton');
const stopButton = document.getElementById('stopButton');
const connectionStatus = document.getElementById('connectionStatus');
const agentStatus = document.getElementById('agentStatus');

let conversation;

async function startConversation() {
    try {
        // Request microphone permission
        await navigator.mediaDevices.getUserMedia({ audio: true });

        // Simulating Conversation.startSession (since no import is used)
        conversation = {
            agentId: 'ijZWUX1efPuCOwqeukeX', // Replace with your agent ID
            onConnect: function() {
                connectionStatus.textContent = 'Połączono';
                startButton.disabled = true;
                stopButton.disabled = false;
            },
            onDisconnect: function() {
                connectionStatus.textContent = 'Rozłączono';
                startButton.disabled = false;
                stopButton.disabled = true;
            },
            onError: function(error) {
                console.error('Error:', error);
            },
            onModeChange: function(mode) {
                agentStatus.textContent = mode === 'mówi' ? 'mówi' : 'słucha';
            },
            endSession: function() {
                this.onDisconnect();
                conversation = null;
            }
        };

        // Simulate connection
        conversation.onConnect();
    } catch (error) {
        console.error('Failed to start conversation:', error);
    }
}

async function stopConversation() {
    if (conversation) {
        conversation.endSession();
    }
}

startButton.addEventListener('click', startConversation);
stopButton.addEventListener('click', stopConversation);
