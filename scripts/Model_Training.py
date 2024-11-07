import torch
import torch.nn as nn

class LSTMModel(nn.Module):
    def __init__(self, input_size):
        super(LSTMModel, self).__init__()
        self.lstm = nn.LSTM(input_size, hidden_size=32, batch_first=True)
        self.fc = nn.Linear(32, 1)

    def forward(self, x):
        x = x.unsqueeze(1)  # Add sequence dimension
        h0 = torch.zeros(1, x.size(0), 32)  # Initial hidden state
        c0 = torch.zeros(1, x.size(0), 32)  # Initial cell state
        out, _ = self.lstm(x, (h0, c0))
        out = torch.sigmoid(self.fc(out[:, -1, :]))
        return out