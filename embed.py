import torch
import torchvision
from torchvision import transforms
from torch.nn.functional import normalize
import numpy as np
import os
from tqdm import tqdm
import pickle
from PIL import Image

# Define the image directory
image_dir = 'D:\Myntra\images'  # Update this path to your local images directory

# Define the model
model = torchvision.models.resnet50(pretrained=True)
model = torch.nn.Sequential(*(list(model.children())[:-1]))  # Remove the classification layer
model.eval()  # Set the model`` to evaluation mode

# Define the image transformation
transform = transforms.Compose([
    transforms.Resize((224, 224)),
    transforms.ToTensor(),
    transforms.Normalize(mean=[0.485, 0.456, 0.406], std=[0.229, 0.224, 0.225]),
])

def extract_features(img_path, model):
    try:
        img = Image.open(img_path).convert('RGB')
        img_tensor = transform(img).unsqueeze(0)  # Add batch dimension
        with torch.no_grad():
            features = model(img_tensor).squeeze().numpy()
            normalized_features = normalize(torch.tensor(features), dim=0).numpy()
        return normalized_features
    except Exception:
        return None

# Extract filenames and features
filenames = [os.path.join(image_dir, file) for file in os.listdir(image_dir) if file.endswith(('jpg', 'jpeg', 'png'))]

feature_list = []
filenames = []

for file in tqdm(os.listdir(image_dir)):
    if file.endswith(('jpg', 'jpeg', 'png')):
        file_path = os.path.join(image_dir, file)
        features = extract_features(file_path, model)
        if features is not None:
            feature_list.append(features)
            filenames.append(file)

# Save the feature vectors and filenames
with open('embeddings.pkl', 'wb') as f:
    pickle.dump(feature_list, f)
with open('filenames.pkl', 'wb') as f:
    pickle.dump(filenames, f)
